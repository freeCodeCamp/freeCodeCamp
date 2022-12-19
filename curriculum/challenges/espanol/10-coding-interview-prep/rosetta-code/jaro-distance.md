---
id: 5a23c84252665b21eecc7ec2
title: Distancia Jaro
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

La distancia de Jaro es una medida de similitud entre dos cadenas. Cuanto más alta sea la distancia de Jaro para dos cuerdas, más similares son las cadenas. La puntuación está normalizada de tal manera que `0` no equivale a ninguna similitud y `1` es una coincidencia exacta.

**Definición**

La distancia de Jaro \\( d_j \\) de dos cadenas \\(s_1\\) y \\(s_2\\) es

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

Donde:

<ul>
  <li>\(m\) es el número de <i>caracteres coincidentes</i>;</li>
  <li> \(t\) es la mitad del número de <i>transposiciones</i>.</li>
</ul>

Dos caracteres de \\(s_1\\) y \\(s_2\\) respectivamente, se consideran *que coinciden* solo si son los mismos y no más lejos que \\(\\left\\lfloor\\frac{\\max(|s_1|, s_2|)}{2}\\right\\rfloor-1\\).

Cada carácter de \\(s_1\\) se compara con todos sus caracteres coincidentes en \\(s_2\\) . El número de caracteres coincidentes (pero diferentes órdenes de secuencia) divididos por 2 define el número de *transposiciones*.

**Por ejemplo**

Dadas las cadenas \\(s_1\\) *DWAYNE* y \\(s_2\\) *DUANE* que encontramos:

<ul>
  <li>\\(m = 4\\)</li>
  <li>\\(|s_1| = 6\\)</li>
  <li>\\(|s_2| = 5\\)</li>
  <li>\(t = 0\)</li>
</ul>

Encontramos una puntuación de Jaro de: \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0. 822\\).

# --instructions--

Escriba una función que tome dos cadenas como parámetros y devuelva la distancia Jaro asociada.

# --hints--

`jaro` debe devolver una función.

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` debería devolver un número.

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` debería devolver `0.9444444444444445`.

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` debería devolver `0.7666666666666666`.

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` debería devolver `0.8962962962962964`.

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` debería devolver `0.888888888888889`.

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` debería devolver `0.8333333333333334`.

```js
assert.equal(jaro('ABCD', 'BCDA'), 0.8333333333333334);
```

# --seed--

## --seed-contents--

```js
function jaro(s, t) {

}
```

# --solutions--

```js
function jaro(s, t) {
  var s_len = s.length;
  var t_len = t.length;

  if (s_len == 0 && t_len == 0) return 1;

  var match_distance = Math.max(s_len, t_len) / 2 - 1;

  var s_matches = new Array(s_len);
  var t_matches = new Array(t_len);

  var matches = 0;
  var transpositions = 0;

  for (var i = 0; i < s_len; i++) {
    var start = Math.max(0, i - match_distance);
    var end = Math.min(i + match_distance + 1, t_len);

    for (var j = start; j < end; j++) {
      if (t_matches[j]) continue;
      if (s.charAt(i) != t.charAt(j)) continue;
      s_matches[i] = true;
      t_matches[j] = true;
      matches++;
      break;
    }
  }

  if (matches == 0) return 0;

  var k = 0;
  for (var i = 0; i < s_len; i++) {
    if (!s_matches[i]) continue;
    while (!t_matches[k]) k++;
    if (s.charAt(i) != t.charAt(k)) transpositions++;
    k++;
  }

  return ((matches / s_len) +
    (matches / t_len) +
    ((matches - transpositions / 2.0) / matches)) / 3.0;
}
```
