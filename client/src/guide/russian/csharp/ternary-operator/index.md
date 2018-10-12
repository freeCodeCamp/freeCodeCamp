---
title: Ternary operator
localeTitle: Тернарный оператор
---
# Тернарный оператор ( `?:` :)

Тернарный оператор возвращает одно из двух выражений, основанное на условии. Его можно использовать в качестве ярлыка для выражения if ... else.

## Синтаксис
```
condition_expression ? expression_1 : expression_2 
```

### параметр

`condition_expression` Булевое выражение.

`expression_1` Возвращается, если выражение `condition_expression` истинно.

`expression_2` Возвращается, если выражение `condition_expression` равно false.

## пример
```
// initialize - set true or false here to view different result 
 bool hasFreeSweet = false; 
 
 string str = hasFreeSweet ? "Free sweet!" : "No free sweet."; 
 
 //output in console 
 Console.WriteLine(str); 
```

## Вывод
```
if hasFreeSweet == true 
 > Free sweet! 
 
 if hasFreeSweet == false 
 > No free sweet. 

```