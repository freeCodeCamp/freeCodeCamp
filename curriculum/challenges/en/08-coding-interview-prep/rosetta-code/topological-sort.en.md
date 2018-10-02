---
title: Topological sort
id: 594fa2746886f41f7d8bf225
challengeType: 5
---

## Description
<section id='description'>
<p>
Given a mapping between items, and items they depend on, a 
<a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: Topological sorting">topological sort</a> orders 
items so that no item precedes an item it depends upon.
</p>
<p>
The compiling of a library in the 
<a href="https://en.wikipedia.org/wiki/VHDL" title="wp: VHDL">VHDL</a> language
has the constraint that a library must be compiled after any library it depends on.
</p>
Task:
<p>
Write a function that will return a valid compile order of VHDL libraries from their dependencies.
</p>
  Assume library names are single words. 
  Items mentioned as only dependents have no dependents of their own, but their order of compiling must be given.
  Any self dependencies should be ignored. 
  Any un-orderable dependencies should be ignored.
<p>Use the following data as an example:</p>
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
<p>
<small>Note: the above data would be un-orderable if, for example, <code>dw04</code> is added to the list of dependencies of <code>dw01</code>.</small>
</p>
C.f.:

    <a href="http://rosettacode.org/wiki/Topological sort/Extracted top item" title="Topological sort/Extracted top item">Topological sort/Extracted top item</a>.

<p>There are two popular algorithms for topological sorting:</p>
<p>
  Kahn's 1962 topological sort, and depth-first search:
  <a href="https://en.wikipedia.org/wiki/Topological sorting" title="wp: Topological sorting">topological sort</a>
</p>
<p>
  Jason Sachs:
  <a href="http://www.embeddedrelated.com/showarticle/799.php" title="link: http://www.embeddedrelated.com/showarticle/799.php">
  "Ten little algorithms, part 4: topological sort"
  </a>.
</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>topologicalSort</code> is a function.
  testString: 'assert(typeof topologicalSort === ''function'', ''<code>topologicalSort</code> is a function.'');'
- text: <code>topologicalSort</code> must return correct library order..
  testString: 'assert.deepEqual(topologicalSort(libsSimple), [''bbb'', ''aaa''], ''<code>topologicalSort</code> must return correct library order..'');'
- text: <code>topologicalSort</code> must return correct library order..
  testString: 'assert.deepEqual(topologicalSort(libsVHDL), solutionVHDL, ''<code>topologicalSort</code> must return correct library order..'');'
- text: <code>topologicalSort</code> must return correct library order..
  testString: 'assert.deepEqual(topologicalSort(libsCustom), solutionCustom, ''<code>topologicalSort</code> must return correct library order..'');'
- text: <code>topologicalSort</code> must ignore unorderable dependencies..
  testString: 'assert.deepEqual(topologicalSort(libsUnorderable), solutionUnorderable, ''<code>topologicalSort</code> must ignore unorderable dependencies..'');'

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


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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
