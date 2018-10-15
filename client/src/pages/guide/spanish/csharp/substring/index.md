---
title: Substring
localeTitle: Subcadena
---# Subcadena

`Substring` extrae una parte de un valor de cadena. Se utiliza con 2 parámetros enteros, el primero es la ubicación del primer carácter (comienza con el índice 0) y el segundo es la longitud del carácter deseado.

## Ejemplo
```
string firstSentence = "Apple, I have."; 
 string secondSentence = "I have a Pen."; 
 
 string apple = firstSentence.Substring(0,5); 
 string pen = secondSentence.Substring(9,3); 
 
 Console.WriteLine(apple); 
 Console.WriteLine(pen); 
```

## Salida:
```
>Apple 
 >Pen 

```