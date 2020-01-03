'use strict';

const Service = require('egg').Service;

class QuestionsService extends Service {
   async add(formdata) {
    const {app} = this;
    const result = await app.mysql.insert('questions', formdata);;
    return result;
  }
}

module.exports = QuestionsService;
