---
title: Write Concise Object Literal Declarations Using Simple Fields
localeTitle: 使用简单字段编写简明对象文字声明
---
## 使用简单字段编写简明对象文字声明

在这里，我们的任务是返回一个接受函数参数作为其属性的对象。

# 提示1：

摆脱冒号和重复的单词。

## 扰流警报 - 提前解决

## 解

```javascript
const createPerson = (name, age, gender) => { 
  "use strict"; 
  // change code below this line 
  return { 
    name, 
    age, 
    gender 
  }; 
  // change code above this line 
 }; 

```