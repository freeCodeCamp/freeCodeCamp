---
title: Break statement
localeTitle: Вывод фразы
---
# Вывод фразы

Оператор `break` завершает заключенный цикл или оператор switch, в котором он появляется. Элемент управления передается в оператор, который следует за циклом или блоком коммутатора.

В первом примере, когда значение i равно 3, выполняется оператор break, что приводит к прекращению выполнения цикла.

## пример
```
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if(i == 3) 
  { 
    break; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Вывод:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
```

Во втором примере оператор break включается в конце каждого случая. Это выполняет заявления в случае, не переходя к следующему случаю. Без инструкции break программа продолжит выполнение следующего случая и не будет функционировать должным образом.

## пример
```
switch (exampleVariable) 
 { 
    case 1: 
        Console.WriteLine("case 1"); 
        Console.WriteLine("This only shows in example 1"); 
        break; 
    case 2: 
        Console.WriteLine("case 2"); 
        Console.WriteLine("This only shows in example 2"); 
    Console.WriteLine("This also only shows in example 2"); 
        break; 
    Console.WriteLine("This would not show anywhere, as it is after the break line and before the next case"); 
    default: 
        Console.WriteLine("default"); 
        Console.WriteLine("This only shows in the Default Example"); 
        break; 
 } 
```

## Вывод:
```
> case 1 
 > This only shows in example 1 
 > 
 > case  2 
 > This only shows in example 2 
 > This also only shows in example 2 
 > 
 > default 
 > This only shows in the Default Example 
 > 

```