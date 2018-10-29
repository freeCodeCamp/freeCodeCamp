---
title: Free Code Camp JavaScript Style Guide
localeTitle: Guía de estilo gratuita de Code Camp JavaScript
---
o cómo la gente fresca escribe JavaScript.

## Sangrar

Siempre use dos espacios  
No hay pestañas duras, nunca. No realmente, simplemente no lo hagas.

## Tirantes rizados

Siempre use llaves cuando utilice las palabras clave `if/else/else if` . Esto evita mucha ambigüedad y prevendrá errores de sintaxis en algunos casos de borde.

Malo:
```
if (foo) bar(); 
```

Bueno:
```
if (foo) { bar(); } 
```

## ¡Apoyos rizados en todas partes!

Espacio después de la palabra clave de la `function` , excepto en funciones anónimas

Bueno:
```
function foo() { 
 } 
 
 var foo = function() { 
  // ... 
 }; 
```

Malo:
```
function foo () 
 { 
  // ... 
 } 
 
 var foo = function () { 
  // ... 
 }; 
```

## Comentarios

*   no hay comentarios en línea
*   espacio único después de `//`
*   No utilice comentarios multilínea `/* */` , estamos reservando estos para su uso con jsDocs.

## Palabras clave

*   espacio inmediatamente después si, else, while, etc.
*   la apertura de la abrazadera debe estar siempre en la misma línea.

Bueno:
```
if (true) { 
 // do the thing 
 } 
```

Malo:
```
if(true) 
 { 
 // do the thing 
 } 
```

## Más

Evita otra cosa y "termina temprano". En JavaScript a menudo hay mucha sangría (generalmente cuando se trata de código asíncrono y se llama "infierno de devolución de llamada"). Cualquier cosa que pueda hacer para reducir el número de sangrías debe hacerse. Una cosa es [evitar la](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) palabra clave [else](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) .

Esto también tiene el efecto secundario de hacer que el código sea más limpio y fácil de leer.

Malo:
```
someAsynFunc(function(err, data) { 
  if (err) { 
    callback(err); 
  } else { 
    // do stuff with data 
  } 
 }); 
```

Bueno:
```
someAsynFunc(function(err, data) { 
  if (err) { 
    return callback(err); 
  } 
  // do stuff with data 
  // saves one indent 
 }); 
```

## Cuerdas largas

Las cadenas largas multilínea deben tener una de dos formas:
```
var longString = 
  'long strings should ' + 
  'be in this form, with the ' + 
  'operator ending the line'; 
 
 var foo = 'bar'; 
 
 var longString = [ 
  'long strings with variables such as ', 
  foo, 
  'should ', 
  'be in this form, an array of strings ', 
  'that are joined with the join array instance method', 
 ].join(''); 
```

…más por venir