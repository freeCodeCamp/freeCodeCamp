---
id: 594fa2746886f41f7d8bf225
title: Ordinamento topologico
challengeType: 1
forumTopicId: 302340
dashedName: topological-sort
---

# --description--

Data una mappatura tra elementi, e elementi da cui dipendono, un ordine topologico ordina elementi in modo che nessun elemento ne precede uno da cui dipende. Ci sono due algoritmi popolari per l'ordinamento topologico: l'ordinamento topologico di Kahn (1962) e la ricerca depth-first.

# --instructions--

Scrivi una funzione che restituirà una lista con un valido ordine di compilazione delle librerie dalle loro dipendenze.

- Supponiamo che i nomi delle librerie siano parole singole.
- Gli elementi citati solo come persone a carico non hanno dipendenze proprie, ma il loro ordine di compilazione deve essere dato.
- Qualsiasi autosufficienza dovrebbe essere ignorata.
- Eventuali dipendenze non ordinabili dovrebbero essere ignorate.

Utilizzare i seguenti dati come esempio:

<pre>
LIBRERIA          DIPENDENZA DELLE LIBRERIE
=======          ====================
des_system_lib   std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
dw01             ieee dw01 dware gtech
dw02             ieee dw02 dware
dw03             std synopsys dware dw03 dw02 dw01 ieee gtech
dw04             dw04 ieee dw01 dware gtech
dw05             dw05 ieee dware
dw06             dw06 ieee dware
dw07             ieee dware
dware            ieee dware
gtech            ieee gtech
ramlib           std ieee
std_cell_lib     ieee std_cell_lib
synopsys
</pre>

La compilazione di una libreria nel linguaggio VHDL ha il vincolo che una libreria può essere compilata solo dopo ogni libreria da cui dipende. I dati di cui sopra non sarebbero ordinabili se, ad esempio, `dw04` venisse aggiunto alla lista delle dipendenze di `dw01`.

L'input della funzione sarà una stringa multilinea, ogni riga consisterà del nome della libreria, seguito dalle sue dipendenze (se esistenti).

Ad esempio:

```js
const libsSimple =
  `aaa bbb
  bbb`;
```

# --hints--

`topologicalSort` dovrebbe essere una funzione.

```js
assert(typeof topologicalSort === 'function');
```

`topologicalSort(libsSimple)` dovrebbe restituire un array.

```js
assert(Array.isArray(topologicalSort(libsSimple)));
```

`topologicalSort(libsSimple)` dovrebbe restituire `['bbb', 'aaa']`.

```js
assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
```

`topologicalSort(libsVHDL)` dovrebbe restituire `['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']`.

```js
assert.deepEqual(topologicalSort(libsVHDL), ['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']);
```

`topologicalSort(libsCustom)` dovrebbe restituire `['base', 'c', 'd', 'b', 'a']`.

```js
assert.deepEqual(topologicalSort(libsCustom), ['base', 'c', 'd', 'b', 'a']);
```

`topologicalSort` dovrebbe ignorare le dipendenze non ordinabili.

```js
assert.deepEqual(topologicalSort(libsUnorderable), ['Base']);
```

# --seed--

## --after-user-code--

```js
const libsSimple =
  `aaa bbb
  bbb`;

const libsVHDL =
  `des_system_lib   std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
  dw01             ieee dw01 dware gtech
  dw02             ieee dw02 dware
  dw03             std synopsys dware dw03 dw02 dw01 ieee gtech
  dw04             dw04 ieee dw01 dware gtech
  dw05             dw05 ieee dware
  dw06             dw06 ieee dware
  dw07             ieee dware
  dware            ieee dware
  gtech            ieee gtech
  ramlib           std ieee
  std_cell_lib     ieee std_cell_lib
  synopsys`;

const libsCustom =
  `a b c d
  b c d
  d c
  c base
  base`;

const libsUnorderable =
  `TestLib Base MainLib
  MainLib TestLib
  Base`;
```

## --seed-contents--

```js
function topologicalSort(libs) {

  return true;
}
```

# --solutions--

```js
function topologicalSort(libs) {
  // A map of the input data, with the keys as the packages, and the values as
  // and array of packages on which it depends.
  const D = libs
    .split('\n')
    .map(e => e.split(' ').filter(ep => ep !== ''))
    .reduce((p, c) =>
      p.set(c[0], c.filter((e, i) => (i > 0 && e !== c[0] ? e : null))), new Map());
  [].concat(...D.values()).forEach(e => {
    D.set(e, D.get(e) || []);
  });

  // The above map rotated so that it represents a DAG of the form
  // Map {
  //    A => [ A, B, C],
  //    B => [C],
  //    C => []
  // }
  // where each key represents a node, and the array contains the edges.
  const G = [...D.keys()].reduce((p, c) =>
    p.set(
      c,
      [...D.keys()].filter(e => D.get(e).includes(c))),
    new Map()
  );

  // An array of leaf nodes; nodes with 0 in degrees.
  const Q = [...D.keys()].filter(e => D.get(e).length === 0);

  // The result array.
  const S = [];
  while (Q.length) {
    const u = Q.pop();
    S.push(u);
    G.get(u).forEach(v => {
      D.set(v, D.get(v).filter(e => e !== u));
      if (D.get(v).length === 0) {
        Q.push(v);
      }
    });
  }

  return S;
}
```
