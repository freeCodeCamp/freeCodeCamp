---
id: 5
localeTitle: 5900f4231000cf542c50ff35
challengeType: 5
title: 'Problem 182: RSA encryption'
---

## Description
<section id='description'> 
El cifrado RSA se basa en el siguiente procedimiento: 
Generar dos primos distintos p y q.Compute n = pq y φ = (p-1) (q-1). 
Encuentra un entero e, 1 <e<φ, such that gcd(e,φ)=1.<code> 0 Un mensaje en este sistema es un número en el intervalo [0, n-1]. 
Un texto que se va a cifrar se convierte de alguna manera en mensajes (números en el intervalo [0, n-1]). 
Para cifrar el texto, para cada mensaje, m, c = me mod n se calcula. 
Para descifrar el texto, se necesita el siguiente procedimiento: calcular d tal que ed = 1 mod φ, luego para cada mensaje cifrado, c, calcular m = cd mod n. 
Existen valores de e y m tales que me mod n = m. Llamamos mensajes m para los cuales me mod n = m mensajes no ocultos. 
Un problema al elegir e es que no debe haber demasiados mensajes no ocultos. Por ejemplo, vamos a p = 19 y q = 37. 
Entonces n = 19 * 37 = 703 y φ = 18 * 36 = 648. 
Si elegimos e = 181, entonces, aunque gcd (181,648) = 1 resulta que todos los mensajes posibles m (0≤m≤n-1) no están ocultos al calcularme mod n. 
Para cualquier elección válida de e existen algunos mensajes no ocultos. 
Es importante que el número de mensajes no ocultos sea mínimo. 
Elige p = 1009 y q = 3643. 
Encuentra la suma de todos los valores de e, 1 <e<φ(1009,3643) and gcd(e,φ)=1, so that the number of unconcealed messages for this value of e is at a minimum.<code> 0 </section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler182()</code> debe devolver 399788195976.
    testString: 'assert.strictEqual(euler182(), 399788195976, "<code>euler182()</code> should return 399788195976.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler182() {
  // Good luck!
  return true;
}

euler182();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
