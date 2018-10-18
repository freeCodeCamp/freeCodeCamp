---
title: Split
localeTitle: División
---# Método de división

El método `String.Split` analiza una cadena: como entrada, toma un carácter que indica el separador y genera una matriz de cadenas secundarias.

## Ejemplo

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

## Salida:
```
> I 
 > like 
 > pizza 

```