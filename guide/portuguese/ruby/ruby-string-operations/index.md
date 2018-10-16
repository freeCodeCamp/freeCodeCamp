---
title: Ruby String Operations
localeTitle: Ruby String Operations
---
Tanto a concatenação quanto a multiplicação podem ser executadas em strings.

## Concatenação:

*   Seqüências de caracteres podem ser unidas usando qualquer um dos seguintes métodos:
    
    *   `+` operador
    *   `<<` operador
    *   método `.concat`
    
    ```ruby
    "Hello" + " World" + "!"  #=> Hello World! 
    
    ```
    
    ```ruby
    "Hello" << " World!" #=> Hello World! 
    
    ```
    
    ```ruby
    string1 = "Hello" 
     string2 = " World!" 
     string1.concat(string2) #=> Hello World! 
    
    ```
    

## Multiplicação:

*   As strings podem ser multiplicadas por um valor inteiro usando o operador `*` . `ruby "Hello" * 3 #=> HelloHelloHello`

## Substituindo uma substring

*   Podemos procurar por sub-strings ou usar o Regex para pesquisar e substituir caracteres em uma string. `ruby "Hey mom, look at this string".sub('mom', 'dad') #=> Hey dad, look at this string`

## Comparação:

*   Seqüências de caracteres podem ser comparadas, retornam -1, 0, +1 ou zero dependendo se string é menor que, igual a ou maior que other\_string.

```ruby
"abcdef" <=> "abcde"     #=> 1 
 "abcdef" <=> "abcdef"    #=> 0 
 "abcdef" <=> "abcdefg"   #=> -1 
 "abcdef" <=> "ABCDEF"    #=> 1 

```