---
title: Ruby Hashes
---

## Ruby Hashes

A hash is a collection of keys and values. It is similar to what is commonly called a dictionary in other languages. In Ruby, a hash is similar to an <a href='https://raw.githubusercontent.com/freeCodeCamp/guides/master/src/pages/ruby/ruby-arrays/index.md' target='_blank' rel='nofollow'>array</a>, but rather than simply storing a value it stores a key, value pair.
```ruby
array = ["value"]
hash = { "key" => "value" }
```

There are a couple of different ways to create a new hash:
```ruby
hash1 = {a: 100, b: "200"}
hash2 = Hash.new
hash3 = Hash.new(0) # with default value set to 0
```

A programmer can then access a hash value using its key, rather than the index.
```ruby
array[0] # => "value"
hash["key"] # => "value" 
```
In this way, a hash acts more like a dictionary where you can look up a value by its key.
```ruby
dictionary = { "Aardvark" => "a large, nocturnal, burrowing mammal", 
               "Zyzzyva" => "a genus of tropical weevils" }
dictionary["Aardvark"] # => "a large, nocturnal, burrowing mammal"
dictionary["Zyzzyva"] # => "a genus of tropical weevils"
```
You can also create a hash using [symbols](#) as keys.
```ruby
hash = { :symbol => "value" }
hash[:symbol] # => "value"
```
In addition, if all of your keys are [symbols](#), you can write your hash in this alternate format, but you would access it in the same manner:
```ruby
hash = { symbol: "value" }
hash[:symbol] # => "value"
```

#### More Information:
<a href='https://ruby-doc.org/core-2.4.2/Hash.html' target='_blank' rel='nofollow'>Ruby hash documentation</a>
