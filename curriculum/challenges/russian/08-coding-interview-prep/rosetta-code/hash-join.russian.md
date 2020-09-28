---
title: Hash join
id: 5956795bc9e2c415eb244de1
challengeType: 5
forumTopicId: 302284
localeTitle: Присоединиться
---

## Description
<section id='description'>
<p> <a href="https://en.wikipedia.org/wiki/Join_(SQL)#Inner_join" title="wp: Join_ (SQL) #Inner_join">Внутреннее соединение</a> - это операция, которая объединяет две таблицы данных в одну таблицу на основе совпадающих значений столбцов. Простейшим способом реализации этой операции является алгоритм <a href="https://en.wikipedia.org/wiki/Nested loop join" title="wp: Соединение вложенного цикла">объединения вложенных циклов</a> , но более масштабируемой альтернативой является алгоритм <a href="https://en.wikipedia.org/wiki/hash join" title="wp: hash join">хеш-соединения</a> . </p><p> Внедрите алгоритм «хеш-соединения» и продемонстрируйте, что он проходит тестовый сценарий, указанный ниже. </p><p> Вы должны представлять таблицы как структуры данных, которые кажутся естественными на вашем языке программирования. </p><p> Алгоритм «хеш-соединения» состоит из двух шагов: </p> Хэш-фаза. Создайте <a href="https://en.wikipedia.org/wiki/Multimap" title="wp: Multimap">мультимап</a> из одной из двух таблиц, сопоставляя их со всеми значениями столбца объединения со всеми строками, которые его содержат. Мультимап должен поддерживать хэш-ориентированный поиск, который масштабируется лучше, чем простой линейный поиск, потому что в этом весь смысл этого алгоритма. В идеале мы должны создать мультимап для меньшей таблицы, таким образом минимизируя время его создания и размер памяти. Фаза присоединения. Сканируйте другую таблицу и найдите соответствующие строки, просмотрев созданный ранее мультимап. <p> В псевдокоде алгоритм может быть выражен следующим образом: </p><pre> пусть A = первая входная таблица (или, в идеале, большая)
пусть B = вторая входная таблица (или, в идеале, меньшая)
пусть j <sub>A</sub> = идентификатор столбца соединения таблицы A
пусть j <sub>B</sub> = идентификатор столбца соединения таблицы B
пусть M <sub>B</sub> = мультимап для отображения из отдельных значений в несколько строк таблицы B (начинается пустым)
пусть C = выходная таблица (начинается пустая)
для каждой строки b в таблице B:
  место b в multimap M <sub>B</sub> под клавишей b (j <sub>B</sub> )
для каждой строки a в таблице A:
  для каждой строки b в мультимадре M <sub>B</sub> под ключом a (j <sub>A</sub> ):
    пусть c = конкатенация строки a и строки b
    поместите строку c в таблицу C <p></p>
</pre> Прецедент <p> вход </p><table><tbody><tr><td style="padding: 4px; margin: 5px;"><table style="border:none; border-collapse:collapse;"><tbody><tr><td style="border:none"> <i>A =</i> </td><td style="border:none"><table><tbody><tr><th style="padding: 4px; margin: 5px;"> Возраст </th><th style="padding: 4px; margin: 5px;"> имя </th></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Иона </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Алан </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> слава </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Popeye </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Алан </td></tr></tbody></table></td><td style="border:none; padding-left:1.5em;" rowspan="2"></td><td style="border:none"> <i>B =</i> </td><td style="border:none"><table><tbody><tr><th style="padding: 4px; margin: 5px;"> символ </th><th style="padding: 4px; margin: 5px;"> Немезида </th></tr><tr><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Киты </td></tr><tr><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Пауки </td></tr><tr><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> привидения </td></tr><tr><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Zombies </td></tr><tr><td style="padding: 4px; margin: 5px;"> слава </td><td style="padding: 4px; margin: 5px;"> Buffy </td></tr></tbody></table></td></tr><tr><td style="border:none"> <i>j <sub>A</sub> =</i> </td><td style="border:none"> <i><code>Name</code> (т.е. столбец 1)</i> </td><td style="border:none"> <i>j <sub>B</sub> =</i> </td><td style="border:none"> <i><code>Character</code> (т.е. столбец 0)</i> </td></tr></tbody></table></td><td style="padding: 4px; margin: 5px;"></td></tr></tbody></table><p> Вывод </p><table><tbody><tr><th style="padding: 4px; margin: 5px;"> A.Age </th><th style="padding: 4px; margin: 5px;"> Имя </th><th style="padding: 4px; margin: 5px;"> B.Character </th><th style="padding: 4px; margin: 5px;"> B.Nemesis </th></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Киты </td></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Пауки </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> привидения </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Zombies </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> слава </td><td style="padding: 4px; margin: 5px;"> слава </td><td style="padding: 4px; margin: 5px;"> Buffy </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> привидения </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Zombies </td></tr></tbody></table><p></p><p></p><p> Порядок строк в выходной таблице не имеет значения. </p><p> Если вы используете численные индексированные массивы для представления строк таблицы (вместо обращения к столбцам по имени), вы можете представить выходные строки в форме <code style="white-space:nowrap">[[27, &quot;Jonah&quot;], [&quot;Jonah&quot;, &quot;Whales&quot;]]</code> , </p><hr>
</section>

## Instructions
<section id='instructions'>
Implement the "hash join" algorithm as a function and demonstrate that it passes the test-case listed below. The function should accept two arrays of objects and return an array of combined objects.
<h4><strong>Input</strong></h4>
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
<h4><strong>Output</strong></h4>
<table>
<tr>
<th style="padding: 4px; margin: 5px;"> A_age </th>
<th style="padding: 4px; margin: 5px;"> A_name </th>
<th style="padding: 4px; margin: 5px;"> B_character </th>
<th style="padding: 4px; margin: 5px;"> B_nemesis
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
The order of the rows in the output table is not significant.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hashJoin</code> is a function.
    testString: assert(typeof hashJoin === 'function');
  - text: '<code>hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])</code> should return <code>[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]</code>'
    testString: assert.deepEqual(hashJoin(hash1, hash2), res);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hashJoin(hash1, hash2) {
  // Good luck!
  return [];
}

```

</div>

### After Tests
<div id='js-teardown'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
