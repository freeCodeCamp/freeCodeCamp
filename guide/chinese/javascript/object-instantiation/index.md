---
title: Object Instantiation
localeTitle: 对象实例化
---
## 对象实例化

在Javascript和大多数其他语言中，对象包含一系列属性，这些属性是键值对。当您需要构造对象时，可以使用多个选项。

### 初始化对象变量

您可以创建具有预定义属性的对象，如下所示：

```javascript
let myObject = { 
  name: "Dave", 
  age: 33 
 } 
```

### 创建一个空对象

这会在myObject变量中创建一个空对象：

```javascript
let myObject = new Object(); 
```

当您希望向对象添加属性时，只需使用点表示法或括号表示法以及您选择的属性名称：

```javascript
myObject.name = "Johnny Mnemonic" 
 myObject["age"] = 55 
```

### 使用构造函数

您可以定义可用于创建对象的构造函数：

```javascript
function Kitten(name, cute, color) { 
  this.name = name, 
  this.cute = cute, 
  this.color = color 
 } 
```

您可以通过调用构造函数来定义包含此对象实例化的变量：

```javascript
let myKitten = new Kitten("Nibbles", true, "white") 
```

### 的Object.create（）

Object.create（）方法（首先在ECMAScript 5.1中定义）允许您创建对象。它允许您为新对象选择原型对象，而无需事先定义构造函数。

```javascript
// Our pre-defined object 
 let kitten = { 
  name: "Fluff", 
  cute: true, 
  color: "gray" 
 } 
 // Create a new object using Object.create(). kitten is used as the prototype 
 let newKitten = Object.create(kitten) 
 
 console.log(newKitten.name) // Will output "Fluff" 
```

#### 更多信息

[关于使用对象的MDN文章](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)