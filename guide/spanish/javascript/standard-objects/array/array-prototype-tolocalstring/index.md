---
title: Array.prototype.toLocaleString
localeTitle: Array.prototype.toLocaleString
---
## Array.prototype.toLocaleString

El método `toLocaleString()` devuelve una cadena que representa los elementos de una matriz. Todos los elementos se convierten en cadenas utilizando sus métodos toLocaleString. El resultado de llamar a esta función está destinado a ser específico de la localidad.

##### Sintaxis:
```
arr.toLocaleString(); 
```

##### Parámetros

*   `locales` (Opcional): argumento que contiene una cadena o una matriz de etiquetas de idioma [BCP 47 etiqueta de idioma](http://tools.ietf.org/html/rfc5646) .
*   `options` (opcional) - objeto con propiedades de configuración

##### Valor de retorno

Una cadena que representa los elementos de la matriz separados por una cadena específica del entorno local (como una coma ",")

## Ejemplos

```javascript
var number = 12345; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myString = myArray.toLocaleString(); 
 
 console.log(myString); 
 // OUTPUT '12345,10/25/2017, 4:20:02 PM,foo' 
```

Se podrían mostrar diferentes salidas en función del idioma y el identificador de la región (la configuración regional).

```javascript
var number = 54321; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myJPString = myArray.toLocaleString('ja-JP'); 
 
 console.log(myJPString); 
 // OUTPUT '54321,10/26/2017, 5:20:02 PM,foo' 
```

### Más información:

Fuente: [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)