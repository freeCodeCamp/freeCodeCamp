---
title: Arguments
localeTitle: 参数
---
arguments对象是一个**类似于数组的对象** _（因为_ **对象** _的结构类似于数组的结构，但它不应该被认为是一个数组，因为它具有对象的所有功能）_ ，它存储了你的所有参数传递给函数，特别是该函数专有。如果要将3个参数传递给函数，比如`storeNames()` ，那么这三个参数将存储在一个名为**arguments**的对象中，当我们传递参数`storeNames("Mulder", "Scully", "Alex Krycek")`它将看起来像这样`storeNames("Mulder", "Scully", "Alex Krycek")`我们的功能：

*   首先，我们声明一个函数并使其返回arguments对象。

\`\`\`的JavaScript  
function storeNames（）{return arguments; }
```
*   Then, when we execute that function with **n arguments**, 3 in this case, it will return the object to us and it will **look like** an array. We can convert it to an array, but more on that later... 
```

JavaScript的 //如果我们在控制台中执行以下行： storeNames（“Mulder”，“Scully”，“Alex Kryceck”）; //输出为{'0'：'Mulder'，'1'：'Scully'，'2'：'Alex Kryceck'}
```
If you want to know more about this, such as converting it to an array or the optimization problem that comes with using the _slice(_) method and how to solve it, click on **read more** (Gitter Chat Only). 
 
 ## Treat it as an array 
 
 You can invoke arguments by using `arguments[n]` (where _n_ is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to _convert it to an array_ by declaring a variable and using the Array.prototype.slice.call method (because _arguments_ is not an array): 
```

JavaScript的 var args = Array.prototype.slice.call（arguments）;

//或es6方式： var args = Array.from（arguments）
```
Since **slice()** has two (the parameter **end** is optional) parameters, you can grab a certain portion of the arguments by specifying (using the _slice.call()_ method renders these two parameters optional, not just _end_) the beginning and the ending of your portion; check out the following code: 
```

JavaScript的 function getGrades（）{ var args = Array.prototype.slice.call（arguments，1,3）; 回归 }

//让我们输出这个！ console.log（getGrades（90,100,75,40,89,95））;

//输出应该是：// // \[100,75\] < - 为什么？因为它从索引1开始并在索引3处停止 //所以，没有考虑索引3（40）。 // //如果我们删除'3'参数，只留下（参数，1）我们得到 //来自索引1的每个参数：\[100,75,40,89,95\]。
```
### Optimization issues with Array.slice() 
 
 There is a little problem, it's not recommended to use slice in the arguments object (optimization reasons)... 
 
 > **Important**: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object. 
 > 
 > _by_ **_Mozilla Developer Network_** <a href='https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>(reference)<a> 
 
 
 
 So, what other method is available to convert _arguments_ to an array? I recommend the for-loop (not the for-in loop), you can do it like this: 
```

JavaScript的 var args = \[\]; //首先是空数组。 for（var i = 0; i <arguments.length; i ++）{ args.push（参数\[I\]） } //现在'args'是一个包含你的参数的数组。 \`\`\`

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