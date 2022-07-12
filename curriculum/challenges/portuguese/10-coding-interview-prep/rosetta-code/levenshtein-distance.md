---
id: 5e4ce2eaac708cc68c1df260
title: Distância de Levenshtein
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

Em teoria da informação e em ciência da computação, a **distância de Levenshtein** é uma métrica para medir a quantidade de diferença entre duas sequências (ou seja, uma distância de edição). A distância de Levenshtein entre duas strings é definida como o número mínimo de edições necessárias para transformar uma sequência de caracteres em outra, com as operações de edição permitidas sendo inserção, exclusão ou substituição de um único caractere.

Exemplo:

A distância de Levenshtein entre "**kitten**" e "**sitting**" é 3, já que as três edições a seguir mudam de uma palavra para a outra e não há modo de fazer isso com menos de três edições:

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (substituição do 'k' pelo 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (substituição do 'e' pelo 'i')</li>
  <li>sittin   sittin<strong>g</strong>    (inserção de 'g' ao final).</li>
</ul>

*A distância de Levenshtein entre "**rosettacode**" e "**raisethysword**" é de **8**.*

*A distância entre duas strings é a mesma que aquela quando ambas as strings são invertidas.*

# --instructions--

Escreva uma função que retorne a distância de Levenshtein entre duas strings dadas como parâmetros.

# --hints--

`levenshtein` deve ser uma função.

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` deve retornar um número.

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` deve retornar `1`.

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` deve retornar `2`.

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` deve retornar `3`.

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` deve retornar `2`.

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` deve retornar `8`.

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` deve retornar `8`.

```js
assert.equal(levenshtein('mississippi', 'swiss miss'), 8);
```

# --seed--

## --seed-contents--

```js
function levenshtein(a, b) {

}
```

# --solutions--

```js
function levenshtein(a, b) {
  var t = [], u, i, j, m = a.length, n = b.length;
  if (!m) { return n; }
  if (!n) { return m; }
  for (j = 0; j <= n; j++) { t[j] = j; }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
    } t = u;
  } return u[n];
}
```
