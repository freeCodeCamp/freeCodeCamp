---
id: 5900f53b1000cf542c51004d
title: 'Problema 462: Permutación de números 3 suaves'
challengeType: 1
forumTopicId: 302137
dashedName: problem-462-permutation-of-3-smooth-numbers
---

# --description--

Un número 3-suave es un entero que no tiene un factor primo mayor que 3. Para un entero $N$, definimos $S(N)$ como el conjunto de números 3 suaves menores o iguales a $N$. Por ejemplo, $S(20) = \\{1, 2, 3, 4, 6, 8, 9, 12, 16, 18\\}$.

Definimos $F(N)$ como el número de permutaciones de $S(N)$ en el cual cada elemento viene después de todos sus divisores adecuados.

Esta es una de las posibles permutaciones para $N = 20$.

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12.

Esto no es una permutación válida, porque 12 se anteponen a su divisor 6.

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18.

Podemos verificar que $F(6) = 5$, $F(8) = 9$, $F(20) = 450$ y $F(1000).8521816557e\\,21$.

Calcular $F({10}^{18})$. Dar como respuesta una cadena en su noción científica redondeada a diez dígitos después del punto decimal. Al dar tu respuesta, usa una minúscula `e` para separar mantissa y exponente. Ejemplo. si la respuesta es $112\\,233\\,445\\,566\\,778\\,899$, entonces el formato de respuesta sería `1.1223344557e17`.

# --hints--

`permutationOf3SmoothNumbers()` debería devolver una cadena.

```js
assert.strictEqual(typeof permutationOf3SmoothNumbers() === 'string');
```

`permutationOf3SmoothNumbers()` debe devolver la cadena `5.5350769703e1512`.

```js
assert.strictEqual(permutationOf3SmoothNumbers(), '5.5350769703e1512');
```

# --seed--

## --seed-contents--

```js
function permutationOf3SmoothNumbers() {

  return true;
}

permutationOf3SmoothNumbers();
```

# --solutions--

```js
// solution required
```
