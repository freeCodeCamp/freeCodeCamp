---
title: Downloading Text Editors and Ides
localeTitle: 下载文本编辑器和Ides
---
我们讨论流行的文本编辑器和IDE以及如何在Ubuntu上安装它们。

## 热门选择：

### 文字编辑

**安装Atom：**
```
sudo add-apt-repository ppa:webupd8team/atom 
 sudo apt-get update 
 sudo apt-get install atom 
```

**安装Sublime Text 3：**
```
sudo add-apt-repository ppa:webupd8team/sublime-text-3 
 sudo apt-get update 
 sudo apt-get install sublime-text-installer 
```

**安装Visual Studio代码：**

下载最新的Visual Studio Coder包： [Visual Studio](https://code.visualstudio.com/Docs/?dv=linux64_deb)
```
sudo dpkg -i vscode-amd64.deb 
```

### 集成开发环境

**安装Eclipse：**
```
sudo apt-get install openjdk-7-jdk 
```

下载最新的Eclipse包： [Eclipse](http://www.eclipse.org/downloads/?osType=linux)
```
sudo mv eclipse-inst-linux64.tar.gz /opt/ && cd /opt 
 sudo tar -xvf eclipse-inst-linux64.tar.gz 
```

在`/usr/share/applications/`目录中创建一个名为`eclipse.desktop`的新文件，并添加以下行：
```
<a href='https://www.jetbrains.com/idea/download' target='_blank' rel='nofollow'>Desktop Entry] 
 Name=Eclipse 
 Type=Application 
 Exec=/opt/eclipse/eclipse 
 Terminal=false 
 Icon=/opt/eclipse/icon.xpm 
 Comment=Integrated Development Environment 
 NoDisplay=false 
 Categories=Development;IDE 
 Name[en]=eclipse.desktop 
```

您现在可以将此文件拖到启动器，使您可以启动Eclipse。

**安装Intellij IDEA：**

下载\[ **Intellij IDEA**的最新版本
```
sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt 
 sudo tar -xvf idea-2016.1.1.tar.gz 
```

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页| ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：") |下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")  
[**安装DevTools和现代Web浏览器**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385) | [**目录**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**流行的Windows和Mac软件的替代品**](//forum.freecodecamp.com/t/alternatives-to-popular-windows-and-mac-software/18387)