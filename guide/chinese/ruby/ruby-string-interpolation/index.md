---
title: Ruby String Interpolation
localeTitle: Ruby String Interpolation
---
# 字符串插值

字符串插值为构建字符串提供了更易读和简洁的语法。您可能熟悉通过`+`或`<<`方法连接：

```ruby
"Hello " + "World!" #=> Hello World 
 "Hello " << "World!" #=> Hello World 
```

字符串插值提供了一种将Ruby代码直接嵌入字符串的方法：

```ruby
place = "World" 
 "Hello #{place}!" #=> Hello World! 
 
 "4 + 4 is #{4 + 4}" #=> 4 + 4 is 8 
```

`#{`和`}`之间的所有内容都被评估为Ruby代码。为此，字符串必须用双引号（ `"` ）括起来。

单引号将返回引号内的确切字符串：

```ruby
place = "World" 
 'Hello #{place}!' #=> Hello #{place}! 

```