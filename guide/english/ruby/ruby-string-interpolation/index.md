---
title: Ruby String Interpolation
---

# String Interpolation

String interpolation provides a more readable and concise syntax for building strings. You may be familiar with concatenation via the `+` or `<<` methods:

```ruby
"Hello " + "World!" #=> Hello World
"Hello " << "World!" #=> Hello World
```

String interpolation provides a way to embed Ruby code directly into a string:

```ruby
place = "World"
"Hello #{place}!" #=> Hello World!

"4 + 4 is #{4 + 4}" #=> 4 + 4 is 8
```

Everything between `#{` and `}` is evaluated as Ruby code. In order to do so, the string must be surrounded by double quotes (`"`).

Single quotes will return the exact string inside the quotes:

```ruby
place = "World"
'Hello #{place}!' #=> Hello #{place}!
```