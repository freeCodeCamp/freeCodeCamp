---
title: For Loop
localeTitle: Для цикла
---
# Для цикла

Цикл `for` выполняет блок кода до тех пор, пока указанное условие не станет ложным. Хотя `for` цикла выглядит как в [`while` цикла](https://guide.freecodecamp.org/csharp/while-loop) , разработчики должны использовать их **должным образом.** Используйте `while` когда число итераций является переменной, в противном случае используется `for` циклов. Обычное использование циклов `for` - это итерации массива. 1

## Синтаксис

```csharp
for ((Initial variable); (condition); (step)) 
    { 
    (code) 
    } 
```

Цикл C # for состоит из трех выражений и некоторого кода.

## Описание

*   _Начальная переменная_ : ваше начальное состояние, например int i = 0;
*   _Условие_ : хотя это условие верно, код будет продолжать работать, например i <= 5;
*   _Шаг_ : инкремент или декремент начальной переменной, например i ++ или i- = 2.

## пример

```csharp
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Вывод:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
 > Item on index 3 is 4 
 > Item on index 4 is 5 
```

### источники

1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for