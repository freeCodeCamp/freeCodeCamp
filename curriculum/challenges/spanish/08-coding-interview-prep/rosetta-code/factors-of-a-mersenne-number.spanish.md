---
title: Factors of a Mersenne number
id: 598eea87e5cf4b116c3ff81a
challengeType: 5
videoUrl: ''
localeTitle: Factores de un número de Mersenne
---

## Description
<section id="description"><p> Un número de Mersenne es un número en forma de 2 <sup>P</sup> -1. </p><p> Si P es primo, el número de Mersenne puede ser un primo de Mersenne </p><p> (Si P no es primo, el número de Mersenne tampoco es primo). </p><p> En la búsqueda de números primos de Mersenne es ventajoso eliminar los exponentes al encontrar un factor pequeño antes de comenzar una <a href="http://rosettacode.org/wiki/Lucas-Lehmer test" title="Prueba de Lucas-Lehmer">prueba de Lucas-Lehmer</a> potencialmente larga. </p><p> Hay algoritmos muy eficientes para determinar si un número divide 2 <sup>P</sup> -1 (o equivalentemente, si 2 <sup>P</sup> mod (el número) = 1). </p><p> Algunos idiomas ya tienen implementaciones integradas de esta operación de exponente y mod (llamada modPow o similar). </p><p> Lo siguiente es cómo implementar este modPow usted mismo: </p><p> Por ejemplo, vamos a calcular 2 <sup>23</sup> mod 47. </p><p> Convierte el exponente 23 a binario, obtienes 10111. Comenzando con <tt>square</tt> = 1, cuadrándolo repetidamente. </p><p> Elimine el bit superior del exponente y, si es 1, multiplique el <tt>cuadrado</tt> por la base de la exponenciación (2), luego calcule el módulo <tt>cuadrado</tt> 47. </p><p> Utilice el resultado del módulo del último paso como el valor inicial del <tt>cuadrado</tt> en el siguiente paso: </p><p> Eliminar opcional </p><p> bit cuadrado superior multiplicar por 2 mod 47 </p><p> ------------ ------- ------------- ------ </p><p> 1 * 1 = 1 1 0111 1 * 2 = 2 2 </p><p> 2 * 2 = 4 0 111 no 4 </p><p> 4 * 4 = 16 1 11 16 * 2 = 32 32 </p><p> 32 * 32 = 1024 1 1 1024 * 2 = 2048 27 </p><p> 27 * 27 = 729 1 729 * 2 = 1458 1 </p><p> Dado que 2 <sup>23</sup> mod 47 = 1, 47 es un factor de 2 <sup>P</sup> -1. </p><p> (Para ver esto, reste 1 de ambos lados: 2 <sup>23</sup> -1 = 0 mod 47.) </p><p> Como hemos demostrado que 47 es un factor, 2 <sup>23</sup> -1 no es primo. </p><p> Otras propiedades de los números de Mersenne nos permiten refinar el proceso aún más. </p><p> Cualquier factor q de 2 <sup>P</sup> -1 debe tener la forma 2kP + 1, siendo k un entero positivo o cero. Además, q debe ser 1 o 7 mod 8. </p><p> Finalmente cualquier factor potencial q debe ser <a href="http://rosettacode.org/wiki/Primality by Trial Division" title="Primalidad por división de prueba">primo</a> . </p><p> Como en otros algoritmos de división de prueba, el algoritmo se detiene cuando 2kP + 1&gt; sqrt (N). </p><p> Estas pruebas de primalidad solo funcionan en los números de Mersenne donde P es primo. Por ejemplo, M <sub>4</sub> = 15 no produce factores utilizando estas técnicas, sino factores en 3 y 5, ninguno de los cuales se ajusta a 2kP + 1. </p> Tarea: <p> Usando el método anterior, encuentre un factor de 2 <sup>929</sup> -1 (también conocido como M929) </p> Tareas relacionadas: <a href="http://rosettacode.org/wiki/count in factors" title="contar en factores">contar en factores</a> <a href="http://rosettacode.org/wiki/prime decomposition" title="descomposición principal">primos</a> <a href="http://rosettacode.org/wiki/factors of an integer" title="factores de un entero">factores de</a> <a href="http://rosettacode.org/wiki/prime decomposition" title="descomposición principal">descomposición</a> <a href="http://rosettacode.org/wiki/factors of an integer" title="factores de un entero">de un entero</a> <a href="http://rosettacode.org/wiki/Sieve of Eratosthenes" title="Tamiz de Eratóstenes">Tamiz de primatía de Eratóstenes</a> <a href="http://rosettacode.org/wiki/primality by trial division" title="primalidad por división de prueba">por división de</a> <a href="http://rosettacode.org/wiki/trial factoring of a Mersenne number" title="factoraje de prueba de un número de Mersenne">prueba factorización de prueba de un número de Mersenne</a> <a href="http://rosettacode.org/wiki/partition an integer X into N primes" title="particionar un entero X en N primos">partición de un entero X en N primos</a> <a href="http://rosettacode.org/wiki/sequence of primes by Trial Division" title="Secuencia de números primos por división de prueba.">secuencia de números primos por parte de Trial Division</a> <a href="https://www.youtube.com/watch?v=SNwvJ7psoow" title="enlace: https://www.youtube.com/watch?v=SNwvJ7psoow">Computers en 1948: 2¹²⁷-1</a> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>check_mersenne</code> es una función.
    testString: 'assert(typeof check_mersenne === "function", "<code>check_mersenne</code> is a function.");'
  - text: <code>check_mersenne(3)</code> debería devolver una cadena.
    testString: 'assert(typeof check_mersenne(3) == "string", "<code>check_mersenne(3)</code> should return a string.");'
  - text: <code>check_mersenne(3)</code> debe devolver &quot;M3 = 2 ^ 3-1 es primo&quot;.
    testString: 'assert.equal(check_mersenne(3),"M3 = 2^3-1 is prime","<code>check_mersenne(3)</code> should return "M3 = 2^3-1 is prime".");'
  - text: <code>check_mersenne(23)</code> debe devolver &quot;M23 = 2 ^ 23-1 es compuesto con factor 47&quot;.
    testString: 'assert.equal(check_mersenne(23),"M23 = 2^23-1 is composite with factor 47","<code>check_mersenne(23)</code> should return "M23 = 2^23-1 is composite with factor 47".");'
  - text: <code>check_mersenne(929)</code> debe devolver &quot;M929 = 2 ^ 929-1 es compuesto con factor 13007
    testString: 'assert.equal(check_mersenne(929),"M929 = 2^929-1 is composite with factor 13007","<code>check_mersenne(929)</code> should return "M929 = 2^929-1 is composite with factor 13007");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function check_mersenne (p) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
