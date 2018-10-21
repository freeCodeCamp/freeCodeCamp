---
title: Clojure Lists They Are Everything
localeTitle: Clojure列出他们就是一切
---
列表是Clojure的基础。 Clojure是一个Lisp，而Lisps最初用于列表处理。 Lisp中的所有内容都是一个列表！
```
(def foo "bar") 
```

那段代码实际上是一个列表！ Clojure中的两个圆括号之间也是如此。有意思，不是吗？这就是使Lisps如此有趣的原因 - 您可以轻松编写生成新代码的代码，因为生成代码就像创建列表一样简单。

## 制作一个实际的清单

问题是，因为一切都是Clojure中的列表，这样的东西会返回一个错误：
```
(1 2 3 4 5) 
 ; => ClassCastException java.lang.Long cannot be cast to clojure.lang.IFn 
```

多么可怕的错误信息。 REPL试图告诉我们的是，“1不是一个功能，它不能合而为一。”因为Lisp中的所有内容都是一个列表，所以任何列表中的第一项都被视为函数，如`def` ， `+`或`str` ，所以如果我们写`(1 2 3 4 5)` ，它会将第一个元素（ `1` ）视为一个功能，它显然不是。

我们可以用两种方式解决这个问题。一种是使用`list`函数构造一个列表，比如使用`str`将字符串连接在一起。
```
(list 1 2 3 4 5) 
 ; => (1 2 3 4 5) 
```

您也可以使用报价。引用一个列表实际上是告诉编译器该列表_不是_函数调用，它不应该评估其中的任何代码。
```
'(1 2 3 4 5) 
 ; => (1 2 3 4 5) 
```

有趣的是，您也可以引用函数调用。这就是宏的工作原理。它们非常复杂，值得拥有自己的文章，所以我们在此不再赘述。
```
;; Without a ' to quote it, this would return "foobarbaz". 
 '(str "foo" "bar" "baz") 
 ; => (str "foo" "bar" "baz") 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/6c7UxY)

## 添加到列表

列表是为前置而非附加而设计的。没有真正的方法可以附加到列表中。您可以使用`cons`前置到列表中。 `conj`也可以工作，但是这对于向量来说是有意义的，对于列表而言， `cons`更快。
```
(cons 1 '(2 3 4)) 
 ; => (1 2 3 4) 
```

## 从列表中检索

您可以使用`nth`从列表中检索项目。 `get`不适用于列表，因为列表是为顺序访问而设计的，而不是随机访问。请注意， `nth`适用于矢量，但由于这个原因比`get`慢。
```
(nth '(1 2 3 4) 0) 
 ; => 1 
```

## 将其他集合转换为列表

`list`函数无法将其他集合转换为列表，因为它尝试使用给定的参数构造列表。传递`list`集合将返回包含该集合的列表。
```
(list [1 2 3 4 5]) 
 ; => ([1 2 3 4 5]) 
```

要转换为列表，请改用`seq`函数。
```
(seq [1 2 3 4 5]) 
 ; => (1 2 3 4 5) 
```

## 懒惰的序列

Clojure有一个很棒的功能叫做“懒惰序列”。延迟序列是一个列表，其元素在您稍后引用序列的元素之前不会生成，此时，它会评估序列的所有元素，直到您想要的元素。这允许您构建“无限”序列！

`range`可能是最简单的懒惰序列。它包含所有数字。
```
(range 10) 
 ; => (0 1 2 3 4 5 6 7 8 9) 
 (range -5 5) 
 ; => (-5 -4 -3 -2 -1 0 1 2 3 4) 
```

你可以使用懒惰的序列来做很酷的事情，比如生成所有斐波纳契数的懒惰序列。
```
(def fibs 
     (lazy-cat [0 1] (map + (rest fibs) fibs))) 
 
 (take 10 fibs) ;; this means, "evaluate the first 10 fibonacci numbers." 
 ; => (0 1 1 2 3 5 8 13 21 34) 
```

这个例子有点高级，如果你是初学者，你不应该理解它。这只是一个你可以用懒惰序列做的很酷的例子。也许你无论如何都可以搞清楚！

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/jwpvt8)

## 什么时候使用清单？

使用向量通常比使用列表更可取，因为编译器不会意外地将向量作为函数进行评估，并且访问向量的任意元素的速度更快。列表在3种情况下最有用：

*   使用宏生成代码。
*   生成“无限”的懒惰序列。
*   将元素添加到集合中。

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/clojure-collections/18411) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) | [下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")](//forum.freecodecamp.com/t/clojure-vectors/18421) |  
| [收藏](//forum.freecodecamp.com/t/clojure-collections/18411) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) | [矢量](//forum.freecodecamp.com/t/clojure-vectors/18421) |