---
title: Clojure Hashmaps
localeTitle: Clojure Hashmaps
---
散列映射是将键映射到值的集合。他们有其他语言的各种名字; Python将它们称为字典，而Javascript的对象基本上像hashmaps一样工作。

与许多集合一样，hashmap可以以两种方式构造。有构造函数：
```
;; Note that each argument is *prepended* to the hashmap, not appended. 
 (def a-hashmap (hash-map :a 1 :b 2 :c 3)) 
 a-hashmap 
 ; => {:c 3, :b 2, :a 1} 
```

您还可以使用hashmap文字定义它们。这通常更简洁明了。建议使用逗号分隔散列图中的键/值对，因为它可以使边界更清晰。
```
;; This hashmap is actually in the right order, unlike the one above. 
 (def another-hashmap {:a 1, :b 2, :c 3}) 
 another-hashmap 
 ; => {:a 1, :b 2, :c 3} 
```

## 关键字和从哈希映射中检索值

耽误。这是什么？ `:a` ？ `:b` ？ `:c` ？那看起来很奇怪。你看，那些是关键词。它们被称为_关键词，_因为它们经常被用作哈希映射中的键。

为什么他们经常被用作钥匙？好吧，与字符串不同，关键字可以用作从散列映射中提取值的函数;无需`get`或`nth` ！
```
(def string-hashmap {"a" 1, "b" 2, "c" 3}) 
 ("a" string-hashmap) 
 ; => ClassCastException java.lang.String cannot be cast to clojure.lang.IFn 
 
 (def keyword-hashmap {:a 1, :b 2, :c 3}) 
 (:a keyword-hashmap) 
 ; => 1 
 
 ;; You can also pass a keyword a default value in case it's not found, just like get. 
 (:not-in-the-hashmap keyword-hashmap "not found!") 
 ; => "not found!" 
```

## 将其他集合转换为哈希映射

转换为hashmap非常棘手。为了演示，让我们尝试使用它像`vec`或`seq` 。
```
(hash-map [:a 1 :b 2 :c 3]) 
 ; => IllegalArgumentException No value supplied for key: [:a 1 :b 2 :c 3] 
```

`hash-map`函数认为我们正在尝试使用`[:a 1 :b 2 :c 3]`创建一个hashmap作为其中一个键。观察如果我们给它正确数量的参数会发生什么：
```
(hash-map [:a 1 :b 2 :c 3] "foo") 
 ; => {[:a 1 :b 2 :c 3] "foo"} 
```

要将序列转换为hashmap，您需要使用并理解`apply` 。幸运的是，这是非常简单的： `apply`基本应用功能之前destructures的集合。
```
;; These two expressions are exactly the same. 
 (+ 1 2 3) 
 ; => 6 
 (apply + [1 2 3]) 
 ; => 6 
```

这是您将矢量转换为hashmap的方法：
```
(apply hash-map [:a 1 :b 2 :c 3]) 
 ; => {:c 3, :b 2, :a 1} 
 
 ;; This is the same as: 
 (hash-map :a 1 :b 2 :c 3) 
 ; => {:c 3, :b 2, :a 1} 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/k9cOjo)

## 更新哈希映射

您可以使用`assoc`更新hashmap内的值。这允许您添加新的键/值对或更改旧的键/值对。
```
(def outdated-hashmap {:a 1, :b 2, :c 3}) 
 
 (def newer-hashmap (assoc outdated-hashmap :d 4)) 
 newer-hashmap 
 ; => {:a 1, :b 2, :c 3, :d 4} 
 
 (def newest-hashmap (assoc newer-hashmap :a 22)) 
 newest-hashmap 
 ; => {:a 22, :b 2, :c 3, :d 4} 
 
 ;; Note that outdated-hashmap has not been mutated by any of this. 
 ;; Assoc is pure and functional. 
 outdated-hashmap 
 ; => {:a 1, :b 2, :c 3} 
```

## 何时使用hashmap？

想要为变量命名时，散列图非常有用。如果你曾经想过自己， _“如果我使用了一个对象......”，_在你突然发现它并意识到你正在使用Clojure之前，请尝试使用一个hashmap。

如果要将两个不同的值相互关联，它们也很有用。例如，使用一个ROT13密码：你可以将`\A`与`\N` ， `\B`与`\M`等关联起来。（在大多数语言中写这将是漫长而无聊的，但Clojure有一些可以为你生成它的函数让它变得_有趣！_ ）

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/clojure-vectors/18421) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) |下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：") |  
| [矢量](//forum.freecodecamp.com/t/clojure-vectors/18421) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) |待补充|