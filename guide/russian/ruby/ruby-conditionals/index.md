---
title: Ruby Conditionals
localeTitle: Условные операторы в Ruby
---
В Ruby есть несколько часто используемых условных операторов (операторов ветвления).

## Оператор If

Достаточно распространенный оператор во многих языках программирования, он выполняет только ту часть кода для которой условие истинно, иначе выполняется код из блока `else` . Оператор if состоит из одного, `if` , может включать любое количество `elsif` и одного необязательного `else` .

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
    

### Оператор Unless

Оператор unless противоположность оператора if. Другими словами, это оператор if с отрицанием.

*   `ruby happy = true if !happy puts "This person is not happy" end` Эквиваленто следующему
*   `ruby unless happy puts "This person is not happy" end`

## Тернарный оператор

В качестве короткого условного оператора используется тернарный оператор. Он имеет следующий синтаксис:

*   `ruby game = "won" fans = game == "won" ? "happy" : unhappy fans # => "happy"`

## Оператор Case

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
