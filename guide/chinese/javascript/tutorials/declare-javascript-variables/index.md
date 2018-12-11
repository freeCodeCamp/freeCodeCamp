---
title: Declare Variables
localeTitle: 声明变量
---
# 声明变量

JavaScript变量声明可以分为三个不同的组件：变量类型，变量名称和变量值。

```js
    var myName = "Rafael"; 
```

让我们将上面的代码行分解为构成它的部分：

```js
    var/const/let 
```

JavaScript变量可以有三种声明类型：var，const和let。 Var类型变量是全局的，如果在函数外部声明它们可以被任何JS文件（或控制台）访问，并且如果在函数内创建它们，则无论块范围如何都可以访问它们。令型变量的范围受限于它们的块。请参阅下面的示例了解差异。

```js
     function varTest() { 
      var x = 1; 
      if (true) { 
        var x = 2;  // same variable! 
        console.log(x);  // 2 
      } 
      console.log(x);  // 2 
    } 
 
    function letTest() { 
      let x = 1; 
      if (true) { 
        let x = 2;  // different variable 
        console.log(x);  // 2 
      } 
      console.log(x);  // 1 
    } 
```

Const类型变量与let变量（块作用域）具有相同的作用域，但是是不可变的。无论要赋值const-type变量的值是什么，都必须在声明变量时发生，如果稍后更改变量，JavaScript将抛出错误。

```js
    const genre = "non-fiction"; 
    console.log(genre); // "non-fiction"; 
    genre = "fantasy"; // error 
```

现在我们可以确定变量类型是什么，让我们来看看名称。 JavaScript变量名以`camel case`格式编写。驼峰案例的一个例子是： `camelCase` 。在我们的例子中：

```js
    myName 
```

该名称也是我们稍后将再次访问该变量：

```js
    console.log(myName); // "Rafael" 
```

最后，我们的价值：

```js
    "Rafael" 
```

JavaScript是动态类型的，这意味着任何给定的变量都可以在任何给定时间表示任何给定的数据类型。例如：

```js
    var example = "This is an example"; 
    example = [0, 1, 2, 3] 
    example = {test: "Result"} 
    example = 5 
```

所有这些语句都是完全有效的 - JavaScript变量可以从字符串跳转到数组，从对象跳转到整数。

### 将对象声明为const

如上所述，const变量是不可变的意味着在声明时分配给这样的变量的值不能更新但是在使用const的对象声明的情况下有一点需要注意。类型const的对象也不能在定义后更新，但对象cab的属性是。例如。

```js
    const Car1 = { 
        name: 'BMW', 
        model: 'X1', 
        color: 'black' 
    } 
```

在这里，我们无法更新对象，但我们可以通过点（。）运算符访问来更新属性，如下所示。

```js
    Car1.color = 'Red'; 
    console.log(Car1); 
    O/P - {name: "BMW", model: "X1", color: "Red"} 
```

如果我们需要将enitre对象设为不可变（包括属性），那么我们必须使用freeze方法。