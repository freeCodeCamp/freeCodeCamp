---
title: local-lamp-server-on-ubuntu
localeTitle: 当地灯服务器上的Ubuntu
---## Ubuntu上的本地LAMP服务器

本简要指南的目的是引导您完成在本地Ubuntu Linux计算机或虚拟机上设置LAMP（Linux，Apache，MySQL，PHP）服务器的过程。这将允许开发人员使用PHP和MySQL（使用phpMyAdmin）进行开发。这是Wordpress开发所必需的常见堆栈。

### 安装必要的包

您需要为LAMP服务器安装以下软件包。您可以通过一个空格分隔每个包，或者如图所示一次一个地安装它们。我更喜欢一次下载一个，因为更容易看出是否有任何错误。输入终端并键入以下内容：

*   `sudo apt-get install apache2`
*   `sudo apt-get install php`
*   `sudo apt-get install php-mysql`
*   `sudo apt-get install mysql-server`

然后，系统会提示您为MySQL root用户设置密码。设置密码后继续安装：

*   `sudo apt-get install libapache2-mod-php`
*   `sudo apt-get install php-mcrypt`
*   `sudo apt-get install phpmyadmin`

然后，您应该按Enter键以提示哪个服务器使用select apache。 为高级服务器设置选择no。

### 更改/ var / www / html的权限

为了让LAMP服务器运行php脚本和文件，需要将它们保存在/ var / www / html目录中。您可以将此位置视为本地服务器。为了更改此目录，我们需要更改它的权限。在终端输入命令：

*   `sudo chown {your ubuntu username} /var/www/html`

### 创建一个phpMyAdmin的符号链接

默认情况下，phpMyAdmin安装在/ usr / share /目录中。我们需要将它移动到我们的本地服务器目录。我们导航到我们想要链接的服务器目录：

*   `cd /var/www/html`

然后输入命令创建链接：

*   `ln -s /usr/share/phpmyadmin phpmyadmin`

### 重启Apache并测试

运行以下命令以重新启动Apache设置所做的更改：

*   `sudo systemctl restart apache2`

然后，您应该能够在/ var / www / html目录中创建info.php文件。

*   `touch /var/www/html/info.php`

在文件中键入以下php代码：

*   `<?php phpinfo(); ?>`

然后，打开浏览器并输入localhost / info.php 您应该从刚刚编写的php文件中看到一个页面，它为您提供有关php的信息。

最后，要访问phpMyAdmin，请在浏览器中访问localhost / phpmyadmin。 defualt root用户名是'root'，密码是你之前为MySQL数据库选择的密码。

### 更多信息