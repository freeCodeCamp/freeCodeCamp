---
title: Ruby For Loops
localeTitle: Ruby For循环
---
## Ruby For循环

Ruby for循环用于循环或迭代许多元素并执行每个元素的代码块。 For循环通常用在数组上。请参阅[Ruby Arrays](https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md)部分。

for循环只是循环或迭代元素的一个例子。下面是for循环的示例：
```
for element in array do 
  puts element 
 end 
```

在Ruby中有许多不同的方法可以执行for循环或循环，另一个例子是：
```
element.each do |element| 
  puts element 
 end 
```

这将获得与上述for循环完全相同的结果，但是它使用Array的内置方法更整洁，更高效。

为了更进一步，我们可以通过以下方式编写上述循环：
```
element.each do { |element| puts element } 

```