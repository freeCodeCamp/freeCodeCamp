---
title: Learn About Ruby Strings
localeTitle: Aprender sobre cuerdas de rubí
---
### Lo esencial:

*   Las cadenas son una serie de caracteres 'enlazados' entre comillas.
    
*   Se pueden usar comillas simples o dobles para crear cadenas en Ruby.
    
*   Ruby hace una evaluación adicional de las cadenas que se crean con comillas dobles, como:
    
    *   Caracteres de escape: `\n` , `\t` , `\s`
        
    *   Usando variables y expresiones dentro de: `#{variable or expression}`
        
*   Las cadenas con comillas simples se representan como están, sin ninguna consideración especial.
    

## Ejemplos:
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

## Referencias:

*   [La documentación oficial de Ruby para cuerdas](http://ruby-doc.org/core-2.2.0/String.html) .