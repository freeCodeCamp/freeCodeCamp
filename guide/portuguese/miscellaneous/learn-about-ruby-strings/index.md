---
title: Learn About Ruby Strings
localeTitle: Aprenda sobre cadeias de caracteres de Ruby
---
### Noções básicas:

*   Cordas são uma série de caracteres 'amarrados' juntos entre aspas.
    
*   Aspas simples ou duplas podem ser usadas para criar strings em Ruby.
    
*   Ruby faz uma avaliação extra sobre strings criadas com aspas duplas, como:
    
    *   Caracteres de escape: `\n` , `\t` , `\s`
        
    *   Usando variáveis ​​e expressões dentro de: `#{variable or expression}`
        
*   Strings com aspas simples são renderizadas como são, sem nenhuma consideração especial.
    

## Exemplos:
```
"Hello World" 
 # is equivalent to: 
 'Hello World' 
 
 "This is line 1.\nAnd this is line 2." 
 # returns: 
 This is line 1. 
 And this is line 2. 
 
 name = "Batman" 
 "Hello, my name is #{name}!" 
 # returns: 
 Hello, my name is Batman! 
 
 # Note that for single quotes, ruby doesn't take special consideration for variables or backslashes: 
 'This is your name:\n#{name}' 
 # returns: 
 This is your name:\n#{name} 
```

## Referências:

*   [A documentação oficial do Ruby para strings](http://ruby-doc.org/core-2.2.0/String.html) .