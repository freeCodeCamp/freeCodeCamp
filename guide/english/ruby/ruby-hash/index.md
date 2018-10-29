---
title: Ruby Hash
---
## Ruby Hash

A hash represents a collection of distinct key, value pairs. It is also called associative arrays. To create a hash in Ruby , use curly brackets and separate each key-value pair with comma.

```ruby
my_hash = {:key1 => "value", :key2 => "value2"}
```

You can create a hash in the following ways

```ruby
my_hash = Hash.new  # with empty hash
my_hash = {:key1 => "value", :key2 => "value2"} # with key's and value's defined
```

You can access the value of key in a hash with square brackets and key references

```ruby
my_hash[:key1]  # value
my_hash[:key2]  # value2
```

You can assign a new key and value for an already defined hash 
```ruby
my_hash[:key3] = "value3" # {:key1=>"value", :key2=>"value2", :key3=>"value3"}
```

You can check how many elements a hash has with the `length` method:

```ruby
my_hash.length # 2
```


You can also create integers as hash key but the syntax is different from the usual one

```ruby
my_hash = {1: "value"} # will raise an exception
my_hash = {1 => "value"} # will create hash with corresponding key value pair
```