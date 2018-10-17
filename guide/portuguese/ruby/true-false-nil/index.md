---
title: True, False, and Nil
localeTitle: Verdadeiro, falso e nada
---
# Verdadeiro, falso e nada

`true` , `false` e `nil` são tipos de dados `nil` especiais em Ruby. Cada uma dessas palavras-chave é avaliada para um objeto que é a única instância de sua respectiva classe.

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

rubi chapéus = \["boina", "sombrero", "gorro", "fez", "flatcap"\]

chapéus \[0\] => "boina" # o chapéu no índice 0 chapéus \[2\] => "beanie" # o chapéu no índice 2 chapéus \[4\] => "flatcap" # o chapéu no índice 4 chapéus \[5\] => nulo # não há chapéu no índice 5, o índice 5 não contém nada (nulo)
```
Zero is not nothing (it's a number, which is something). Likewise, empty strings, arrays, and hashes are not nothing (they are objects, which happen to be empty). You can call the method `nil?` to check whether an object is nil. 
```

rubi 0.nil => falso "".nada? => falso \[\].nada? => falso {}.nada? => falso nil.nil? = verdadeiro # do exemplo acima chapéus \[5\] .nil? = verdadeiro \`\` \`

Todo objeto em Ruby possui um valor booleano, o que significa que é considerado verdadeiro ou falso em um contexto booleano. Aqueles considerados verdadeiros neste contexto são "verdadeiros" e aqueles considerados falsos são "falsey". Em Ruby, _apenas_ `false` e `nil` são "falsey", todo o resto é "verdadeiro".

### Outros recursos

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean