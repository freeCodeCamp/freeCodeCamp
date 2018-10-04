---
title: Ruby Symbols
---
## Ruby Symbols

A symbol looks like a variable name but it's prefixed with a colon. Examples - :action, :line_items. You don't have to pre-declare a symbol and they are guaranteed to be unique. There's no need to assign some kind of value to a symbol - Ruby takes care of that for you. Ruby also guarantees that no matter where it appears in your program, a particular symbol will have the same value.

Alternatively, you can consider the colon to mean "thing named" so :id is "the thing named id." You can also think of :id as meaning the name of the variable id, and plain id as meaning the value of the variable.

For ex: Thus if Fred is a constant in one context, a method in another, and a class in a third, the Symbol :Fred will be the same object in all three contexts.

```ruby
module One
  class Fred
  end
  $f1 = :Fred
end
module Two
  Fred = 1
  $f2 = :Fred
end
def Fred()
end
$f3 = :Fred
$f1.object_id   #=> 2514190
$f2.object_id   #=> 2514190
$f3.object_id   #=> 2514190
```
## Working with Symbols
You can recognise a Ruby Symbol because it will be a word that starts with a :.

So far we’ve seen them as the key in a Hash (Working with Hashes in Ruby):
```ruby
person = {:name => "Philip"}
```

So the first thing we can do is to inspect a Symbol to see what class it uses:
```ruby
:hello.class
=> Symbol
 
"hello".class
=> String
```

So we can see that Symbols and Strings are instances of two different objects.

You can call String-like methods such as `upcase`, `downcase` and `capitalize` on Symbols:

```ruby
:hello.upcase
=> :HELLO
 
:HELLO.downcase
=> :hello
 
:hello.capitalize
=> :Hello
```

## Why would you use a Symbol instead of a String?
So if a Symbol is just an immutable String, why would you use it, and why is there a special distinction in Ruby?

## Symbols are Immutable
Firstly, one of the big reasons is, as I mentioned above, Symbols are immutable. Unforeseen bugs can crop up in your application when a value can change. If you need to ensure that the value of an object should never change, it’s much safer to use an immutable object.

However, with that being said, it is possible to make a String immutable in Ruby by calling the `freeze` method:

```ruby
name = "Philip"
=> "Philip"
 
name.freeze
=> "Philip"
 
name << "Jim"
RuntimeError: can’t modify frozen String
```
As you can see in the example above, once you call the freeze method on a String instance, you can no longer modify it.

So why else would you use Symbols instead of Strings?

#### Symbols are better for performance

A second reason why you would use a Symbol over a String in certain situations is because Symbols are much better for performance.

For example:
```ruby
philip".object_id
=> 70288511587360
"philip".object_id
=> 70288504327720
 
:philip.object_id
=> 539368
:philip.object_id
=> 539368
```
When you create two String objects with the same value, those two objects are treated as two different objects. When you create a Symbol, referencing the Symbol will always use the same object.

This is much better for performance because the same String object will be created and destroyed over and over again when in reality the same object can just be reused each time.


#### Public Class Methods
all_symbols => array click to toggle source
Returns an array of all the symbols currently in Ruby's symbol table.
```ruby
Symbol.all_symbols.size    #=> 903
Symbol.all_symbols[1,20]   #=> [:floor, :ARGV, :Binding, :symlink,
                                :chown, :EOFError, :$;, :String,
                                :LOCK_SH, :"setuid?", :$<,
                                :default_proc, :compact, :extend,
                                :Tms, :getwd, :$=, :ThreadGroup,
                                :wait2, :$>]
```

#### More Information:
<a href='https://ruby-doc.org/core-2.4.0/Symbol.html' target='_blank' rel='nofollow'>Ruby array documentation</a>
