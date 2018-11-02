---
title: Clojure Create Local Variables with Let
localeTitle: Clojure用Let创建局部变量
---
`let`是Clojure的基本组成部分。 `def`创建一个全局变量，而`let`创建一个局部变量。
```
(def x 5) 
 (println x) 
 ; => 5 
 ;    nil 
 (let [x 2] 
  (println x)) 
 ; => 2 
 ;    nil 
 (println x) 
 ; => 5 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/xcNth2)

此示例中的`x`实际上从未实际更改过。 `x`只是指我们的`let`绑定内部不同的东西。这可以是避免函数内部重复的有用方法。

这非常有用。拥有太多全局变量可能会导致令人讨厌的错误和意外行为。
```
(def x 5) 
 (defn add-5 [y] (+ xy)) 
 (add-5 5) 
 ; => 10 
 (defn change-x [] 
  (def x 6)) 
 (change-x) 
 ; => nil 
 (add-5 5) 
 ; => 11 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/MFjA3C)

哦哦！那不再是5了！当然，这个例子有点傻，但是使用太多的全局变量会导致像这个一样可怕的错误。

**注意：**我们并不是真的在这里_重新分配_ `x` ，就像你在C语言中那样。我们只是创建一个恰好称为x的新变量。这是一个_非常**非常**_糟糕的主意。

## 多个绑定

`let`也可以一次定义多个变量，并可以为表达式赋值。
```
(let [spam "foo" 
      ham (str "b" "ar")] ; str is a function that concatenates strings 
  (println spam ham))      ; or converts variables into strings. 
 ; => foo bar 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/y5EBIM)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) | [下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |  
| [条件](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) | [循环和重复](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |