---
title: Dna Pairing
localeTitle: Apareamiento de ADN
---
![ADN](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

*   Obtendrá una secuencia de hebra de ADN y deberá obtener el par y devolverlo como una matriz 2D de los pares de bases. Tenga en cuenta que el hilo provisto debe ser siempre el primero.
    
*   Otra forma de interpretar el problema: existen cuatro caracteres potenciales en el ADN: "A", "T", "G" y "C". "A" y "T" siempre están emparejados juntos, y "G" y "C" siempre están emparejados juntos.  
    Este problema le presenta una entrada, por ejemplo, "ATCGA". A cada uno de esos cinco personajes les faltan sus pares.  
    Por ejemplo, el primer carácter "A" debe emparejarse con "T" para dar el elemento de matriz \["A", "T"\].  
    El segundo carácter "T" debe emparejarse con "A" para proporcionar el elemento de matriz \["T", "A"\].  
    El número de elementos en la salida final es igual al número de caracteres en la entrada.
    

Este problema no implica reorganizar la entrada en diferentes combinaciones o permutaciones.

#### Enlaces relevantes

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [String.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

*   Hay dos casos básicos, AT y CG, que van en ambos sentidos. Puedes usar expresiones regulares, si son declaraciones de cualquier cosa que puedas imaginar.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

*   Recomendaría usar un interruptor, ya que hace las cosas mucho más suaves.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

*   El resultado debe ser una serie de matrices, así que tenlo en cuenta al impulsar cosas.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function pairElement(str) { 
      // Return each strand as an array of two elements, the original and the pair. 
      var paired = []; 
 
      // Function to check with strand to pair. 
      var search = function(char) { 
        switch (char) { 
          case 'A': 
            paired.push(['A', 'T']); 
            break; 
          case 'T': 
            paired.push(['T', 'A']); 
            break; 
          case 'C': 
            paired.push(['C', 'G']); 
            break; 
          case 'G': 
            paired.push(['G', 'C']); 
            break; 
        } 
      }; 
 
      // Loops through the input and pair. 
      for (var i = 0; i < str.length; i++) { 
        search(str[i]); 
      } 
 
      return paired; 
    } 
 
    // test here 
    pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmz/0)

### Explicación del código:

*   El programa es muy simple, la mejor solución que he encontrado es usar un interruptor para capturar todos los cuatro elementos posibles. Usando las sentencias if tomaría demasiado código. También puedes usar expresiones regulares.
*   Ya que tenemos el original y el par, decidí tomar los cuatro casos en lugar de los dos básicos.
*   Cree una matriz vacía y use la función de `search` para enviar los valores correctos a la matriz y devolverlos.

#### Enlaces relevantes

*   [Cambiar declaraciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    function pairElement(str) { 
    //create object for pair lookup 
    var pairs = { 
      "A": "T", 
      "T": "A", 
      "C": "G", 
      "G": "C" 
    } 
    //split string into array of characters 
    var arr = str.split(""); 
    //map character to array of character and matching pair 
    return arr.map(x => [x,pairs[x]]); 
  } 
 
  //test here 
  pairElement("GCG"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/repls/ThoroughSphericalComputeranimation)

## Explicación del código:

*   Primero defina un objeto con todas las posibilidades de pares, esto nos permite encontrarlo fácilmente por clave o valor.
*   Dividir `str` en una matriz de caracteres para que podamos usar cada letra para encontrar su par.
*   Utilice la función de mapa para asignar cada carácter de la matriz a una matriz con el carácter y su par correspondiente, creando una matriz 2D.

#### Enlaces relevantes

*   [Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [Accesores de propiedad](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
*   [Funciones de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.