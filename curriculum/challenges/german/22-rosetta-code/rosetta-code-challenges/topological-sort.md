---
id: 594fa2746886f41f7d8bf225
title: Topologische Sortierung
challengeType: 1
forumTopicId: 302340
dashedName: topological-sort
---

# --description--

Given a mapping between items, and items they depend on, a topological sort orders items so that no item precedes an item it depends upon. There are two popular algorithms for topological sorting: Kahn's (1962) topological sort and depth-first search.

# --instructions--

Schreibe eine Funktion, die eine Liste mit gültiger Kompilierreihenfolge der Bibliotheken anhand ihrer Abhängigkeiten zurückgibt.

- Assume library names are single words.
- Posten, die nur als abhängige Posten aufgeführt sind, haben keine eigenen abhängigen Posten, aber die Reihenfolge ihrer Zusammenstellung muss angegeben werden.
- Jegliche Selbst-Abhängigkeiten sollten ignoriert werden.
- Jegliche unsortierbaren Abhängigkeiten sollten ignoriert werden.

Verwende die folgenden Daten als Beispiel:

<pre>
LIBRARY          LIBRARY DEPENDENCIES
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

Die Kompilierung einer Bibliothek in der VHDL-Sprache hat die Einschränkung, dass eine Bibliothek nach jeder Bibliothek, von der sie abhängt, kompiliert werden muss. Die obigen Daten wären unsortierbar, wenn zum Beispiel `dw04` zur Liste der Abhängigkeiten von `dw01` hinzugefügt wird.

Der Input der Funktion wird eine mehrzeilige Zeichenfolge sein, jede Zeile wird aus dem Namen der Bibliothek bestehen, gefolgt von ihren Abhängigkeiten (falls vorhanden).

Zum Beispiel:

```js
const libsSimple =
  `aaa bbb
  bbb`;
```

# --hints--

`topologicalSort` sollte eine Funktion sein.

```js
assert(typeof topologicalSort === 'function');
```

`topologicalSort(libsSimple)` sollte ein Array zurückgeben.

```js
assert(Array.isArray(topologicalSort(libsSimple)));
```

`topologicalSort(libsSimple)` sollte `['bbb', 'aaa']` zurückgeben.

```js
assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
```

`topologicalSort(libsVHDL)` sollte `['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']` zurückgeben.

```js
assert.deepEqual(topologicalSort(libsVHDL), ['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']);
```

`topologicalSort(libsCustom)` sollte `['base', 'c', 'd', 'b', 'a']` zurückgeben.

```js
assert.deepEqual(topologicalSort(libsCustom), ['base', 'c', 'd', 'b', 'a']);
```

`topologicalSort` sollte unsortierbare Abhängigkeiten ignorieren.

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
