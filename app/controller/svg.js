'use strict';
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;

class SvgController extends Controller {
    async index() {
        const { ctx } = this;
        let captcha = svgCaptcha.create({
            ignoreChars: '0o1i',
            size: 2,
            background: '#cc9966',
            noise: 10,
            fontSize: 56
        });
        // 需要把图片上的内容放到session里面  后面验证用
        ctx.session.coder = captcha.text;
        // 我们需要把验证码这张图片响应到客户端
        // 需要设置响应头类型
        ctx.set('content-type', 'image/svg+xml');
        ctx.body = captcha.data;
    }
}

module.exports = SvgController;
