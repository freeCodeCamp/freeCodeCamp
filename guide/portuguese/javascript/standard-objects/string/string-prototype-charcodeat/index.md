---
title: String.prototype.charCodeAt
localeTitle: String.prototype.charCodeAt
---
O método `charCodeAt()` retorna o valor numérico Unicode do caractere no índice fornecido (exceto para pontos de código unicode> 0x10000).

## Sintaxe
```
str.charCodeAt(index) 
```

### Parâmetros

**índice**

Um inteiro maior ou igual a 0 e menor que o comprimento da string; se não for um número, o valor padrão é 0.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/hza4d04f%28v=vs.94%29.aspx)

## Descrição

Observe que `charCodeAt()` sempre retornará um valor menor que 65536. Isso ocorre porque os pontos de código mais altos são representados por um par de pseudo-caracteres "substitutos" (valor inferior) que são usados ​​para compor o caractere real. Por causa disso, para examinar ou reproduzir o caractere completo para caracteres individuais de valor 65536 e acima, para tais caracteres, é necessário recuperar não apenas `charCodeAt(i)` , mas também `charCodeAt(i+1)` (como se estivesse examinando / reproduzindo uma string com duas letras). Veja o exemplo 2 e 3 abaixo.

`charCodeAt()` retorna `NaN` se o `index` fornecido for menor que 0 ou for igual ou maior que o comprimento da string.

## Exemplos
```
'ABC'.charCodeAt(0); // returns 65 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charCodeAt(str.length - 1)); 
 
 // Output: 90 

```