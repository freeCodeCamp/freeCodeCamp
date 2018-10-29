---
title: Ruby Conditionals
localeTitle: Условные обозначения Ruby
---
Ruby имеет несколько обычно используемых условностей.

## Если заявления

Чрезвычайно распространенное условие во многих языках программирования, утверждение проверяет, является ли условие истинным, затем вступает в указанное действие. Оператор if состоит из одного, `if` , любое количество `elsif` и не более одного `else` .

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
    

### Если не указано

Оператор if исключает противоположность оператора if. Это то же самое, что и оператор с отрицанием if.

*   `ruby happy = true if !happy puts "This person is not happy" end` Вышеприведенный оператор равен приведенному ниже заявлению
*   `ruby unless happy puts "This person is not happy" end`

## Тройное заявление

В качестве короткого условного утверждения используется тернарный оператор. Оно написано следующим образом

*   `ruby game = "won" fans = game == "won" ? "happy" : unhappy fans # => "happy"`

## Заявление о случаях

Оператор case похож на оператор if / elsif / else

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