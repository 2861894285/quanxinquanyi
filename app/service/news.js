'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async lists() {
    this.app.mysql.select
  }
}

module.exports = NewsService;
