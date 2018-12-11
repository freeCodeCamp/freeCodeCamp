---
title: Ruby Conditionals
localeTitle: Condicionais do Ruby
---
Ruby possui vários condicionais comumente usados.

## Se declarações

Uma condicional extremamente comum em muitas linguagens de programação, a instrução testa se a condição é verdadeira e se ramifica na ação especificada. Uma declaração if consiste em um `if` , qualquer número de `elsif` e no máximo uma `else` declaração.

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
    

### A menos que seja uma declaração

Uma declaração a menos é o oposto de uma declaração if. É o mesmo que uma declaração if negada.

*   `ruby happy = true if !happy puts "This person is not happy" end` A declaração acima é igual à declaração abaixo
*   `ruby unless happy puts "This person is not happy" end`

## Declaração Ternária

Uma instrução ternária é usada como uma instrução condicional curta. Está escrito da seguinte forma

*   `ruby game = "won" fans = game == "won" ? "happy" : unhappy fans # => "happy"`

## Declaração de caso

Uma declaração de caso é semelhante a uma instrução if / elsif / else

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