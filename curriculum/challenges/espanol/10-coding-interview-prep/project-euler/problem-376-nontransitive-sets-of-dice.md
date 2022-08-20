---
id: 5900f4e51000cf542c50fff7
title: 'Problema 376: Conjuntos no transitorios de dados'
challengeType: 1
forumTopicId: 302038
dashedName: problem-376-nontransitive-sets-of-dice
---

# --description--

Considera el siguiente conjunto de dados con pips no estándar:

$$\Inicio{array}{}   \text{Die A: } & 1 & 4 & 4 & 4 & 4 & 4 \\\\
  \text{Die B: } & 2 & 2 & 2 & 5 & 5 & 5 \\\\   \text{Die C: } & 3 & 3 & 3 & 3 & 3 & 6 \\\\
\fin{array}$$

Un juego es jugado por dos jugadores que escogen un dado por turno y lo lanzan. El jugador que tire el valor más alto gana.

Si el primer jugador escoge el dado $A$ y el segundo jugador toma el dado $B$ obtenemos

$P(\text{second player wins}) = \frac{7}{12} > \frac{1}{2}$

Si el primer jugador elige el dado $B$ y el segundo jugador elige el dado $C$ obtenemos

$P(\text{second player wins}) = \frac{7}{12} > \frac{1}{2}$

Si el primer jugador elige el dado $C$ y el segundo jugador elige el dado $A$ obtenemos

$P(\text{second player wins}) = \frac{25}{36} > \frac{1}{2}$

Así que, sea cual sea el dado que el primer jugador escoja, el segundo jugador puede elegir otro dado y tener más de un 50% de probabilidades de ganar. Un conjunto de dados que tienen esta propiedad se llama un conjunto no transitivo de dados.

Queremos investigar cuántos conjuntos de dados no transitivos existen. Asumiremos las siguientes condiciones:

- Hay tres dados de seis caras con cada lado que tiene entre 1 y $N$ pips, incluído.
- Los dados con el mismo conjunto de puntos son iguales, independientemente del lado en el que se encuentren los puntos.
- El mismo valor de puntos puede aparecer en múltiples dados; si ambos jugadores tiran el mismo valor ningún jugador gana.
- Los conjuntos de dados {A, B, C}, {B, C, A} y {C, A, B} son el mismo conjunto.

Para N = 7 encontramos que hay 9780 conjuntos de este tipo.

¿Cuántos hay para N = 30?

# --hints--

`nontransitiveSetsOfDice()` debería devolver `973059630185670`.

```js
assert.strictEqual(nontransitiveSetsOfDice(), 973059630185670);
```

# --seed--

## --seed-contents--

```js
function nontransitiveSetsOfDice() {

  return true;
}

nontransitiveSetsOfDice();
```

# --solutions--

```js
// solution required
```
