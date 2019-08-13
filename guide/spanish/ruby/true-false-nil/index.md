---
title: True, False, and Nil
localeTitle: Verdadero, falso y nulo
---
# Verdadero, falso y nulo

`true` , `false` y `nil` son tipos de datos especiales incorporados en Ruby. Cada una de estas palabras clave se evalúa como un objeto que es la única instancia de su respectiva clase.

```ruby
true.class 
 => TrueClass 
 false.class 
 => FalseClass 
 nil.class 
 => NilClass 
 ``` 
 
`true` y `false` son valores booleanos nativos de Ruby. Un valor booleano es aquel que solo puede ser uno de dos posibles valores: verdadero o no verdadero. El objeto `true` representa verdad, mientras que `false` representa lo contrario. Puedes asignar variables con `true` / `false`, pasarlos como parámetro a métodos, y en general usarlos de la misma forma que harías con otros objetos (como Numbers, Strings, Arrays, Hashes).
 
`nil` es un valor especial que indica la ausencia de valor: es la forma de Ruby de referirse a "nada". Un ejemplo de cuando te encontrarás con el objeto `nil` es cuando preguntas por algo que no existe o que no se pudo encontrar:

```ruby
sombreros = ["beret", "sombrero", "beanie", "fez", "flatcap"]

sombreros[0]
 => "beret" # el sombrero para el índice 0
sombreros[2]
 => "beanie" # el sombrero para el índice 2
sombreros[4]
 => "flatcap" # el sombrero para el índice 4
sombreros[5]
 => nil # no hay sombrero para el índice 5, índice 5 contiene nada (nulo)
```

Cero no es nulo (es un número, lo cual es algo). Del mismo modo, Strings, Arrays, y Hashes vacíos no son nulos (son objetos, que resultan estar vacíos). Puedes llamar al método `nil?` para chequear si un objeto es nulo.

```ruby
0.nil?
 => false
"".nil?
 => false
[].nil?
 => false
{}.nil?
 => false
nil.nil?
 => true
 # del ejemplo de arriba
hats[5].nil?
 => true
```

Cada objeto en Ruby tiene un valor booleano, lo que significa que se considera verdadero o falso en un contexto booleano. Aquellos considerados verdaderos en este contexto son "truthy", mientras que aquellos considerados falsos son "falsey". En Ruby, <em>solo</em> `false` y `nil` son "falsey". Todo lo demás es "truthy".

### Otros recursos

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean
