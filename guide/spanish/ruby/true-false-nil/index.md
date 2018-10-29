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
 
 `true` and `false` are Ruby's native boolean values. A boolean value is a value that can only be one of two possible values: true or not true. The object `true` represents truth, while `false` represents the opposite. You can assign variables to `true` / `false`, pass them to methods, and generally use them as you would other objects (such as numbers, Strings, Arrays, Hashes). 
 
 `nil` is a special value that indicates the absence of a value: it is Ruby's way of referring to "nothing". An example of when you will encounter the `nil` object is when you ask for something that doesn't exist or cannot be found: 
```

rubí hats = \["beret", "sombrero", "beanie", "fez", "flatcap"\]

sombreros \[0\] => "boina" # el sombrero en el índice 0 sombreros \[2\] => "gorro" # el sombrero en el índice 2 sombreros \[4\] => "flatcap" # el sombrero en el índice 4 sombreros \[5\] => nil # no hay sombrero en el índice 5, el índice 5 no tiene nada (nulo)
```
Zero is not nothing (it's a number, which is something). Likewise, empty strings, arrays, and hashes are not nothing (they are objects, which happen to be empty). You can call the method `nil?` to check whether an object is nil. 
```

rubí 0.nil? => falso "".¿nulo? => falso \[\].¿nulo? => falso {}.¿nulo? => falso nil.nil? => verdadero # del ejemplo de arriba gorras \[5\] .nil? => verdadero \`\` \`

Cada objeto en Ruby tiene un valor booleano, lo que significa que se considera verdadero o falso en un contexto booleano. Aquellos considerados verdaderos en este contexto son "sinceros" y aquellos considerados falsos son "falsey". En Ruby, _solo_ `false` y `nil` son "falsey", todo lo demás es "veraz".

### Otros recursos

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean