---
title: Ruby Comments
---

<h1>Ruby Comments</h1>

Comments are lines of annotation within code that are ignored at runtime (meaning they are visible within the source code but aren't printed out when you run the program).

In Ruby, a single line comment starts with the `#` character and extends to the end of the line. The comment can be on its own line or following code.  

```Ruby
puts "Learning to code is fun!"

# I am a single line comment.

puts "Ruby is a great language!" # Me too - I am a trailing comment.
```

When executed, the program above produces the following:
```
Learning to code is fun!
Ruby is a great language!
```

You can do multiple line comments by putting the comments between `=begin` and `=end`. `=begin` and `=end` must start at the very beginning of the line and `=end` must be on a line of its own.

```ruby
=begin
I am a multi-line comment
and I can be as long as I please.
See, still going!
=end

puts "Hello World!"

=begin It's ok to start the comment on the same
line as "=begin" (though it's more readable if
you don't) but you can't put a space or any
text before "=begin" or "=end" and you can't put
anything on the same line after "=end".
=end
```

When executed, the program above produces the following:
```
Hello World!
```
