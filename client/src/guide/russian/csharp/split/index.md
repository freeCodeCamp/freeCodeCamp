---
title: Split
localeTitle: Трещина
---# Метод разделения

Метод `String.Split` анализирует строку: в качестве ввода принимает символ, указывающий разделитель, и генерирует массив подстрок.

## пример

```csharp
string myText = "I like pizza"; 
 
 // Split the string by ' '(space) character. 
 string[] splitResult = myText.Split(' '); 
 
 // The array splitResult, now contains three substrings. 
 
 // Now print the array of substrings 
 foreach(string x in splitResult) 
 { 
    // Write On Console 
    Console.WriteLine(x); 
 } 
```

## Вывод:
```
> I 
 > like 
 > pizza 

```