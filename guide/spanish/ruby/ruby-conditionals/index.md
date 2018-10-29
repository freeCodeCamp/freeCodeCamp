---
title: Ruby Conditionals
localeTitle: Condicionales de rubí
---
Ruby tiene varios condicionales de uso común.

## Si las declaraciones

Una condición extremadamente común en muchos lenguajes de programación, la declaración comprueba si la condición es verdadera, luego se ramifica en la acción especificada. Una sentencia if consta de una `if` , cualquier número de `elsif` y, como máximo, `else` declaración.

*   ```ruby
    fruit = :apple 
     
     if fruit == :apple 
      puts "Your fruit is an apple" 
     elsif fruit == :orange 
      puts "Your fruit is an orange" 
     else 
      puts "This is not an apple or an orange" 
     end 
    
    ```
    

### A menos que la declaración

Una sentencia a menos es lo opuesto a una sentencia if. Es lo mismo que una sentencia if negada.

*   `ruby happy = true if !happy puts "This person is not happy" end` La declaración anterior es igual a la declaración a continuación
*   `ruby unless happy puts "This person is not happy" end`

## Declaración Ternaria

Una declaración ternaria se utiliza como una breve declaración condicional. Está escrito como sigue

*   `ruby game = "won" fans = game == "won" ? "happy" : unhappy fans # => "happy"`

## Declaración del caso

Una declaración de caso es similar a una instrucción if / elsif / else

*   ```ruby
    fruit = :apple 
     
     case fruit 
     when :apple 
      puts "Your fruit is an apple" 
     when :orange 
      puts "Your fruit is an orange" 
     else 
      puts "This is not an apple or an orange" 
     end 
    
    ```