---
title: Ruby String Operations
localeTitle: Operações com String Ruby
---
Tanto a concatenação quanto a multiplicação podem ser executadas em strings.

## Concatenação:

*   Strings podem ser unidas usando qualquer um dos seguintes métodos:
    
    *   `+` operador
    *   `<<` operador
    *   método `.concat`
    
    ```ruby
    "Hello" + " World" + "!" 
    #=> Hello World! 

    "Hello" << " World!"
    #=> Hello World! 

    string1 = "Hello" 
    string2 = " World!" 
    string1.concat(string2)
    #=> Hello World! 
    ```
    

## Multiplicação:

*   As strings podem ser multiplicadas por um valor inteiro usando o operador `*`.
```ruby
"Hello" * 3
#=> HelloHelloHello`
```

## Substituindo uma substring:

*   Podemos procurar por sub-strings ou usar o Regex para pesquisar e substituir caracteres em uma string.
```ruby
"Hey mom, look at this string".sub('mom', 'dad')
#=> Hey dad, look at this string
```

## Comparação:

*   Strings podem ser comparadas, retornam `-1`, `0`, `+1` ou `nil` dependendo se string é _menor que_, _igual a_ ou _maior que_ outra string.

```ruby
"abcdef" <=> "abcde"    
#=> 1
"abcdef" <=> "abcdef"
#=> 0
"abcdef" <=> "abcdefg"
#=> -1
"abcdef" <=> "ABCDEF"
#=> 1
```
