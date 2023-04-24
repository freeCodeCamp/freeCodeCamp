---
id: 5e4ce2f5ac708cc68c1df261
title: Generador lineal congruencial
challengeType: 1
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

Un generador lineal congruencial (GLC) es un <em>algoritmo</em> que produce una secuencia de números pseudoaleatorios calculados con una función lineal definida a trozos discontinua. Todos los generadores lineales congruenciales usan la siguiente fórmula:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Donde:

<ul>
<li>$ r_0 $ es una semilla.</li>
<li>$r_1$, $r_2$, $r_3$, ..., son los números aleatorios.</li>
<li>$a$, $c$, $m$ son constantes.</li>
</ul>

Si uno elige los valores de $a$, $c$ y $m$ con cuidado, entonces el generador produce una distribución uniforme de enteros de $0$ a $m - 1$.

Los números del <abbr title="linear congruential generator">GLC</abbr> tienen una calidad deficiente. $r_n$ y $r\_{n + 1}$ no son independientes, como lo serían los números aleatorios verdaderos. Cualquiera que conozca $r_n$ puede predecir $r\_{n + 1}$, por lo tanto <abbr title="linear congruential generator">GLC</abbr> no es criptográficamente seguro. El <abbr title="linear congruential generator">GLC</abbr> sigue siendo lo suficientemente bueno para tareas simples como el test de primalidad Miller-Rabin, o las cartas de FreeCell. Entre los beneficios del <abbr title="linear congruential generator">LCG</abbr>, uno puede fácilmente reproducir una secuencia de números, de los mismos $r_0$. También se puede reproducir tal secuencia con un lenguaje de programación diferente, porque la fórmula es tan simple.

# --instructions--

Escribe una función que tome $r_0,a,c,m,n$ como parámetros y devuelve $r_n$.

# --hints--

`linearCongGenerator` debería ser una función.

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` debe devolver un número.

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` debe devolver `855`.

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` debería devolver `1110`.

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` debería devolver `62217`.

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` debería devolver `12345`.

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` debería devolver `1406932606`.

```js
assert.equal(
  linearCongGenerator(0, 1103515245, 12345, 2147483648, 2),
  1406932606
);
```

# --seed--

## --seed-contents--

```js
function linearCongGenerator(r0, a, c, m, n) {

}
```

# --solutions--

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```
