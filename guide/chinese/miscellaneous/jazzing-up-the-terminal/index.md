---
title: Jazzing Up the Terminal
localeTitle: 爵士乐终端
---
开箱即用，Ubuntu附带的终端有点乏味。本部分将让您成为超级用户![:muscle:](//forum.freecodecamp.com/images/emoji/emoji_one/muscle.png?v=2 "：肌肉：") 。

## 工具：

#### 终结者

[终结器](https://launchpad.net/terminator)允许您在类似网格的界面中安排多个终端。  
要安装终结者，请在终端中输入`sudo apt-get install terminator` 。

终结者的屏幕截图：

![终结者的屏幕截图](//discourse-user-assets.s3.amazonaws.com/original/2X/6/6af4988ebfb1835ff3c19366865eaaaaf224cb19.png)

#### 哦，我的ZSH！

先决条件：

*   应该安装`git`

安装`ZSH`和`Oh My ZSH!`使用以下命令：
```
sudo apt install zsh && chsh -s $(which zsh) 
```

> 注意：您需要注销并再次使用ZSH而不是bash作为默认shell。
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" 
```

一旦你重新启动你的终端， `Oh My ZSH!`应该安装。

查看[官方文档](https://github.com/robbyrussell/oh-my-zsh/wiki)以了解如何安装插件和主题。

#### 高级教程

*   [命令行速成课程](http://cli.learncodethehardway.org/book/)
*   [命令行的艺术](https://github.com/jlevy/the-art-of-command-line)
*   [学习足够的命令行是危险的](https://www.learnenough.com/command-line-tutorial)

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页| ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：") |下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")  
[**自定义Ubuntu**](//forum.freecodecamp.com/t/customizing-ubuntu/18382) | [**目录**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**安装DevTools和现代Web浏览器**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385)