'use strict';

const Controller = require('egg').Controller;

class SessionController extends Controller {
  async sets() {
    const {ctx} = this;
    ctx.session.name123 = '陈俊雄';
    ctx.body = 'session设置';
  }

  async gets() {
    const {ctx} = this;
    ctx.body = ctx.session.name123;
  }
}

module.exports = SessionController;
