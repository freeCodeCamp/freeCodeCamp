---
title: Installing Wordpress Locally on Mac
localeTitle: 在Mac上本地安装Wordpress
---
在本地安装WordPress将允许您安全地构建主题，并允许您免费试用WordPress而无需支付主机费用。

## 所需下载：

*   [MAMP](https://www.mamp.info/en/)
*   [WordPress的](https://wordpress.org/about/)

在本地安装WordPress的第一步是下载MAMP。 MAMP代表Macintosh，Apache，MySQL和PHP。这是将运行新安装的WordPress的本地服务器。安装MAMP应该很容易，因为它就像安装任何其他应用程序一样。

安装MAMP后，您将要卸载MAMP pro。要执行此操作，只需导航到您的应用程序文件夹并找到MAMP pro文件夹。此文件夹中将有一个卸载程序。我选择单击所有复选框，因为它是全新安装的MAMP。

## 配置MAMP

打开MAMP应用程序，你会看到这个屏幕：

我们必须设置一些首选项，然后单击首选项图标。在首选项屏幕上单击`Ports` 。

在这里，您可以保留端口，这将要求您在URL `localhost:8888`包含端口号。

如果您不想在URL中包含端口号，可以将Apache和MySQL端口更改为80.我选择不这样做的原因是因为始终会要求您输入密码

接下来，您将单击Apache选项卡并设置文档根目录。我选择在我的用户文件夹中创建一个名为“Sites”的新文件夹。

现在我们已经完成了所有设置的编辑，点击OK保存。

## 启动MAMP

要启动MAMP，请单击“启动服务器”。

这应该会在您的Web浏览器中打开一个新窗口，其地址为`http://localhost:8888/MAMP/?language=English` 。

如果您的浏览器未打开，则应该可以单击“ `Open WebStart page` 。

创建数据库

下一步是单击MySQL下的`phpMyAdmin`链接，它将带您进入此页面：

单击左侧导航菜单中的新建。

输入数据库的名称，然后单击“创建”。我选择了“WordPress”。

## 安装WordPress

解压缩您下载的WordPress文件，并将其内容拖到您之前创建的文件夹中作为文档根目录。

复制文件后，转到`localhost:8888` 。

选择您的语言，然后在下一个屏幕上点击`Let's Go` 。

输入您创建的数据库的名称，输入用户名和密码的“root”，然后单击“提交”。

单击`Run the install` ，然后在下一个屏幕上输入登录的详细信息。

单击“ `Submit` ，您将进入本地托管的WordPress登录。

成功！使用您创建的用户名和密码登录。