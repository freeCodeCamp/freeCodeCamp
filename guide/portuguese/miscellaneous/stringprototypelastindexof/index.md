---
title: String.prototype.lastIndexOf
localeTitle: String.prototype.lastIndexOf
---
O método `lastIndexOf()` retorna o índice dentro do objeto String de chamada da última ocorrência do valor especificado, ou -1 se não for encontrado. A string de chamada é pesquisada para trás, começando em `fromIndex` .

## Sintaxe
```
str.lastIndexOf(searchValue<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf' target='_blank' rel='nofollow'>, fromIndex]) 
```

## Parâmetros

**searchValue**

Uma string representando o valor a ser pesquisado.

**fromIndex**

Opcional. O local dentro da string de chamada para iniciar a pesquisa, indexado da esquerda para a direita. Pode ser qualquer inteiro. O valor padrão é `str.length` . Se for negativo, será tratado como 0. Se `fromIndex > str.length` , `fromIndex` será tratado como `str.length` .

\[Ligação MDN | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/6d20k718%28v=vs.94%29.aspx)

## Retorna

Retorna a última ocorrência de uma substring na string.

## Descrição

Caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é 0 e o índice do último caractere é `stringName.length - 1` .

O método `lastIndexOf()` faz `lastIndexOf()` maiúsculas e minúsculas. Por exemplo, a expressão a seguir retorna `-1` :

## Exemplos
```
'canal'.lastIndexOf('a');     // returns 3 
 'canal'.lastIndexOf('a', 2);  // returns 1 
 'canal'.lastIndexOf('a', 0);  // returns -1 
 'canal'.lastIndexOf('x');     // returns -1 
 'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1 
 
 var anyString = 'Brave new world'; 
 
 console.log('The index of the first w from the beginning is ' + anyString.indexOf('w')); 
 // logs 8 
 console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); 
 // logs 10 
 console.log('The index of "new" from the beginning is ' + anyString.indexOf('new')); 
 // logs 6 
 console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new')); 
 // logs 6 
 
 var str = "time, time"; 
 
 var s = ""; 
 s += "time is at position " + str.lastIndexOf("time"); 
 s += "<br />"; 
 s += "abc is at position " + str.lastIndexOf("abc"); 
 
 document.write(s); 
 
 // Output: 
 // time is at position 6 
 // abc is at position -1 

```