---
title: Arguments
localeTitle: 参数
---
arguments对象是一个**类似于数组的对象** _（因为_ **对象** _的结构类似于数组的结构，但它不应该被认为是一个数组，因为它具有对象的所有功能）_ ，它存储了你的所有参数传递给函数，特别是该函数专有。如果要将3个参数传递给函数，比如`storeNames()` ，那么这三个参数将存储在一个名为**arguments**的对象中，它将看起来像这样传递给我的函数`storeNames("Mulder", "Scully", "Alex Krycek")`：

*   首先，我们声明一个函数并使其返回arguments对象。

```javascript
function storeNames（）{return arguments; }
```
*   然后，当我们执行这个带有**n个参数**（在这里是3个参数）的函数时，他会返回一个**看起来像** 数组的对象。我们稍后可以将它转换成一个数组... 

```javascript
// 如果我们在console中执行这行代码:
storeNames("Mulder", "Scully", "Alex Kryceck");
// output是 { '0': 'Mulder', '1': 'Scully', '2': 'Alex Kryceck' }
```

如果你想了解更多，例如如何将arguments转换成数组或利用_slice(_) 方法去解决，点击**了解更多**(Gitter Chat Only)。
 
 ## 把它看成数组
 
你可以用`arguments[n]` (其中_n_代表参数在arguments类似数组的对象中的index索引) 来调用arguments，但是如果你想把它当成数组实现迭代的目的或使用数组的方法，你需要声明一个变量并使用Array.prototype.slice.call方法把它_转换成数组_（因为_arguments_不是数组):
  
```javascript
var args = Array.prototype.slice.call(arguments);

// 或者在ES6中:
var args = Array.from(arguments)
```

因为 **slice()** 有两个参数(参数**end**是可选的),你可以在_slice.call()_指定开头和结尾来只选取arguments中的一部分，参考以下代码：

```javascript
function getGrades() {
    var args = Array.prototype.slice.call(arguments, 1, 3);
    return args;
}

// 打印出来看看!
console.log(getGrades(90, 100, 75, 40, 89, 95));

// 结果是: //
// [100, 75] <- 为什么？因为从index 1开始到index 3结束
// 所以, index 3 (40) 不在这个范围内
//
// 如果我们去掉参数'3',只保留(arguments, 1) 我们将会得到
// 从index 1 开始的所有参数: [100, 75, 40, 89, 95].
```
### Array.slice()的优化问题
 
这里有一个小问题，不推荐在arguments对象上使用slice方法（优化原因)...
 
 > **注意**: 不推荐在arguments对象上使用slice方法，因为它有碍JavaScript引擎优化。与之相比，尽量通过迭代arguments对象来构造一个新的数组。
 > 
 > _by_ **_Mozilla Developer Network_** <a href='https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>(参考)<a> 
 
 
 
有没有其他办法将_arguments_转换成数组呢? 推荐使用for-loop (不是 for-in loop),你可以这样做： 

```javascript
var args = []; // 定义空数组.
for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
} // 现在 'args' 是一个存着arguments的数组了
```


有关优化问题的更多信息：  
优化杀手： [管理参数](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)

### ES6 rest参数作为绕过arguments对象的一种方式

在ES2015 / ES6中，可以在大多数地方使用rest参数（ `...` ）而不是arguments对象。假设我们有以下功能（非ES6）：
```
function getIntoAnArgument() { 
    var args = arguments.slice(); 
    args.forEach(function(arg) { 
        console.log(arg); 
    }); 
 } 
```

该功能可以在ES6中替换为：
```
function getIntoAnArgument(...args) { 
    args.forEach(arg => console.log(arg)); 
 } 
```

请注意，我们还使用了箭头函数来缩短forEach回调！

参数对象在箭头函数的主体内不可用。

rest参数必须始终作为函数定义中的最后一个参数。  
`function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs /*no more arguments allowed here*/) { //function body }`
