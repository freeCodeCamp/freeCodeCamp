---
id: 5a23c84252665b21eecc7ec2
title: Distanza di Jaro
challengeType: 1
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

La distanza di Jaro è una misura di similitudine tra due stringhe. Maggiore la distanza di Jaro per due stringhe, più simili sono. Il punteggio è normalizzato affinché `0` inidichi nessuna similarità e `1` che sono identiche.

**Definizione**

La distanza di Jaro \\( d_j \\) di due stringhe date \\(s_1\\) e \\(s_2\\) è

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

Dove:

<ul>
  <li>\(m\) è il numero di <i>caratteri combacianti</i>;</li>
  <li> \(t\) è metà del numero di <i>trasposizioni</i>.</li>
</ul>

Due caratteri da \\(s_1\\) e \\(s_2\\) rispettivamente, sono considerati *combacianti* solo se sono uguali e non più lontani di \\(\\left\\lfloor\\frac{\\max(|s_1|,|s_2|)}{2}\\right\\rfloor-1\\).

Ogni carattere di \\(s_1\\) è comparato con tutti i caratteri combacianti in \\(s_2\\) . Il numero di caratteri combacianti (ma in differente ordine di sequenza) diviso 2 definisce il numero di *trasposizioni*.

**Esempio**

Date le stringhe \\(s_1\\) *DWAYNE* e \\(s_2\\) *DUANE* troviamo:

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

Troviamo un punteggio Jaro di: \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\).

# --instructions--

Scrivi una funzione che prende due stringhe come parametri e restituisce l'associata distanza di Jaro.

# --hints--

`jaro` dovrebbe essere una funzione.

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` dovrebbe restituire un numero.

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` dovrebbe restituire `0.9444444444444445`.

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` dovrebbe restituire `0.7666666666666666`.

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` dovrebbe restituire `0.8962962962962964`.

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` dovrebbe restituire `0.888888888888889`.

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` dovrebbe restituire `0.8333333333333334`.

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
