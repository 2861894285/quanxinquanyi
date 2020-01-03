'use strict';

const Controller = require('egg').Controller;

class QuestionsController extends Controller {
  async add() {
    const {ctx, service} = this;
    // response是可以省略的
    const formData = ctx.request.body;
    formData.aid = ctx.session.aid;
    formData.username = ctx.session.username;
    console.log(formData);
    const result = await service.questions.add(formData);
    let data = {code:1, Msg:'操作成功'};
    if(!result.insertId){
        data = {code:-1, Msg:'操作失败'};
    }
    ctx.response.body = data;
  }
}

module.exports = QuestionsController;
