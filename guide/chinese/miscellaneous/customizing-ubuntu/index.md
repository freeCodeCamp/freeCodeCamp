---
title: Customizing Ubuntu
localeTitle: 自定义Ubuntu
---
本教程向您展示如何向终端添加别名，调整统一性并删除预先安装的英国媒体报道软件。

## 脚步：

### 删除Bloatware

要避免因隐私问题而删除所有预安装的英国媒体报道软件或保持操作系统最小化，请查看[此](https://gist.github.com/ansell/61313400e26cd42289f8)要点。

### 别名

您可以创建一个这样的临时别名：
```
alias alias_name="command_to_run" 
```

但是，当您关闭shell会话时，此别名将不再存在。

要创建永久别名，您需要使用`touch ~/.bash_aliases`命令创建`~/.bash_aliases`文件。使用所选的文本编辑器打开此文件后，在文档底部添加一行，类似于上面的示例。

要了解更多信息，DigitalOcean有一个很棒的教程，可以在[这里](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions)找到。

### Unity调整工具

Unity Tweak Tool为用户提供了大量用于调整Unity桌面的配置选项。

要安装Unity Tweak Tool类型`sudo apt install unity-tweak-tool` ，并启动它， `unity-tweak-tool` 。

[这](http://www.techrepublic.com/blog/linux-and-open-source/six-must-have-ubuntu-unity-tweaks/)是六个必备Ubuntu Unity Tweaks的列表。

[**下载并安装Ubuntu Desktop**](//forum.freecodecamp.com/t/download-and-install-ubuntu-desktop/18383) | [**目录**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**爵士乐终端**](//forum.freecodecamp.com/t/jazzing-up-the-terminal/18386)