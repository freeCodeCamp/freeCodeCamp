---
title: Import a Default Export
localeTitle: 导入默认导出
---
## 导入默认导出

导入导出默认值与导入正常导出几乎相同;你只是不需要花括号来定义你从文件导入的名称！

## 提示1：

填写空白： `import _ from "file-name"` 。将模块的名称（ `subtract` ）插入`_` ，并将`"math-functions"`插入`"file-name"` 。

## 剧透警报 - 提前解决！

## 解：

```javascript
"use strict"; 
 import subtract from "math_functions"; 
 subtract(7,4); 

```