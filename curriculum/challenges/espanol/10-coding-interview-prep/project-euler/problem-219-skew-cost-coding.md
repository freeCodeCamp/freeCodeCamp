---
id: 5900f4481000cf542c50ff5a
title: 'Problema 219: Código de coste sesgado'
challengeType: 1
forumTopicId: 301861
dashedName: problem-219-skew-cost-coding
---

# --description--

Que $A$ y $B$ sean cadenas de bits (secuencias de 0 y 1's).

Si $A$ es igual a la <u>izquierda</u>más larga($A$) de bits de $B$, entonces se dice que $A$ es un prefijo de $B$.

Por ejemplo, 00110 es un prefijo de <u>00110</u>1001, pero no de 00111 o 100110.

Un código sin prefijo de tamaño $n$ es una colección de $n$ cadenas de bits distintas tales que ninguna cadena es un prefijo de cualquier otra. Por ejemplo, este es un código sin prefijo de tamaño 6:

$$0000, 0001, 001, 01, 10, 11$$

Ahora supongamos que cuesta un centavo transmitir un bit '0', pero cuatro centavos transmitir un '1'. Entonces el costo total del código sin prefijo que se muestra arriba es 35 centavos, que es lo más barato posible para el sistema de precios sesgados en cuestión. En resumen, escribimos $Cost(6) = 35$.

¿Qué es $Cost(10^9)$?

# --hints--

`skewCostCoding()` debería devolver `64564225042`.

```js
assert.strictEqual(skewCostCoding(), 64564225042);
```

# --seed--

## --seed-contents--

```js
function skewCostCoding() {

  return true;
}

skewCostCoding();
```

# --solutions--

```js
// solution required
```
