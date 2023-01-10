---
id: 596fd036dc1ab896c5db98b1
title: Конвертувати секунди в одиниці часу
challengeType: 1
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

Запустити функцію яка:

<ul>
  <li>бере додатнє ціле число, що представляє тривалість в секундах як вхідні дані (наприклад <code>100</code>), і</li>
  <li>повертає рядок, котрий показує таку ж тривалість перетворену в тижні, дні, години, хвилини і секунди, як детально описано нижче ( наприклад <code>1 min, 40 sec</code>).</li>
</ul>

Демонстрація того, що вона передає наступні три тестові випадки:

<div style='font-size:115%; font-weight: bold;'>Тестові випадки</div>

| Вхідне число | Вихідне число             |
| ------------ | ------------------------- |
| 7259         | <code>2 hr, 59 sec</code> |
| 86400        | <code>1 d</code> |
| 6000000      | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">Деталі</div>
<ul>
  <li>
    Варто використовувати наступні п'ять одиниць: 
| Unit   | Suffix used in Output | Conversion            |
| ------ | --------------------- | --------------------- |
| week   |!!crwdBlockTags_18_sgaTkcolBdwrc!!       | 1 week = 7 days       |
| day    |!!crwdBlockTags_19_sgaTkcolBdwrc!!        | 1 day = 24 hours      |
| hour   |!!crwdBlockTags_20_sgaTkcolBdwrc!!       | 1 hour = 60 minutes   |
| minute |!!crwdBlockTags_21_sgaTkcolBdwrc!!      | 1 minute = 60 seconds |
| second |!!crwdBlockTags_22_sgaTkcolBdwrc!!      | ---                   |

  </li>
  <li>
    Однак <strong>only</strong> містить кількість не нульових значень при виході (наприклад <code>1 d</code> а не <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>).
  </li>
  <li>
    Надавати перевагу максимально великим одиницям над меншими одиницями (наприклад повернути <code>2 min, 10 sec</code> а не <code>1 min, 70 sec</code> чи <code>130 sec</code>).
  </li>
  <li>
    Мімікрійне форматування, показане у тестових випадках ( кількість відсортована від найбільшої одиниці до найменшої і відокремлена комою+пробілом; значення і одиниця всіх значень відділена пробілом).
  </li>
</ul>

# --hints--

`convertSeconds` має бути функцією.

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` має повернути `2 hr, 59 sec`.

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` має повернути `1 d`.

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` має повернути `9 wk, 6 d, 10 hr, 40 min`.

```js
assert.equal(convertSeconds(testCases[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = [7259, 86400, 6000000];
const results = ['2 hr, 59 sec', '1 d', '9 wk, 6 d, 10 hr, 40 min'];
```

## --seed-contents--

```js
function convertSeconds(sec) {

  return true;
}
```

# --solutions--

```js
function convertSeconds(sec) {
  const localNames = ['wk', 'd', 'hr', 'min', 'sec'];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
    .map((v, i) => [v, labels[i]])
    .reduce((a, x) =>
      a.concat(x[0] ? [`${x[0]} ${x[1] || '?'}`] : []), []
    )
    .join(', ');

    // weekParts :: Int -> [Int]
  const weekParts = intSeconds => [0, 7, 24, 60, 60]
    .reduceRight((a, x) => {
      const r = a.rem;
      const mod = x !== 0 ? r % x : r;

      return {
        rem: (r - mod) / (x || 1),
        parts: [mod].concat(a.parts)
      };
    }, {
      rem: intSeconds,
      parts: []
    })
    .parts;

  return compoundDuration(localNames, sec);
}
```
