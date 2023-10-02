---
id: 595011cba5a81735713873bd
title: Classifica superiore per gruppo
challengeType: 1
forumTopicId: 302339
dashedName: top-rank-per-group
---

# --description--

Trova i primi `n` dati classificati in ogni gruppo, dove `n` è fornito come parametro. Anche il nome del rango e del gruppo sono forniti come parametri.

Forniti i seguenti dati:

```js
testData1 = [
  { name: 'Tyler Bennett', id: 'E10297', salary: 32000, dept: 'D101' },
  { name: 'John Rappl', id: 'E21437', salary: 47000, dept: 'D050' },
  { name: 'George Woltman', id: 'E00127', salary: 53500, dept: 'D101' },
  { name: 'Adam Smith', id: 'E63535', salary: 18000, dept: 'D202' },
  { name: 'Claire Buckman', id: 'E39876', salary: 27800, dept: 'D202' },
  { name: 'David McClellan', id: 'E04242', salary: 41500, dept: 'D101' },
  { name: 'Rich Holcomb', id: 'E01234', salary: 49500, dept: 'D202' },
  { name: 'Nathan Adams', id: 'E41298', salary: 21900, dept: 'D050' },
  { name: 'Richard Potter', id: 'E43128', salary: 15900, dept: 'D101' },
  { name: 'David Motsinger', id: 'E27002', salary: 19250, dept: 'D202' },
  { name: 'Tim Sampair', id: 'E03033', salary: 27000, dept: 'D101' },
  { name: 'Kim Arlich', id: 'E10001', salary: 57000, dept: 'D190' },
  { name: 'Timothy Grove', id: 'E16398', salary: 29900, dept: 'D190' }
];
```

Si potrebbero classificare i primi 10 dipendenti in ogni reparto chiamando:

```js
topRankPerGroup(10, testData1, 'dept', 'salary')
```

Forniti i seguenti dati:

```js
testData2 = [
  { name: 'Friday 13th', genre: 'horror', rating: 9.9 },
  { name: "Nightmare on Elm's Street", genre: 'horror', rating: 5.7 },
  { name: 'Titanic', genre: 'drama', rating: 7.3 },
  { name: 'Maze Runner', genre: 'scifi', rating: 7.1 },
  { name: 'Blade runner', genre: 'scifi', rating: 8.9 }
];
```

Si potrebbe classificare il film più votato in ogni genere chiamando:

```js
topRankPerGroup(1, testData2, 'genre', 'rating')
```

La funzione dovrebbe restituire un array con un array per ogni gruppo contenente gli `n` oggetti superiori.

Per esempio, dati:

```js
[
  { name: 'Claire Buckman', id: 'E39876', salary: 27800, dept: 'D101' },
  { name: 'Rich Holcomb', id: 'E01234', salary: 49500, dept: 'D050' },
  { name: 'David Motsinger', id: 'E27002', salary: 19250, dept: 'D050' },
  { name: 'Tim Sampair', id: 'E03033', salary: 27000, dept: 'D101' },
  { name: 'Kim Arlich', id: 'E10001', salary: 57000, dept: 'D050' },
  { name: 'Timothy Grove', id: 'E16398', salary: 29900, dept: 'D101' }
];
```

I primi due dipendenti in classifica per stipendio in ogni reparto saranno:

```js
[ [ { name: 'Kim Arlich', id: 'E10001', salary: 57000, dept: 'D050' },
    { name: 'Rich Holcomb', id: 'E01234', salary: 49500, dept: 'D050' } ],
  [ { name: 'Timothy Grove', id: 'E16398', salary: 29900, dept: 'D101' },
    { name: 'Claire Buckman', id: 'E39876', salary: 27800, dept: 'D101' } ] ]
```

# --hints--

`topRankPerGroup` dovrebbe essere una funzione.

```js
assert(typeof topRankPerGroup === 'function');
```

`topRankPerGroup` dovrebbe restituire undefined per i valori negativi di n.

```js
assert(typeof topRankPerGroup(-1, []) === 'undefined');
```

Per `topRankPerGroup(10, testData1, 'dept', 'salary')`, il primo risultato nel primo gruppo dovrebbe essere `{ name: 'John Rappl', id: 'E21437', salary: 47000, dept: 'D050'}`.

```js
assert.deepEqual(res1[0][0], { name: 'John Rappl', id: 'E21437', salary: 47000, dept: 'D050'});
```

Per `topRankPerGroup(10, testData1, 'dept', 'salary')`, l'ultimo risultato nell'ultimo gruppo dovrebbe essere `{ name: 'Adam Smith', id: 'E63535', salary: 18000, dept: 'D202' }`.

```js
assert.deepEqual(res1[3][3], { name: 'Adam Smith', id: 'E63535', salary: 18000, dept: 'D202' });
```

`topRankPerGroup(1, ...)` dovrebbe restituire solo il il primo risultato in classifica per ogni gruppo.

```js
assert.equal(res2[2].length, 1);
```

`topRankPerGroup(2, ...)` dovrebbe restituire due risultati di classifica per gruppo.

```js
assert.equal(res3[2][1].name, 'Maze Runner');
```

# --seed--

## --after-user-code--

```js
const testData1 = [
  { name: 'Tyler Bennett', id: 'E10297', salary: 32000, dept: 'D101' },
  { name: 'John Rappl', id: 'E21437', salary: 47000, dept: 'D050' },
  { name: 'George Woltman', id: 'E00127', salary: 53500, dept: 'D101' },
  { name: 'Adam Smith', id: 'E63535', salary: 18000, dept: 'D202' },
  { name: 'Claire Buckman', id: 'E39876', salary: 27800, dept: 'D202' },
  { name: 'David McClellan', id: 'E04242', salary: 41500, dept: 'D101' },
  { name: 'Rich Holcomb', id: 'E01234', salary: 49500, dept: 'D202' },
  { name: 'Nathan Adams', id: 'E41298', salary: 21900, dept: 'D050' },
  { name: 'Richard Potter', id: 'E43128', salary: 15900, dept: 'D101' },
  { name: 'David Motsinger', id: 'E27002', salary: 19250, dept: 'D202' },
  { name: 'Tim Sampair', id: 'E03033', salary: 27000, dept: 'D101' },
  { name: 'Kim Arlich', id: 'E10001', salary: 57000, dept: 'D190' },
  { name: 'Timothy Grove', id: 'E16398', salary: 29900, dept: 'D190' }
];

const res1 = topRankPerGroup(10, testData1, 'dept', 'salary');

const testData2 = [
  { name: 'Friday 13th', genre: 'horror', rating: 9.9 },
  { name: "Nightmare on Elm's Street", genre: 'horror', rating: 5.7 },
  { name: 'Titanic', genre: 'drama', rating: 7.3 },
  { name: 'Maze Runner', genre: 'scifi', rating: 7.1 },
  { name: 'Blade runner', genre: 'scifi', rating: 8.9 }
];

const res2 = topRankPerGroup(1, testData2, 'genre', 'rating');
const res3 = topRankPerGroup(2, testData2, 'genre', 'rating');
```

## --seed-contents--

```js
function topRankPerGroup(n, data, groupName, rankName) {

  return true;
}
```

# --solutions--

```js
const collectDept = function (arrOfObj, groupName) {
  const collect = arrOfObj.reduce((rtnObj, obj) => {
    if (rtnObj[obj[groupName]] === undefined) {
      rtnObj[obj[groupName]] = [];
    }
    rtnObj[obj[groupName]].push(obj);
    return rtnObj;
  }, {} // initial value to reduce
  );

  return Object.keys(collect).sort().map(key => collect[key]);
};

const sortRank = function (arrOfRankArrs, rankName) {
  return arrOfRankArrs.map(item => item.sort((a, b) => {
    if (a[rankName] > b[rankName]) { return -1; }
    if (a[rankName] < b[rankName]) { return 1; }
    return 0;
  }));
};

function topRankPerGroup(n, data, groupName, rankName) {
  if (n < 0) { return; }
  return sortRank(collectDept(data, groupName),
    rankName).map(list => list.slice(0, n));
}
```
