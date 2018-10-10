---
id: 5900f4d31000cf542c50ffe6
challengeType: 5
title: 'Problem 359: Hilbert"s New Hotel'
videoUrl: ''
localeTitle: 'Problema 359: el nuevo hotel de Hilbert'
---

## Description
<section id="description"> Un número infinito de personas (numeradas 1, 2, 3, etc.) están alineadas para obtener una habitación en el hotel infinito más nuevo de Hilbert. El hotel contiene un número infinito de pisos (numerados 1, 2, 3, etc.), y cada piso contiene un número infinito de habitaciones (numerados 1, 2, 3, etc.). <p> Inicialmente el hotel está vacío. Hilbert declara una regla sobre cómo se le asigna una habitación a la nª persona: la persona n obtiene la primera habitación desocupada en el piso con el número más bajo que cumpla con cualquiera de los siguientes requisitos: el piso está vacío, el piso no está vacío, y si la última persona toma una habitación en ese piso está la persona m, entonces m + n es un cuadrado perfecto </p><p> La persona 1 obtiene la habitación 1 en el piso 1 ya que el piso 1 está vacío. La persona 2 no recibe la habitación 2 en el piso 1 ya que 1 + 2 = 3 no es un cuadrado perfecto. En cambio, la persona 2 obtiene la habitación 1 en el piso 2 ya que el piso 2 está vacío. La persona 3 obtiene la habitación 2 en el piso 1, ya que 1 + 3 = 4 es un cuadrado perfecto. </p><p> Eventualmente, cada persona en la fila recibe una habitación en el hotel. </p><p> Defina P (f, r) como n si la persona n ocupa la sala r en el piso f, y 0 si ninguna persona ocupa la sala. Aquí hay algunos ejemplos: P (1, 1) = 1 P (1, 2) = 3 P (2, 1) = 2 P (10, 20) = 440 P (25, 75) = 4863 P (99, 100) = 19454 </p><p> Encuentra la suma de todos los P (f, r) para todos los positivos de f y r, de manera que f × r = 71328803586048 y da los últimos 8 dígitos como tu respuesta. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler359()</code> debe devolver 40632119.
    testString: 'assert.strictEqual(euler359(), 40632119, "<code>euler359()</code> should return 40632119.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler359() {
  // Good luck!
  return true;
}

euler359();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
