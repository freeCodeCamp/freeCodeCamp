---
title: Clojure Conditionals
localeTitle: Clojure条件
---
如果您能做的就是定义打印事物的函数并进行简单的算术运算，那么您将无法使用某种语言。条件和逻辑是使代码做有趣，有用的事情的基本部分。尝试并想象一个没有程序逻辑的世界：你甚至不能做简单的事情，比如检查两个数字是否相等！

## 逻辑运算符

与大多数语言一样，Clojure有3个逻辑运算符： `and` ， `or` `not` 。这些函数将布尔值（ `true`或`false` ）作为参数，并根据这些布尔值返回布尔值。就像Lisp中的所有内容一样，这些运算符使用前缀表示法，这意味着它们可能看起来很奇怪。
```
(and true false) 
 ; => false 
 (and true true) 
 ; => true 
 (or false false) 
 ; => false 
 (or true false) 
 ; => true 
 (not true) 
 ; => false 
 (not false) 
 ; => true 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/XfXn8T)

## 如果

`if`允许您根据布尔值是`true`还是`false`来执行代码。 `if`在Clojure看起来很奇怪，不是因为它使用前缀表示法，而是因为没有else关键字。如果条件为真，则计算第一个表达式。如果它是假的，它会执行第二个。
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") ; this gets evaluated if 2 + 2 = 4 
  (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4 
 ; => Maths works! 
 ;    nil 
```

这提出了一个问题：如果我们想做多件事怎么办？
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") 
  (println "Maths still works!") 
  (println "UH OH")) 
 ; => CompilerException java.lang.RuntimeException: Too many arguments to if 
```

值得庆幸的是，我们有`do`函数来解决这个问题。 `do`一个接一个地评估多个表达式。
```
(if (= (+ 2 2) 4) 
  (do                               ; all of this gets evaluated if 2 + 2 = 4 
    (println "Maths works!") 
    (println "Maths still works!")) 
  (println "UH OH")) 
 ; => Maths works! 
 ;    Maths still works! 
 ;    nil 
```

**注意：**因为`if`本身就是一个表达式，所以不需要像许多类C语言那样的三元运算符。
```
var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH"; 
 console.log(doesMathsWork); 
 // => Maths works! 
```

既然你已经看到它是如何工作的，它看起来并不那么奇怪吧？这更容易阅读和理解（忽略缺少`else`词）：
```
(def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH")) 
 (println does-maths-work) 
 ; => Maths works! 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/5XhcAa)

## If的替代方案

Clojure也有一些宏的行为与`if`相似，有时可能更简洁。

`if-not`也许是最简单的例子-它`if`反转。这两段代码完全相同：
```
(def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!")) 
 (def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!")) 
```

如果第一个表达式为false，则计算第一个表达式，如果为真，则计算第二个表达式。请注意，使用`if-not`避免嵌套我们的内部条件`not` ，它可以使我们的代码更易于理解。

`when`是另一个有用的宏。这两段代码也是一样的：
```
(if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!"))) 
 (when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!")) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/tUVAw3)

**注意：**没有`when/else` 。 `when`条件为真_时才_执行。

`cond`允许您将许多条件组合到单个表达式中。它需要一系列逻辑表达式和表达式对，并按顺序评估每个逻辑表达式。当它找到一个计算结果为`true`的逻辑表达式时，它会计算该对的第二个表达式。在此之后，不会评估其他表达式。这种行为就像Javascript中的短路逻辑。
```
(cond (= 0 1) "I'm paired with a false expression and I don't evalute.." 
      (= 1 1) "I'm the first expression paired with a true expression!" 
      (= 2 2) "I don't evalute even though I'm also paired with true ;_;" 
      :else   "I evaluate if no other boolean expressions evaluate to true") 
 ; => "I'm the first expression paired with a true expression!" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/zu5RCq)

可以使用`:else`关键字代替`cond`最后一个表达式对中的逻辑表达式。它表示如果所有其他布尔表达式的计算结果为false，则应评估相应的表达式。它与将`true`为最后一个布尔表达式相同。

## 特殊形式和评估

您可能已经注意到，评估条件表达式的规则与其他表达式略有不同。条件表达式是一组称为_特殊形式_的表达式的一部分。这意味着它们不遵循正常的Clojure评估规则。

如您所知，条件表达式仅计算与布尔结果对应的子表达式。这意味着在某些情况下不会评估条件表达式中的无效代码。考虑下面的两个`if`表达式。虽然`(+ 1 "failure")`是无效表达式，但Clojure仅在条件为`false`时引发异常。
```
(if true "sucess" (+ 1 "failure")) 
 ; => "sucess" 
 (if false "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/n4Ug2S)

将其与`my-if`的行为进行比较，如下所示：
```
(defn my-if [condition true-case false-case] 
  (if condition true-case false-case)) 
 
 (my-if true "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/U7cVI4)

`my-if`是具有正常评估规则的函数，因此必须先评估所有子表达式，然后才能对其进行评估。

Clojure有很多有用的宏用于各种任务。试着看看[Clojure文档](https://clojuredocs.org/) ，看看你是否能找到更多！

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) | [下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |  
| [摘要](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) | [条件](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |