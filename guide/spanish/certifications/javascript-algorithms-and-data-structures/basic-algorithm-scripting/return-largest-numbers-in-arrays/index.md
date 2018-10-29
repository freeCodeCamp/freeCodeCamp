---
title: Return Largest Numbers in Arrays
localeTitle: Devolver los números más grandes en matrices
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Obtendrá una matriz que contiene matrices secundarias de números y debe devolver una matriz con el número más alto de cada una de las matrices secundarias.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Deberá realizar un seguimiento de la matriz con la respuesta y el mayor número de cada sub-matriz.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Puede trabajar con matrices multidimensionales por `Array[Index][SubIndex]`

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Preste mucha atención a la sincronización del almacenamiento de variables cuando trabaje con bucles

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Soluciones por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

**(Enfoque procesal)**
```
function largestOfFour(arr) { 
  var results = []; 
  for (var n = 0; n < arr.length; n++) { 
    var largestNumber = arr[n][0]; 
    for (var sb = 1; sb < arr[n].length; sb++) { 
      if (arr[n][sb] > largestNumber) { 
        largestNumber = arr[n][sb]; 
      } 
    } 
 
    results[n] = largestNumber; 
  } 
 
  return results; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/734)

### Explicación del código:

*   Crea una variable para almacenar los _resultados_ como una matriz.
*   Cree un bucle externo para iterar a través de la matriz externa.
*   Cree una segunda variable para mantener el número más grande e inicialícelo con el primer número. Esto debe estar fuera de un bucle interno para que no se reasigne hasta que encontremos un número mayor.
*   Cree dicho bucle interno para trabajar con los subarreglos.
*   Compruebe si el elemento de la matriz secundaria es más grande que el número más grande almacenado actualmente. Si es así, entonces actualice el número en la variable.
*   Después del ciclo interno, guarde el número más grande en la posición correspondiente dentro de la matriz de `results` .
*   Y, finalmente, devolver dicho conjunto.

#### Enlaces relevantes

*   [Para bucles](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

**(Enfoque declarativo)**
```
function largestOfFour(arr) { 
  return arr.map(function(group){ 
    return group.reduce(function(prev, current) { 
      return (current > prev) ? current : prev; 
    }); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/733)

### Explicación del código:

*   asignamos todos los elementos dentro de la matriz principal a una nueva matriz utilizando `Array.prototype.map()` y devolvemos esta matriz como el resultado final
*   dentro de cada matriz interna, reducimos su contenido a un solo valor utilizando `Array.prototype.reduce()`
*   La función de devolución de llamada pasada al método de reducción toma el valor anterior y el valor actual y compara los dos valores.
*   si el valor actual es mayor que el valor anterior, lo establecemos como el nuevo valor anterior para comparar con el siguiente elemento dentro de la matriz o lo devuelve al método de devolución de llamada si es el último elemento

#### Enlaces relevantes

*   [Array.prototype.map ()](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [Array.prototype.reduce ()](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Operadores Ternarios](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

**(Enfoque declarativo)**
```
function largestOfFour(arr) { 
  return arr.map(Function.apply.bind(Math.max, null)); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/17)

### Explicación del código:

TL; DR: Construimos una función de devolución de llamada especial (usando el método `Function.bind` ), que funciona como `Math.max` pero también tiene la capacidad de `Function.prototype.apply` de tomar arreglos como sus argumentos ![:smiley:](https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3 ": smiley:")

*   Comenzamos por mapear a través de los elementos dentro de la matriz principal. Significando cada una de las matrices internas.
*   Ahora se necesita una función de devolución de llamada para encontrar el máximo de cada matriz interna proporcionada por el mapa.

Así que queremos crear una función que haga el trabajo de `Math.max` y acepte la entrada como una matriz (que no lo hace por defecto).

En otras palabras, sería realmente agradable y simple si esto funcionara solo:

`Math.max([9, 43, 20, 6]); // Resulting in 43`

Ay, no lo hace.

*   Para hacer el trabajo de aceptar argumentos en forma de una matriz, existe este método `Function.prototype.apply` , pero complica un poco las cosas _invocando_ la función de _contexto_ .

es decir, `Math.max.apply(null, [9, 43, 20, 6]);` `Max.max` algo como un método `Max.max` . Lo que estamos buscando ... casi.

Aquí estamos pasando `null` como el _contexto_ del método `Function.prototype.apply` ya que `Math.max` no necesita ningún contexto.

*   Como `arr.map` espera una función de devolución de llamada, no solo una expresión, creamos una función a partir de la expresión anterior mediante el método `Function.bind` .
    
*   Dado que `Function.prototype.apply` es un _método_ estático del mismo _objeto_ `Function` , podemos llamar a `Function.prototype.bind` en `Function.prototype.apply` es decir, `Function.prototype.apply.bind` .
    
*   Ahora pasamos el _contexto_ para la llamada `Function.prototype.apply.bind` (en este caso queremos `Math.max` para que podamos obtener su funcionalidad).
    
*   Dado que el método incorporado `Function.prototype.apply` también requerirá un contexto como primer argumento, debemos pasarle un _contexto_ falso.
    
    *   Por lo tanto, pasamos `null` como el segundo parámetro a `Function.prototype.apply.bind` que da un _contexto_ al método `Math.max` .
        
    *   Dado que `Math.max` es independiente de cualquier _contexto_ , por lo tanto, ignora el _contexto_ falso dado por la llamada al método `Function.prototype.apply` .
        
    *   Por lo tanto, nuestro `Function.prototype.apply.bind(Math.max, null)` una nueva función que acepta los valores `arr.map` , es decir, las matrices internas.
        

#### Enlaces relevantes

*   [Matemáticas.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
*   [Function.prototype.apply en DevDocs](http://devdocs.io/#q=js+Function+apply)
*   [Function.bind en DevDocs](http://devdocs.io/#q=js+Function+bind)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.