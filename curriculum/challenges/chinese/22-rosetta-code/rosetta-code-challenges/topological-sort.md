---
id: 594fa2746886f41f7d8bf225
title: 拓扑排序
challengeType: 1
forumTopicId: 302340
dashedName: topological-sort
---

# --description--

Given a mapping between items, and items they depend on, a topological sort orders items so that no item precedes an item it depends upon. There are two popular algorithms for topological sorting: Kahn's (1962) topological sort and depth-first search.

# --instructions--

编写一个函数，该函数将返回一个列表，其中包含来自其依赖项的库的有效编译顺序。

- Assume library names are single words.
- 仅被提及为依赖项的项目没有其自身的依赖项，但必须给出其编译顺序。
- Any self dependencies should be ignored.
- 应忽略任何不可排序的依赖项。

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

用 VHDL 语言编译一个库有一个约束，即一个库必须在它所依赖的任何库之后编译。 例如，如果将 `dw04` 添加到 `dw01` 的依赖项列表中，则上述数据将是不可排序的。

该函数的输入将是一个多行字符串，每一行将由库的名称组成，后跟其依赖项（如果存在）。

For example:

```js
const libsSimple =
  `aaa bbb
  bbb`;
```

# --hints--

`topologicalSort` 应该是一个函数。

```js
assert(typeof topologicalSort === 'function');
```

`topologicalSort(libsSimple)` 应该返回一个数组。

```js
assert(Array.isArray(topologicalSort(libsSimple)));
```

`topologicalSort(libsSimple)` 应该返回 `['bbb', 'aaa']`。

```js
assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
```

`topologicalSort(libsVHDL)` 应该返回 `['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']`。

```js
assert.deepEqual(topologicalSort(libsVHDL), ['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']);
```

`topologicalSort(libsCustom)` 应该返回 `['base', 'c', 'd', 'b', 'a']`。

```js
assert.deepEqual(topologicalSort(libsCustom), ['base', 'c', 'd', 'b', 'a']);
```

`topologicalSort` 应该忽略无序依赖。

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
