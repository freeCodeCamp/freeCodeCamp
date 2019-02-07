---
title: Ruby Comments
localeTitle: Комментарии в Ruby
---
# Комментарии в Ruby

Комментарии - это строки аннотации внутри кода, которые игнорируются во время выполнения (другими словами, они видны внутри исходного кода, но не выводятся при выполнении программы).

В Ruby однострочный комментарий начинается с символа `#` и продолжается до конца строки. Комментарий может находиться в отдельной строке или в той же строке следуя за кодом.

```Ruby
puts "Learning to code is fun!" 
 
 # I am a single line comment. 
 
 puts "Ruby is a great language!" # Me too - I am a trailing comment. 
```

Результатом выполнения программы из примера выше будет следующее:
```
Learning to code is fun! 
 Ruby is a great language! 
```

Вы можете создать многострочный комментарий, поместив комментарии между `=begin` и `=end` . `=begin` и `=end` должны находиться в самом начале строки и `=end` должен распологаться на отдельной строке.

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

Результатом выполнения программы будет следующее:
```
Hello World! 

```
