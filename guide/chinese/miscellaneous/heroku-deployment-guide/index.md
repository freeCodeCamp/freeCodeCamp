---
title: Heroku Deployment Guide
localeTitle: Heroku部署指南
---
1.  创建一个Heroku帐户。
    
2.  创建帐户后，您可以转到[信息中心](https://dashboard.heroku.com/apps)
    
3.  单击右上角的+号，然后单击Create New App（就像您在github上创建一个新的repo一样）。为其命名，然后单击“创建”。
    
4.  创建应用后，您会在信息中心中看到其名称。点击它。
    
5.  您将被带到该应用程序的仪表板。单击“部署”选项卡。
    
6.  在那里你会很高兴地发现你可以连接到github仓库。在“部署方法”部分中，选择Github并通过登录Github进行身份验证。
    
7.  在其下方，填写您的github回购名称。 （这当然要求您已经从cloud9或本地计算机上将repo推送到github ......并且您已经正确配置了它。更多信息如下。）
    
8.  再次向下滚动并单击“自动部署”或向下滚动更多，然后单击“手动部署”。片刻之后，您应该会看到您的应用程序在your-repo-name.herokuapp.com上运行。甜。
    

## 在本地或在Cloud9上创建应用程序

1.  创建一个名为timestamp-microservice的新文件夹（或任何调用项目的文件夹）。

`$ mkdir timestamp-microservice && cd timestamp-microservice`

1.  创建您需要的文件：

`$ touch .env .gitignore README.md index.html server.js`

1.  在此过程中安装所需的软件包

例子：

`$ npm install --save express`

`$ npm install --save moment`

这些将添加到根文件夹中名为node\_modules的文件夹中。

1.  通过执行`$ npm init` ，使用package.json初始化项目

它会问你一系列问题，并根据你的答案及其默认值在你的根文件夹中创建一个package.json文件。如果你已经创建了一个名为server.js的文件，如上所述，这个_必不可少的_行将被添加到你的package.json文件中：
```
  "scripts": { 
 
  "start": "node server.js" 
 
  } 
```

如果你把它命名为其他东西，比如'index.js'，那行就不会被添加，你必须手动添加它。这是[这里](https://docs.npmjs.com/files/package.json#default-values)提到的默认行为。您可以在此步骤之前或之后安装节点模块，它们将自动添加到package.json中。

1.  准备好后，在github上创建一个新的存储库，复制远程URL，并通过执行以下操作在本地初始化项目：

`$ git init`

`$ git add .`

`$ git commit -m "initial commit"`

`$ git remote add origin <your github url>`

`$ git push -u origin master`

提示：在您的server.js文件中，请确保使用`app.listen(process.env.PORT || <default port>)`以便该应用程序在heroku上运行。

返回上面的第7步。