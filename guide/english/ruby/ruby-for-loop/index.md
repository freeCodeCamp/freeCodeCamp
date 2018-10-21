---
title: Ruby For Loops
---

## Ruby For Loops

Ruby `for` loops are used to loop or iterate over a number of elements and execute a block of code for each element. For loops are often used on arrays. See section on <a href='https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md' target='_blank' rel='nofollow'>Ruby Arrays</a>.

The `for` loop is merely one example of looping or iterating over elements. Below is an example of a for loop:

```
for element in array do
  puts element
end
```

There are many many different ways in which you can execute a for loop or loop in Ruby, another such example would be:

```
element.each do |element|
  puts element
end
```

This would achieve exactly the same results as the aforementioned for loop, it is however neater and more efficient as it makes use of Array's built in methods.

To go one step further, we can write the above loop in the following way:

```
element.each do { |element| puts element }
```
