---
title: String.prototype.includes
localeTitle: String.prototype.includes
---
## String.prototype.includes

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/string/string-prototype-includes/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

La `includes()` método se utiliza para determinar si o no una cadena se puede encontrar en otra cadena. Este método devuelve un valor booleano (ya sea `true` o `false` ).

Es importante tener en cuenta que este método distingue entre mayúsculas y minúsculas.

**Sintaxis**

```js
string.includes(searchString[, position]) 
```

**Parámetros**

Este método requiere solo un parámetro (searchString). Sin embargo, mediante la inclusión de un segundo parámetro (posición), puede comenzar la búsqueda de una cadena dentro de una cadena desde una posición específica (o índice) en el searchString que.

**Ejemplos**

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

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)