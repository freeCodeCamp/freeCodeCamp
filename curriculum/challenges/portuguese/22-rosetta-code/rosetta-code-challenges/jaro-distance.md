---
id: 5a23c84252665b21eecc7ec2
title: Distância de Jaro
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

A distância de Jaro é uma medida de semelhança entre duas strings. Quanto maior a distância de Jaro entre as duas strings, mais parecidas elas são. A pontuação é normalizada, de modo que `0` é igual a nenhuma similaridade e `1` é uma correspondência exata.

**Definição**

A distância de Jaro \\( d_j \\) de duas strings fornecidas \\(s_1\\) e \\(s_2\\) é

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

Onde:

<ul>
  <li>\(m\) é o número de <i>caracteres correspondentes</i>;</li>
  <li> \(t\) é a metade do número de <i>transposições</i>.</li>
</ul>

Dois caracteres de \\(s_1\\) e \\(s_2\\), respectivamente, são considerados *correspondentes* somente se forem iguais e não mais distante do que \\(\\left\\lfloor\\frac{\\max(|s_1|,|s_2|)}{2}\\right\\rfloor-1\\).

Cada caractere de \\(s_1\\) é comparado com todos os seus caracteres correspondentes em \\(s_2\\) . O número de caracteres correspondentes (mas em ordem sequencial diferente) dividido por 2 define o número de *transposições*.

**Exemplo**

Dadas as strings \\(s_1\\) *DWAYNE* e \\(s_2\\) *DUANE*, encontramos:

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

Encontramos uma pontuação de Jaro de: \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\).

# --instructions--

Escreva uma função que receba duas strings como parâmetros e retorne a distância de Jaro associada.

# --hints--

`jaro` deve ser uma função.

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` deve retornar um número.

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` deve retornar `0.9444444444444445`.

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` deve retornar `0.7666666666666666`.

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` deve retornar `0.8962962962962964`.

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` deve retornar `0.888888888888889`.

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` deve retornar `0.8333333333333334`.

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
