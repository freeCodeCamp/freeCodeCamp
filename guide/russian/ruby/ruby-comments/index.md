---
title: Ruby Comments
localeTitle: Руби Комментарии
---
# Руби Комментарии

Комментарии - это строки аннотации внутри кода, которые игнорируются во время выполнения (что означает, что они видны внутри исходного кода, но не распечатываются при запуске программы).

В Ruby однострочный комментарий начинается с символа `#` и продолжается до конца строки. Комментарий может быть в отдельной строке или в следующем коде.

```Ruby
puts "Learning to code is fun!" 
 
 # I am a single line comment. 
 
 puts "Ruby is a great language!" # Me too - I am a trailing comment. 
```

При выполнении программы выше выдается следующее:
```
Learning to code is fun! 
 Ruby is a great language! 
```

Вы можете сделать несколько комментариев, помещая комментарии между `=begin` и `=end` . `=begin` и `=end` должен начинаться в самом начале строки, а `=end` должен быть на отдельной строке.

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

При выполнении программы выше выдается следующее:
```
Hello World! 

```