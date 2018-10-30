---
title: True, False, and Nil
localeTitle: Verdadeiro, Falso e Nulo
---
# Verdadeiro, Falso e Nulo

`true` , `false` e `nil` são tipos de dados especiais em Ruby. Cada uma dessas palavras-chave é avaliada para um objeto que é a única instância de sua respectiva classe.

```ruby
true.class 
 => TrueClass 
false.class 
 => FalseClass 
nil.class 
 => NilClass 
 ``` 
 
`true` e `false` são os valores booleanos nativos do Ruby. Um valor booleano é um valor que só pode ser um de dois valores possíveis: verdadeiro ou não verdadeiro. O objecto `true` representa verdade, enquanto `false` representa o oposto. Você pode atribuir variáveis para `true` / `false`, passando-os para métodos e geralmente usando-os como faria com outros objetos (como números, Strings, Arrays, Hashes).
 
`nil` é um valor especial que indica a ausência de valor: é uma maneira Ruby de referenciar para "nada". Um exemplo de quando você irá encontrar o objeto `nil` é quando você perguntar por algo que não exista ou não pode ser encontrado:

```ruby
chapeus = ["boina", "sombreiro", "gorro", "fez", "flatcap"]

chapeus[0]
 => "boina" # o chapéu no índice 0
chapeus[2]
 => "sombreiro" # o chapéu no índice 2
chapéus[4]
 => "flatcap" # o chapéu no índice 4
chapéus[5]
 => nil # não há chapéu no índice 5, o índice 5 não contém nada (nulo)
```

Zero não é o mesmo que nada (é um número, ou seja, alguma coisa). Da mesma forma, strings, arrays e hashes vazias não são o mesmo que nada (são objetos, que acontece de estarem vazios). Você pode chamar o método `nil?` para checar se um objeto é nulo.

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
# do exemplo acima
chapeus[5].nil?
 => true
```

Todo objeto em Ruby possui um valor booleano, o que significa que é considerado verdadeiro ou falso em um contexto booleano. Aqueles considerados verdadeiros neste contexto são "truthy" e aqueles considerados falsos são "falsey". Em Ruby, _apenas_ `false` e `nil` são "falsey", todo o resto é "truthy".

### Outros recursos

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean
