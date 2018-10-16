---
title: Array.prototype.lastIndexOf
localeTitle: Array.prototype.lastIndexOf
---
## Array.prototype.lastIndexof

O método `lastIndexOf()` retorna o último índice no qual um dado elemento pode ser encontrado na matriz, ou -1 se não estiver presente. A matriz é pesquisada de trás para frente, começando em `fromIndex` .

**Sintaxe**

```javascript
  arr.lastIndexOf(searchElement, fromIndex = arr.length - 1]) 
```

## Parâmetros

*   **searchElement**
    
    *   Elemento para localizar na matriz.
*   **fromIndex**
    
    *   _Opcional_ O índice no qual começar a pesquisar para trás. O padrão é o comprimento da matriz menos um, ou seja, toda a matriz será pesquisada. Se o índice for maior ou igual ao comprimento da matriz, toda a matriz será pesquisada. Se negativo, é considerado como o deslocamento do final da matriz. Observe que, mesmo quando o índice é negativo, a matriz ainda é pesquisada de trás para frente. Se o índice calculado for menor que 0, será retornado -1, ou seja, a matriz não será pesquisada.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679972%28v=vs.94%29.aspx)

## Retorna

O índice da última ocorrência de `searchElement` na matriz, ou -1, se `searchElement` não for encontrado.

## Descrição

`lastIndexOf` compara `searchElement` a elementos do Array usando igualdade estrita (o mesmo método usado pelo operador ===, ou triple-equals,).

## Observações

A pesquisa ocorre na ordem de índice decrescente (último membro primeiro). Para pesquisar em ordem crescente, use o método `indexOf` .

O argumento opcional `fromIndex` especifica o índice da matriz na qual iniciar a pesquisa. Se `fromIndex` for maior ou igual ao comprimento da matriz, toda a matriz será pesquisada. Se `fromIndex` for negativo, a pesquisa será iniciada no comprimento da matriz e no `fromIndex` . Se o índice calculado for menor que 0, -1 será retornado.

## Exemplos

```javascript
  var array = [2, 5, 9, 2]; 
  array.lastIndexOf(2);     // 3 
  array.lastIndexOf(7);     // -1 
  array.lastIndexOf(2, 3);  // 3 
  array.lastIndexOf(2, 2);  // 0 
  array.lastIndexOf(2, -2); // 0 
  array.lastIndexOf(2, -1); // 3 
 
  // Create an array. 
  var ar = ["ab", "cd", "ef", "ab", "cd"]; 
 
  // Determine the first location, in descending order, of "cd". 
  document.write(ar.lastIndexOf("cd") + "<br/>"); 
 
  // Output: 4 
 
  // Find "cd" in descending order, starting at index 2. 
  document.write(ar.lastIndexOf("cd", 2) + "<br/>"); 
 
  // Output: 1 
 
  // Search for "gh" (which is not found). 
  document.write(ar.lastIndexOf("gh")+ "<br/>"); 
 
  // Output: -1 
 
  // Find "ab" with a fromIndex argument of -3. 
  // The search in descending order starts at index 3, 
  // which is the array length minus 2. 
  document.write(ar.lastIndexOf("ab", -3) + "<br/>"); 
  // Output: 0 

```