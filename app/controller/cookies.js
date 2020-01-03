'use strict';

const Controller = require('egg').Controller;

class CookiesController extends Controller {
    async setc() {
        const { ctx } = this;
        // cookie的值不能是中文 如果是中文需要编码 或者 加密
        ctx.cookies.set('username', encodeURI('管理员'), {
            httpOnly: false,
            encrypt: true,
            maxAge:720*3600000
        });
        // 签名
        ctx.cookies.set('age', '20', {
            encrypt: true
        });
        ctx.body = 'Cookie设置';
    }

    async getc() {
        const { ctx } = this;
        ctx.body = decodeURI(ctx.cookies.get('username', {
            encrypt: true
        }));
    }

}

module.exports = CookiesController;
