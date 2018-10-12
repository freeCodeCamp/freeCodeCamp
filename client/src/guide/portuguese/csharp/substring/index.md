---
title: Substring
localeTitle: Substring
---# Substring

`Substring` extrai uma parte de um valor de string. É usado com 2 parâmetros inteiros, o primeiro é a localização do primeiro caractere (começa com o índice 0) e o segundo é o tamanho do caractere desejado.

## Exemplo
```
string firstSentence = "Apple, I have."; 
 string secondSentence = "I have a Pen."; 
 
 string apple = firstSentence.Substring(0,5); 
 string pen = secondSentence.Substring(9,3); 
 
 Console.WriteLine(apple); 
 Console.WriteLine(pen); 
```

## Saída:
```
>Apple 
 >Pen 

```