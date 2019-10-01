---
title: Topological sort
id: 594fa2746886f41f7d8bf225
challengeType: 5
forumTopicId: 302340
localeTitle: Топологическая сортировка
---

## Description
<section id='description'>
<p> Учитывая сопоставление между элементами и элементами, на которых они зависят, <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: топологическая сортировка">топологические</a> позиции <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: топологическая сортировка">сортировки сортируются,</a> так что ни один элемент не предшествует элементу, от которого он зависит. </p><p> Компиляция библиотеки на языке <a href="https://en.wikipedia.org/wiki/VHDL" title="wp: VHDL">VHDL</a> имеет ограничение на то, что библиотека должна быть скомпилирована после любой библиотеки, от которой она зависит. </p> Задача: <p> Напишите функцию, которая вернет действительный порядок компиляции библиотек VHDL из их зависимостей. </p> Предположим, что имена библиотек - это одиночные слова. Пункты, упомянутые как только иждивенцы, не имеют собственных иждивенцев, но их порядок компиляции должен быть дан. Любые собственные зависимости следует игнорировать. Любые неустановимые зависимости следует игнорировать. <p> В качестве примера используйте следующие данные: </p><pre> БИБЛИОТЕЧНЫЕ БИОГРАФИЧЕСКИЕ ЗАВИСИМОСТИ
======= =============================
des_system_lib std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
dw01 ieee dw01 dware gtech
dw02 ieee dw02 dware
dw03 std synopsys dware dw03 dw02 dw01 ieee gtech
dw04 dw04 ieee dw01 dware gtech
dw05 dw05 ieee dware
dw06 dw06 ieee dware
dw07 ieee dware
dware ieee dware
gtech ieee gtech
ramlib std ieee
std_cell_lib ieee std_cell_lib
Synopsys
</pre><p> <small>Примечание: вышеуказанные данные были бы неустановимыми, если, например, <code>dw04</code> добавляется в список зависимостей <code>dw01</code> .</small> </p> Cf: <pre> <code>&lt;a href=&quot;http://rosettacode.org/wiki/Topological sort/Extracted top item&quot; title=&quot;Topological sort/Extracted top item&quot;&gt;Topological sort/Extracted top item&lt;/a&gt;.</code> </pre><p> Существует два популярных алгоритма топологической сортировки: </p><p> Канский топологический сорт 1962 года и поиск по глубине: <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: топологическая сортировка">топологическая сортировка</a> </p><p> Джейсон Сакс: <a href="http://www.embeddedrelated.com/showarticle/799.php" title="ссылка: http://www.embeddedrelated.com/showarticle/799.php">«Десять небольших алгоритмов, часть 4: топологическая сортировка»</a> . </p>
</section>

## Instructions
<section id='instructions'>
Write a function that will return a valid compile order of VHDL libraries from their dependencies.

<ul>
  <li>Assume library names are single words.</li>
  <li>Items mentioned as only dependents have no dependents of their own, but their order of compiling must be given.</li>
  <li>Any self dependencies should be ignored.</li>
  <li>Any un-orderable dependencies should be ignored.</li>
</ul>
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
<small>Note: the above data would be un-orderable if, for example, <code>dw04</code> is added to the list of dependencies of <code>dw01</code>.</small>
<strong>C.f.:</strong>
<ul>
  <li><a href="https://rosettacode.org/wiki/Topological sort/Extracted top item" title="Topological sort/Extracted top item" target="_blank">Topological sort/Extracted top item</a>.</li>
</ul>
There are two popular algorithms for topological sorting:
<ul>
  <li><a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: Topological sorting" target="_blank">Kahn's 1962 topological sort</a></li>
  <li><a href="https://www.embeddedrelated.com/showarticle/799.php" target="_blank">depth-first search</a></li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topologicalSort</code> is a function.
    testString: assert(typeof topologicalSort === 'function');
  - text: <code>topologicalSort</code> must return correct library order..
    testString: assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
  - text: <code>topologicalSort</code> must return correct library order..
    testString: assert.deepEqual(topologicalSort(libsVHDL), solutionVHDL);
  - text: <code>topologicalSort</code> must return correct library order..
    testString: assert.deepEqual(topologicalSort(libsCustom), solutionCustom);
  - text: <code>topologicalSort</code> must ignore unorderable dependencies..
    testString: assert.deepEqual(topologicalSort(libsUnorderable), solutionUnorderable);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topologicalSort(libs) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

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

const solutionVHDL = [
  'ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06',
  'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys',
  'dw03', 'des_system_lib'
];

const libsCustom =
  `a b c d
  b c d
  d c
  c base
  base`;
const solutionCustom = ['base', 'c', 'd', 'b', 'a'];

const libsUnorderable =
  `TestLib Base MainLib
  MainLib TestLib
  Base`;

const solutionUnorderable = ['Base'];

```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
