---
title: Numbers
localeTitle: Números
---
## Números

La implementación de los `number` de JavaScript se basa en el estándar `IEEE 754` , a menudo denominado "punto flotante".

[Enlace de Wikipedia IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) [Visualización de punto flotante de doble precisión IEEE 754](http://bartaz.github.io/ieee754-visualization/)

Los literales numéricos se expresan generalmente como literales decimales de `base-10` .

```javascript
var foo = 47; 
 var bar = 47.9; 
```

La parte inicial de un valor decimal, si es `0` , es opcional:

```javascript
var same = 0.47; 
 var stillSame = .47; 
```

Del mismo modo, la parte posterior (la fracción) de un valor decimal después de la `.` , si `0` , es opcional:

```javascript
var a = 47.0; 
 var b = 47.; 
```

De forma predeterminada, la mayoría de los números se mostrarán como decimales `base-10` , con los `0` s fraccionados al final. Asi que:

```javascript
var foo = 47.300; 
 var bar = 47.0; 
 
 foo; // 47.3 
 bar; // 47 
```

Los `numbers` muy grandes o muy pequeños se pueden escribir como:

```javascript
var foo = 47e8; // 4700000000 
 var baz = 47e-8; // 00.00000047 
```

`toExponential` método `toExponential` se puede usar para convertir un `number` en su `exponential notation` .

```javascript
var foo = 47e8; 
 foo;  // 4700000000 
 foo.toExponential()   //"47e8" 
```

Los números tienen acceso a métodos que están integrados en `Number.prototype` .

Por ejemplo: `toFixed()` método `toFixed()` formatea un número con un número específico de dígitos a la derecha del decimal.

```javascript
var foo = 47.69; 
 foo.toFixed(0);  // "48" 
 foo.toFixed(1);  // "47.7" 
 foo.toFixed(2);  // "47.69" 
```

> Escriba `Number.prototype` en su navegador y vea usted mismo otros métodos disponibles.

#### Más información:

1.  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
2.  [Números de JavaScript](https://www.w3schools.com/js/js_numbers.asp)

#### Referencias

1.  [Tipos y gramática](https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar) por Kyle Simpson.
2.  [Especificación del lenguaje ECMAScript: 4.3.20](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.20)
3.  [Especificación del lenguaje ECMAScript: 15.7 objetos numéricos](https://www.ecma-international.org/ecma-262/5.1/#sec-15.7)