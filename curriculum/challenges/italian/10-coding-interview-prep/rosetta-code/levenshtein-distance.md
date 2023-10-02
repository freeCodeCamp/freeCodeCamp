---
id: 5e4ce2eaac708cc68c1df260
title: Distanza di Levenshtein
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

Nella teoria delle informazioni e in scienza dei computer, la **distanza di Levenshtein** è una metrica per misurare la distanza tra due sequenze (cioè una distanza di modifica). La distanza Levenshtein tra due stringhe è definita come il numero minimo di modifiche necessarie per trasformare una stringa nell'altra, dove le operazioni di modifica consentite sono inserimento, cancellazione o sostituzione di un singolo carattere.

Esempio:

La distanza di Levenshtein tra "**kitten**" e "**sitting**" è 3, dal momento che le seguenti tre modifiche cambiano una nell'altra, e non c'è un modo per farlo con meno di tre modifiche:

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten   (sostiruzione di 'k' con 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (sostituzione di 'e' con 'i')</li>
  <li>sittin   sittin<strong>g</strong>    (inserisci 'g' alla fine).</li>
</ul>

*La distanza Levenshtein tra "**rosettacode**", "**raisethysword**" è **8**.*

*La distanza tra due stringhe è uguale a quella tra le due stringhe scritte al contrario.*

# --instructions--

Scrivi una funzione che restituisce la distanza di Levenshtein tra due stringhe fornite come parametri.

# --hints--

`levenshtein` dovrebbe essere una funzione.

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` dovrebbe restituire un numero.

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` dovrebbe restituire `1`.

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` dovrebbe restituire `2`.

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` dovrebbe restituire `3`.

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` dovrebbe restituire `2`.

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` dovrebbe restituire `8`.

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` dovrebbe restituire `8`.

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
