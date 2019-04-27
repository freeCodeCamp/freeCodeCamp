---
title: Add New Properties to a JavaScript Object
localeTitle: 将新属性添加到JavaScript对象
---
您可以像修改现有JavaScript对象一样向现有JavaScript对象添加新属性。

有两种不同的语法，点表示法和括号表示法。为了便于阅读，通常首选点符号，但属性必须是有效的标识符。

以下是使用点符号的方法：
```
myDog.bark = "woof-woof"; 
```

以下是使用括号表示法的方法：

```javascript
myObject['bark'] = "woof-woof"; 
```

使用括号表示法，我们可以将变量用作属性名称：

```javascript
var dynamicProperty = "bark"; 
 myObject[dynamicProperty] = "woof-woof"; 

```

使用`Object.defineProperty(o, prop, descriptor)`方法
```javascript
Object.defineProperty(myObject, 'bark', {
  enumerable: false, // 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
  configurable: false, // 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
  writable: false, // 当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
  value: "woof-woof" // 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
})
```
