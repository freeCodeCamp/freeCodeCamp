---
title: String.prototype.includes
localeTitle: String.prototype.includes
---
## String.prototype.includes

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/string/string-prototype-includes/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

O método `includes()` é usado para determinar se uma string pode ou não ser encontrada em outra string. Este método retorna um valor booleano ( `true` ou `false` ).

Importante notar é que esse método faz distinção entre maiúsculas e minúsculas.

**Sintaxe**

```js
string.includes(searchString[, position]) 
```

**Parâmetros**

Este método requer apenas um parâmetro (searchString). No entanto, incluindo um segundo parâmetro (posição), você pode iniciar sua pesquisa por uma string dentro de uma string a partir de uma posição específica (ou índice) na searchString.

**Exemplos**

```js
let string = "Roses are red, violets are blue."; 
 
 string.includes('red'); // returns true 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('Red'); // returns false 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('red',12); // returns false because 'red' starts at position 9, and our search begins at position 12. 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('blue',12); // returns true because 'blue' starts after our search begins at position 12. 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('violets are blue'); // returns true 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)