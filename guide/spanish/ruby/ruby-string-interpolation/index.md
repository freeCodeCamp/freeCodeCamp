---
title: Ruby String Interpolation
localeTitle: Interpolación de string en Ruby
---
# Interpolación de string

La interpolación de string proporciona una sintaxis más legible y concisa para crear string. Puede estar familiarizado con la concatenación a través de los métodos `+` o `<<` :

```ruby
"Hello " + "World!" #=> Hello World 
 "Hello " << "World!" #=> Hello World 
```

La interpolación de string proporciona una forma de incrustar código Ruby directamente en un string:

```ruby
place = "World" 
 "Hello #{place}!" #=> Hello World! 
 
 "4 + 4 is #{4 + 4}" #=> 4 + 4 is 8 
```

Todo entre `#{` y `}` se evalúa como código Ruby. Para hacerlo, la cadena debe estar entre comillas dobles ( `"` ).

Las comillas simples devolverán la cadena exacta dentro de las comillas:

```ruby
place = "World" 
 'Hello #{place}!' #=> Hello #{place}! 

```
