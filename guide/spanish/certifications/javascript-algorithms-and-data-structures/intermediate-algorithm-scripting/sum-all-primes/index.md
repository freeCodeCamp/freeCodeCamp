---
title: Sum All Primes
localeTitle: Suma todos los premios
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

La explicación para este problema es muy simple. Generará una lista de números primos hasta el número que se le da como parámetro. Entonces necesitas sumarlos todos y devolver ese valor. La parte difícil está en generar la lista de números primos. Te sugiero que encuentres un código o un buen algoritmo matemático que puedas convertir en código.

#### Enlaces relevantes

*   [Números primos](https://en.wikipedia.org/wiki/Prime_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Genere una lista de todos los números hasta e incluyendo el que obtuvo como parámetro. Esto será necesario para determinar qué números son primos o no.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Marque este [enlace](https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100) si prefiere encontrar una solución para encontrar números primos, o intente aprender e implementar su propio [Tamiz de Eratóstenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Este problema es difícil si tiene que crear su propio código para verificar los números primos, así que no se sienta mal si tuviera que usar el código de alguien para ese bit. De cualquier manera, lo más probable es que estés usando una matriz, así que una vez que generes una matriz de números primos, simplemente agrégalos todos y devuelve el número que obtienes.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function sumPrimes(num) { 
  var res = 0; 
 
  // Function to get the primes up to max in an array 
  function getPrimes(max) { 
    var sieve = []; 
    var i; 
    var j; 
    var primes = []; 
    for (i = 2; i <= max; ++i) { 
      if (!sieve[i]) { 
        // i has not been marked -- it is prime 
        primes.push(i); 
        for (j = i << 1; j <= max; j += i) { 
          sieve[j] = true; 
        } 
      } 
    } 
 
    return primes; 
  } 
 
  // Add the primes 
  var primes = getPrimes(num); 
  for (var p = 0; p < primes.length; p++) { 
    res += primes[p]; 
  } 
 
  return res; 
 } 
 
 // test here 
 sumPrimes(10); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnZ/0)

### Explicación del código:

*   Cree una función que genere los números del 1 al **num** y verifique si son primos en el camino.
*   Declara las variables que serán necesarias.
*   Comience con 2, si no se ha marcado y agregado a la matriz de tamices, es primo y lo agregamos a la matriz principal.
*   Agregue los otros a la matriz del tamiz.
*   Devuelve los primos
*   Recorra la matriz devuelta y agregue todos los elementos para luego devolver el valor final.

#### Enlaces relevantes

*   [JS For Loops Explicado](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function sumPrimes(num) { 
  // function to check if the number presented is prime 
  function isPrime(number){ 
      for (i = 2; i <= number; i++){ 
          if(number % i === 0 && number!= i){ 
          // return true if it is divisible by any number that is not itself. 
             return false; 
          } 
       } 
       // if it passes the for loops conditions it is a prime 
      return true; 
  } 
  // 1 is not a prime, so return nothing, also stops the recursive calls. 
  if (num === 1){ 
    return 0; 
  } 
  // Check if your number is not prime 
  if(isPrime(num) === false){ 
  // for non primes check the next number down from your maximum number, do not add anything to your answer 
    return sumPrimes(num - 1); 
  } 
 
  // Check if your number is prime 
  if(isPrime(num) === true){ 
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function. 
    return num + sumPrimes(num - 1); 
  } 
 } 
 // test here 
 sumPrimes(10); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLn0/0)

### Explicación del código:

*   La función `isPrime` verifica si un número particular es primo o no.
*   Si `num` es 1, devuelve 0 ya que 1 no es un número primo.
*   Si **num** no es primo, marque el siguiente número hacia abajo desde el número máximo.
*   Si **num** es primo, agréguelo al siguiente número en la secuencia mediante la recursión a la función `sumPrimes` .

#### Enlaces relevantes

*   [Funciones - Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function sumPrimes(num) { 
  // step 1 
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2 
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1; 
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false; 
        m--; 
    } 
      return true; 
  }); 
  // step 3 
  return onlyPrimes.reduce((a,b) => a+b); 
 } 
 // test here 
 sumPrimes(977); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/DoOo/3)

### Explicación del código:

*   **Paso 1:** Use `Array.from()` para generar una secuencia de números hasta e incluyendo `num` . Combine con `.slice()` para cortar los primeros dos índices `[0, 1]` ya que todos los números primos deben ser mayores que 1.
*   **Paso 2:** filtre todos los números de `arr` que no son primos al someter cada elemento a la _"prueba de división de prueba"_ que _consiste en dividir n por cada entero m que sea mayor que 1 y menor o igual que la raíz cuadrada de n "_ . Esta prueba devuelve `false` si cualquier número menor que el elemento operado en (m) no produce ningún resto cuando dicho elemento (n) está dividido por él. Vea el enlace de abajo para más información sobre esto.
*   **Paso 3:** Devuelva la suma de todos los elementos restantes de arr usando `.reduce()` .

### Enlaces relevantes

*   [Prueba de división de prueba](https://en.wikipedia.org/wiki/Prime_number#Trial_division)
*   [Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Examples)
*   [Array.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.