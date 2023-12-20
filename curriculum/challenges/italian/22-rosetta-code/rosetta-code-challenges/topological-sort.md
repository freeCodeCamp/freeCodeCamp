---
id: 594fa2746886f41f7d8bf225
title: Topological sort
challengeType: 1
forumTopicId: 302340
dashedName: topological-sort
---

# --description--

Given a mapping between items, and items they depend on, a topological sort orders items so that no item precedes an item it depends upon. There are two popular algorithms for topological sorting: Kahn's (1962) topological sort and depth-first search.

# --instructions--

Write a function that will return a list with valid compile order of libraries from their dependencies.

- Assume library names are single words.
- Items mentioned as only dependents have no dependents of their own, but their order of compiling must be given.
- Any self dependencies should be ignored.
- Any un-orderable dependencies should be ignored.

Use the following data as an example:

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

The compiling of a library in the VHDL language has the constraint that a library must be compiled after any library it depends on. The above data would be un-orderable if, for example, `dw04` is added to the list of dependencies of `dw01`.

The input of the function will be a multiline string, each line will consist of the name of the library, followed by its dependencies (if exist).

For example:

```js
const libsSimple =
  `aaa bbb
  bbb`;
```

# --hints--

`topologicalSort` should be a function.

```js
assert(typeof topologicalSort === 'function');
```

`topologicalSort(libsSimple)` should return an array.

```js
assert(Array.isArray(topologicalSort(libsSimple)));
```

`topologicalSort(libsSimple)` should return `['bbb', 'aaa']`.

```js
assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
```

`topologicalSort(libsVHDL)` should return `['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']`.

```js
assert.deepEqual(topologicalSort(libsVHDL), ['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']);
```

`topologicalSort(libsCustom)` should return `['base', 'c', 'd', 'b', 'a']`.

```js
assert.deepEqual(topologicalSort(libsCustom), ['base', 'c', 'd', 'b', 'a']);
```

`topologicalSort` should ignore unorderable dependencies.

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
