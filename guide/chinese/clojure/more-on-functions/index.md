---
title: Clojure More on Functions
localeTitle: Clojure更多关于功能
---
功能！它们非常重要。没有功能就很难做任何事情。它们是任何语言的组成部分，尤其是Clojure，因为它是一种拒绝面向对象设计的函数式编程语言。让我们更多地了解它们！

## 元数

**Arity**指的是函数期望的参数数量。
```
;; add expects 2 arguments. Its arity is 2. 
 (defn add [xy] (+ xy)) 
 (add 2 2) 
 ; => 4 
 
 ;; + itself is a function, and it can have any number of arguments. 
 (+ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16) ;; and so on... 
 ; => 136 
```

Clojure有一些特殊的语法，允许你让你的函数根据它收到的参数数量做不同的事情。这称为变量arity。
```
(defn foo 
  ([]                               ; if this function gets no arguments... 
    (println "Lisa needs braces!")) ; do this. 
  ([arg1]                           ; if this function gets 1 argument... 
    (println "Dental plan!")))      ; do this instead! 
 (foo) 
 ; => Lisa needs braces! 
 ;    nil 
 (foo "this is a placeholder argument.") 
 ; => Dental plan! 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/sXGplb)

## 匿名函数

让我们看一个非常简单的函数：一个向数字加1的函数。
```
;; I've called this function "my-inc" so you don't confuse it with inc. 
 ;; inc is a built-in function that already does this for us. 
 (defn my-inc [n] (+ 1 n)) 
 (inc' 5) 
 ; => 6 
```

这看起来很简单。它需要一个参数 - `n` - 并返回`n + 1` 。让我们分开吧。
```
(def my-inc-2 (fn [n] (+ 1 n))) 
 (inc' 5) 
 ; => 6 
```

你可以从中看到，使用`defn`只是使用简写`(def ... (fn ...))` 。但这揭示了一些有趣的东西我们实际上做的不是“定义一个函数”，它只是将一个匿名函数绑定到一个特殊名称 - `inc'` 。如果我们不给它起个名字怎么办？
```
((fn [n] (+ 1 n)) 5) 
 ; => 6 
```

巴姆！繁荣！ KAPOW！匿名函数。现在这看起来似乎没用了，但是稍后使用`map` ， `reduce`和`filter`将函数应用于列表会非常方便。给你写一个名字的每个功能都会变得枯燥乏味，快速。

编写匿名函数的方法较短，适用于非常简短的函数。它不允许解构或变量arity。但是，它非常简洁。
```
(#(+ 1 %) 5) 
 ; => 6 
```

`#(...)`是定义匿名函数的简便方法。 `%`指的是函数的第一个参数。如果您的函数需要多个参数，则可以使用`%1, %2, ... %n` 。
```
(#(str %1 %2 %3) "foo" "bar" "baz") 
 ; => "foobarbaz" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/roYRgS)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) | [下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")](//forum.freecodecamp.com/t/clojure-collections/18411) |  
| [循环和重复](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) | [收藏](/http://forum.freecodecamp.com/t/clojure-collections/18411) |