---
title: Clojure   Vectors
localeTitle: Clojure矢量
---
向量可能是Clojure中最简单的集合类型。您可以将其视为Javascript中的数组。让我们定义一个简单的向量：
```
(def a-vector [1 2 3 4 5]) 
 ;; Alternatively, use the vector function: 
 (def another-vector (vector 1 2 3 4 5)) 
 ;; You can use commas to separate items, since Clojure treats them as whitespace. 
 (def comma-vector [1, 2, 3, 4, 5]) 
```

你会看到它使用方括号，就像JS中的数组一样。由于Clojure与JS一样是动态类型的，因此向量可以包含任何类型的元素，包括其他向量。
```
(def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"]) 
```

## 将项添加到矢量

您可以使用`conj`将项目附加到矢量。您也可以使用`into`前置到列表中，但请注意， `into`用于合并两个向量，因此它的参数必须是向量，而使用`into`比使用`conj`慢。
```
(time (conj [1 2] 3)) 
 ; => "Elapsed time: 0.032206 msecs" 
 ;    [1 2 3] 
 (time (into [1] [2 3])) 
 ; => "Elapsed time: 0.078499 msecs" 
 ;    [1 2 3] 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [IDEOne吧！](https://ideone.com/wBSUEd)

## 从向量中检索项目

您可以使用`get`从矢量中检索项目。这相当于使用括号表示法以许多命令式语言访问数组中的项目。向量中的项目为0索引，从左侧开始计数。
```
var arr = [1, 2, 3, 4, 5]; 
 arr[0]; 
 // => 1 
```

在Clojure中，这将是这样写的：
```
(def a-vector [1 2 3 4 5]) 
 (get a-vector 0) 
 ; => 1 
```

你也可以给`get`一个默认值，如果你给它一个指标，是不是在数组中。
```
;; the list doesn't have 2147483647 elements, so it'll return a string instead. 
 (get a-vector 2147483646 "sorry, not found!") 
 ; => "sorry, not found!" 
```

## 将其他集合转换为向量

可以使用`vec`函数将非矢量数据结构转换为矢量。使用散列图，这将生成包含键和值对的2D向量。
```
(vec '(1 2 3 4 5)) 
 ; => [1 2 3 4 5] 
 (vec {:jack "black" :barry "white"}) 
 ; => [[:jack "black"] [:barry "white"]] 
```

## 什么时候使用矢量？

如果需要集合，几乎在所有情况下都应使用向量，因为它们具有最短的随机访问时间，这使得从向量中检索项目变得容易。请注意，向量是有序的。如果顺序无关紧要，最好使用一组。另请注意，向量是为追加物品而设计的;如果您需要预先添加项目，则可能需要使用列表。

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 "：point_left：")上一页](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")家![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 "：书：")](//forum.freecodecamp.com/t/clojure-resources/18422) | [下一个![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 "：point_right：")](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |  
| [列表](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [目录](//forum.freecodecamp.com/t/clojure-resources/18422) | [哈希地图](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |