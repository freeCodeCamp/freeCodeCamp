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
 
 `true` y `false` son valores booleanos nativos de Ruby. Un valor booleano es un valor que solo puede ser uno de dos valores posibles: `true (verdadero)` o `not true (no verdadero)`. El objeto `true` representa verdad, mientras que `false (falso)` representa lo contrario. Se puede asignar estos valores  `true`/`false` a variables, pasarlos a metodos, y usarlos como usarías otros objetos (como números, cadenas (Strings), matrices (Arrays) y Hashes).
 
 `nil` es un valor especial que indica la absencia de valor: es la forma de Ruby de referiste a "nada". Un ejemplo de cuando nos encontramos el objeto `nil` es cuando se pregunta por algo que no existe o que no puede ser encontrado:

```
rubí hats = \["beret", "sombrero", "beanie", "fez", "flatcap"\]

sombreros \[0\] => "boina" # el sombrero en el índice 0 sombreros \[2\] => "gorro" # el sombrero en el índice 2 sombreros \[4\] => "flatcap" # el sombrero en el índice 4 sombreros \[5\] => nil # no hay sombrero en el índice 5, el índice 5 no tiene nada (nulo)
```
Zero no es nada (es un numero, lo que es algo). Igualmente, cadenas, matrices o hashes vacios no son nada (son objetos, lo que pasa es que son vacios). Se puede llamar al método `nil?` para comprobar si esl objeto es `nil`.

```
rubí 0.nil? => falso "".¿nulo? => falso \[\].¿nulo? => falso {}.¿nulo? => falso nil.nil? => verdadero # del ejemplo de arriba gorras \[5\] .nil? => verdadero 
```

Cada objeto en Ruby tiene un valor booleano, lo que significa que se considera verdadero o falso en un contexto booleano. Aquellos considerados verdaderos en este contexto son "sinceros" y aquellos considerados falsos son "falsey". En Ruby, _solo_ `false` y `nil` son "falsey", todo lo demás es "veraz".

### Otros recursos

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean
