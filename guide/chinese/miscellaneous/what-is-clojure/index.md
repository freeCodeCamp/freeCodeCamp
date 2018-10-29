---
title: What Is Clojure
localeTitle: 什么是Clojure
---
## Clojure是Lisp的一种方言。

Lisps是一个完全独立的C语言系列，如C＃，Javascript，Python或Ruby。这意味着对于熟悉这些语言的程序员来说，Lisps可能看起来很奇怪。本质上，作为一个Lisp意味着Clojure中的所有内容都是一个包含数据的列表（甚至是函数调用！），它具有动态类型，您可以定义允许您操作自己的代码的_宏_ 。以下是一些Clojure的简单示例供您查看：
```
   (defn hello-world [] (println "Hello world!")) 
```

这定义了一个名为`hello-world`的函数（使用`defn`宏），它不接受任何输入（ `[]` ）并打印`"Hello world!"`到控制台。我们可以这样称呼它：
```
   (hello-world) 
   ; => Hello world! 
   ;    nil 
```

## Clojure是一种功能语言。

Clojure中所有变量是不可变的，并且可以不使用赋值运算符（变更`=`在最类似C语言）或通过的功能。所有函数的目标都是_引用透明_ ，这意味着如果你给它们相同的输入，它们应该给出相同的输出，无论如何。上面的`hello-world`示例是引用透明的 - 它将始终打印“Hello world！”无论。依赖于随机数生成器的东西不是引用透明的，因为它的输出是随机的。
```
  (defn random-function [] 
    (if (> (rand 4) 2)     ; if a random number between 0 and 2 is greater than 2... 
      (println "foo")      ; ...print "foo". otherwise... 
      (println "bar")))    ; ...print "bar" 
```

虽然无法改变变量可能听起来很噩梦，但它比你想象的容易得多，特别是如果语言基于它（比如Clojure就是！），并且避免不必要的变异会使你的代码变得更少。

## Clojure在Java虚拟机上运行。

JVM是解释Java字节码并使用它来运行程序的虚拟机。这意味着Clojure几乎可以与为Java设计的代码无缝地工作（尽管看起来确实有些奇怪），这也意味着它与其他一些Lisps相比运行得非常快。虽然它比Java慢很多，但它仍然比Python，Ruby或Javascript快得多。
```
  (.indexOf [1 2 3 4] 2) ;; .indexOf is a Java method! 
  ; => 1 
```

## Clojure是为并发而设计的。

“并发”在这里意味着“一个程序同时处理多个线程”，这可以使您的代码更快。它还可以使您的代码更加轻松;想象一下，如果两个不同的功能正在改变并同时从同一个对象中读取！这将是彻头彻尾的混乱。值得庆幸的是，在Clojure中，变量是不可变的，这意味着这种混乱不可能破坏。该语言还具有各种功能，可以使并发代码更容易，例如软件事务内存系统，代理和原子。

| ![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页| [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) | [下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")](//forum.freecodecamp.com/t/clojure-the-basics/18410) |  
| | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) | [基础知识](//forum.freecodecamp.com/t/clojure-the-basics/18410) |