'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
        this.service.news.lists();

        this.ctx.body = '<div>内容</div>';
  }
}

module.exports = NewsController;
