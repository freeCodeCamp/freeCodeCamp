---
title: How to Install the Mean Stack on Mac Osx
localeTitle: 如何在Mac Osx上安装Mean Stack
---
要安装MongoDB，您应该安装Mac OS X 10.6（Snow Leopard）或更高版本。要找出您拥有的OS X版本，请单击屏幕左上角的图标，然后选择“ `About This Mac` 。

![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 "：警告：") **警告：**在执行以下任何步骤之前，请执行Time Machine备份！

## 第1步：安装MongoDB

在OS X上安装MongoDB的最简单方法是使用[HomeBrew](http://brew.sh/) 。如果您之前没有使用过HomeBrew，只需在终端窗口中执行以下命令：
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

成功安装HomeBrew后，请使用以下命令：
```
brew update && brew install mongodb 
```

HomeBrew将自动为您安装所有依赖项。

## 第2步：安装Node.js.

再一次，我们会让HomeBrew做繁重的工作：
```
brew install node 
```

npm可执行文件已包含在Node.js包中。

在继续之前，让我们确保其他人可以找到Node.js模块（ ![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 "：警告：") **注意** ：最好复制并粘贴这些命令，因为如果键入`>`代替`>>` ，则会丢失`.bashrc`文件的原始内容：
```
echo 'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"' >> ~/.bashrc && source ~/.bashrc 
```

要检查配置是否有效，请执行：
```
echo $NODE_PATH 
```

您应该在命令下面看到`./node_modules:/usr/local/lib/node_modules` 。

如果使用与Bash不同的shell，只需将`~/.bashrc`替换为shell配置文件即可。

## 第3步：安装fullstack工具
```
npm install -g express yo grunt grunt-cli generator-angular-fullstack bower 
```

## 第4步：生成一个fullstack应用程序

为您的后端项目项目创建一个目录。假设您的桌面是您事实上的工作区：
```
mkdir ~/Desktop/Back End Projects && cd ~/Desktop/Back End Projects 
```

现在所有准备工作都已到位，现在是主赛事的时候了：
```
yo angular-fullstack 
```

根据[挑战的](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects)核对表项目＃13-23回答问题[：为后端项目设置](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) 。如果您遇到错误，请咨询＃24-27 。这将下载约350MB的文件到您当前的目录中。

在继续之前，我们需要在一些生成的文件中修复[已知问题](https://github.com/clnhll/guidetobasejumps#fixing-exportsupdate) ：
```
echo "sed -i '' -e 's/_.merge/_.extend/' server/api/*/*.controller.js" > \ 
 fix-exports-update.sh && chmod +x fix-exports-update.sh && \ 
 ./fix-exports-update.sh 
```

每次生成新的API端点时都需要运行`./fix-exports-update.sh` （直到他们修复此上游，即）。

## 第5步：初始化本地Git存储库

告诉Git不要跟踪你的数据库：
```
echo "data" >> .gitignore 
```

通过运行以下命令，将应用程序所在的目录转换为Git存储库：
```
git init && git add . && git commit -am 'initial commit' 
```

## 第6步：启动MongoDB

要在应用程序目录中首次启动MongoDB，请在终端中运行以下命令：
```
mkdir data && echo 'mongod --config /usr/local/etc/mongod.conf --dbpath=data --rest "$@" --httpinterface' > mongod.sh && chmod a+x mongod.sh && ./mongod.sh 
```

从这一点开始，您可以通过执行`./mongod.sh`来启动MongoDB。有几点需要注意：

*   `.conf`文件指示`mongod`将消息写入日志文件而不是stdout。要查看日志，请在单独的“终端”选项卡中运行以下命令： `less /usr/local/var/log/mongodb/mongo.log` 。
*   由于我们不在Cloud9上，因此我们不需要`--nojournal`选项。日记功能允许您在`mongod`崩溃的情况下恢复数据库。
*   您必须为每个项目创建一个干净的数据库。如果从早期项目复制`data`目录，则`mongod`将无法启动。如果是这种情况，只需`rm -rf data && mkdir data && ./mongod.sh` 。

## 第7步：启动Grunt

按`⌘T`打开一个新的终端选项卡，然后运行以下命令：
```
grunt serve 
```

Grunt应在启动完成后自动打开新的Angular站点的索引页面。

现在，您应该能够按照其余的挑战说明推送到GitHub和Heroku。只需忽略有关SSH密钥的部分（＃33-36），并将`~/workspace`替换为您的app目录的路径。

## 脚注

以下步骤在以下配置下进行测试：

*   OS X 10.10.5
*   zsh 5.0.8（x86\_64-apple-darwin14.3.0）
*   节点v0.12.7
*   npm 2.11.3