---
title: Split
localeTitle: Dividido
---# Método Dividido

O método `String.Split` analisa uma string: Como entrada, recebe um caractere indicando o separador e gera uma matriz de subcadeias.

## Exemplo

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

## Saída:
```
> I 
 > like 
 > pizza 

```