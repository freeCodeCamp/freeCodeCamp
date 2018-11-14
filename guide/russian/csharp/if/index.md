---
title: If
localeTitle: Если
---
# Если

Оператор if выполняет различные блоки кода на основе условий.
```
if (condition) 
 { 
    // Do something when `condition` is true 
 } 
 else 
 { 
    // Do something when `condition` is false 
 } 
```

Когда `condition` истинно, код внутри , `if` это секция выполняется, в противном случае `else` выполняется. Иногда вам нужно добавить второе условие. Для удобочитаемости вы должны использовать `else if` не вложенные инструкции `if` . вместо написания:
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else 
 { 
    if (anotherCondition) 
    { 
        // Do something if `anotherCondition` is true 
    } 
    else 
    { 
        // Do something if `condition` AND `anotherCondition` is false 
    } 
 } 
```

Вы можете использовать гораздо более сжатое письмо:
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) 
 { 
    // Do something if `anotherCondition` is ture 
 } 
 else 
 { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

Также возможно проверить, является ли условие ложным и действовать на нем, не имея необходимости иметь инструкцию else.
```
if(!condition) 
 { 
 //do something if the condition is false 
 } 
```

```
int number = 3; 
 //!= implies that you wish to check if the object's value is not equal to the value next to it 
 if(number !=2) 
 { 
     Console.WriteLine("Number is not 2"); 
 } 
```

Обратите внимание, что разделы `else` и `else if` не требуются, а `if` это обязательно.

## пример
```
    Console.WriteLine("Who are you? "); 
    string name = Console.ReadLine(); 
 
    if (name == "John") 
    { 
        Console.WriteLine("Hi John!"); 
    } 
    else if (name == "Fabio") 
    { 
        Console.WriteLine("Oh, it's you Fabio :)"); 
    } 
    else 
    { 
        Console.WriteLine("Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!", name); 
    } 
 
    /* Run and type some names: 
        -> If name is "John", then output is "Hi John!" 
        -> If name is "Fabio", then output is "Oh, it's you Fabio :)" 
        -> If name is neither "John" nor "Fabio", output is "Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!" where {0} contains the name. 
    */ 
```

Оператор if требует логического результата, то есть true или false. В некоторых языках программирования несколько типов данных могут быть автоматически преобразованы в booleans, но в C # вы должны специально сделать результат логическим. Например, вы не можете использовать if (number), но вы можете сравнивать число с чем-то, чтобы генерировать true или false.