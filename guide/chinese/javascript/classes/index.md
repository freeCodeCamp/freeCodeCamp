---
title: Classes
localeTitle: 类
---
## 类

JavaScript本身没有类的概念。

但是我们可以通过利用JavaScript的原型性质来模拟类的功能。

本文假设您对[原型](/src/pages/javascript/prototypes/index.md)有基本的了解。

为了清楚起见，我们假设我们想要创建一个可以执行以下操作的类

```javascript
var p = new Person('James','Bond'); // create a new instance of Person class 
    p.log() // Output: 'I am James Bond' // Accessing a function in the class 
    // Using setters and getters 
    p.profession = 'spy' 
    p.profession // output: James bond is a spy 
```

### 使用class关键字

与任何其他编程语言一样，您现在可以使用`class`关键字来创建类。

旧版浏览器不支持此功能，并且已在ECMAScript 2015中引入。

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

  
  

`class`只是JavaScript现有的基于原型的继承模型的语法糖。

通常，程序员使用以下方法在JavaScript中创建类。

### 使用添加到原型的方法：

在这里，所有方法都被添加到原型中

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 } 
 
 Person.prototype.log = function() { 
    console.log('I am', this._firstName, this._lastName); 
 } 
 
 // This line adds getters and setters for the profession object. Note that in general you could just write your own get and set functions like the 'log' method above. 
 // Since in this example we are trying the mimic the class above, we try to use the getters and setters property provided by JavaScript 
 Object.defineProperty(Person.prototype, 'profession', { 
    set: function(val) { 
        this._profession = val; 
    }, 
    get: function() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 }) 
```

您还可以在函数`Person`编写原型方法，如下所示

```javascript
Person.prototype = { 
    log: function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
    set profession(val) { 
        this._profession = val; 
    } 
 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

### 使用内部添加的方法

这里的方法是内部添加而不是原型

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 
    this.log = function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
 
    Object.defineProperty(this, 'profession', { 
        set: function(val) { 
            this._profession = val; 
        }, 
        get: function() { 
            console.log(this._firstName, this._lastName, 'is a', this._profession); 
        } 
    }) 
 } 
```

### 用符号隐藏类中的细节

大多数情况下，必须隐藏一些属性和方法以防止从函数外部进行访问。对于类，要获得此功能，一种方法是使用符号。 Symbol是一种新的内置JavaScript类型，可以调用它来提供新的符号值。每个符号都是唯一的，可以用作对象的键。因此，符号的一个用例是，您可以向您可能不拥有的对象添加内容，并且您可能不希望与对象的任何其他键冲突，因此创建新的并使用符号将该属性添加到该对象是最安全的。此外，当符号值添加到对象时;没有人会知道如何得到它。

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 // With the above code, even though we can access the properties outside the function to change their content what if we don't want that. 
 // Symbols come to rescue. 
 let s_firstname  = new Symbol(); 
 
 class Person { 
    constructor(firstName, lastName) { 
        this[s_firstName] = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this[s_firstName], this._lastName, 'is a', this._profession); 
    } 
```

#### 更多信息：