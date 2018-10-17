---
title: Use an IIFE to Create a Module
localeTitle: 使用IIFE创建模块
---
## 使用IIFE创建模块

### 方法

两个`Mixin`都必须包含在一个新的`funModule`所以一个`funModule`的起点是到目前为止注释掉所有的代码。

```javascript
/*let isCuteMixin = function(obj) { 
  obj.isCute = function() { 
    return true; 
  }; 
 }; 
 let singMixin = function(obj) { 
  obj.sing = function() { 
    console.log("Singing to an awesome tune"); 
  }; 
 }; 
 */ 
```

然后在下面开始编写新的`funModule`代码。在新模块中，您需要编写一个return语句来返回两个`Mixin`代码块。只需将原始的`Mixin`代码块复制到新的模块代码中，但请记住将两个mixin与a分开`,`

### 解

```javascript
let funModule = (function() { 
  return { 
    isCuteMixin: function(obj) { 
      obj.isCute = function() { 
        return true; 
      }; 
    }, 
    singMixin: function(obj) { 
      obj.sing = function() { 
         console.log("Singing to an awesome tune"); 
      }; 
    } 
  } 
 })(); 

```