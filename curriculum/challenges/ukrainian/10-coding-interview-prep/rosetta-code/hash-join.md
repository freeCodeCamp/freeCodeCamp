---
id: 5956795bc9e2c415eb244de1
title: Хеш-приєднання
challengeType: 1
forumTopicId: 302284
dashedName: hash-join
---

# --description--

An inner join is an operation that combines two data tables into one table, based on matching column values. The simplest way of implementing this operation is the nested loop join algorithm, but a more scalable alternative is the hash join algorithm.

Алгоритм "хеш-приєднання" складається з двох кроків:

<ol>
  <li><strong>Hash phase:</strong> Create a multimap from one of the two tables, mapping from each join column value to all the rows that contain it.</li>
  <ul>
    <li>Багатофункціональна карта повинна підтримувати хеш пошук, який оцінює краще звичайного лінійного пошуку, оскільки це і є суть алгоритму.</li>
    <li>В ідеалі, ми створюємо мультимедійне відображення для меншої таблиці, таким чином мінімізуючи час створення та розмір пам'яті.</li>
  </ul>
  <li><strong>Приєднатися до фази:</strong> Скануйте іншу таблицю, знайдіть відповідні рядки, дивлячись у багатофункціональну карту, створену раніше.</li>
</ol>

В псевдокоді алгоритм може бути виражений так:

<pre><strong>нехай</strong> <i>A</i> = перша початкова таблиця (в ідеалі — найбільша)
<strong>нехай</strong> <i>B</i> = друга початкова таблиця (в ідеалі — найменша)
<strong>нехай</strong> <i>j<sub>A</sub></i> = спільна колонка ID таблиці <i>A</i>
<strong>нехай</strong> <i>j<sub>B</sub></i> = спільна колонка ID таблиці <i>В</i>
<strong>нехай</strong> <i>M<sub>B</sub></i> = багатофункціональна карта для відображення від одиничних значень до кількох рядків таблиці <i>B</i> (починаючи з порожніх)
<strong>нехай</strong> <i>C</i> = вихідна таблиця (починаючи з порожніх)
<strong>для кожного</strong> ряду <i>b</i> таблиці <i>B</i>:
  <strong>місце</strong> <i>b</i> у багатофункціональній карті <i>M<sub>B</sub></i> відповідно до <i>b(j<sub>B</sub>)</i>
<strong>для кожного</strong> ряду <i>a</i> у таблиці <i>A</i>:
  <strong>для кожного</strong> ряду <i>b</i> у багатофункціональній карті <i>M<sub>B</sub></i> відповідно до <i>a(j<sub>A</sub>)</i>:
    <strong>нехай</strong> <i>c</i> = ланцюжок рядків <i>a</i> і ряд <i>b</i>
    <strong>місце</strong> ряд <i>c</i> у таблиці <i>C</i>
</pre>

# --instructions--

Реалізуйте алгоритм "хеш-приєднання" як функцію, та продемонструйте, що вона передає тестове значення, вказане нижче. Функція має приймати два масиви об'єктів і повертати масив комбінованих об’єктів.

**Початкова інформація**

<table>
  <tr>
    <td style="padding: 4px; margin: 5px;">
      <table style="border:none; border-collapse:collapse;">
        <tr>
          <td style="border:none"><i>А =</i></td>
          <td style="border:none">
            <table>
              <tr>
                <th style="padding: 4px; margin: 5px;">Вік</th>
                <th style="padding: 4px; margin: 5px;">Ім'я</th>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">27</td>
                <td style="padding: 4px; margin: 5px;">Йона</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">18</td>
                <td style="padding: 4px; margin: 5px;">Алан</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">28</td>
                <td style="padding: 4px; margin: 5px;">Глорія</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">18</td>
                <td style="padding: 4px; margin: 5px;">Попай</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">28</td>
                <td style="padding: 4px; margin: 5px;">Алан</td>
              </tr>
            </table>
          </td>
          <td style="border:none; padding-left:1.5em;" rowspan="2"></td>
          <td style="border:none"><i>B =</i></td>
          <td style="border:none">
            <table>
              <tr>
                <th style="padding: 4px; margin: 5px;">Персонаж</th>
                <th style="padding: 4px; margin: 5px;">Ворог</th>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Йона</td>
                <td style="padding: 4px; margin: 5px;">Кити</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Йона</td>
                <td style="padding: 4px; margin: 5px;">Павуки</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Алан</td>
                <td style="padding: 4px; margin: 5px;">Привиди</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Алан</td>
                <td style="padding: 4px; margin: 5px;">Зомбі</td>
              </tr>
              <tr>
                <td style="padding: 4px; margin: 5px;">Глорія</td>
                <td style="padding: 4px; margin: 5px;">Баффі</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="border:none">
            <i>j<sub>A</sub> =</i>
          </td>
          <td style="border:none">
            <i><code>Ім'я</code> (напр. колонка 1)</i>
          </td>
          <td style="border:none">
            <i>j<sub>B</sub> =</i>
          </td>
          <td style="border:none">
            <i><code>Персонаж</code> (напр. колонка 0)</i>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

**Результат**

| A_вік | A_ім'я | B_персонаж | B_ворог |
| ----- | ------ | ---------- | ------- |
| 27    | Йона   | Йона       | Кити    |
| 27    | Йона   | Джон       | Павуки  |
| 18    | Алан   | Алан       | Привиди |
| 18    | Алан   | Алан       | Зомбі   |
| 28    | Глорі  | Глорі      | Баффі   |
| 28    | Алан   | Алан       | Привиди |
| 28    | Алан   | Алан       | Зомбі   |

Порядок рядків у вихідній таблиці не є важливим.

# --hints--

`hashJoin` має бути функцією.

```js
assert(typeof hashJoin === 'function');
```

`hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])` має повернути `[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]`

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
