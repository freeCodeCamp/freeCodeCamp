---
title: this reference
localeTitle: 这个参考
---
## `this`参考

在JavaScript中，每个函数都有`this`引用在声明它自动创建。该参考颇为相似， `this`在其他基于类的语言如Java或C＃参考（JavaScript是一种基于原型的语言，并没有“阶级”的概念）： _它指向哪个对象有时调用的函数_ （该对象称为_上下文_ ）。但是，在JavaScript中， _函数内部的`this`引用可以绑定到不同的对象，具体取决于调用函数的位置_ 。以下是JavaScript中`this`绑定的5个基本规则：

### 规则1

在全局范围中调用函数时， `this`引用默认绑定到**全局对象** （浏览器中的`window`或Node.js中的`global` ）。例如：

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 foo(); 
 console.log(a); // 2 
```

注意：如果在严格模式下声明上面的`foo()`函数，那么在全局范围内调用此函数， `this`将是`undefined`并且赋值`this.a = 2`将抛出`Uncaught TypeError`异常。

### 规则2

我们来看下面的例子：

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 var obj = { 
  foo: foo 
 }; 
 
 obj.foo(); 
 console.log(obj.a); // 2 
```

显然，在上面的代码片段中， `foo()`函数被调用， _上下文_是`obj`对象，现在`this`引用绑定到`obj` 。因此，当使用上下文对象调用函数时， `this`引用将绑定到此对象。

### 规则3

`.call` ， `.apply`和`.bind`都可以在调用点使用显式绑定`this` 。使用`.bind(this)`是你可以在很多React组件中看到的东西。

```javascript
var foo = function() { 
  console.log(this.bar) 
 } 
 
 foo.call({ bar: 1 }) // 1 
```

这是一个快速的例子，说明如何使用每个绑定`this` ：

*   `fn.call(thisObj, fnParam1, fnParam2)` `.call()` ： `fn.call(thisObj, fnParam1, fnParam2)`
*   `.apply()` ： `fn.apply(thisObj, [fnParam1, fnParam2])`
*   `.bind()` ： `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

### 规则4

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
 
 var p1 = new Point2D(1, 2); 
 console.log(p1.x); // 1 
 console.log(p1.y); // 2 
```

您必须注意的是使用`new`关键字调用的`Point2D`函数，并且`this`引用绑定到`p1`对象。因此，当使用`new`关键字调用函数时，它将创建一个新对象，并且`this`引用将绑定到此对象。

注意：当您使用`new`关键字调用函数时，我们也将其称为_构造函数_ 。

### 规则5

的JavaScript确定的值`this`在运行时，基于所述当前上下文。所以`this`有时会指向你期望的东西。

考虑这个带有一个名为`makeSound()`的方法的Cat类示例，遵循规则4（上面）中的模式，带有构造函数和`new`关键字。

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.makeSound(); // Fat Daddy says: Mrrooowww 
```

现在让我们试着给猫一个方法来`annoy()`人们通过重复他的声音100次，每半秒一次。

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(function() { 
            this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

这不起作用，因为在`setInterval`回调中我们创建了一个具有全局范围的新上下文，所以`this`不再指向我们的kitty实例。在Web浏览器中， `this`将指向Window对象，该对象没有`makeSound()`方法。

有几种方法可以使它工作：

1）创建新的上下文之前，分配`this`名为局部变量`me` ，或`self` ，或任何你想将它命名，并使用回调内部的变量。

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var self = this; 
        var t = setInterval(function() { 
            self.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

2）同ES6就可以避免分配`this`通过使用箭头功能，其结合本地变量`this`到它的限定的周围的代码的情况下。

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(() => { 
            this.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

### 其他资源

*   [javascriptissexy.com](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
*   [你不懂JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)