---
title: Guide for Using MongoDB and Deploying to Heroku
localeTitle: 使用MongoDB和部署到Heroku的指南
---
在本指南中，让我们看看如何在本地使用MongoDB，并使用`mLab`将其部署到Heroku。或者您也可以在Heroku中使用`mLab`插件，它是免费的，但可能需要您的信用卡详细信息。因此，如果您对提供信用卡详细信息不感兴趣，可以访问[mLab](https://mlab.com)网站。

## 在Heroku和`mLab`上设置一个免费帐户：

注册[Heroku](https://signup.heroku.com/)和[mLab](https://mlab.com/signup/)

## 启动Mongodb（本地）：

要在您自己的系统上启动数据库，请执行以下命令：
```
# Create a directory named 'data' if it doesn't exist 
 $ mongod --port 27017 --dbpath=./data 
```

现在你的Db正在运行 -

`mongodb://localhost:27017/my_database_name`

如果您使用的是c9，如果在C9中启动数据库时遇到问题，请参阅此[页面](https://community.c9.io/t/setting-up-mongodb/1717)

## 启动Mongodb（ `mLab` ）：

1.  创建`mLab`帐户后，单击**Create new**按钮并选择Single-node - > Sandbox以获取免费Db并为您的数据库命名（我为此创建了一个名为'food'的数据库）。
2.  现在创建一个名为'food'的数据库，您可以创建自己的新集合。
3.  最后添加可以访问此数据库的用户/用户，在添加用户时，它将询问用于访问数据库的用户名和密码。

现在你的数据库正在运行url这样的东西 -

`mongodb://username:password@ds01316.mlab.com:1316/food`

其中，用户名和密码是您添加用户时提供的详细信息。

您可以在[https://mlab.com/databases/your _数据库_名称中](https://mlab.com/databases/your_database_name)找到您的数据库URL

## 在Node.js中与MongoDB建立连接（当DB在本地系统上运行时）：

要使用数据库，首先需要创建连接。在本节中，我们将使用MongoDB的本机Node.js驱动程序来创建与MongoDB服务器的连接。要安装mongodb本机驱动程序，请使用npm命令安装mongodb模块。之后，在项目目录中运行以下命令。

`npm install mongodb`

连接MongoDB的基本代码
```
//lets require/import the mongodb native drivers. 
 var mongodb = require('mongodb'); 
 
 //We need to work with "MongoClient" interface in order to connect to a mongodb server. 
 var MongoClient = mongodb.MongoClient; 
 
 // Connection URL. This is where your mongodb server is running. 
 
 //(Focus on This Variable) 
 var url = 'mongodb://localhost:27017/my_database_name'; 
 //(Focus on This Variable) 
 
 // Use connect method to connect to the Server 
  MongoClient.connect(url, function (err, db) { 
  if (err) { 
    console.log('Unable to connect to the mongoDB server. Error:', err); 
  } else { 
    console.log('Connection established to', url); 
 
    // do some work here with the database. 
 
    //Close connection 
    db.close(); 
  } 
 }); 
```

有关使用MongoDB的更多示例，您可以参考此[博客](http://blog.modulus.io/mongodb-tutorial)

我们需要知道我们的mongodb服务器在哪里运行。 url表示运行mongodb服务器实例的位置，以便我们可以连接到它。 url包含我们要连接的数据库名称。

假设您的数据库正在上面提到的url上运行，现在让我们关注连接数据库的Url（本地）

`var url = 'mongodb://localhost:27017/my_database_name';`

### 在Node.js中与MongoDB建立连接（当DB在您的`mLab`运行时）：

连接到`mLab` DB的URL如下所示

`var url = 'mongodb://username:password@ds01316.mlab.com:1316/food';`

您可以用这个替换url变量，一切都将按照应有的方式工作，最后您的数据库在`mLab`安全可靠，您可以在其中查看您的收藏，用户，备份等。

### 重要的提示：

但是将您的用户名和密码提交到您的公共存储库有时非常危险，所以永远不要将它们提交到公共存储库，而是可以使用环境变量来存储URL（包含用户名和密码），以便在**本地**系统中执行此操作

对于Mac / Linux用户，您只需键入：

`export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

对于Windows用户：

`SET MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

设置环境变量后，需要将环境变量调用到代码中。你可以输入这个来做

`var url = process.env.MONGOLAB_URI;`

现在，您的MongoDb网址会安全地插入到您的代码中。您现在可以提交它并将其部署到您的heroku。

如果您需要更多帮助如何部署到Heroku，您可以参考这个[Wiki](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Heroku-Deployment-Guide)

## 最后的步骤：

将代码部署到Heroku应用程序后，需要在heroku中为代码设置环境变量。

为此，您需要从heroku远程运行以下命令，

`heroku config:set MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

多数民众赞成，您的应用程序现已成功部署在带有`mLab` DB的heroku中