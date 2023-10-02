---
id: 5eb3e4a21f462f409d656c73
title: Sequenza autoreferenziale
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

Ci sono diversi modi per generare una sequenza autoreferenziale. Uno molto comune (la sequenza <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say</a>) è iniziare con un numero intero positivo, quindi generare il termine successivo concatenando gruppi enumerati di cifre simili adiacenti:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

I termini generati crescono geometricamente in lunghezza e non convergono mai.

Un altro modo per generare una sequenza auto-referenziale è quello di riassumere il termine precedente.

Conta quante di ogni cifra simile ci sono, quindi concatena la somma e la cifra per ciascuna delle cifre enumerate ordinate. Nota che i primi cinque termini sono gli stessi della sequenza precedente.

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

Ordina le cifre da più grandi a più piccole. Non includere i conteggi di cifre che non appaiono nel termine precedente.

A seconda del valore del seme, le serie generate in questo modo convergono sempre a un valore stabile o a un breve modello periodico. (Per i nostri scopi, convergere significa che un elemento corrisponde a un elemento visto precedentemente.) La sequenza mostrata, con un valore di seme di 0, converge ad un valore stabile di 1433223110 dopo 11 iterazioni. Il valore del seme che converge più rapidamente è 22. Diventa stabile dopo il primo elemento. (L'elemento successivo è 22, che è stato visto prima.)

# --instructions--

Scrivi una funzione che prende il valore del seme come parametro, genera una sequenza autoreferenziale fino a quando non converge, e la restituisce sotto forma di array.

# --hints--

`selfReferential` dovrebbe essere una funzione.

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` dovrebbe restituire un array.

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` dovrebbe restituire `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`.

```js
assert.deepEqual(selfReferential(40), [
  '40',
  '1410',
  '142110',
  '14123110',
  '1413124110',
  '2413125110',
  '151413224110',
  '152413225110',
  '251413324110',
  '152423224110',
  '152413423110'
]);
```

`selfReferential(132110)` dovrebbe restituire `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(132110), [
  '132110',
  '13123110',
  '23124110',
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(132211)` dovrebbe restituire `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`.

```js
assert.deepEqual(selfReferential(132211), [
  '132211',
  '132231',
  '232221',
  '134211',
  '14131231',
  '14231241',
  '24132231',
  '14233221'
]);
```

`selfReferential(1413223110)` dovrebbe restituire `["1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` dovrebbe restituire `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`.

```js
assert.deepEqual(selfReferential(251413126110), [
  '251413126110',
  '16151413225110',
  '16251413226110',
  '26151413325110',
  '16251423225110',
  '16251413424110',
  '16153413225110'
]);
```

# --seed--

## --seed-contents--

```js
function selfReferential(n) {

}
```

# --solutions--

```js
function selfReferential(n) {
  var descending,
    i,
    incr,
    j,
    max_i,
    max_len,
    max_seq,
    seq,
    sequence,
    indexOf =
      [].indexOf ||
      function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }
        return -1;
      };

  sequence = function(n) {
    var c, cnt, cnts, d, digit, i, j, l, len, new_cnts, ref, s, seq;
    cnts = {};
    ref = n.toString();
    for (j = 0, len = ref.length; j < len; j++) {
      c = ref[j];
      d = parseInt(c);
      incr(cnts, d);
    }
    seq = [ref];
    while (true) {
      s = '';
      for (i = l = 9; l >= 0; i = --l) {
        if (cnts[i]) {
          s += '' + cnts[i] + i;
        }
      }
      if (indexOf.call(seq, s) >= 0) {
        break;
      }
      seq.push(s);
      new_cnts = {};
      for (digit in cnts) {
        cnt = cnts[digit];
        incr(new_cnts, cnt);
        incr(new_cnts, digit);
      }
      cnts = new_cnts;
    }
    return seq;
  };

  incr = function(h, k) {
    if (h[k] == null) {
      h[k] = 0;
    }
    return (h[k] += 1);
  };

  descending = function(n) {
    var tens;
    if (n < 10) {
      return true;
    }
    tens = n / 10;
    if (n % 10 > tens % 10) {
      return false;
    }
    return descending(tens);
  };

  return sequence(n);
}
```
