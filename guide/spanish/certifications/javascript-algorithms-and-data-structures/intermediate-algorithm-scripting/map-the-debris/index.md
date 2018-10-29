---
title: Map the Debris
localeTitle: Mapa de los escombros
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Lo primero que debe hacer es familiarizarse con lo que es el programa al saber qué es exactamente el período Orbital. Debe devolver una nueva matriz que transforma la altitud promedio del elemento en sus períodos orbitales. Las partes que generalmente se encuentran difíciles son encontrar la fórmula, implementarla y, para algunas personas, modificar los objetos con la tecla. Sin embargo, algo que no está muy claro es el hecho de que su programa debe poder verificar cualquier cantidad de objetos en la matriz; Esto es lo que se prueba en la segunda parte.

#### Enlaces relevantes

*   [Periodo orbital](https://en.wikipedia.org/wiki/Orbital_period)
*   [Objetos JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*   [Matemáticas.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
*   [JS Math Pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   [Math.sqrt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
*   [Math.round ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

La fórmula necesaria es:

![](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e212370f07c55165ff69f318ee1eed24779c7532.png)

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Use `Math.round()` para redondear al siguiente número entero como se solicita. Usar `Math.ceil()` te permitirá pasar la primera prueba pero fallará la segunda.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Descubra cómo eliminar y agregar una clave a un objeto de JavaScript.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
  var a = 2 * Math.PI; 
  var newArr = []; 
  var getOrbPeriod = function(obj) { 
    var c = Math.pow(earthRadius + obj.avgAlt, 3); 
    var b = Math.sqrt(c / GM); 
    var orbPeriod = Math.round(a * b); 
    delete obj.avgAlt; 
    obj.orbitalPeriod = orbPeriod; 
    return obj; 
  }; 
 
  for (var elem in arr) { 
    newArr.push(getOrbPeriod(arr[elem])); 
  } 
 
  return newArr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLow/0)

### Explicación del código:

*   **GM** y **EarthRadius nos** son dados.
*   Para hacer que el código sea más fácil de editar y leer, cada parte de la ecuación se escribe por separado.
*   Cree **newArr** para almacenar los `orbPeriod` 's.
*   **a** es 2 veces pi. La parte que es una constante está en el ámbito global, mientras que el resto forma parte de una función.
*   Cree una función, `gerOrbPeriod()` que hará el trabajo requerido para cualquier cantidad de objetos.
*   **c** es ( **earthRadius** + **avgAlt** ) al cubo.
*   **b** es la raíz cuadrada de **c** dividida por **GM** .
*   Cree **orbPeriod** para almacenar el producto de **a** y **b** , con la función `Math.round()` aplicada para redondear al siguiente número entero.
*   Luego eliminamos la clave **avgAlt** y agregamos la nueva clave y su valor.

#### Enlaces relevantes

*   [JS For In Loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  //Looping through each key in arr object 
  for(var prop in arr) { 
    //Rounding off the orbital period value 
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)); 
    //deleting the avgAlt property 
    delete arr[prop].avgAlt; 
    //adding orbitalPeriod property 
    arr[prop].orbitalPeriod = orbitalPer; 
  } 
 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLoy/0)

### Explicación del código:

*   **GM** y **EarthRadius nos** son dados.
*   Se `for..in` bucle `for..in` para iterar a través de cada valor en la matriz dada **arr** .
*   **orbitalPer** mantiene el valor del período orbital para cada iteración calculada utilizando la fórmula.
*   La clave **avgAlt** se elimina y **orbitalPer se** encuentra asignada en **arr** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  // Loop through each item in the array arr 
  arr.forEach(function(item) { 
    // Calculate the Orbital period value 
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)); 
    //Delete the avgAlt property 
    delete item.avgAlt; 
    //Add orbitalPeriod property 
    item.orbitalPeriod = tmp; 
  }); 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLoz/0)

### Explicación del código:

*   **GM** y **EarthRadius nos** son dados.
*   El método `forEach()` se utiliza para ejecutar la función una vez por elemento ( **elemento** ) en **arr** .
*   **tmp** contiene el valor del período orbital para cada elemento calculado con la fórmula.
*   La clave **avgAlt** se elimina y el período orbital ( **tmp** ) encontrado se asigna a la clave **orbitalPeriod** .

#### Enlaces relevantes

*   [JS Array Prototype ForEach](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.