---
title: Scopes
localeTitle: 领域
---
如果你已经用JavaScript编程了一段时间，那么毫无疑问你会遇到一个称为`scope`的概念。什么是`scope` ？你为什么要花时间学习它？

在程序员说话中， `scope`是**当前执行的上下文** 。困惑？我们来看看以下代码：
```
var foo = 'Hi, I am foo!'; 
 
 var baz = function () { 
  var bar = 'Hi, I am bar too!'; 
    console.log(foo); 
 } 
 
 baz(); // Hi, I am foo! 
 console.log(bar); // ReferenceError... 
```

这是一个简单的例子，但它很好地说明了所谓的_词法范围_ 。 JavaScript和几乎所有其他编程语言都有一个_词法范围_ 。还有另一种称为_动态范围的范围_ ，但我们不会讨论它。

现在，术语_词汇范围_看起来很奇特，但正如你将看到它原则上非常简单。在词法范围中，有两种范围： _全局范围_和_局部范围_ 。

在程序中键入第一行代码之前，会为您创建一个_全局范围_ 。这包含您在程序中声明的**所有函数之外的所有变量** 。

在上面的示例中，变量`foo`位于程序的全局范围内，而变量`bar`在函数内声明，因此**位于该函数的本地范围内** 。

让我们逐行分解示例。虽然你可能会在这一点上感到困惑，但我保证你读完这篇文章时会有更好的理解。

在第1行，我们声明变量`foo` 。这里没什么太花哨的。让我们称之为`foo`的左手大小（LHS）引用，因为我们正在为`foo`分配一个值，它位于`equal`的左侧。

在第3行，我们声明一个函数并将其赋值给变量`baz` 。这是对`baz`另一个LHS参考。我们正在为它赋值（请记住，函数也是值！）。然后在第8行调用此函数。这是一个RHS，或者是对`baz`的右侧引用。我们正在检索`baz`的值，在这种情况下是一个函数然后调用它。如果我们将其值分配给另一个变量，例如`foo = baz` ，则另一个对`baz` RHS引用。这将是对`foo`的LHS参考和对`baz`的RHS参考。

LHS和RHS参考文献可能听起来令人困惑，但它们对于讨论范围很重要。可以这样想：LHS参考是为变量赋值，而RHS参考则是检索变量的值。它们只是一种更简单，更方便的方式来表示“检索价值”和“分配价值”。

现在让我们分析一下函数本身内部发生了什么。

当编译器在函数内编译代码时，它进入函数的**本地范围** 。

在第4行，声明变量`bar` 。这是一个LHS参考`bar` 。在下一行，我们在`console.log()`有一个对`foo`的RHS引用。请记住，我们正在检索`foo`的值，然后将其作为参数传递给方法`console.log()` 。

当我们有一个对`foo`的RHS引用时，编译器会查找变量`foo`的声明。编译器在函数本身或**函数的本地范围中**找不到它，因此它**上升到一个级别：到全局范围** 。

此时您可能认为范围与变量有关。那是对的。范围可以被视为变量的容器。在本地范围内创建的所有变量只能在该本地范围内访问。但是，所有本地范围都可以访问全局范围。 （我知道你现在可能更加困惑，但只要跟我说几句话）。

因此编译器进入全局范围以查找变量`foo`的LHS引用。它在第1行找到一个，所以它从LHS引用中检索值，这是一个字符串： `'Hi, I am foo!'` 。此字符串将发送到`console.log()`方法，并输出到控制台。

编译器已经完成了函数内部的代码执行，所以我们回到第9行。在第9行，我们有一个变量`bar`的RHS参考。

现在， `bar`在`baz`的本地范围内被声明，但是在全球范围内有一个RHS参考`bar` 。由于全局范围内没有`bar` LHS引用，因此编译器无法找到`bar`的值并抛出ReferenceError。

但是，您可能会问，如果函数可以在变量外部查看，或者本地范围可以查看全局范围以查找LHS引用，为什么全局范围不能窥探到本地范围？那就是词汇范围的工作原理！
```
... // global scope 
 var baz = function() { 
  ... // baz's scope 
 } 
 ... /// global scope 
```

这是与上面相同的代码，说明了范围。这形成了一种符合全球范围的层次结构：

`baz -> global` 。

因此，如果在`baz`范围内存在变量的RHS参考，则可以通过全局范围内该变量的LHS参考来实现。但**事实**恰恰相反。

如果我们在`baz`内部有另一个功能怎么办？
```
... // global scope 
 var baz = function() { 
  ... // baz's scope 
 
  var bar = function() { 
     ... // bar's scope. 
  } 
 
 } 
 ... /// global scope 
```

在这种情况下，层次结构或**范围链**将如下所示：

`bar -> baz -> global`

内部的任何RHS引用`bar`的本地范围可以通过在全球范围内或LHS引用被fullfilled `baz`适适用范围“，但在RHS参考`baz`的范围不能用在LHS参考fullfilled `bar`适适用范围”。

**您只能遍历范围链，而不是向上遍历。**

关于JavaScript范围，您还应该了解其他两个重要事项。

1.  范围由函数声明，而不是由块声明。
2.  函数可以是前向引用的，变量不能。

观察（每个注释描述其写入的行的范围）：

\`\`\` // outer（）在此范围内，因为函数可以是前向引用的
```
function outer() { 
 
    // only inner() is in scope here 
    // because only functions are forward-referenced 
 
    var a = 1; 
 
    //now 'a' and inner() are in scope 
 
    function inner() { 
        var b = 2 
 
        if (a == 1) { 
            var c = 3; 
        } 
 
        // 'c' is still in scope because JavaScript doesn't care 
        // about the end of the 'if' block, only function inner() 
    } 
 
    // now b and c are out of scope 
    // a and inner() are still in scope 
 
 } 
 
 // here, only outer() is in scope 
```

\`\`\`

# 参考

1.  Kyle Simpson的[范围和闭包](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures) 。它详细介绍了作用域机制的工作原理，并对JavaScript编译器的工作原理进行了表面描述，因此如果您对此感兴趣，请务必阅读！它在GitHub上是免费的，可以从O'Reilly购买。
2.  John Resig和Bear Bibeault [的JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=YMC2TB2C0DFHTQ3V62CA)的[秘密](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=YMC2TB2C0DFHTQ3V62CA) 。这是一个更深入理解JavaScript的好指南。