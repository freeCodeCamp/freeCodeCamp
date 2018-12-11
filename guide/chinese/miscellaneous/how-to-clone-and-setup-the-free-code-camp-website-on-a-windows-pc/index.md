---
title: How to Clone and Setup the Free Code Camp Website on a Windows Pc
localeTitle: 如何在Windows PC上克隆和设置免费代码营网站
---
此列表适用于freeCodeCamp站点，并且已在此[Angular教程中](https://docs.angularjs.org/tutorial)进行了测试。在Windows PC上设置开发环境很容易，但在此过程中可能会首先出现很多错误。重要的是纠正这些错误。

## 先决条件

1.  [Git bash](https://msysgit.github.io/)
2.  [Node.js的](https://nodejs.org/)
3.  [MongoDB的](https://www.mongodb.org/downloads)
4.  [Python 2.7.10](https://www.python.org/downloads/release/python-2710/)

下载并安装4个先决条件。安装Python和Node时，检查选项add to path变量很重要。 Node安装程序默认执行此操作。将Mongo添加到路径是可选的。 Python应该安装在％programfiles％的子文件夹中

1.  使用管理员权限打开命令提示符。
    
2.  通过运行`node -v`验证节点是否在路径中
    
3.  通过运行`npm -v`验证npm是否在路径中
    
4.  运行以下命令：
    
    ```
    npm install gulp -g 
     npm install node-gyp -g 
    
    ```
    
5.  如果你想在浏览器中花费时间在必须启动时找到Mongo，请在桌面上创建`.cmd`文件并写入Mongo的路径。可能是`%programfiles%\MongoDB\Server\3.0\bin\mongod.exe` 。
    
6.  为Mongo创建默认文件夹以存储数据库： `C:\data\db`
    

**以下命令都_必须_在Git Bash中执行**

1.  按照[**Github上的freeCodeCamp**](https://github.com/FreeCodeCamp/freecodecamp)说明并克隆项目。
2.  确保你在使用GitHub克隆的目录中（默认情况下，这是freecodecamp）。
3.  运行`cp sample.env .env`
4.  运行`npm install`
5.  从桌面快捷方式启动Mongo并运行`npm run only-once` 。您现在应该在启动Mongo的窗口中看到很多活动。
6.  跑了`gulp` 。过了一会儿，你的本地版本的freeCodeCamp应该正在运行。您可以在浏览器中访问`http://localhost:3000`

恭喜你，你做完了！如果您在设置本地版本的freeCodeCamp时遇到任何问题，请随时联系[我们的贡献者聊天室](https://gitter.im/FreeCodeCamp/Contributors) 。