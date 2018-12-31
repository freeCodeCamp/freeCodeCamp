---
title: Ruby String Operations
localeTitle: Operaciones de cadena de rubíes
---
Tanto la concatenación como la multiplicación se pueden realizar en cadenas.

## Concatenación:

*   Las cadenas se pueden unir usando cualquiera de los siguientes métodos:
    
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
    

## Multiplicación:

*   Las cadenas se pueden multiplicar por un valor entero utilizando el operador `*` . `ruby "Hello" * 3 #=> HelloHelloHello`

## Sustitución de una subcadena

*   Podemos buscar sub-cadenas o usar Regex para buscar y reemplazar caracteres dentro de una cadena. `ruby "Hey mom, look at this string".sub('mom', 'dad') #=> Hey dad, look at this string`

## Comparación:

*   Las cadenas se pueden comparar, devuelve -1, 0, +1 o nil dependiendo de si la cadena es menor, igual o mayor que other\_string.

```ruby
"abcdef" <=> "abcde"     #=> 1 
 "abcdef" <=> "abcdef"    #=> 0 
 "abcdef" <=> "abcdefg"   #=> -1 
 "abcdef" <=> "ABCDEF"    #=> 1 

```