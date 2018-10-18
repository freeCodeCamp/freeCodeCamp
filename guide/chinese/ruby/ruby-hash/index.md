---
title: Ruby Hash
localeTitle: Ruby哈希
---
## Ruby哈希

哈希表示不同键，值对的集合。它也被称为关联数组。要在Ruby中创建哈希，请使用大括号并使用逗号分隔每个键值对。

```ruby
my_hash = {:key1 => "value", :key2 => "value2"} 
```

您可以通过以下方式创建哈希

```ruby
my_hash = Hash.new  # with empty hash 
 my_hash = {:key1 => "value", :key2 => "value2"} # with key's and value's defined 
```

您可以使用方括号和键引用访问哈希中键的值

```ruby
my_hash[:key1]  # value 
 my_hash[:key2]  # value2 
```

您可以为已定义的哈希分配新密钥和值

```ruby
my_hash[:key3] = "value3" # {:key1=>"value", :key2=>"value2", :key3=>"value3"} 
```

您可以使用`length`方法检查哈希的元素数量：

```ruby
my_hash.length # 2 
```

您也可以将整数创建为散列键，但语法与通常的不同

```ruby
my_hash = {1: "value"} # will raise an exception 
 my_hash = {1 => "value"} # will create hash with corresponding key value pair 

```