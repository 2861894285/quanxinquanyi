'use strict';
const Controller = require('egg').Controller;
class AdminController extends Controller {
    async login() {
        const { ctx, service } = this;
        // 接收客户端提交上来的数据
        let formData = ctx.request.body;
        //验证验证码
        if (formData.coder.toLowerCase() != ctx.session.coder.toLowerCase()) {
            ctx.body = {
                code: -2,
                Msg: '验证码错误'
            };
            return;
        }

        let result = await service.admin.login(formData.username);
        let data = { code: 1, Msg: '登录成功' };
        // 账号不存在
        if (!result) {
            data = { code: -1, Msg: '账号不存在' };
        }
        // 密码错误
        if (result && result.passwd != formData.passwd) {
            data = { code: 0, Msg: '密码错误' };
        }
        // 更新登录次数和登录时间
        if (data.code == 1) {
            await service.admin.update(result.aid);
            // 把登录成功的相关新保存到session里面
            let rememberMe = 1;
            if (rememberMe) ctx.session.maxAge = 720*3600000;
            ctx.session.aid = result.aid;
            ctx.session.username = result.username;
            ctx.session.avatar = result.avatar;
        }
        ctx.body = data;
    }

    async check() {
        const { ctx } = this;

        ctx.body = {
            aid: ctx.session.aid,
            username: ctx.session.username,
            avatar: ctx.session.avatar,
        };
    }

    async logout() {
        const { ctx, service } = this;
        // 把登录成功的相关新保存到session里面
        ctx.session = null;
        // ctx.session.username = null;
        // ctx.session.avatar = null;
        ctx.body = {
            code: 1,
            Msg: '退出成功'
        };
    }
}
module.exports = AdminController;
