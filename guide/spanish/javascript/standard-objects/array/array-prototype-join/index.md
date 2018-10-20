---
title: Array.prototype.join
localeTitle: Array.prototype.join
---
El método de matriz de JavaScript `.join()` combinará todos los elementos de una matriz en una sola cadena.

**Sintaxis**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor", "Sit"]; 
  var str = array.join([separator]); 
```

## Parámetros

**separador**

Opcional. Especifica la cadena a usar para separar cada elemento de la matriz original. Si el separador no es una cadena, se convertirá en una cadena. Si no se proporciona el parámetro separador, los elementos de la matriz se separan con una coma de forma predeterminada. Si el separador es una cadena vacía `""` , todos los elementos de la matriz se unen sin un carácter separador entre ellos.

## Descripción

`.join()` une todos los elementos de una matriz en una sola cadena. Si alguno de los elementos de la matriz `undefined` está `undefined` o es `null` , ese elemento se convierte a la cadena vacía `""` .

## Ejemplos

**Usando `.join()` cuatro maneras diferentes**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor" ,"Sit"]; 
 
  var join1 = array.join();           /* assigns "Lorem,Ipsum,Dolor,Sit" to join1 variable 
                                         (because no separator was provided .join() 
                                         defaulted to using a comma) */ 
  var join2 = array.join(", ");       // assigns "Lorem, Ipsum, Dolor, Sit" to join2 variable 
  var join3 = array.join(" + ");      // assigns "Lorem + Ipsum + Dolor + Sit" to join3 variable 
  var join4 = array.join("");         // assigns "LoremIpsumDolorSit" to join4 variable 
```

Fuente: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)