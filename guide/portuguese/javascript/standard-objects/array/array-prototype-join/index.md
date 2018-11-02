---
title: Array.prototype.join
localeTitle: Array.prototype.join
---
O método de array JavaScript `.join()` combinará todos os elementos de um array em uma única string.

**Sintaxe**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor", "Sit"]; 
  var str = array.join([separator]); 
```

## Parâmetros

**separador**

Opcional. Especifica a string a ser usada para separar cada elemento da matriz original. Se o separador não for uma string, ele será convertido em uma string. Se o parâmetro separador não for fornecido, os elementos da matriz serão separados por vírgula por padrão. Se o separador for uma string vazia `""` , todos os elementos da matriz serão unidos sem um caractere separador entre eles.

## Descrição

`.join()` junta todos os elementos de um array em uma única string. Se algum dos elementos da matriz for `undefined` ou `null` , esse elemento será convertido na string vazia `""` .

## Exemplos

**Usando `.join()` quatro maneiras diferentes**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor" ,"Sit"]; 
 
  var join1 = array.join();           /* assigns "Lorem,Ipsum,Dolor,Sit" to join1 variable 
                                         (because no separator was provided .join() 
                                         defaulted to using a comma) */ 
  var join2 = array.join(", ");       // assigns "Lorem, Ipsum, Dolor, Sit" to join2 variable 
  var join3 = array.join(" + ");      // assigns "Lorem + Ipsum + Dolor + Sit" to join3 variable 
  var join4 = array.join("");         // assigns "LoremIpsumDolorSit" to join4 variable 
```

Fonte: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)