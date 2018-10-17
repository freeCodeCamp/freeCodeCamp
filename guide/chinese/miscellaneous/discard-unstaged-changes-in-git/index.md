---
title: Discard Unstaged Changes in Git
localeTitle: 丢弃Git中的非分段更改
---
使用Git时，通常在暂存阶段之前进行要完全删除的更改。例如，在处理几个文件后，您意识到要还原对一个特定文件所做的更改。要在暂存和提交之前放弃更改，请使用`$ git checkout`命令。

## 要取消暂存一个文件：

`$ git checkout <path-to-file>`

_请记住将`<path-to-file>`替换为实际文件名。_

## 要取消暂存所有文件：

`$ git checkout -- .`