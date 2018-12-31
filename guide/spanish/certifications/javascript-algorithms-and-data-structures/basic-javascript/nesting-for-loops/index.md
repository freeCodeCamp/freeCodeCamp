---
title: Nesting For Loops
localeTitle: Anidando para bucles
---
## Anidando para bucles

**Recuerda usar Read-Search-Ask si te atascas. Intente vincular el programa: bustos _en_ silueta: y escriba su propio código: lápiz:**

: checkered\_flag: **Explicación del problema:**

Si tiene una matriz multidimensional, puede usar la misma lógica que el punto de ruta anterior para recorrer tanto la matriz como cualquier subarreglo.

Aquí hay un ejemplo:
```
var arr = [ 
  [1,2], [3,4], [5,6] 
 ]; 
 for (var i=0; i < arr.length; i++) { 
  for (var j=0; j < arr[i].length; j++) { 
    console.log(arr[i][j]); 
  } 
 } 
```

Esto genera cada subelemento en `arr` uno a la vez. Tenga en cuenta que para el bucle interno, estamos comprobando la longitud de arr \[i\], ya que arr \[i\] es en sí misma una matriz.

*   Modifique la función `multiplyAll` para que multiplique la variable del `product` por cada número en las subarreglas de `arr` .
*   Asegúrese de que el segundo bucle for esté anidado dentro del primero.

**Enlaces relevantes**

*   [Anidar una matriz dentro de otra matriz](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)
*   [Iterar a través de una matriz con un bucle for](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)
*   [Acceso a matrices anidadas](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays)

: speech\_balloon: Sugerencia: 1

Asegúrese de verificar con la `length` y no la matriz general.

_intenta resolver el problema ahora_

: speech\_balloon: Sugerencia 2

Usa tanto `i` como `j` cuando multipliques el producto.

_intenta resolver el problema ahora_

: speech\_balloon: Sugerencia 3

Recuerde utilizar `arr[i]` cuando multiplique los subarreglos con la variable del `product` .

_intenta resolver el problema ahora_

_¡Alerta de spoiler!_ ![](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

: principiante: **Solución de código básico:**
```
function multiplyAll(arr) { 
  var product = 1; 
  // Only change code below this line 
  for(var i=0; i < arr.length; i++){ 
    for (var j=0; j < arr[i].length; j++){ 
      product = product * arr[i][j]; 
    } 
  } 
  // Only change code above this line 
  return product; 
 } 
 
 // Modify values below to test your code 
 multiplyAll([[1,2],[3,4],[5,6,7]]); 
```

: cohete: **[Ejecutar código](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops/)**

**Explicación del código:**

*   Verificamos la longitud de `arr` en el bucle `i` for y la longitud `arr[i]` en el bucle `j` for.
*   Multiplicamos la variable del `product` por sí misma porque es igual a 1, y luego la multiplicamos por los subarreglos.
*   Las dos subarreglas para multiplicar son `arr[i]` y `j` .

: Portapapeles: **NOTAS DE CONTRIBUCIONES:**

*   : advertencia: **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es similar pero mejor, intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: Básica, Intermedia y Avanzada. :semáforo:
*   Agregue su nombre de usuario solo si ha agregado algún contenido principal relevante. (: advertencia: _**NO**_ elimine ningún nombre de usuario existente)

Vea: point\_right: [Wiki Challenge Solution Template](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.