---
title: Ruby Arrays
localeTitle: Ruby数组
---
## Ruby数组

数组表示值列表。各个值通常称为数组的“元素”。要在Ruby中创建数组，请使用方括号并使用逗号分隔值：

```ruby
my_array = [1, 2, 3, 4, 5] 
```

第一个例子是一个数字数组，但Ruby数组可以包含不同类型的值，甚至包含其他数组：

```ruby
mixed_array = [5, "Hello World", true, [1,2,3]] 
```

您可以使用方括号和数字索引访问数组的元素。请注意，第一个元素位于索引0，而不是1：

```ruby
mixed_array[0] # 5 
 mixed_array[1] # "Hello World" 
 mixed_array[2] # true 
```

您可以使用`length`方法检查数组中有多少元素：

```ruby
mixed_array.length # 3 
 [].length # 0 
```

您可以使用`first`一种方法检查数组的`first`一个元素：

```ruby
mixed_array.first # 5 
```

您可以使用最后`last`方法检查数组的`last`一个元素：

```ruby
mixed_array.last # true 
```

#### Ruby Lambda

lambda通常也称为匿名函数。要在Ruby中创建lambda，可以使用以下语法：

```ruby
lambda = lambda {} 
```

#### 更多信息：

[Ruby数组文档](https://ruby-doc.org/core-2.4.2/Array.html)