---
title: Substring
localeTitle: Substring
---# Substring

`Substring` извлекает часть строкового значения. Он используется с двумя целыми параметрами, первый - это местоположение первого символа (начинается с индекса 0), а второе - желаемой длины символа.

## пример
```
string firstSentence = "Apple, I have."; 
 string secondSentence = "I have a Pen."; 
 
 string apple = firstSentence.Substring(0,5); 
 string pen = secondSentence.Substring(9,3); 
 
 Console.WriteLine(apple); 
 Console.WriteLine(pen); 
```

## Вывод:
```
>Apple 
 >Pen 

```