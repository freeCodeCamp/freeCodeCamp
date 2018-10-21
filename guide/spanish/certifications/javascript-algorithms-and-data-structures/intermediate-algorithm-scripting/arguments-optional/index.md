---
title: Arguments Optional
localeTitle: Argumentos Opcionales
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Puede ser bastante complicado entender lo que se necesita hacer. Siempre hay muchas maneras de hacer algo al codificar, pero independientemente del algoritmo utilizado, tenemos que crear un programa que haga lo siguiente:

*   Tiene que sumar dos números pasados ​​como parámetros y devolver la suma.
*   Tiene que verificar si alguno de los números son números reales; de lo contrario, devuelva **indefinido** y detenga el programa allí mismo.
*   Tiene que comprobar si tiene uno o dos argumentos pasados. Más son ignorados.
*   Si tiene solo un argumento, entonces tiene que devolver una función que usa ese número y espera otro, para luego agregarlo.

### Enlaces relevantes

*   [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
*   [tipo de](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [objeto de argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Cada vez que trata con un argumento, debe verificar si es un número o no. Para esto, una función que maneja esta tarea le ahorrará el código repetido.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Cuando trabaje en el caso de que necesite devolver la función, es conveniente verificar si el primer y único argumento es un número nuevamente y basar el código en eso.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

En el caso de que solo se haya pasado un argumento, no se preocupe acerca de cómo solicitar una entrada para el segundo, solo haga la definición de la función correctamente y las cosas funcionarán como deberían.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function addTogether() { 
      // Function to check if a number is actually a number 
      // and return undefined otherwise. 
      var checkNum = function(num) { 
        if (typeof num !== 'number') { 
          return undefined; 
        } else 
          return num; 
      }; 
 
      // Check if we have two parameters, check if they are numbers 
      // handle the case where one is not 
      // returns the addition. 
      if (arguments.length > 1) { 
        var a = checkNum(arguments[0]); 
        var b = checkNum(arguments[1]); 
        if (a === undefined || b === undefined) { 
          return undefined; 
        } else { 
          return a + b; 
        } 
      } else { 
        // If only one parameter was found, returns a new function that expects two 
        // Store first argument before entering the new function scope 
        var c = arguments[0]; 
 
        // Check the number again, must be outside the function to about returning an object 
        // instead of undefined. 
        if (checkNum(c)) { 
          // Return function that expect a second argument. 
          return function(arg2) { 
            // Check for non-numbers 
            if (c === undefined || checkNum(arg2) === undefined) { 
              return undefined; 
            } else { 
              // if numbers then add them. 
              return c + arg2; 
            } 
          }; 
        } 
      } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnz/0)

### Explicación del código:

*   Primero, creo una función con el único propósito de verificar si un número es realmente un número y devuelve undefined si no lo es. Utiliza **typeof** para comprobar.
*   Verifique si tenemos dos parámetros, si es así, luego verifique si son números o no usando la función **checkNum** que creé.
*   Si no están **indefinidos** , agréguelos y devuelva la suma. Si alguno de ellos no está definido, devuélvalo sin definir.
*   En el caso de que solo tengamos un argumento, devolvemos una nueva función que espera dos parámetros. Para esto almacenamos el primer argumento antes de entrar en un nuevo ámbito para evitar que nuestros argumentos se sobrescriban.
*   Aún dentro de la otra gran cosa, necesitamos verificar el argumento que guardamos, si es un número, entonces devolvemos la función esperando un segundo argumento.
*   Ahora, dentro de la función que estamos devolviendo, tenemos que verificar los números que no son números al igual que al principio usando **checkNum** si no está definido y luego devolver eso, de lo contrario si los números los agregan y devuelven la suma.

#### Enlaces relevantes

*   [tipo de](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [objeto de argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    function addTogether() { 
      var args = new Array(arguments.length); 
      //Storing the arguments in an array 
      for(var i = 0; i < args.length; ++i) { 
          args[i] = arguments[i]; 
        } 
     //Check for the arguments length 
     if(args.length == 2){ 
        //If there are two arguments,check for the type of both arguments 
        //Use typeof to check the type of the argument(both should be numbers) 
        if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
          return undefined; 
          } 
        return args[0]+args[1]; 
       } 
     //When only one argument is provided 
     if(args.length == 1){ 
         a= args[0]; 
         //Check the  argument using typeof 
        if(typeof a!=='number'){ 
            return undefined; 
          } 
        else{ 
           //Making use of closures 
           return function(b){ 
           //Checking the second argument 
             if(typeof b !=='number'){ 
               return undefined; 
               } 
             else 
               return a+b; 
              }; 
          } 
        } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLoA/0)

### Explicación del código:

*   Primero almacene los argumentos en una matriz creando una matriz usando el método del constructor.
*   Agrega cada argumento a la nueva matriz.
*   Luego verifique la longitud de la nueva matriz, ya que necesitamos saber si tenemos suficiente o no.
*   Verifique el tipo de argumentos usando `typeof` ya que ambos deben ser números.
*   Devuelve undefined si alguno de ellos no es un número, o devuelve la suma de ellos si lo es.
*   Si solo había un argumento, todavía verificamos el tipo después de almacenarlo en una nueva variable y devolver una función nueva o no definida.

#### Enlaces relevantes

*   [tipo de](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [objeto de argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

```javascript
    //jshint esversion: 6 
    function addTogether() { 
      var args = Array.from(arguments); 
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ? 
          args.reduce((acc, n) => acc += n, 0): 
          (n) => typeof n === "number" ? 
            n + args[0]: 
            undefined; 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLoB/0)

### Explicación del código:

*   Primero, repaso los argumentos y verifico los argumentos que no son un número y devuelvo undefined
*   Si no es así, compruebo si la longitud de los argumentos es superior a 1, si es que sumo los argumentos utilizando Array.prototype.reduce
*   De lo contrario, devuelvo una función que verifica si el argumento pasado es un número y lo sumo, si no devuelve indefinido

#### Enlaces relevantes

*   [Array.prototype.reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Array.prototype.some](http://forum.freecodecamp.com/t/javascript-array-prototype-some/14304)
*   [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

> **NOTA:** agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** a la página wiki. (No elimine ningún nombre de usuario existente).

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.