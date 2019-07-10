---
title: Storing Mongo Username  Password Persistently Using Dotenv
localeTitle: 使用Dotenv持久存储Mongo用户名密码
---
## 使用dotenv存储应用程序的安全信息

本文是关于在本地测试环境中保存第三方站点（例如mLab）上的安全数据库访问的用户名和密码凭据信息，以保护他们免受在github等站点上查看公共存储库的任何人的攻击。

安全信息或私人信息不应存储在您的代码中并推送到存储库，因为它会被公开暴露，从而使您的信息面临风险，如果有人以欺诈手段使用您的凭据，您将面临失去API或数据库访问权的风险。

[这篇wiki文章](//forum.freecodecamp.com/t/guide-for-using-mongodb-and-deploying-to-heroku/19347/3)讨论了如何使用export命令保护您的凭据，但为了使这些变量保持持久性，您有两种选择。但是，每次重新启动shell时都会删除以这种方式设置的enivorment变量，例如当您关闭计算机并重新启动新的编码会话时。

每次启动新的终端shell时，都必须再次执行所有步骤来设置环境变量。这意味着您需要将凭据存储在某个文本文件中，或者在第三方帐户（例如mLab）中查找它们。

每次开始一个新会话时这样做都很乏味，而不是将它们存储在易于查找的代码本身中，我将向您展示一种使用文本文件并导入凭据的方法。

第一种选择是使用您的shell配置文件，并在每次启动新终端时导出这些变量。然而，在开发新应用程序和项目的几周内，您的shell配置文件会被大量的变量堵塞，这些变量在每个会话中都不需要。您只需要当前正在处理的应用程序的凭据。

## 清理包含安全凭据的git仓库

如果您已经使用存储在代码库中的凭据将存储库推送到github，则只需删除它们并再次推送它将无济于事，因为您的凭据存储在历史记录中，这对公众也是可见的。如果是这种情况，请使用这些命令重置git存储库以清除历史记录。

**首先，**从github删除你的repo。我们准备好之后你会创建一个新的。

**其次，**从工作目录中删除本地git存储库。  
\- 将目录更改为工作目录。你的.git repo文件应该在这里。  
请注意：如果使用不正确，使用-rf标志可以删除整个硬盘。我使用-i标志，代表交互以确定我在正确的目录中。在对几个文件进行排序后，我100％确定我在正确的位置，我会杀死该命令并在没有-i标志的情况下再次运行它。做你觉得最舒服的事情，但建议你在运行-rm命令之前有一个完整的计算机备份（在多个地方）。
```
cd <project-name> 
 rm -i -rf .git 
```

**第三，**确保更新.gitignore文件以包含.env文件以及您希望保密的任何其他文件夹。本地IDE文件，例如.idea / if，例如使用jetbrains，可以在此文件中。我的.gitignore文件看起来像这样。请注意，您可以在创建文件夹或文件之前添加它，而不会导致任何错误。

`.gitignore`  
node\_modules  
.ENV  
数据/  
。理念/

**最后**创建一个新的存储库。现在，您已准备好继续创建.env文件并将您的repo安全地推送到github并保证您的凭据安全。

`git init`

## 如何在本地应用程序中使用dotenv

这是节点模块dotenv可以提供帮助的地方。要使用dotenv，您需要在应用程序代码中要求它，调用它上面的config（）函数，该函数从您计算机上的本地存储文件中提取您的凭据。该文件名为`.env`

**第1步：**创建.env文件并将变量存储在其中  
`MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

**第2步：**在主应用程序中要求dotenv  
在你的主`app.js` （或任何你命名的）  
`var dotenv = require('dotenv');`

**第3步：**在变量上调用config函数。 （注意这可以通过链接在一行中完成，但我喜欢看到这是一个单独的活动）。  
`dotenv.config();`

**第4步：**通过调用流程变量来设置您的mongodb URL：  
`var url = process.env.MONGOLAB_URI;`

此解决方案可以保护您的代码清洁您不希望推送到公共存储库的安全凭据，同时保持每个应用程序整齐有序并节省开发期间的时间。

**参考文献：**

[osxdaily.com](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/)

！\[\]（http://cdn.osxdaily.com/wp-content/uploads/2014/08/terminal-icon-osx.png） ### [在Mac OS X中设置环境变量的位置](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/) 在命令行中，为当前shell定义环境变量，并由任何正在运行的命令或进程继承。他们可以从默认的shell，PATH，......中确定任何东西......

[stackoverflow.com](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

[！\[Drake Main](https://cdn-media-1.freecodecamp.org/imgr/jRaTj.jpg) \]（http://stackoverflow.com/users/4956243/drake-main） #### [在Node.js中使用API​​密钥时的最佳实践](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

\*\* node.js，api-key \*\*

[Drake Main](http://stackoverflow.com/users/4956243/drake-main)在[上午07:05 - 2月12日](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)问道

[stackoverflow.com](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)

[！\[Peiniau](https://www.gravatar.com/avatar/9db1745a666cface1731c12d54e189e6?s=128&d=identicon&r=PG) \]（http://stackoverflow.com/users/105813/peiniau） #### [如何完全删除使用init创建的git存储库？](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)

\*\* git，git-init \*\*

[Peiniau](http://stackoverflow.com/users/105813/peiniau)在[04:06](http://stackoverflow.com/users/105813/peiniau) [PM - 2009年7月31日](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init) [提问](http://stackoverflow.com/users/105813/peiniau)