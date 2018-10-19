---
title: Output 
localeTitle: Salida
---
## Salida

Hay 4 formas más comunes en las que enviará sus datos a través de la consola. Estos serán utilizados la mayor parte de su proceso de desarrollo.

#### `console.log`

Es la forma más común y utilizada para generar los datos. Es una práctica común insertar un par de estos entre sentencias para entender cómo fluyen y procesan los datos. Además, puede usar el `debugger` o los puntos de interrupción en devtools para hacer lo mismo sin contaminar su código.

```javascript
var numbers  = [ 1, 2, 3, 4, 5, 6, 7]; 
 numbers.forEach(function(number){ 
  console.log(number + ' is divisible by 2', number%2 == 0); 
 }); 
```

#### `console.warn`

Como lo adivinó por el nombre, se usa para mostrar advertencias, y su color amarillo típico lo diferencia del error red & `console.log` .

```javascript
function isAdult(age){ 
  if(Number(age) < 18){ 
    console.warn('You are not an adult'); 
    return false; 
   } 
   return true; 
 } 
```

#### `console.error`

Como puede adivinar, esto se usa cuando se lanza una excepción o un error en el código. Te da el mensaje de error rojo para llamar la atención rápidamente.

#### `console.table`

Supongamos que tiene una lista de elementos o películas en un objeto json y desea verificar eso en formato de tabla, entonces `console.table` es su mejor apuesta. Detecta automáticamente los encabezados de las filas y columnas a partir de los datos.

_Intenta ejecutar el siguiente código en tu consola_

```javascript
var data = { 
  "colors": [ 
    { 
      "color": "black", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,255,1], 
      "hex": "#000" 
    }, 
    { 
      "color": "white", 
      "category": "value", 
      "rgba": [0,0,0,1], 
      "hex": "#FFF" 
    }, 
    { 
      "color": "red", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,0,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "blue", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [0,0,255,1], 
      "hex": "#00F" 
    }, 
    { 
      "color": "yellow", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "green", 
      "category": "hue", 
      "type": "secondary", 
      "rgba": [0,255,0,1], 
      "hex": "#0F0" 
 
    }, 
  ] 
 } 
 
 console.table(data.colors); 
```

Además, puede controlar y filtrar el tipo de salida que desea ver en la consola.

1.  Todas
2.  Verboso
3.  Advertencia
4.  Los errores

#### Más información:

*   [Referencia completa del objeto consola por Google.](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
*   [Consola MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console)