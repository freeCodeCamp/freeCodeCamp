---
title: Algoritmo De Argumentos Opcionales
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

### Explicación:

Puede ser un poco complicado entender lo que se debe hacer. Cuando programamos existen diferentes maneras de realizar algo. Sin importar el algoritmo utilizado necesitamos crear una función que realice lo siguiente:

*   Tiene que sumar dos números recibidos como parámetros y retornar el resultado.
*   Tiene que comprobar que ambos números sean realmente números, en caso contrario retornar **undefined** y detener la función en el momento.
*   Tiene que comprobar que los argumentos recibidos sean uno o dos. Si hay más deben ser ignorados.
*   Si sólo es recibido un argumento se debe retornar una función que acepte otro argumento para luego realizar la suma.

## Pista: 1

Cada vez que trabajas un argumento debes comprobar si es realmente un número o no. Para evitar repetir código deberías crear una función que se ocupe de esta tarea.

## Pista: 2

Cuando se de el caso que sea necesario retornar la función es aconsejable comprobar si el primer y único argumento es un número de nuevo y basar el código en eso.

## Pista: 3

En el caso de que se reciba sólo un argumento no te preocupes sobre como solicitar el segundo, simplemente haz la definición de la función apropiadamente y todo funcionará como debería.

## ¡Alerta de Spoiler!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución abajo!**

## Solución del código:

    function addTogether() {
      // Función para comprobar si un número es realmente un número
      // y retornar undefined en caso contrario.
      var checkNum = function(num) {
        if (typeof num !== 'number') {
          return undefined;
        } else
          return num;
      };

      // Comprobar si tenemos dos parámetros y si ambos son números
      // En caso que no lo sean retornamos undefined
      // retornamos la suma
      if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
          return undefined;
        } else {
          return a + b;
        }
      } else {
        // Si solo es encontrado un parámetro retornamos una nueva función para solicitar un segundo parámetro
        // Guardamos el primer argumento antes de entrar al scope de la nueva función
        var c = arguments[0];

        // Comprobamos que sea número de nuevo, debe ser fuera del objeto que retornaremos
        // en lugar de undefined.
        if (checkNum(c)) {
          // // Retornamos la función que espera el segundo parámetro.
          return function(arg2) {
            // Comprobamos que no sean números.
            if (c === undefined || checkNum(arg2) === undefined) {
              return undefined;
            } else {
              // Si lo son, sumamos.
              return c + arg2;
            }
          };
        }
      }
    }

    // realizamos el test
    addTogether(2,3);

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CLnz/0' target='_blank' rel='nofollow'>¡En REPL!</a>

### Explicación del código:

*   Primero creamos una función con el solo propósito de comprobar si un número es realmente un número y retornamos undefined si no lo es. Utiliza **typeof** para comprobar.
*   Comprobamos si tenemos dos parámetros, si tenemos, comprobamos que si son números o no utilizando la función **checkNum**.
*   Si los parámetros no son **undefined** los sumamos y retornamos la suma. Si uno de ellos es undefined entonces retornamos undefined.
*   En caso que solo tengamos un argumento entonces retornamos una nueva función que espera dos parámetros. Para esto almacenamos el segundo parámetro antes de entrar a la función para evitar sobrescribir el argumento.
*   Aún dentro del primer _else_ necesitamos comprobar que el argumento guardado es un número, si lo es entonces retornamos la función esperando el segundo argumento.
*   Ahora dentro de la función que retornaremos tenemos que comprobar que el nuevo parámetro sea un número utilizando **checkNum**, si es undefined retornaremos eso y encaso contrario sumaremos los números y retornaremos el resultado.

## Segunda solución:

    function addTogether() {
      var args = new Array(arguments.length);
      // Almacenamos los argumentos en un array.
      for(var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
      }
      // Comprobamos la cantidad de argumentos.
      if(args.length == 2){
        // Si hay dos argumentos, comprobamos el tipo de ambos
        // Utiliza typeof para comprobar el tipo de argumentos. (ambos deben ser números)
        if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
          return undefined;
        }
        return args[0]+args[1];
      }
      // Cuando solo un argumento es provisto.
      if(args.length == 1){
        a = args[0];
        // Comprobamos el tipo utilizando typeof.
        if(typeof a!=='number'){
          return undefined;
        }
        else{
          // Hacemos uso de las funciones internas.
          return function(b){
          // Comprobamos el segundo parámetro.
          if(typeof b !=='number'){
            return undefined;
          }
          else
            return a+b;
          };
        }
      }
    }

    // realizamos el test
    addTogether(2,3);

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CLoA/0' target='_blank' rel='nofollow'>¡En REPL!</a>

## Tercer solución:

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

    // realizamos el test
    addTogether(2,3);

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CLoB/0' target='_blank' rel='nofollow'>¡En REPL!</a>

### Explicación del código:

*   Primero iteramos los argumentos y comprobamos que sean números y si no lo son retornamos undefined.
*   Luego comprobamos que la cantidad de argumento sea mayor a 1, si lo es sumamos los argumentos utilizando `Array.prototype.reduce`
*   Caso contrario retornamos una función que compruebe que el parámetro recibido sea número y lo suma, si no retornamos undefined.

> **NOTA:** Por favor añade tu nombre de usuario solamente si has añadido **contenido relevante** al artículo. (Por favor no remuevas ningún nombre existente.)
