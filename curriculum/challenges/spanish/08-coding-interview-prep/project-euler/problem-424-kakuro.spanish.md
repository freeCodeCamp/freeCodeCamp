---
id: 5900f5141000cf542c510026
challengeType: 5
title: 'Problem 424: Kakuro'
videoUrl: ''
localeTitle: 'Problema 424: Kakuro'
---

## Description
<section id="description"> Lo anterior es un ejemplo de un rompecabezas críptico kakuro (también conocido como sumas cruzadas, o incluso sumas cruzadas), con su solución final a la derecha. (Las reglas comunes de los rompecabezas kakuro se pueden encontrar fácilmente en numerosos sitios de Internet. Otra información relacionada también se puede encontrar actualmente en krazydad.com, cuyo autor ha proporcionado los datos del rompecabezas para este desafío). <p> El archivo de texto descargable (kakuro200.txt) contiene la descripción de 200 rompecabezas de este tipo, una mezcla de tipos 5x5 y 6x6. El primer rompecabezas en el archivo es el ejemplo anterior que está codificado de la siguiente manera: </p><p> 6, X, X, (vCC), (vI), X, X, X, (hH), B, O, (vCA), (vJE), X, (hFE, vD), O, O, O, O, (hA), O, I, (hJC, vB), O, O, (hJC), H, O, O, O, X, X, (hJE), O, O, X </p><p> El primer carácter es un dígito numérico que indica el tamaño de la cuadrícula de información. Sería un 6 (para un rompecabezas kakuro de 5x5) o un 7 (para un rompecabezas 6x6) seguido de una coma (,). La línea superior extra y la columna izquierda son necesarias para insertar información. </p><p> El contenido de cada celda se describe y sigue con una coma, yendo de izquierda a derecha y comenzando por la línea superior. X = celda gris, no se requiere que se llene con un dígito. O (mayúscula) = Celda vacía blanca que se rellena con un dígito. A = O cualquiera de las letras mayúsculas de A a J para ser reemplazada por su dígito equivalente en el rompecabezas resuelto. () = Ubicación de las sumas encriptadas. Las sumas horizontales están precedidas por una &quot;h&quot; minúscula y las verticales están precedidas por una &quot;v&quot; minúscula. A estos le siguen una o dos letras mayúsculas, dependiendo de si la suma es un dígito único o un dígito doble. Para sumas de dos dígitos, la primera letra sería para las &quot;decenas&quot; y la segunda para las &quot;unidades&quot;. Cuando la celda debe contener información para una suma tanto horizontal como vertical, la primera es siempre para la suma horizontal y las dos están separadas por una coma dentro del mismo conjunto de corchetes, ej .: (hFE, vD). Cada conjunto de corchetes también es seguido inmediatamente por una coma. </p><p> La descripción de la última celda va seguida de un retorno de carro / avance de línea (CRLF) en lugar de una coma. </p><p> La respuesta requerida a cada rompecabezas se basa en el valor de cada letra necesaria para llegar a la solución y de acuerdo con el orden alfabético. Como se indica en el ejemplo del rompecabezas, su respuesta sería 8426039571. Al menos 9 de las 10 cartas cifradas son siempre parte de la descripción del problema. Cuando solo se dan 9, al que falta se le debe asignar el dígito restante. </p><p> Se le da a usted que la suma de las respuestas para los primeros 10 rompecabezas en el archivo es 64414157580. </p><p> Encuentra la suma de las respuestas para los 200 rompecabezas. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler424()</code> debe devolver 1059760019628.
    testString: 'assert.strictEqual(euler424(), 1059760019628, "<code>euler424()</code> should return 1059760019628.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler424() {
  // Good luck!
  return true;
}

euler424();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
