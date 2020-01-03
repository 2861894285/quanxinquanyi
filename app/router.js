'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/news', controller.news.index);
  // 管理员登录路由
  router.post('/login', controller.admin.login);
  router.get('/logout', controller.admin.logout);
  router.get('/check', controller.admin.check);
  
  

  // 新增一个API接口 添加课程的接口
  router.post('/course/add', controller.course.add);
  // 课程列表接口
  router.get('/course/index', controller.course.index);
  // 课程删除接口
  router.get('/course/del', controller.course.del);
  // 根据cid获取课程原始信息
  router.get('/course/get', controller.course.get);

  // 修改课程的API
  router.post('/course/edit', controller.course.edit);

  // 文件上传接口
  router.post('/upload', controller.upload.index);
  router.post('/uploads', controller.upload.multiple);

  // 试题添加接口
  router.post('/questions/add', controller.questions.add);

  // cookie学习
  router.get('/cookie/set', controller.cookies.setc);
  router.get('/cookie/get', controller.cookies.getc);

  // session的学习
  router.get('/session/set', controller.session.sets);
  router.get('/session/get', controller.session.gets);


  // svg验证码路径
  router.get('/coder', controller.svg.index);


};
