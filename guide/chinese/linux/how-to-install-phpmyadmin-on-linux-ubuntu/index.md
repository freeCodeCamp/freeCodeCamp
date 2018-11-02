---
title: How to install phpmyadmin on Linux (Ubuntu).
localeTitle: 如何在Linux（Ubuntu）上安装phpmyadmin。
---
# 如何在Linux上安装phpmyadmin（Ubuntu）

可以使用命令行通过在终端中运行命令来管理[MySQL](https://en.wikipedia.org/wiki/MySQL)数据库服务器。但是使用图形用户界面（GUI）更方便，更乏味 - 尤其是那些不习惯在终端上输入命令的人。

[phpMyAdmin](https://en.wikipedia.org/wiki/PhpMyAdmin)是一个用PHP编写的免费开源GUI软件工具，旨在通过Web管理MySQL。 phpMyAdmin支持MySQL及其社区支持的版本[\-MariaDB上的各种操作](https://en.wikipedia.org/wiki/MariaDB) 。

经常使用的数据库操作（管理数据库，表，列，关系，索引，用户，权限等）可以通过GUI执行，同时您仍然可以直接执行任何SQL语句。并且还以流行的文件格式（CSV，SQL，XML，PDF，Word，Excel，LaTeX和许多其他格式）执行数据的导出和导入。您可以安装phpMyAdmin Linux，Windows和Mac OS（它是跨平台的）。它已成为最受欢迎的MySQL管理工具之一。

在本文中，您将了解如何在Linux操作系统上安装它。但在我们开始之前，请确保您的系统上安装了Apache，MySQL和PHP。如果没有[在这里](https://fossnaija.com/install-lamp-server-linux-ubuntu/)学习如何做到这[一点](https://fossnaija.com/install-lamp-server-linux-ubuntu/) 。

### 安装phpMyAdmin。

*   打开Linux终端，并使用Ubuntu的软件包管理器`apt`安装，
    
    sudo apt-get install phpmyadmin
    
*   然后安装开始。出现提示时，从**“配置phpMyAdmin”**对话框中选择_“Apache2”_ 。当询问MySQL用户名和密码时，输入“root”作为用户名并选择适当的密码密码。
    
*   安装完成后，配置phpMyAdmin以便本地Web服务器识别。在您喜欢的文本编辑器中打开apache配置文件;
    
    ```
    sudo gedit /etc/apache2/apache2.conf 
    
    ```
    
    并在文件的底部添加以下行（您可以将其添加到文件的任何位置，我只需在此处选择底部，以便您可以轻松访问它以进行修改，如果需要）：
    
    `Include /etc/phpmyadmin/apache.conf`
    
*   然后重启Web服务器;
    
    ```
    sudo service apache2 restart 
    
    ```
    
*   现在在浏览器中输入以下网址;
    
    `https://localhost/phpmyadmin`
    
    如果您还没有这样做，您应该看到一个登录页面供您输入用户名和密码。
    
    **用户名** = _root_
    
    **密码** = _您的_MYSQL_密码_
    

如果成功，将显示phpMyAdmin仪表板。然后你就可以开始使用phpMyAdmin了。

### 更多信息：

*   有关图形安装步骤，请[在此处查看](https://fossnaija.com/install-phpmyadmin-linux-ubuntu/) 。
    
*   [PhpMyAdmin安装文档](https://docs.phpmyadmin.net/en/latest/setup.html) 。