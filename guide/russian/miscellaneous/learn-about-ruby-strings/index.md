---
title: Learn About Ruby Strings
localeTitle: Узнайте о Ruby Strings
---
### Основы:

*   Строки - это серия персонажей, «натянутых» между кавычками.
    
*   Одинарные или двойные кавычки могут использоваться для создания строк в Ruby.
    
*   Ruby делает некоторую дополнительную оценку по строкам, которые создаются с двойными кавычками, такими как:
    
    *   Экранирование символов: `\n` , `\t` , `\s`
        
    *   Использование переменных и выражений внутри: `#{variable or expression}`
        
*   Строки с одинарными кавычками отображаются так, как они есть, без каких-либо особых соображений.
    

## Примеры:
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

## Рекомендации:

*   [Официальная документация Ruby для строк](http://ruby-doc.org/core-2.2.0/String.html) .