---
title: Change the Prototype to a New Object
localeTitle: 将Prototype更改为新对象
---
## 将Prototype更改为新对象

而不是使用`object.prototype.property`添加每个原型属性。通过将原型设置为新对象，我们可以更轻松地完成这项工作。这样，所有原型属性都会立即添加。

  

## 暗示：

```javascript
Dog.prototype = { 
  property: value, 
  functionName: function(){ 
 
  }, 
 } 
```

现在尝试解决挑战！

  

## Spoiler-Alert解决方案未来！

  

## 解决方案1：

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat: function(){ 
    console.log('nom nom nom'); 
  }, 
  describe: function(){ 
    console.log("My name is " + this.name); 
  } 
 } 
```

## 代码说明：

我们将原型变量分配给一个新对象。 然后我们声明numLegs属性并给它一个值2。

接下来我们创建两个函数“吃”和“描述”。 现在记住对象中的函数是与属性具有相同语法的方法。 您的名称后跟一个值。该值是函数，名称是函数的名称。  

## 解决方案2：

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat(){ 
    console.log('nom nom nom'); 
  }, 
  describe(){ 
    console.log("My name is " + this.name); 
  } 
 }; 
```

## 代码说明：

这个解决方案和最后一个解决方案之间唯一不同的是我们缩短了“吃”和“描述”功能的语法。 我们通过删除“：”和“功能”一词来做到这一点。

使用ES6，我们可以这样做。

你可以在这里阅读： [参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)