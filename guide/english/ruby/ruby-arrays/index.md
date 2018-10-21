---
title: Ruby Arrays
---
## Ruby Arrays

An array represents a list of values. The individual values are often called "elements" of the array. To make an array in Ruby, use square brackets and separate values with commas:

```ruby
my_array = [1, 2, 3, 4, 5]
```

You can also create an empty array by using the 'new' method in the 'Array' class:

```ruby
my_array = Array.new
```

That first example is an array of numbers, but a Ruby array can contain values of different types, even other arrays:

```ruby
mixed_array = [5, "Hello World", true, [1,2,3]]
```


You can access the elements of an array with square brackets and numerical indexes. Notice that the first element is at index 0, not 1:

```ruby
mixed_array[0] # 5
mixed_array[1] # "Hello World"
mixed_array[2] # true
```

You can check how many elements an array has with the `length` method:

```ruby
mixed_array.length # 3
[].length # 0
```

You can check the first element of an array with the `first` method:
```ruby
mixed_array.first # 5
```

You can check the last element of an array with the `last` method:
```ruby
mixed_array.last # true
```



#### More Information:
<a href='https://ruby-doc.org/core-2.4.2/Array.html' target='_blank' rel='nofollow'>Ruby array documentation</a>
