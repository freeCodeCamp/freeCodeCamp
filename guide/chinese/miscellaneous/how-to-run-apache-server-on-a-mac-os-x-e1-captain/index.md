---
title: How to Run Apache Server on a Mac Os X E1 Captain
localeTitle: 如何在Mac Os X E1 Captain上运行Apache服务器
---
[Apache](http://www.apache.org/)服务器预先在Mac OS X上构建，无需安装第三方工具WAMP，LAMP，MAMP和XAMPP即可在Mac上运行Apache服务器。

当您考虑在Mac OS X E1 Captain / OS X Yosemite上运行[Apache](http://www.apache.org/)服务器时，它与早期版本有很大不同。在这里，您应该从终端窗口，早期的GUI选项中进行勾选，因为系统控制窗口中的Web服务器已经启动。

在终端窗口输入：
```
httpd -v 
```

它提供服务器版本和构建日期。

这里http代表超文本传输​​协议d代表Daemon，这是一个使用多任务的软件程序，也用于Mac OS X. `httpd`是Apache超文本传输​​协议（HTTP）服务器程序。它旨在作为独立的守护程序进程运行。类型
```
sudo apachectl start 
```

在您的终端窗口上，然后转到您的浏览器并键入`http://localhost` ， `It works!`在您的浏览器上。