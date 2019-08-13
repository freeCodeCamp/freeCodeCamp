---
title: Ruby Comments
localeTitle: Ruby Comentarios
---
# Ruby Comentarios

Los comentarios son líneas de anotación dentro del código que se ignoran en tiempo de ejecución (lo que significa que son visibles dentro del código fuente pero no se imprimen cuando ejecuta el programa).

En Ruby, un comentario de una sola línea comienza con el carácter `#` y se extiende hasta el final de la línea. El comentario puede estar en su propia línea o siguiendo el código.

```Ruby
puts "¡Aprender a escribir código es divertido!" 
 
 # Soy un comentario de una sola línea. 
 
 puts "¡Ruby es un gran lenguaje!" # Yo también - Soy un código de una línea. 
```

Cuando se ejecuta, el programa anterior produce lo siguiente:
```
¡Aprender a escribir código es divertido! 
¡Ruby es un gran lenguaje! 
```

Puede hacer comentarios de varias líneas colocando los comentarios entre `=begin` y `=end` . `=begin` y `=end` deben comenzar al principio de la línea y `=end` debe estar en una línea propia.

```ruby
=begin 
 Soy un comentario multi línea 
 y puedo ser tan largo como se me plazca. 
 ¡Ves, todavía sigo! 
 =end 
 
 puts "¡Hola mundo!" 
 
 =begin Está bien empezar el comentario en la misma 
 línea que "=begin" (aunque es más comprensible si 
 no lo haces) pero no puedes poner un espacio o  
 texto antes que "=begin" o "=end" y no puedes poner 
 nada nada en la misma línea después de "=end". 
 =end 
```

Cuando se ejecuta, el programa anterior produce lo siguiente:
```
¡Hola mundo! 

```
