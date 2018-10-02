---
title: Hash join
id: 5956795bc9e2c415eb244de1
challengeType: 5
---

## Description
<section id='description'>
<p>An <a href="https://en.wikipedia.org/wiki/Join_(SQL)#Inner_join" title="wp: Join_(SQL)#Inner_join">inner join</a> is an operation that combines two data tables into one table, based on matching column values. The simplest way of implementing this operation is the <a href="https://en.wikipedia.org/wiki/Nested loop join" title="wp: Nested loop join">nested loop join</a> algorithm, but a more scalable alternative is the <a href="https://en.wikipedia.org/wiki/hash join" title="wp: hash join">hash join</a> algorithm.</p>
<p>Implement the "hash join" algorithm, and demonstrate that it passes the test-case listed below.</p><p>You should represent the tables as data structures that feel natural in your programming language.</p>
<p>The "hash join" algorithm consists of two steps:</p>
Hash phase: Create a <a href="https://en.wikipedia.org/wiki/Multimap" title="wp: Multimap">multimap</a> from one of the two tables, mapping from each join column value to all the rows that contain it.
 The multimap must support hash-based lookup which scales better than a simple linear search, because that's the whole point of this algorithm.
 Ideally we should create the multimap for the smaller table, thus minimizing its creation time and memory size.
Join phase: Scan the other table, and find matching rows by looking in the multimap created before.
<p>In pseudo-code, the algorithm could be expressed as follows:</p>
<pre>
let A = the first input table (or ideally, the larger one)
let B = the second input table (or ideally, the smaller one)
let j<sub>A</sub> = the join column ID of table A
let j<sub>B</sub> = the join column ID of table B
let M<sub>B</sub> = a multimap for mapping from single values to multiple rows of table B (starts out empty)
let C = the output table (starts out empty)
for each row b in table B:
  place b in multimap M<sub>B</sub> under key b(j<sub>B</sub>)
for each row a in table A:
  for each row b in multimap M<sub>B</sub> under key a(j<sub>A</sub>):
    let c = the concatenation of row a and row b
    place row c in table C</p>
</pre>
Test-case
<p>Input</p>
<table>
<tr>
<td style="padding: 4px; margin: 5px;">
<table style="border:none; border-collapse:collapse;">
<tr>
<td style="border:none"> <i>A =</i>
</td>
<td style="border:none">
<table>
<tr>
<th style="padding: 4px; margin: 5px;"> Age </th>
<th style="padding: 4px; margin: 5px;"> Name
</th></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 27 </td>
<td style="padding: 4px; margin: 5px;"> Jonah
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 18 </td>
<td style="padding: 4px; margin: 5px;"> Alan
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 28 </td>
<td style="padding: 4px; margin: 5px;"> Glory
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 18 </td>
<td style="padding: 4px; margin: 5px;"> Popeye
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 28 </td>
<td style="padding: 4px; margin: 5px;"> Alan
</td></tr></table>
</td>
<td style="border:none; padding-left:1.5em;" rowspan="2">
</td>
<td style="border:none"> <i>B =</i>
</td>
<td style="border:none">
<table>
<tr>
<th style="padding: 4px; margin: 5px;"> Character </th>
<th style="padding: 4px; margin: 5px;"> Nemesis
</th></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> Jonah </td>
<td style="padding: 4px; margin: 5px;"> Whales
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> Jonah </td>
<td style="padding: 4px; margin: 5px;"> Spiders
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Ghosts
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Zombies
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> Glory </td>
<td style="padding: 4px; margin: 5px;"> Buffy
</td></tr></table>
</td></tr>
<tr>
<td style="border:none"> <i>j<sub>A</sub> =</i>
</td>
<td style="border:none"> <i><code>Name</code> (i.e. column 1)</i>
</td>
<td style="border:none"> <i>j<sub>B</sub> =</i>
</td>
<td style="border:none"> <i><code>Character</code> (i.e. column 0)</i>
</td></tr></table>
</td>
<td style="padding: 4px; margin: 5px;">
</td></tr></table>
<p>Output</p>
<table>
<tr>
<th style="padding: 4px; margin: 5px;"> A.Age </th>
<th style="padding: 4px; margin: 5px;"> A.Name </th>
<th style="padding: 4px; margin: 5px;"> B.Character </th>
<th style="padding: 4px; margin: 5px;"> B.Nemesis
</th></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 27 </td>
<td style="padding: 4px; margin: 5px;"> Jonah </td>
<td style="padding: 4px; margin: 5px;"> Jonah </td>
<td style="padding: 4px; margin: 5px;"> Whales
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 27 </td>
<td style="padding: 4px; margin: 5px;"> Jonah </td>
<td style="padding: 4px; margin: 5px;"> Jonah </td>
<td style="padding: 4px; margin: 5px;"> Spiders
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 18 </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Ghosts
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 18 </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Zombies
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 28 </td>
<td style="padding: 4px; margin: 5px;"> Glory </td>
<td style="padding: 4px; margin: 5px;"> Glory </td>
<td style="padding: 4px; margin: 5px;"> Buffy
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 28 </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Ghosts
</td></tr>
<tr>
<td style="padding: 4px; margin: 5px;"> 28 </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Alan </td>
<td style="padding: 4px; margin: 5px;"> Zombies
</td></tr></table>
<p></p><p></p><p>The order of the rows in the output table is not significant.</p>
<p>If you're using numerically indexed arrays to represent table rows (rather than referring to columns by name), you could represent the output rows in the form <code style="white-space:nowrap">[[27, "Jonah"], ["Jonah", "Whales"]]</code>.</p><hr>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>hashJoin</code> is a function.
  testString: 'assert(typeof hashJoin === ''function'', ''<code>hashJoin</code> is a function.'');'
- text: '<code>hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])</code> should return <code>[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]</code>'
  testString: 'assert.deepEqual(hashJoin(hash1, hash2), res, ''<code>hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])</code> should return <code>[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hashJoin (hash1, hash2) {
  // Good luck!
  return [];
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
function hashJoin (hash1, hash2) {
  const hJoin = (tblA, tblB, strJoin) => {
    const [jA, jB] = strJoin.split('=');
    const M = tblB.reduce((a, x) => {
      const id = x[jB];
      return (
        a[id] ? a[id].push(x) : (a[id] = [x]),
        a
      );
    }, {});

    return tblA.reduce((a, x) => {
      const match = M[x[jA]];
      return match ? (
                a.concat(match.map(row => dictConcat(x, row)))
            ) : a;
    }, []);
  };

  const dictConcat = (dctA, dctB) => {
    const ok = Object.keys;
    return ok(dctB).reduce(
            (a, k) => (a[`B_${k}`] = dctB[k]) && a,
            ok(dctA).reduce(
                (a, k) => (a[`A_${k}`] = dctA[k]) && a, {}
            )
        );
  };

  return hJoin(hash1, hash2, 'name=character');
}


```

</section>
