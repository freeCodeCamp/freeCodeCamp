---
id: 5eb3e4af7d0e7b760b46cedc
title: Consolidazione di insiemi
challengeType: 1
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

Dati due set di elementi, se un elemento è comune in comune tra almeno due set allora il risultato di applicare la *consolidazione* a questi set è un set di set il cui contenuto è:

<ul>
  <li>I due set di input se non c'è alcun elemento in comune tra i due set di elementi di input.</li>
  <li>Il singolo set che è unione dei due set di input se hanno un elemento in comune.</li>
</ul>

Dati N set di elementi done N > 2 allora il risultato è lo stesso di sostituire ripetutamente tutte le combinazioni di due set con la loro consolidazione finché non è più possibile alcuna altra consolidazione tra coppie di set. Se N &lt; 2 allora la consolidazione non ha significatio e l'input può essere restituito.

Ecco alcuni esempi:

**Esempio 1:**

Dati due set `{A,B}` e `{C,D}` allora non c'è alcun elemento in comune tra i set e il risultato è lo stesso dell'input.

**Esempio 2:**

Dati due set `{A,B}` e `{B,D}` allora c'è un elemento in comune `B` tra i due set e il risultato è il singolo set `{B,D,A}`. (Nota che l'ordine degli elementi in un set è immateriale: `{A,B,D}` è lo stesso di `{B,D,A}` e di `{D,A,B}`, ecc).

**Esempio 3:**

Dati tre set `{A,B}` e `{C,D}` e `{D,B}`, non c'è un elemento in comune tra i set `{A,B}` e `{C,D}` ma i set `{A,B}` e `{D,B}` hanno un elemento in comune che consolida per produrre il risultato `{B,D,A}`. Esamindando questo risultato con il set rimanente, `{C,D}`, hanno un elemento in comune e consolidato a formare l'output finale del singolo set `{A,B,C,D}`

**Esempio 4:**

Il consolidamento dei cinque gruppi:

`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}`, e `{F,G,H}`

Risulta nei due set:

`{A, C, B, D}`, e `{G, F, I, H, K}`

# --instructions--

Scrivi una funzione che prende un array di stringhe come parametro. Ogni stringa rappresenta un set con i caratteri rappresentando gli elementi del set. La funzione dovrebbe restituire un array 2D contenente i set consolidati. Nota: Ogni set deve essere ordinato.

# --hints--

`setConsolidation` dovrebbe essere una funzione.

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` dovrebbe restituire un array.

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` dovrebbe restituire `[["C", "D"], ["A", "B"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` dovrebbe restituire `[["A", "B", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` dovrebbe restituire `[["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` dovrebbe restituire `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['HIK', 'AB', 'CD', 'DB', 'FGH']), [
  ['F', 'G', 'H', 'I', 'K'],
  ['A', 'B', 'C', 'D']
]);
```

# --seed--

## --seed-contents--

```js
function setConsolidation(sets) {

}
```

# --solutions--

```js
function setConsolidation(sets) {
  function addAll(l1, l2) {
    l2.forEach(function(e) {
      if (l1.indexOf(e) == -1) l1.push(e);
    });
  }

  function consolidate(sets) {
    var r = [];
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i];
      {
        var new_r = [];
        new_r.push(s);
        for (var j = 0; j < r.length; j++) {
          var x = r[j];
          {
            if (
              !(function(c1, c2) {
                for (var i = 0; i < c1.length; i++) {
                  if (c2.indexOf(c1[i]) >= 0) return false;
                }
                return true;
              })(s, x)
            ) {
              (function(l1, l2) {
                addAll(l1, l2);
              })(s, x);
            } else {
              new_r.push(x);
            }
          }
        }
        r = new_r;
      }
    }
    return r;
  }

  function consolidateR(sets) {
    if (sets.length < 2) return sets;
    var r = [];
    r.push(sets[0]);
    {
      var arr1 = consolidateR(sets.slice(1, sets.length));
      for (var i = 0; i < arr1.length; i++) {
        var x = arr1[i];
        {
          if (
            !(function(c1, c2) {
              for (var i = 0; i < c1.length; i++) {
                if (c2.indexOf(c1[i]) >= 0) return false;
              }
              return true;
            })(r[0], x)
          ) {
            (function(l1, l2) {
              return l1.push.apply(l1, l2);
            })(r[0], x);
          } else {
            r.push(x);
          }
        }
      }
    }
    return r;
  }

  function hashSetList(set) {
    var r = [];
    for (var i = 0; i < set.length; i++) {
      r.push([]);
      for (var j = 0; j < set[i].length; j++)
        (function(s, e) {
          if (s.indexOf(e) == -1) {
            s.push(e);
            return true;
          } else {
            return false;
          }
        })(r[i], set[i].charAt(j));
    }
    return r;
  }

  var h1 = consolidate(hashSetList(sets)).map(function(e) {
    e.sort();
    return e;
  });
  return h1;
}
```
