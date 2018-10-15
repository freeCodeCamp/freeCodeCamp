---
title: Range
localeTitle: 范围
---
## 范围

要在Go中迭代集合，我们可以使用范围。

范围与for循环不同，因为索引不访问集合中的项。

如果要访问集合中的特定元素，则for循环可能是更好的选项。

这是一个例子：

```go
package main 
 
 import "fmt" 
 
 func main() { 
  fruits := []string{"apple", "orange", "pear"} 
 
  for _, fruit := range fruits { 
    fmt.Println(fruit) 
   } 
 } 
```

将输出：
```
apple 
 orange 
 pear 
```

您可能已经注意到使用的空白标识符。

空白标识符（或从范围返回的第一个变量）是项目的索引。

这最适合在地图上进行测距，因此您可以获得关键和价值：

```go
package main 
 
 import "fmt" 
 
 func main() { 
    kvs := map[string]string{"a": "apple", "b": "banana"} 
    for k, v := range kvs { 
        fmt.Printf("%s -> %s\n", k, v) 
 
   } 
 } 
```

走

输出：
```
a -> apple 
 b -> banana 

```