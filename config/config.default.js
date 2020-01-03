/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1577526783956_4486';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    // 配置服务器基本信息
    config.cluster = {
        listen: {
            path: '',
            port: 8080,
            hostname: '0.0.0.0',//默认localhost和ip地址,上线时用0.0.0.0
        }
    };

    // 配置安全验证
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        }
    }
    // 数据库配置
    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'root',
            // 数据库名
            database: 'jianmian',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

  

    // 跨域的配置
    config.cors = {
        origin: 'http://localhost',  //如果要允许cookie跨域，允许携带凭证，这里不能是*
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
        credentials:true //允许跨域携带凭证
    };
    config.multipart = {
        mode: 'file',
    };


    return {
        ...config,
        ...userConfig,
    };
};
