'use strict';

const Controller = require('egg').Controller;
const fs =require('fs');
const path =require('path');
class UploadController extends Controller {
  async index() {
    // 接收客户端传递过来的图片
    const {ctx} = this;
    const dest = '/public/uploads/';
    const file = ctx.request.files[0];
    console.log(file);
    console.log('0,',__filename);
    console.log('1,',__dirname);
    console.log('2,',path.dirname(__dirname));
    console.log('3,',path.basename(file.filepath));
    // 拷贝文件到指定的文件夹
    let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
    await fs.copyFileSync(file.filepath, to);
    fs.unlinkSync(file.filepath);//删除临时文件
    // 返回值应该是图片的访问路径
    // 返回图片路径  this.app.config  获取配置信息
    let cluster = this.app.config.cluster.listen;
    // 客户端要求是json格式
    ctx.body = {
      code:1,
      src:`http://${cluster.hostname}:${cluster.port}${dest}${path.basename(file.filepath)}`
    };
  }

  // 多张图片上传接口
  async multiple() {
    // 接收客户端传递过来的图片
    const {ctx} = this;
    const dest = '/public/uploads/';
    // 返回图片路径  this.app.config  获取配置信息
    let cluster = this.app.config.cluster.listen;
    const baseurl = `http://${cluster.hostname}:${cluster.port}${dest}`;
    // 拷贝文件到指定的文件夹
    
    console.log(ctx.request.files);
    const data = {
      "errno": 0,
      "data": []
    }
    ctx.request.files.forEach(function(file, i){
        let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
        fs.copyFileSync(file.filepath, to);
        fs.unlinkSync(file.filepath);//删除临时文件
        let src = `${baseurl}${path.basename(file.filepath)}`
        data.data.push(src);
    });
    // 客户端要求是json格式
    ctx.body = data;
  }
}

module.exports = UploadController;
