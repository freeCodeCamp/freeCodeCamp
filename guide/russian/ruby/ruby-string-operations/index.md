---
title: Ruby String Operations
localeTitle: Операции с Ruby String
---
Как конкатенацию, так и умножение можно выполнять по строкам.

## конкатенация:

*   Строки можно объединить, используя любой из следующих способов:
    
    *   `+` оператор
    *   `<<` оператор
    *   `.concat` метод
    
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
    

## Умножение:

*   Строки могут быть умножены на целое значение с помощью оператора `*` . `ruby "Hello" * 3 #=> HelloHelloHello`

## Замена подстроки

*   Мы можем искать подстроки или использовать Regex для поиска и замены символа в строке. `ruby "Hey mom, look at this string".sub('mom', 'dad') #=> Hey dad, look at this string`

## Сравнение:

*   Строки можно сравнивать, возвращает -1, 0, +1 или ноль в зависимости от того, меньше или меньше строки, чем другая\_страница.

```ruby
"abcdef" <=> "abcde"     #=> 1 
 "abcdef" <=> "abcdef"    #=> 0 
 "abcdef" <=> "abcdefg"   #=> -1 
 "abcdef" <=> "ABCDEF"    #=> 1 

```