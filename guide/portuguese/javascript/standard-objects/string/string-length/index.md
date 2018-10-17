---
title: String Length
localeTitle: Comprimento da corda
---
A propriedade `length` representa o tamanho de uma string.

## Sintaxe
```
str.length 
```

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/3d616214%28v=vs.94%29.aspx)

## Descrição

Esta propriedade retorna o número de unidades de código na string. UTF-16, o formato de string usado pelo JavaScript, usa uma única unidade de código de 16 bits para representar os caracteres mais comuns, mas precisa usar duas unidades de código para caracteres menos usados, portanto é possível que o valor retornado por comprimento seja não corresponde ao número real de caracteres na string.

Para uma string vazia, o comprimento é 0.

A propriedade estática `String.length` retorna o valor 1.

## Exemplos
```
var x = 'Mozilla'; 
 var empty = ''; 
 
 console.log('Mozilla is ' + x.length + ' code units long'); 
 /* "Mozilla is 7 code units long" */ 
 
 console.log('The empty string has a length of ' + empty.length); 
 /* "The empty string has a length of 0" */ 
 
 var str = "every good boy does fine"; 
        var start = 0; 
        var end = str.length - 1; 
        var tmp = ""; 
        var arr = new Array(end); 
 
        while (end >= 0) { 
            arr[start++] = str.charAt(end--); 
        } 
 
 // Join the elements of the array with a 
        var str2 = arr.join(''); 
        document.write(str2); 
 
 // Output: enif seod yob doog yreve 

```