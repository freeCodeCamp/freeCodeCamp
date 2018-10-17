---
title: Learn About Ruby Hashes
localeTitle: 了解Ruby Hashes
---
### 基本：

*   Ruby散列与Python等语言中的Javascript对象或词典相当。
*   散列包含`key: value`对存储的项目。
*   可以使用以下方法创建Ruby哈希：
    *   `my_hash = {}`
    *   `my_hash = Hash.new`
*   Ruby中内置了许多方法来查找和更新哈希值。

## 例子：
```
my_hash = {'name' => 'Batman', 'age' => 25} 
 # is equivalent to: 
 my_hash = Hash.new 
 my_hash<a href='http://www.randomhacks.net/2007/01/20/13-ways-of-looking-at-a-ruby-symbol/' target='_blank' rel='nofollow'>'name'] = 'Batman' 
 my_hash['age'] = 25 
 # Both of these examples return: 
 {"name"=>"Batman", "age"=>25} 
 
 # here is an alternative way to create the array: 
 {name: 'Batman', age: 25} 
 # this example return: 
 {:name=>"Batman", :age=>25} 
 # learn more about [symbols here</a> 
```

## 参考文献：

*   [哈希的官方Ruby文档](http://ruby-doc.org/core-2.2.0/Hash.html) 。