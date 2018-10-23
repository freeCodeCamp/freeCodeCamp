---
title: True, False, and Nil
localeTitle: Verdadero, falso y nulo
---
# Verdadero, falso y nulo

`true` , `false` y `nil` son tipos de datos incorporados especiales en Ruby. Cada una de estas palabras clave se evalúa como un objeto que es la única instancia de su clase respectiva.

```ruby
true.class 
 => TrueClass 
 false.class 
 => FalseClass 
 nil.class 
 => NilClass 
 ``` 
 
 `true` y `false` son los valores booleanos nativos de Ruby. Un booleano es un valor que solo puede ser uno de dos valores posibles: verdadero o no verdadero. El objecto `true` representa verdad, mientras que `false` representa lo opuesto. Puedes asignar variables a `true` / `false`, pasarlos por metodos y usarlos como lo harias con otros objecto (como numbers, Strings, Arrays, Hashes). 
 
 `nil` Es un valor especial que indica la ausencia de un valor: es la forma en la que ruby se refiere a "nada". Un ejemplo donde puedes encontrar el objecto `nil` es cuando preguntas por algo que no existe o no puede ser encontrado: 

```rubí 

sombreros = ["boina", "sombrero", "gorro", "fez", "gorra plana"]

sombreros[0] => "boina" # el sombrero en el índice 0 sombreros [2] => "gorro" # el sombrero en el índice 2 sombreros [4] => "gorra plana" # el sombrero en el índice 4 sombreros [5] => nil # no hay sombrero en el índice 5, el índice 5 no tiene nada (nulo)
```
Zero no es nada (es un numero, que es algo). Igualmente, strings vacios, arrays, and hashes no son nada (ellos son objectos, que están vacios). puedes llamar el metodo `nil?` para comprobar si un objecto es nulo. 

```rubí 
0.nil? => false 
"".nil? => false 
[].nil? => false 
{}.nil? => false 
nil.nil? => true 
# del ejemplo de arriba 
gorras[5].nil? => true 
```

Cada objeto en Ruby tiene un valor booleano, lo que significa que se considera verdadero o falso en un contexto booleano. Aquellos considerados verdaderos en este contexto son "sinceros" y aquellos considerados falsos son "falsey". En Ruby, _solo_ `false` y `nil` son "falsey", todo lo demás es "veraz".

### Otros recursos

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean
