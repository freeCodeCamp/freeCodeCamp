---
title: Template Literals
localeTitle: 模板文字
---
模板文字是一个ES6功能，利用反引号字符来定义字符串值

### 基本语法

以下是模板文字的基本示例：

```javascript
// ES5 syntax 
 var es5String = "ES5 String" 
 var es5StringWithVariable = "ES5 String with a " + variable + "..." 
 
 // ES6 template literal 
 const tempLit = `Simple string` 
 
 // ES6 template literal with variable 
 let tempLitWithVariables = `Simple string with a ${variable}...` 
 
 // ES6 multiple line template literal 
 const multiLineString = ` 
  Multiple 
  Lines 
  Allowed 
 ` 

```