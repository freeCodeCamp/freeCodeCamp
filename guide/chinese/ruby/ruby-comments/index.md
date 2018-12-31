---
title: Ruby Comments
localeTitle: Ruby评论
---
# Ruby评论

注释是代码中的注释行，在运行时被忽略（这意味着它们在源代码中可见但在运行程序时不会打印出来）。

在Ruby中，单行注释以`#`字符开头并延伸到行尾。评论可以是自己的行或代码。

```Ruby
puts "Learning to code is fun!" 
 
 # I am a single line comment. 
 
 puts "Ruby is a great language!" # Me too - I am a trailing comment. 
```

执行时，上面的程序产生以下内容：
```
Learning to code is fun! 
 Ruby is a great language! 
```

您可以通过在`=begin`和`=end`之间添加注释来执行多行注释。 `=begin`和`=end`必须从行的最开始开始， `=end`必须在它自己的一行上。

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

执行时，上面的程序产生以下内容：
```
Hello World! 

```