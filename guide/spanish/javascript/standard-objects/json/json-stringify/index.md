---
title: JSON Stringify
localeTitle: JSON Stringify
---
## JSON Stringify

El método `JSON.stringify()` convierte un valor de JavaScript _seguro_ para JSON en una cadena compatible con JSON.

¿Cuáles son los valores seguros de JSON que uno puede preguntar? Hagamos una lista de todos los valores inseguros de JSON y cualquier cosa que no esté en la lista puede considerarse segura para JSON.

#### Valores inseguros de JSON:

*   `undefined`
*   `function(){}`
*   (ES6 +) `Symbol`
*   Un objeto con referencia (s) circular (es) en él.

#### Sintaxis

```javascript
  JSON.stringify( value [, replacer [, space]]) 
```

En su forma más simple y más utilizada:

```javascript
  JSON.stringify( value ) 
```

#### Parámetros

`value` : el valor de JavaScript que se 'stringifica'.

`replacer` : (Opcional) Una función o una matriz que sirve como filtro para las propiedades del objeto de valor que se incluirán en la cadena JSON.

`space` : (Opcional) Un valor numérico o de cadena para proporcionar sangría a la cadena JSON. Si se proporciona un valor numérico, muchos espacios (hasta 10) actúan como indentables en cada nivel. Si se proporciona un valor de cadena, esa cadena (hasta los primeros 10 caracteres) actúa como sangría en cada nivel.

#### Tipo de retorno

El tipo de retorno del método es: `string` .

## Descripción

Los valores seguros de JSON se convierten a su forma de cadena JSON correspondiente. Los valores inseguros de JSON por otro lado devuelven:

*   `undefined` si se pasan como valores al método
*   `null` si se pasan como un elemento de matriz
*   nada si se pasa como propiedades en un objeto
*   arroja un error si se trata de un objeto con referencias circulares.

```javascript
  //JSON-safe values 
  JSON.stringify({});                  // '{}' 
  JSON.stringify(true);                // 'true' 
  JSON.stringify('foo');               // '"foo"' 
  JSON.stringify([1, 'false', false]); // '[1,"false",false]' 
  JSON.stringify({ x: 5 });            // '{"x":5}' 
  JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))  // '"2006-01-02T15:04:05.000Z"' 
 
  //JSON-unsafe values passed as values to the method 
  JSON.stringify( undefined );                    // undefined 
  JSON.stringify( function(){} );                    // undefined 
 
  //JSON-unsafe values passed as array elements 
  JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });  // '{"x":[10,null,null,null]}' 
 
 //JSON-unsafe values passed as properties on a object 
  JSON.stringify({ x: undefined, y: Object, z: Symbol('') });  // '{}' 
 
  //JSON-unsafe object with circular reference on it 
  var o = { }, 
    a = { 
      b: 42, 
      c: o, 
      d: function(){} 
    }; 
 
  // create a circular reference inside `a` 
  oe = a; 
 
  // would throw an error on the circular reference 
  // JSON.stringify( a ); 
```

`JSON.stringify(...)` comporta de manera diferente si un objeto que se le pasa tiene un `toJSON()` definido. El valor de retorno del `toJSON()` se serializará en lugar del objeto en sí.

Esto es excepcionalmente útil cuando un objeto contiene cualquier valor JSON ilegal.

```javascript
   //JSON-unsafe values passed as properties on a object 
   var obj = { x: undefined, y: Object, z: Symbol('') }; 
 
   //JSON.stringify(obj);  logs '{}' 
   obj.toJSON = function(){ 
    return { 
      x:"undefined", 
      y: "Function", 
      z:"Symbol" 
    } 
   } 
   JSON.stringify(obj);  //"{"x":"undefined","y":"Function","z":"Symbol"}" 
 
  //JSON-unsafe object with circular reference on it 
  var o = { }, 
    a = { 
      b: 42, 
      c: o, 
      d: function(){} 
    }; 
 
  // create a circular reference inside `a` 
  oe = a; 
 
  // would throw an error on the circular reference 
  // JSON.stringify( a ); 
 
  // define a custom JSON value serialization 
  a.toJSON = function() { 
    // only include the `b` property for serialization 
    return { b: this.b }; 
  }; 
 
  JSON.stringify( a ); // "{"b":42}" 
```

#### El `replacer`

El `replacer` , como se mencionó anteriormente, es un filtro que indica qué propiedades deben incluirse en la cadena JSON. Puede ser una matriz o una función. Cuando es una matriz, el sustituto contiene las representaciones de cadena de solo aquellas propiedades que se incluirán en la cadena JSON.

```javascript
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, ['week', 'month']);    // '{"week":45,"month":7}', only keep "week" and "month" properties 
```

Si el `replacer` es una función, se llamará una vez para el objeto en sí, y luego una vez para cada propiedad en el objeto, y cada vez se pasan dos argumentos, _clave_ y _valor_ . Para omitir una _clave_ en la serialización, se debe devolver `undefined` . De lo contrario, el _valor_ proporcionado debe ser devuelto. Si alguno de estos _valores_ son objetos en sí mismos, la función de `replacer` serializa también recursivamente.

```javascript
  function replacer(key, value) { 
    // Filtering out properties 
    if (typeof value === 'string') { 
      return undefined; 
    } 
    return value; 
  } 
 
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}; 
  JSON.stringify(foo, replacer);  // '{"week":45,"month":7}' 
```

Si se pasa una matriz a `JSON.stringify()` y el `replacer` devuelve `undefined` para cualquiera de sus elementos, el valor del elemento se reemplaza por `null` . `replacer` funciones de `replacer` no pueden eliminar valores de una matriz.

```javascript
  function replacer(key, value) { 
    // Filtering out properties 
    if (typeof value === 'string') { 
      return undefined; 
    } 
    return value; 
  } 
 
  var foo = ['Mozilla', 'box', 45, 'car', 7]; 
  JSON.stringify(foo, replacer);  // "[null,null,45,null,7]" 
```

#### El `space`

El parámetro de `space` utilizado para la sangría hace que el resultado de `JSON.stringify()` más bonito.

```javascript
  var a = { 
    b: 42, 
    c: "42", 
    d: [1,2,3] 
  }; 
 
  JSON.stringify( a, null, 3 ); 
  // "{ 
  //    "b": 42, 
  //    "c": "42", 
  //    "d": [ 
  //       1, 
  //       2, 
  //       3 
  //    ] 
  // }" 
 
  JSON.stringify( a, null, "-----" ); 
  // "{ 
  // -----"b": 42, 
  // -----"c": "42", 
  // -----"d": [ 
  // ----------1, 
  // ----------2, 
  // ----------3 
  // -----] 
  // }" 
```

#### Más información:

Consulte la [documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) .