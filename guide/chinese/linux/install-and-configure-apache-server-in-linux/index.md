---
title: Install and Configure Apache Server in Linux
localeTitle: 在Linux中安装和配置Apache服务器
---
Apache HTTP Server，俗称Apache，是免费的开源软件 跨平台的Web服务器软件。 Apache由一个开发和维护 在Apache Software Foundation的支持下开放的开发人员社区。

## 在Linux中安装和配置Apache服务器

第1步：安装Apache服务器 `yum install httpd`

步骤2：配置http Web服务器 `cd /etc/httpd/conf.d`

第3步：创建扩展名为.conf的自定义配置文件。 `vim *.conf`

第4步：启动Apache服务器 `systemctl start httpd.service`

步骤5：在操作系统启动时自动启动Apache服务器。 `systemctl enable httpd.service`

第6步：添加防火墙权限。 `firewall-cmd --add-service=http --permanent`