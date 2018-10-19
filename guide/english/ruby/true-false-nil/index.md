---
title: True, False, and Nil
---

<h1>True, False, and Nil</h1>

`true`, `false`, and `nil` are special built-in data types in Ruby. Each of these keywords evaluates to an object that is the sole instance of its respective class.  

```ruby
true.class
 => TrueClass
false.class
 => FalseClass
nil.class
 => NilClass
 ```

`true` and `false` are Ruby's native boolean values. A boolean value is a value that can only be one of two possible values: true or not true. The object `true` represents truth, while `false` represents the opposite. You can assign variables to `true` / `false`, pass them to methods, and generally use them as you would other objects (such as numbers, Strings, Arrays, Hashes).

`nil` is a special value that indicates the absence of a value: it is Ruby's way of referring to "nothing". An example of when you will encounter the `nil` object is when you ask for something that doesn't exist or cannot be found:

```ruby
hats = ["beret", "sombrero", "beanie", "fez", "flatcap"]

hats[0]
 => "beret" # the hat at index 0
hats[2]
 => "beanie" # the hat at index 2
hats[4]
 => "flatcap" # the hat at index 4
hats[5]
 => nil # there is no hat at index 5, index 5 holds nothing (nil)
```

Zero is not nothing (it's a number, which is something). Likewise, empty strings, arrays, and hashes are not nothing (they are objects, which happen to be empty). You can call the method `nil?` to check whether an object is nil.

```ruby
0.nil?
 => false
"".nil?
 => false
[].nil?
 => false
{}.nil?
 => false
nil.nil?
 => true
 # from the example above
hats[5].nil?
 => true
 ```

Every object in Ruby has a boolean value, meaning it is considered either true or false in a boolean context. Those considered true in this context are "truthy" and those considered false are "falsey." In Ruby, <em>only</em> `false` and `nil` are "falsey," everything else is "truthy."


<h3>Other Resources</h3>
* https://ruby-doc.org/core-2.3.0/TrueClass.html
* https://ruby-doc.org/core-2.3.0/FalseClass.html
* https://ruby-doc.org/core-2.3.0/NilClass.html
* https://en.wikipedia.org/wiki/Boolean
