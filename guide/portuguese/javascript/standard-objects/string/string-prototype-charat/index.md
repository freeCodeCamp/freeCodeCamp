---
title: String.prototype.charAt
localeTitle: String.prototype.charAt
---
O método `charAt()` retorna o caractere especificado de uma string.

## Sintaxe
```
str.charAt(index) 
```

## Parâmetros

**índice**

Um inteiro entre 0 e 1 a menos que o comprimento da string.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/65zt5h10%28v=vs.94%29.aspx)

## Descrição

Caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é 0, e o índice do último caractere em uma string chamado `stringName` é `stringName.length - 1` . Se o índice fornecido estiver fora do intervalo, o JavaScript retornará uma string vazia.

## Exemplos
```
var anyString = 'Brave new world'; 
 
 console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // 'B' 
 console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // 'r' 
 console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // 'a' 
 console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // 'v' 
 console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // 'e' 
 console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // '' 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charAt(str.length - 1)); 
 
 // Output: Z 

```