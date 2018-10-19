---
title: Ruby Comments
localeTitle: Comentários Ruby
---
# Comentários Ruby

Comentários são linhas de anotação dentro do código que são ignoradas no tempo de execução (o que significa que elas são visíveis dentro do código-fonte, mas não são impressas quando você executa o programa).

Em Ruby, um comentário de linha única começa com o caractere `#` e se estende até o final da linha. O comentário pode estar em sua própria linha ou no código a seguir.

```Ruby
puts "Learning to code is fun!" 
 
 # I am a single line comment. 
 
 puts "Ruby is a great language!" # Me too - I am a trailing comment. 
```

Quando executado, o programa acima produz o seguinte:
```
Learning to code is fun! 
 Ruby is a great language! 
```

Você pode fazer vários comentários de linha colocando os comentários entre `=begin` e `=end` . `=begin` e `=end` deve começar no início da linha e `=end` deve estar em uma linha própria.

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

Quando executado, o programa acima produz o seguinte:
```
Hello World! 

```