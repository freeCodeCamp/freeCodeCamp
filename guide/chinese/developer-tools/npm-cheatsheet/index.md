---
title: npm Cheat Sheet
localeTitle: npm备忘单
---
## npm备忘单

帮助使用`npm`的终端命令和标志列表

## 安装`package.json`依赖项

```shell
npm install 
```

**速记**

```shell
# install 
 npm i <package> 
 # uninstall 
 npm un <package> 
 # update 
 npm up <package> 
```

## 列出全局安装的包。

```shell
npm list -g --depth=0 
```

## 卸载全局包

```shell
npm -g uninstall <name> 
```

## 在Windows上升级NPM

在Windows上尝试多次升级npm之后，我发现了这一点，同时在npm文件夹中进行了调整。

```shell
npm-windows-upgrade 
```

## 更新全局包

要查看哪些软件包需要更新，请使用：

```shell
npm outdated -g --depth=0 
```

要单独更新全局包，您可以使用：

```shell
npm update -g <package> <package> <package> 
```

## 列出要运行的可用脚本

```shell
npm run 
```

## 更新npm

```shell
npm install -g npm@latest 
 # using windows? Then use 
 npm-windows-upgrade 
```

## 旗

`-S`相同`--save`不是NPM需要5+ `-D`与`--save-dev`相同

## 安装版

```shell
npm list # for local packages 
```

## 节点版本管理器`nvm`

假设您要安装将在终端上编写的Node v6.9.1：

```shell
nvm install 6 
```

如果您的工作区上安装了多个版本的Node.js，则可以通过编写以下内容切换到特定版本：

```shell
nvm use 4.8.4 
```

### 使节点版本默认。

要为工作区设置节点的默认版本，只需键入：

```shell
nvm alias default 6 
```

其中6是您希望用作默认版本的版本。