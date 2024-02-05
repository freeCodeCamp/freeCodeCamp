---
id: 594fa2746886f41f7d8bf225
title: 拓撲排序
challengeType: 1
forumTopicId: 302340
dashedName: topological-sort
---

# --description--

Given a mapping between items, and items they depend on, a topological sort orders items so that no item precedes an item it depends upon. There are two popular algorithms for topological sorting: Kahn's (1962) topological sort and depth-first search.

# --instructions--

編寫一個函數，該函數將返回一個列表，其中包含來自其依賴項的庫的有效編譯順序。

- Assume library names are single words.
- 僅被提及爲依賴項的項目沒有其自身的依賴項，但必須給出其編譯順序。
- Any self dependencies should be ignored.
- 應忽略任何不可排序的依賴項。

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

用 VHDL 語言編譯一個庫有一個約束，即一個庫必須在它所依賴的任何庫之後編譯。 例如，如果將 `dw04` 添加到 `dw01` 的依賴項列表中，則上述數據將是不可排序的。

該函數的輸入將是一個多行字符串，每一行將由庫的名稱組成，後跟其依賴項（如果存在）。

For example:

```js
const libsSimple =
  `aaa bbb
  bbb`;
```

# --hints--

`topologicalSort` 應該是一個函數。

```js
assert(typeof topologicalSort === 'function');
```

`topologicalSort(libsSimple)` 應該返回一個數組。

```js
assert(Array.isArray(topologicalSort(libsSimple)));
```

`topologicalSort(libsSimple)` 應該返回 `['bbb', 'aaa']`。

```js
assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
```

`topologicalSort(libsVHDL)` 應該返回 `['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']`。

```js
assert.deepEqual(topologicalSort(libsVHDL), ['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']);
```

`topologicalSort(libsCustom)` 應該返回 `['base', 'c', 'd', 'b', 'a']`。

```js
assert.deepEqual(topologicalSort(libsCustom), ['base', 'c', 'd', 'b', 'a']);
```

`topologicalSort` 應該忽略無序依賴。

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
