---
title: Common Array Methods
---
## Common Array Methods

Arrays are a core foundation of programming in Ruby and most languages. Arrays are so common that it is beneficial to know, and even memorize, some of their most commonly used methods. If you want to know more about Ruby Arrays, we have [an article about them](https://guide.freecodecamp.org/ruby/ruby-arrays).

For the purpose of this guide, our array will be as follows:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]
```

#### .length
The `.length` method tallies the number of elements in the array and returns the count:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.length
=> 5
```
This is also similar to `.count` and `.size` methods.

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.count
=> 5

array.size
=> 5
```

#### .first
The `.first` method returns the first element of the array, the element at index 0:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.first
=> 0
```

#### .last
The `.last` method returns the last element of the array:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.last
=> 4
```

#### .take
The `.take` method returns the first n elements of the array:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.take(3)
=> [0, 1, 2]

array
=> [0, 1, 2, 3, 4]
```

#### .drop
The `.drop` method returns the elements after n elements of the array:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.drop(3)
=> [3, 4]

array
=> [0, 1, 2, 3, 4]
```

#### array index
You can return a specific element in an array by accessing its index. If the index does not exist in the array, `nil` will be returned:

```ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array[2]
=> 2

array[5]
=> nil
```

#### .pop
The `.pop` method will permanently remove the last element of an array and return this element:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.pop
=> 4

array
=> [0, 1, 2, 3]
```

#### .shift
The `.shift` method will permanently remove the first element of an array and return this element:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.shift
=> 0

array
=> [1, 2, 3, 4]
```

#### .push
The `.push` method will add an element to the end of an array and return the array:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.push(99)
=> [0, 1, 2, 3, 4, 99]

array
=> [0, 1, 2, 3, 4, 99]
```

#### .unshift
The `.unshift` method adds an element to the beginning of an array and return the array:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.unshift(99)
=> [99, 0, 1, 2, 3, 4]

array
=> [99, 0, 1, 2, 3, 4]
```

#### .delete
The `.delete` method removes a specified element from an array permanently and return the element:

``` ruby
array = [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]

array.delete(3)
=> 3

array
=> [1, 2, 4, 5]
```

#### .delete_at
The `.delete_at` method permanently removes an element of an array at a specified index and return the element:

``` ruby
array = [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]

array.delete_at(3)
=> 3

array
=> [1, 2, 3, 5]
```

#### .reverse
The `.reverse` method returns a new array that includes the elements of the original array but in reverse order:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

new_array = array.reverse
=> [4, 3, 2, 1, 0]

new_array
=> [4, 3, 2, 1, 0]

array
=> [0, 1, 2, 3, 4]
```

#### .select
The `.select` method iterates over an array and returns a new array that includes any items that return true to the expression provided:

``` ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = array.select { |number| number > 4 }
=> [5, 6, 7, 8, 9, 10]

new_array
=> [5, 6, 7, 8, 9, 10]

array
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### .include?
The `.include?` method checks to see if the argument given is included in the array and returns `true` if it is:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.include?(3)
=> true

array.include?(5)
=> false
```

#### .flatten
The `.flatten` method can be used to take an array that contains nested arrays and create a one-dimensional array:

``` ruby
array = [1, 2, [3, 4, 5], [6, 7]]
=> [1, 2, [3, 4, 5], [6, 7]]

new_array = array.flatten
=> [1, 2, 3, 4, 5, 6, 7]

new_array
=> [1, 2, 3, 4, 5, 6, 7]

array
=> [1, 2, [3, 4, 5], [6, 7]]
```

#### .join
The `.join` method returns a string of all the elements of the array separated by a separator parameter. If the separator parameter is nil, the method uses an empty string as a separator between strings:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.join
=> "01234"

array.join("*")
=> "0*1*2*3*4"

array
=> [0, 1, 2, 3, 4]
```

#### .each
The `.each` method iterates over each element of the array, allowing you to perform actions on them:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.each { |element| puts element }
=> 
0
1
2
3
4

array
=> [0, 1, 2, 3, 4]
```

#### .map
The `.map` method is the same as the `.collect` method. The `.map` and `.collect` methods iterate over each element of the array, allowing you to perform actions on them. The `.map` and `.collect` methods differ from the `.each` method in that they return an array containing the transformed elements:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

new_array = array.map { |element| element * 2 }
=> [0, 2, 4, 6, 8]

new_array
=> [0, 2, 4, 6, 8]

array
=> [0, 1, 2, 3, 4]
```

#### .uniq
The `.uniq` method returns a copy of the array containing only unique elements. Any duplicate elements are removed from the array. The original array is not modified.

``` ruby
array = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8]
=> [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8]

new_array = array.uniq
=> [1, 2, 3, 4, 5, 6, 7, 8]

new_array
=> [1, 2, 3, 4, 5, 6, 7, 8]

array
=> [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8]
```

#### .concat
The `.concat` method appends the elements from an array to the original array. The `.concat` method can take in multiple arrays as an argument, which will in turn append multiple arrays to the original array:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.concat([5, 6, 7], [8, 9, 10])
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### .clear
The `.clear` method will delete all the data in the array:

``` ruby
array = [0, 1, 2, 3, 4]
=> [0, 1, 2, 3, 4]

array.clear
=> []

array
=> []
```


## More Information
* [Ruby Array docs](http://ruby-doc.org/core-2.5.1/Array.html)
