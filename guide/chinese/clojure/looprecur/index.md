---
title: Clojure   Looprecur
localeTitle: Clojure Looprecur
---
您可能需要了解[`if`](//forum.freecodecamp.com/t/clojure-conditionals/18412)并[`let`](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415)我们完全掌握Clojure中的递归。

## `for`而且`while`

Clojure没有for循环或while循环。如果你仔细想想，这是有道理的。 `for`循环更改变量，而Clojure中不允许这样做。
```
for (var i = 0; i < 10; i++) { 
  console.log(i); 
 } 
```

`i++`意味着每次循环结束时我们都会向变量`i`添加一个变量 - 变量变量的一个明显例子。

`while`循环不太明显依赖于改变变量，但它们与循环一样多。
```
var i = 0; 
 while (i < 10) { 
  console.log(i); 
  i++; 
 } 
```

`while`循环总是有一个条件，比如`i < 10` ，并且如果该条件不再为真，它将会中断。这意味着它们必须具有某种副作用（例如向`i`添加1）以使条件最终为假;否则，循环会永远持续下去。

## 递归

值得庆幸的是，Clojure确实有一个循环。这些循环使用递归 - 一个调用自身的函数。最简单的递归算法是找到正数阶乘（5阶乘，例如等于`5 * 4 * 3 * 2` ）的算法。
```
(defn fact [x] 
  (loop [nx prod 1] ;; this works just like a 'let' binding. 
    (if (= 1 n)  ;; this is the base case. 
      prod 
      (recur (dec n) (* prod n))))) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/3iP3tI)

你会注意到`(loop [nx prod 1] ...)`看起来非常类似于`let`绑定。它实际上以相同的方式工作 - 在这里，我们将`n`绑定到`x` ，并将`prod`绑定到1。

每个递归函数都有一个“基本案例”。这是使循环停止循环的条件。在这种情况下，如果`n = 1` ，我们的循环将停止，并返回`prod` 。如果`n`不等于1，则循环再次出现。
```
(recur (dec n) (* prod n)) 
```

此`recur`函数重新启动循环，但具有不同的绑定。这次， `n`不是绑定到`x` ，而是绑定到`(dec n)` （这意味着`decrement n`或`n - 1` ），并且`prod`绑定到`(* prod n)` 。

所以当我们调用函数时，会发生这种情况：
```
(fact 5) 
 ; Loop 1: 5 != 1, so the loop recurs with 4 (5 - 1) and 5 (1 * 5). 
 ; Loop 2: 4 != 1, so the loop recurs with 3 (4 - 1) and 20 (5 * 4). 
 ; Loop 3: 3 != 1, so the loop recurs with 2 (3 - 1) and 60 (20 * 3). 
 ; Loop 4: 2 != 1, so the loop recurs with 1 (2 - 1) and 120 (60 * 2). 
 ; Loop 5: 1 == 1, so the function returns prod, which is now equal to 120. 
 ; => 120 
```

关于递归的巧妙之处在于变量本身永远不会改变。唯一改变的是`n`和`prod` _所指的东西_ 。我们永远不会说， `n--`或`n += 2` 。

## 为什么要使用loop / recur？

您可能想知道为什么要使用`loop/recur`而不是简单地定义一个调用自身的函数。我们的阶乘函数可能是这样编写的：
```
(defn fact-no-loop [n] 
  (if (= 1 n) 
    1 
    (* n (fact-no-loop (dec n))))) 
```

这更简洁，并以类似的方式工作。为什么你会_永远_使用循环和复发吗？

### 尾调用优化

如果使用`loop/recur` ，则编译器（将Clojure代码转换为JVM字节码的软件）知道您要创建递归循环。这意味着它最努力地优化代码以进行递归。让我们比较`fact`的速度和`fact-no-loop` ：
```
(time (fact 20)) 
 ; => "Elapsed time: 0.083927 msecs" 
 ;    2432902008176640000 
 (time (fact-no-loop 20)) 
 ; => "Elapsed time: 0.064937 msecs" 
 ;    2432902008176640000 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/tpC0Xo)

在这种规模下，差异可以忽略不计。实际上，由于计算机内存的不可预测性， `fact-no-loop`偶尔比`fact`更快。但是，在更大范围内，这种优化可以使您的代码更快，更快。

### 在函数中嵌套递归

`fact-no-loop`在没有`loop/recur`情况下工作，因为整个函数是递归的。如果我们希望我们的函数的一部分使用递归循环，然后其余部分做一些非递归的东西怎么办？我们必须定义两个完全独立的函数。使用`loop/recur`让我们使用一些匿名函数代替。

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) |下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：") |  
| [让绑定](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) |待补充|