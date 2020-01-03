'use strict';
const Service = require('egg').Service;
class CourseService extends Service {
  async index(){
    const {app} = this;
    const result = await app.mysql.select('courses');;
    return result;
  }
  
  async count(){
    const {app} = this;
    const result = await app.mysql.query('select COUNT(cid) nums FROM courses');;
    return result[0].nums;
  }

  async add(formdata){
    const {app} = this;
    const result = await app.mysql.insert('courses', formdata);;
    return result;
  }

  async del(cid){
    const {app} = this;
    const result = await app.mysql.delete('courses', {cid});;
    return result;
  }
  async getCourseByCid(cid){
    const {app} = this;
    const result = await app.mysql.get('courses', {cid});;
    return result;
  }

  async edit(formdata){
    const {app} = this;
    const result = await app.mysql.update('courses', formdata, {
      where: {
        cid: formdata.cid
      }
    });
    return result;
  }

  
}

module.exports = CourseService;
