---
title: Ruby Hashes
localeTitle: Ruby Hashes
---
## Ruby Hashes

哈希是键和值的集合。它类似于其他语言中通常所说的字典。在Ruby中，散列类似于[数组](https://raw.githubusercontent.com/freeCodeCamp/guides/master/src/pages/ruby/ruby-arrays/index.md) ，但不是简单地存储它存储键值对的值。

```ruby
array = ["value"] 
 hash = { "key" => "value" } 
```

创建新哈希有几种不同的方法：

```ruby
hash1 = {a: 100, b: "200"} 
 hash2 = Hash.new 
 hash3 = Hash.new(0) # with default value set to 0 
```

然后，程序员可以使用其键而不是索引来访问哈希值。

```ruby
array[0] # => "value" 
 hash["key"] # => "value" 
```

通过这种方式，哈希的行为更像是字典，您可以通过其键查找值。

```ruby
dictionary = { "Aardvark" => "a large, nocturnal, burrowing mammal", 
               "Zyzzyva" => "a genus of tropical weevils" } 
 dictionary["Aardvark"] # => "a large, nocturnal, burrowing mammal" 
 dictionary["Zyzzyva"] # => "a genus of tropical weevils" 
```

您还可以使用[符号](#)作为键创建哈希。

```ruby
hash = { :symbol => "value" } 
 hash[:symbol] # => "value" 
```

此外，如果您的所有键都是[符号](#) ，则可以使用此备用格式编写哈希值，但您可以以相同的方式访问它：

```ruby
hash = { symbol: "value" } 
 hash[:symbol] # => "value" 
```

#### 更多信息：

[Ruby哈希文档](https://ruby-doc.org/core-2.4.2/Hash.html)