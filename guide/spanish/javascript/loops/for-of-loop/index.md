---
title: For...Of Loop
localeTitle: Para ... de loop
---
La sentencia `for...of` crea un bucle que recorre objetos iterables (incluidos los objetos Array, Map, Set, Arguments, etc.), invocando un enganche de iteración personalizado con sentencias que se ejecutarán para el valor de cada propiedad distinta.

```javascript
    for (variable of object) { 
        statement 
    } 
```

| | Descripción | | ---------- | ------------------------------------- | | variable | En cada iteración se asigna un valor de una propiedad diferente a la variable. | | objeto | Objeto cuyas propiedades enumerables están iteradas. |

## Ejemplos

### Formación

```javascript
    let arr = [ "fred", "tom", "bob" ]; 
 
    for (let i of arr) { 
        console.log(i); 
    } 
 
    // Output: 
    // fred 
    // tom 
    // bob 
```

### Mapa

```javascript
    var m = new Map(); 
    m.set(1, "black"); 
    m.set(2, "red"); 
 
    for (var n of m) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1,black 
    // 2,red 
```

### Conjunto

```javascript
    var s = new Set(); 
    s.add(1); 
    s.add("red"); 
 
    for (var n of s) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1 
    // red 
```

### Objeto de argumentos

```javascript
    // your browser must support for..of loop 
    // and let-scoped variables in for loops 
 
    function displayArgumentsObject() { 
        for (let n of arguments) { 
            console.log(n); 
        } 
    } 
 
 
    displayArgumentsObject(1, 'red'); 
 
    // Output: 
    // 1 
    // red 
```

# Otros recursos:

*   [Enlace MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for…of)
*   [Enlace MSDN](https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)
*   [argumentos @@ iterador](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)