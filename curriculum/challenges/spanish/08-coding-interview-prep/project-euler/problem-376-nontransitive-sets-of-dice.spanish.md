---
id: 5900f4e51000cf542c50fff7
challengeType: 5
title: 'Problem 376: Nontransitive sets of dice'
videoUrl: ''
localeTitle: 'Problema 376: juegos de dados no transitivos'
---

## Description
<section id="description"> Considere el siguiente conjunto de dados con pips no estándar: <p> Die A: 1 4 4 4 4 4 Die B: 2 2 2 5 5 5 Die C: 3 3 3 3 3 6 </p><p> Un juego es jugado por dos jugadores que toman un dado por turnos y lo hacen rodar. El jugador que saca el valor más alto gana. </p><p> Si el primer jugador elige el dado A y el segundo el jugador muere B, obtenemos P (el segundo jugador gana) = 7/12&gt; 1/2 </p><p> Si el primer jugador elige el dado B y el segundo el jugador muere C, obtenemos P (el segundo jugador gana) = 7/12&gt; 1/2 </p><p> Si el primer jugador elige el dado C y el segundo el jugador muere A, obtenemos P (el segundo jugador gana) = 25/36&gt; 1/2 </p><p> Entonces, cualquiera que sea el dado que el primer jugador elija, el segundo jugador puede elegir otro dado y tiene una probabilidad mayor de 50% de ganar. Un conjunto de dados que tiene esta propiedad se llama un conjunto de dados no transitivos. </p><p> Queremos investigar cuántos conjuntos de dados no transitivos existen. Asumiremos las siguientes condiciones: Hay tres dados de seis caras con cada lado que tiene entre 1 y N pips, inclusive. Los dados con el mismo conjunto de pips son iguales, independientemente del lado en el que se encuentren los pips. El mismo valor de pip puede aparecer en múltiples dados; si ambos jugadores lanzan el mismo valor, ninguno de los dos gana. Los conjuntos de dados {A, B, C}, {B, C, A} y {C, A, B} son el mismo conjunto. </p><p> Para N = 7 encontramos que hay 9780 tales conjuntos. ¿Cuántos hay para N = 30? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler376()</code> debe devolver 973059630185670.
    testString: 'assert.strictEqual(euler376(), 973059630185670, "<code>euler376()</code> should return 973059630185670.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler376() {
  // Good luck!
  return true;
}

euler376();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
