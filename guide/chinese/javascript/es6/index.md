---
title: ES6
localeTitle: ES6
---
## ES6

第6版ECMAScript称为ES6。

它也被称为ES2015。

这些更改增加了许多语法糖，允许开发人员以面向对象的方式创建应用程序。

> ES5示例：

```javascript
var User = function () { 
  function User(name) { 
    this._name = name; 
  } 
 
  User.prototype.getName = function getName(x) { 
    return 'Mr./Mrs. ' + this._name; 
  }; 
 
  return User; 
 }(); 
```

> ES6示例：

```javascript
class User { 
  constructor(name) { 
    this._name = name 
  } 
 
  getName() { 
    return `Mr./Mrs. ${this._name}` 
  } 
 } 
```

引入了许多新的语法功能，包括：

*   类，
*   模块，
*   模板，
*   for / of循环，
*   生成器表达式
*   箭头功能，
*   收藏，
*   承诺。

如今，大多数功能都可以在所有流行的浏览器中使用。 [兼容性表](https://kangax.github.io/compat-table/es6/)包含有关所有现代浏览器的功能可用性的所有信息。

经常出现新功能，这是继承者ES7的一部分。一种常见的方法是将现代JavaScript（ES6，ES7和其他实验方案）翻译成ES5。这确保了旧浏览器也可以执行代码。像[Babel](https://babeljs.io/)这样的工具可以将新的JavaScript转换为ES5。

除了来自ECMAScript标准的语法糖之外，还有一些需要[Polyfill的功能](https://babeljs.io/docs/usage/polyfill) 。通常它们是必需的，因为整个类/方法实现被添加到标准中。