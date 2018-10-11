---
title: Common Array Methods
---
## Common Array Methods

Ruby Arrays form a core foundation in programming in Ruby, and most languages in fact. It is used so much that it would be beneficial to know and even memorize some of the most commonly used methods for arrays. If you want to know more about Ruby Arrays, we have [an article about them](https://guide.freecodecamp.org/ruby/ruby-arrays).

For the purpose of this guide, our array will be as follows:

``` ruby
array = [0, 1, 2, 3, 4]
```

#### .length
The .length method tallies the number of elements in your array and returns the count:

``` ruby
array.length
=> 5
```

#### .first
The .first method accesses the first element of the array, the element at index 0:

``` ruby
array.first
=> 0
```

#### .last
The .last method accesses the last element of the array:

``` ruby
array.last
=> 4
```

#### .take
The .take method returns the first n elements of the array:

``` ruby
array.take(3)
=> [0, 1, 2]
```

#### .drop
The .drop method returns the elements after n elements of the array:

``` ruby
array.drop(3)
=> [3, 4]
```

#### array index
You can access a specific element in an array by accessing its index. If the index does not exist in the array, nil will be returned:

```ruby
array[2]
=> 2

array[5]
=> nil
```

#### .pop
The .pop method will permantently remove the last element of an array:

``` ruby
array.pop
=> [0, 1, 2, 3]
```

#### .shift
The .shift method will permantently remove the first element of an array and return this element:

``` ruby
array.shift
=> 0  
array
=> [1, 2, 3, 4]
```

#### .push
The .push method will allow you to add an element to the end of an array:

``` ruby
array.push(99)
=> [0, 1, 2, 3, 4, 99]
```
#### .unshift
The .unshift method will allow you to add an element to the beginning of an array:

```
array = [2, 3]
array.unshift(1)
=> [1, 2, 3]
```

#### .delete
The .delete method removes a specified element from an array permanently:

``` ruby
array.delete(1)
=> [0, 2, 3, 4]
```

#### .delete_at
The .delete_at method allows you to permanently remove an element of an array at a specified index:

``` ruby
array.delete_at(0)
=> [1, 2, 3, 4]
```

#### .reverse
The .reverse method reverses the array but does not mutate it (the original array stays as is):

``` ruby
array.reverse
=> [4, 3, 2, 1, 0]
```
#### .select
The .select method iterates over an array and returns a new array that includes any items that return true to the expression provided.

``` ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.select { |number| number > 4 }
=> [5, 6, 7, 8, 9, 10]
array
=> [5, 6, 7, 8, 9, 10]
```

#### .include?
The include? method checks to see if the argument given is included in the array:

``` ruby
array = [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]
array.include?(3)
=> true

#### .flatten
The flatten method can be used to take an array that contains nested arrays and create a one-dimensional array:

``` ruby
array = [1, 2, [3, 4, 5], [6, 7]]
array.flatten
=> [1, 2, 3, 4, 5, 6, 7]
```

#### .join
The .join method returns a string of all the elements of the array separated by a separator parameter. If the separator parameter is nil, the method uses an empty string as a separator between strings.

``` ruby
array.join
=> "1234"
array.join("*")
=> "1*2*3*4"
```

#### .each
The .each method iterates over each element of the array, allowing you to perform actions on them.

``` ruby
array.each do |element|
  puts element
end
=> 
0
1
2
3
4
```

## More Information
* [Ruby Array docs](https://ruby-doc.org/core-2.4.2/Array.html)
