---
title: True, False, and Nil
localeTitle: 真，假，没有
---
# 真，假，没有

`true` ， `false`和`nil`是Ruby中特殊的内置数据类型。这些关键字中的每一个都评估为一个对象，该对象是其各自类的唯一实例。

```ruby
true.class 
 => TrueClass 
 false.class 
 => FalseClass 
 nil.class 
 => NilClass 
 ``` 
 
 `true` and `false` are Ruby's native boolean values. A boolean value is a value that can only be one of two possible values: true or not true. The object `true` represents truth, while `false` represents the opposite. You can assign variables to `true` / `false`, pass them to methods, and generally use them as you would other objects (such as numbers, Strings, Arrays, Hashes). 
 
 `nil` is a special value that indicates the absence of a value: it is Ruby's way of referring to "nothing". An example of when you will encounter the `nil` object is when you ask for something that doesn't exist or cannot be found: 
```

红宝石 帽子= \[“beret”，“sombrero”，“beanie”，“fez”，“flatcap”\]

帽子\[0\] =>“贝雷帽”＃索引0处的帽子 帽子\[2\] =>“豆豆”＃索引2处的帽子 帽子\[4\] =>“flatcap”＃索引4处的帽子 帽子\[5\] => nil＃在索引5处没有帽子，索引5没有任何内容（零）
```
Zero is not nothing (it's a number, which is something). Likewise, empty strings, arrays, and hashes are not nothing (they are objects, which happen to be empty). You can call the method `nil?` to check whether an object is nil. 
```

红宝石 0.nil？ =>假 ““。零？ =>假 \[\]。零？ =>假 {}。零？ =>假 nil.nil？ =>是的 ＃来自上面的例子 帽子\[5\] .nil？ =>是的 \`\`\`

Ruby中的每个对象都有一个布尔值，这意味着它在布尔上下文中被认为是true或false。在这种情况下被认为是真实的是“真实的”，那些被认为是虚假的是“虚假的”。在Ruby中， _只有_ `false`和`nil`是“ `false`的”，其他一切都是“真实的”。

### 其他资源

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean