---
title: Clojure
localeTitle: Clojure的
---
## Clojure入门

在开始之前，您可能希望[安装Clojure](http://clojure.org/guides/getting_started)和[Leiningen](http://leiningen.org/#install) （这是一个用于管理Clojure项目的工具）。这将允许您使用REPL（Read-Evaluate-Print-Loop）在命令行中运行Clojure。

## 定义变量

任何编程语言的面包和黄油都是变量和功能。让我们定义一个变量！
```
(def our-string "Hello world!") 
```

十分简单。这段代码使用`def`宏将字符串（ `"Hello world!"` ）与符号（ `our-string` ）相关联。我们也可以定义一个数字，如`1`或`1.1` ，一个字符，如`\a`或`\Z` ，或更复杂的东西，如列表或正则表达式（ _uuuugh_ ）。

请注意，我们的代码在括号内，就像列表一样，因为Lisp中的所有内容都是一个列表！ （当我们开始讨论宏时，这将非常重要。）

## 定义功能

现在，让我们定义一个函数！
```
(defn hello-world [] (println our-string)) 
```

这有点复杂。像`def`一样，它使用宏（ `defn` ）来创建变量 - 尽管这次，该变量是一个函数。在`hello-world`定义该函数的参数之后，空向量（向量是一种列表 - 将其视为数组） - 在这种情况下，我们没有任何参数。之后的代码就是函数的功能。它评估`our-string` ，它等于`"Hello world!"` ，并将其打印到控制台。我们来吧！
```
(hello-world) 
 ; => Hello world! 
 ;    nil 
```

你也可以这样写：
```
(def hello-world (fn [] (println our-string))) 
```

`defn`只是帮助您保持代码简洁的捷径。 `(defn ...)`和`(def ... (fn ...))`在实践中是相同的。

## 参数

嗯，这很好，但这并不令人兴奋。让我们尝试一个带参数的函数。增加3个号码怎么样？
```
(defn add [xyz] (+ xyz)) 
 (add 1 2 3) 
 ; => 6 
```

…坚持，稍等。 `(+ xyz)` ？这看起来很有趣。好吧，Lisps是使用“前缀表示法”编写的，这意味着该函数始终是第一位的。由于Lisp（ `+ - * /` ）中的所有数学运算符都只是函数，因此它们也位于它们的参数之前（在本例中为`xyz` ）。

你会注意到我们的矢量现在有一些东西： `[xyz]` ！只要函数有参数，就可以在函数名称旁边的向量中定义它们。

### 解构

关于Clojure中的参数的一个很好的特性是解构。它允许您从列表中“拉出”元素。
```
(defn add [[xy] z] (+ xyz)) 
 (add [1 2] 3) 
 ; => 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/SWlvKn)

该函数的参数是集合（ `[xy]` ）和数字（ `z` ）。我们可以使用解构来从列表中拉出第一个和第二个元素，并将它们称为`x`和`y` 。

### 具有任意数量参数的函数

您还可以使用`&`定义具有任意数量参数的函数。
```
(defn demonstrate-rest [first & rest] 
  (println first) 
  (println rest)) 
 (demonstrate-rest 1 "foo" ["bar" 22]) 
 ; => 1 
 ;    ("foo" ["bar" 22]) 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/VftymP)

正如您所看到的，使用`&`将我们的函数参数分隔为一个名为`first`的变量和一个名为`rest`的变量列表。这意味着我们的函数可以有任意数量的参数！

## 返回

您可能已经注意到一些奇怪的事情。每当我们使用`println` ，似乎`nil`出现在我们的输出中。此外，我们的`add`函数返回`6` ，但我们从未告诉它返回任何东西。

在Clojure中，回报是“隐含的”。如果您使用过Ruby，那么您可能对这个概念很熟悉。它不是告诉我们的函数返回某些东西，而是评估其体内的所有代码，并返回结果。例如，我们的`add`函数计算`(+ xyz)` ，然后返回该结果。

我们使用`println`输出`nil`函数之所以是因为`println`计算结果为`nil` 。 （ `nil`就像`null`或`None` - 它代表什么都没有。）

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/what-is-clojure/18419) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) | [下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")](//forum.freecodecamp.com/t/clojure-conditionals/18412) |  
| [摘要](//forum.freecodecamp.com/t/what-is-clojure/18419) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) | [条件](//forum.freecodecamp.com/t/clojure-conditionals/18412) |