---
title: Use export to Reuse a Code Block
localeTitle: 使用export重用代码块
---
## 使用export重用代码块

我们学习了如何从另一个文件导入内容。但是有一个问题。您只能导入从该其他文件**导出的**文件。

你在这里的任务是导出`foo`和`bar` 。

## 提示1：

只需在他们面前添加出口！

## 剧透警报 - 提前解决！

## 解

```javascript
"use strict"; 
 export const foo = "bar"; 
 export const bar = "foo"; 

```