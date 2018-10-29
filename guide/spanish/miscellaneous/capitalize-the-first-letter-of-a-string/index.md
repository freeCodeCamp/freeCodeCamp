---
title: Capitalize the First Letter of a String
localeTitle: Poner en mayúscula la primera letra de una cadena
---
Para poner en mayúscula la primera letra de una cadena aleatoria, debe seguir estos pasos:

1.  Consigue la primera letra de la cadena;
2.  Convertir la primera letra a mayúsculas;
3.  Obtener el resto de la cadena;
4.  Concatene la primera letra en mayúsculas con el resto de la cadena y devuelva el resultado;

## 1\. Obtener la primera letra de la cadena

Debes usar el método [charAt ()](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932) , en el _índice 0_ , para seleccionar el primer carácter de la cadena.

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0); // Returns "f" 
```

> NOTA: `charAt` es preferible que el uso de `[ ]` ( [notación entre corchetes](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) ) como `str.charAt(0)` devuelve una cadena vacía ( _`''`_ ) para `str = ''` lugar de `undefined` en el caso de `''[0]` .

## 2\. Convertir la primera letra a mayúsculas

Puedes usar el método [toUpperCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) y convertir la cadena de llamada a mayúsculas.

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0).toUpperCase(); // Returns "F" 
```

## 3\. Obtener el resto de la cadena

Puede usar el método [slice ()](https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice) y obtener el resto de la cadena (desde el segundo carácter, _índice 1_ hasta el final de la cadena).

```javascript
var string = "freeCodecamp"; 
 
 string.slice(1); // Returns "reeCodecamp" 
```

## 4\. Devuelva el resultado agregando la primera letra y el resto de la cadena

Debería crear una función que acepte una cadena como único argumento y devuelva la concatenación de la primera letra. en mayúsculas `string.charAt(0).toUpperCase()` y el resto de la cadena `string.slice(1)` .

```javascript
var string = "freeCodecamp"; 
 
 function capitalizeFirstLetter(str) { 
  return str.charAt(0).toUpperCase() + str.slice(1); 
 } 
 
 capitalizeFirstLetter(string); // Returns "FreeCodecamp" 
```

O puede agregar esa función al `String.prototype` para usarla directamente en una cadena usando el siguiente código ( _para que el método no sea enumerable, pero se pueda sobrescribir o eliminar más adelante_ ):

```javascript
var string = "freeCodecamp"; 
 
 /* this is how methods are defined in prototype of any built-in Object */ 
 Object.defineProperty(String.prototype, 'capitalizeFirstLetter', { 
    value: function () { 
        return this.charAt(0).toUpperCase() + this.slice(1); 
    }, 
    writable: true, // so that one can overwrite it later 
    configurable: true // so that it can be deleted later 
 }); 
 
 string.capitalizeFirstLetter(); // Returns "FreeCodecamp" 
```

### Fuente

[stackoverflow - Poner en mayúscula la primera letra de la cadena en JavaScript](http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087)