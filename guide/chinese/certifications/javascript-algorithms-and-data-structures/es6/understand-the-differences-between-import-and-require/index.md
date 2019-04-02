---
title: Understand the Differences Between import and require
localeTitle: 理解import和require之间的差异
---
## 理解import和require之间的差异

让我们澄清一下： `require()`加载整个文件及其组件（函数，变量），而`import _ from`允许您手动选择所需的组件。

在本课程中，您的任务是导入函数`capitalizeStrings()` ，该函数来自文件`"string-functions"` 。

## 提示1：

填写空白： `import { function_name } from "file_name"` 。您的函数名称是`capitalizeStrings` ，您的文件名是`"string-functions"` 。

## 剧透警报 - 提前解决！

## 解

```javascript
"use strict"; 
 import { capitalizeString } from "string-functions"; 
 capitalizeString("hello!"); 

```