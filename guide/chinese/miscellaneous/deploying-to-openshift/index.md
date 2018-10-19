---
title: Deploying to Openshift
localeTitle: 部署到Openshift
---
如果您将应用程序部署到Heroku，则只能上传5个应用程序，如果要部署新应用程序，则需要使用信用卡验证帐户。

![Heroku错误](//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg)

以下是部署到[OpenShift时](https://www.openshift.com/app/account/new)需要遵循的步骤。

## 要求

*   [OpenShift中的](https://www.openshift.com/app/account/new)一个帐户
*   我们在[Git](//forum.freecodecamp.com/t/wiki-git-resources/13136)存储库中的应用程序

## 代码中的更改

*   `app.listen` with `process.env.OPENSHIFT_NODEJS_PORT`和`process.env.OPENSHIFT_NODEJS_IP` ，两者都需要。
*   在你的**package.json中**设置你的`"main": 'yourMainFile.js`和`"script": { "start": "node yourMainFile.js" }`

## 部署我们的应用程序

*   [添加新应用程序](https://openshift.redhat.com/app/console/application_types)

![选择一个Web编程盒](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg)

*   选择一个名称（所有应用程序的第二个输入都相同）

\[ ![填写我们的名字和我们的域名](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg)

*   填写我们的Git URL和我们的分支名称

![您可以在Github找到您的Git URL和分支名称](//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg)

![填写您的Git URL和您的分支名称](//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg)

*   “创建应用程序”。这需要一些时间

![完成部署后，您将在此处重定向](//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg)

*   输入“应用程序”，然后进入您的应用程序并检查它是否已启动。

![你的申请表](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg)

![您的申请详情](//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg)

## 环境变量

在我的情况下，我在mLab中有我的数据库，所以我需要创建一些环境变量。

*   [安装Ruby和rhc。](https://developers.openshift.com/getting-started/windows.html#client-tools)

**rhc**仅适用于Ruby的1.9.3和2.0.0版本。

*   [设置你的机器](https://developers.openshift.com/getting-started/windows.html#rhc-setup)

如果您在设置`rhc`遇到问题，请在StackOverflow上尝试[此](http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import)答案。

*   [自定义环境变量](https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables)

`rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name` 。

您需要重新启动应用程序才能加载变量。

如果您找到更好的方法来解决此限制。请随时为我们的Wiki做出贡献并与我们分享。

您可以查看[http://voting-pitazo.rhcloud.com/#/polls上](http://voting-pitazo.rhcloud.com/#/polls)运行的应用