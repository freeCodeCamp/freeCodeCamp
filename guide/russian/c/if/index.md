---
title: If
localeTitle: Если
---
# Если

Оператор if выполняет различные блоки кода на основе условий.
```
if (condition) { 
    // Do something when `condition` is true 
 } 
 else { 
    // Do something when `condition` is false 
 } 
```

Когда `condition` истинно, код внутри , `if` это секция выполняется, в противном случае `else` выполняется. Иногда вам нужно добавить второе условие. Для удобочитаемости вы должны использовать `else if` не вложенные инструкции `if` .
```
if (condition) { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) { 
    // Do something if `anotherCondition` is ture 
 } 
 else { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

Обратите внимание, что разделы `else` и `else if` не требуются, а `if` это обязательно.

## пример
```
#include <stdio.h> 
 
 int main () { 
 
   // Local variable definition 
   int a = 10; 
 
   // Check the boolean condition 
   if(a < 5) { 
      // If condition is true then print the following 
      printf("a is less than 5!\n" ); 
   } 
   else { 
      // If condition is false then print the following 
      printf("a is not less than 5!\n" ); 
   } 
 
   printf("Value of a is : %d\n", a); 
 
   return 0; 
 } 
```

## Вывод
```
-> a is not less than 5! 
 -> Value of a is : 100 

```