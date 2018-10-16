---
title: How to Log in to Your Local Instance of Free Code Camp
localeTitle: 如何登录您的免费代码营的本地实例
---
本指南将帮助您使用GitHub帐户登录本地FCC网站。使用其他社交媒体帐户登录时，此过程应类似。本指南假设您已经启动并运行了FCC的本地副本。

## TL; DR

1.  [注册新的OAuth应用程序](https://github.com/settings/developers)
2.  主页字段： `http://localhost:3000/`
3.  回调字段： `http://localhost:3000/auth/github/callback`
4.  将客户端ID和客户端密钥复制/粘贴到`.env`文件中
5.  查看当地的FCC网站时，请使用端口3000

免费代码营问题Mods和工作人员随时为我们的[帮助贡献者聊天室提供](https://gitter.im/FreeCodeCamp/HelpContributors)有关Pull Request相关问题的[帮助](https://gitter.im/FreeCodeCamp/HelpContributors)

## 放弃

运行`$ gulp`的输出提到**访问端口**是3001.我只使用GitHub在端口3000 - **代理端口**成功登录。如果您了解如何使用其他端口登录，请考虑在此Wiki上提交拉取请求。

## 使用您的GitHub帐户登录

1.  [注册新的OAuth应用程序](https://github.com/settings/developers) ，然后单击**注册新应用程序**

_或者_ ，单击您的**个人资料图片** => **设置** => **应用程序** => **开发人员应用程序** => **注册新应用程序**

![注册GitHub OAuth App](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55f4645c3498ceb8098afe8e8353da8f7c262548.png)

1.  填写OAuth应用程序字段
    
    *   **应用程序名称** - 选择任何名称，例如`fcc-local`
        
    *   **主页URL** - 设置为`http://localhost:3000/`
        
    *   **应用说明** - 可选
        
    *   **授权回调URL** - 设置为`http://localhost:3000/auth/github/callback`
        
2.  单击**注册应用程序**以查看新注册的应用程序页面以及您的客户端ID和客户端密钥。
    

![客户端ID和客户端密钥](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43ee37a9f0f228d3663bb28accedc14cca3ff56.png)

1.  将您的客户端ID和客户端密钥复制并粘贴到`.env`文件中。

_注意：您的客户端ID和客户端密钥将是长字母数字值。_

![更新.env文件](//discourse-user-assets.s3.amazonaws.com/original/2X/5/549aeaa6ea85e119ba5e978c708dc55c39b134b3.png)

## 提示

1.  删除/取消设置注释阻止[护照提供](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/server/passport-providers.js)者中不需要的提供[者](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/server/passport-providers.js) 。
    
2.  如果在express-session和cookieParser上出现错误，请在`.env`添加SESSION _SECRET和COOKIE_ SECRET。
    
    `COOKIE_SECRET='secret' SESSION_SECRET='secret'`
    
3.  如果您没有遇到挑战，请在运行`gulp`之前运行命令`node seed` 。
    

## 成品

恭喜！您现在可以使用GitHub帐户成功登录到本地FCC网站。