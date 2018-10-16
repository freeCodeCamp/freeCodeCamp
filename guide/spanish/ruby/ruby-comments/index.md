---
title: Ruby Comments
localeTitle: Rubí Comentarios
---
# Rubí Comentarios

Los comentarios son líneas de anotación dentro del código que se ignoran en tiempo de ejecución (lo que significa que son visibles dentro del código fuente pero no se imprimen cuando ejecuta el programa).

En Ruby, un comentario de una sola línea comienza con el carácter `#` y se extiende hasta el final de la línea. El comentario puede estar en su propia línea o siguiendo el código.

```Ruby
puts "Learning to code is fun!" 
 
 # I am a single line comment. 
 
 puts "Ruby is a great language!" # Me too - I am a trailing comment. 
```

Cuando se ejecuta, el programa anterior produce lo siguiente:
```
Learning to code is fun! 
 Ruby is a great language! 
```

Puede hacer comentarios de varias líneas colocando los comentarios entre `=begin` y `=end` . `=begin` y `=end` deben comenzar al principio de la línea y `=end` debe estar en una línea propia.

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

Cuando se ejecuta, el programa anterior produce lo siguiente:
```
Hello World! 

```