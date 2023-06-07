---
id: 5956795bc9e2c415eb244de1
title: Hash join
challengeType: 1
forumTopicId: 302284
dashedName: hash-join
---

# --description--

An inner join is an operation that combines two data tables into one table, based on matching column values. The simplest way of implementing this operation is the nested loop join algorithm, but a more scalable alternative is the hash join algorithm.

“哈希連接”算法包括兩個步驟：

<ol>
  <li><strong>Hash phase:</strong> Create a multimap from one of the two tables, mapping from each join column value to all the rows that contain it.</li>
  <ul>
    <li>The multimap must support hash-based lookup which scales better than a simple linear search, because that's the whole point of this algorithm.</li>
    <li>Ideally we should create the multimap for the smaller table, thus minimizing its creation time and memory size.</li>
  </ul>
  <li><strong>Join phase:</strong> Scan the other table, and find matching rows by looking in the multimap created before.</li>
</ol>

In pseudo-code, the algorithm could be expressed as follows:

<pre><strong>let</strong> <i>A</i> = the first input table (or ideally, the larger one)
<strong>let</strong> <i>B</i> = the second input table (or ideally, the smaller one)
<strong>let</strong> <i>j<sub>A</sub></i> = the join column ID of table <i>A</i>
<strong>let</strong> <i>j<sub>B</sub></i> = the join column ID of table <i>B</i>
<strong>let</strong> <i>M<sub>B</sub></i> = a multimap for mapping from single values to multiple rows of table <i>B</i> (starts out empty)
<strong>let</strong> <i>C</i> = the output table (starts out empty)
<strong>for each</strong> row <i>b</i> in table <i>B</i>:
  <strong>place</strong> <i>b</i> in multimap <i>M<sub>B</sub></i> under key <i>b(j<sub>B</sub>)</i>
<strong>for each</strong> row <i>a</i> in table <i>A</i>:
  <strong>for each</strong> row <i>b</i> in multimap <i>M<sub>B</sub></i> under key <i>a(j<sub>A</sub>)</i>:
    <strong>let</strong> <i>c</i> = the concatenation of row <i>a</i> and row <i>b</i>
    <strong>place</strong> row <i>c</i> in table <i>C</i>
</pre>

# --instructions--

Implement the "hash join" algorithm as a function and demonstrate that it passes the test-case listed below. The function should accept two arrays of objects and return an array of combined objects.

**輸入**

<table>
  <tr>
    <td style="padding: 4px; margin: 5px;">
      <table style="border:none; border-collapse:collapse;">
        <tr>
          <td style="border:none"><i>A =</i></td>
          <td style="border:none">
            <table>
              <tr>
                <th style="padding: 4px; margin: 5px;">Age</th>
                <th style="padding: 4px; margin: 5px;">Name</th>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">27</td>
                <td style="padding: 4px; margin: 5px;">Jonah</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">18</td>
                <td style="padding: 4px; margin: 5px;">Alan</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">28</td>
                <td style="padding: 4px; margin: 5px;">Glory</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">18</td>
                <td style="padding: 4px; margin: 5px;">Popeye</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">28</td>
                <td style="padding: 4px; margin: 5px;">Alan</td>
              </tr>
            </table>
          </td>
          <td style="border:none; padding-left:1.5em;" rowspan="2"></td>
          <td style="border:none"><i>B =</i></td>
          <td style="border:none">
            <table>
              <tr>
                <th style="padding: 4px; margin: 5px;">Character</th>
                <th style="padding: 4px; margin: 5px;">Nemesis</th>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Jonah</td>
                <td style="padding: 4px; margin: 5px;">Whales</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Jonah</td>
                <td style="padding: 4px; margin: 5px;">Spiders</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Alan</td>
                <td style="padding: 4px; margin: 5px;">Ghosts</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Alan</td>
                <td style="padding: 4px; margin: 5px;">Zombies</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Glory</td>
                <td style="padding: 4px; margin: 5px;">Buffy</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="border:none">
            <i>j<sub>A</sub> =</i>
          </td>
          <td style="border:none">
            <i><code>Name</code> (i.e. column 1)</i>
          </td>
          <td style="border:none">
            <i>j<sub>B</sub> =</i>
          </td>
          <td style="border:none">
            <i><code>Character</code> (i.e. column 0)</i>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

**輸出**

| A_age | A_name | B_character | B_nemesis |
| ----- | ------ | ----------- | --------- |
| 27    | Jonah  | Jonah       | Whales    |
| 27    | Jonah  | Jonah       | Spiders   |
| 18    | Alan   | Alan        | Ghosts    |
| 18    | Alan   | Alan        | Zombies   |
| 28    | Glory  | Glory       | Buffy     |
| 28    | Alan   | Alan        | Ghosts    |
| 28    | Alan   | Alan        | Zombies   |

The order of the rows in the output table is not significant.

# --hints--

`hashJoin` should be a function.

```js
assert(typeof hashJoin === 'function');
```

`hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])` should return `[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]`

```js
assert.deepEqual(hashJoin(hash1, hash2), res);
```

# --seed--

## --after-user-code--

```js
const hash1 = [
    { age: 27, name: 'Jonah' },
    { age: 18, name: 'Alan' },
    { age: 28, name: 'Glory' },
    { age: 18, name: 'Popeye' },
    { age: 28, name: 'Alan' }
];

const hash2 = [
    { character: 'Jonah', nemesis: 'Whales' },
    { character: 'Jonah', nemesis: 'Spiders' },
    { character: 'Alan', nemesis: 'Ghosts' },
    { character: 'Alan', nemesis: 'Zombies' },
    { character: 'Glory', nemesis: 'Buffy' },
    { character: 'Bob', nemesis: 'foo' }
];

const res = [
    { A_age: 27, A_name: 'Jonah', B_character: 'Jonah', B_nemesis: 'Whales' },
    { A_age: 27, A_name: 'Jonah', B_character: 'Jonah', B_nemesis: 'Spiders' },
    { A_age: 18, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Ghosts' },
    { A_age: 18, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Zombies' },
    { A_age: 28, A_name: 'Glory', B_character: 'Glory', B_nemesis: 'Buffy' },
    { A_age: 28, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Ghosts' },
    { A_age: 28, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Zombies' }
];

const bench1 = [{ name: 'u2v7v', num: 1 }, { name: 'n53c8', num: 10 }, { name: 'oysce', num: 9 }, { name: '0mto2s', num: 1 }, { name: 'vkh5id', num: 4 }, { name: '5od0cf', num: 8 }, { name: 'uuulue', num: 10 }, { name: '3rgsbi', num: 9 }, { name: 'kccv35r', num: 4 }, { name: '80un74', num: 9 }, { name: 'h4pp3', num: 6 }, { name: '51bit', num: 7 }, { name: 'j9ndf', num: 8 }, { name: 'vf3u1', num: 10 }, { name: 'g0bw0om', num: 10 }, { name: 'j031x', num: 7 }, { name: 'ij3asc', num: 9 }, { name: 'byv83y', num: 8 }, { name: 'bjzp4k', num: 4 }, { name: 'f3kbnm', num: 10 }];
const bench2 = [{ friend: 'o8b', num: 8 }, { friend: 'ye', num: 2 }, { friend: '32i', num: 5 }, { friend: 'uz', num: 3 }, { friend: 'a5k', num: 4 }, { friend: 'uad', num: 7 }, { friend: '3w5', num: 10 }, { friend: 'vw', num: 10 }, { friend: 'ah', num: 4 }, { friend: 'qv', num: 7 }, { friend: 'ozv', num: 2 }, { friend: '9ri', num: 10 }, { friend: '7nu', num: 4 }, { friend: 'w3', num: 9 }, { friend: 'tgp', num: 8 }, { friend: 'ibs', num: 1 }, { friend: 'ss7', num: 6 }, { friend: 'g44', num: 9 }, { friend: 'tab', num: 9 }, { friend: 'zem', num: 10 }];
```

## --seed-contents--

```js
function hashJoin(hash1, hash2) {

  return [];
}
```

# --solutions--

```js
function hashJoin(hash1, hash2) {
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
