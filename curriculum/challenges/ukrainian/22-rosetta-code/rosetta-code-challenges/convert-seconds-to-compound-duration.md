---
id: 596fd036dc1ab896c5db98b1
title: Конвертація секунд в складену тривалість
challengeType: 1
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

Реалізуйте функцію, яка:

<ul>
  <li>приймає натуральне число, яке представляє тривалість в секундах (наприклад, <code>100</code>), та</li>
  <li>повертає рядок тієї самої тривалості у вигляді тижнів, днів, годин, хвилин та секунд (наприклад, <code>1 min, 40 sec</code>).</li>
</ul>

Розглянемо три тестові випадки:

<div style='font-size:115%; font-weight: bold;'>Тестові випадки</div>

| Вхідне число | Вихідне число             |
| ------------ | ------------------------- |
| 7259         | <code>2 hr, 59 sec</code> |
| 86400        | <code>1 d</code> |
| 6000000      | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">Деталі</div>
<ul>
  <li>
    Використайте наступні п’ять одиниць:

| Одиниця   | Суфікс | Конвертація            |
| ------ | --------------------- | --------------------- |
| тиждень   | <code>wk</code>       | 1 тиждень = 7 днів       |
| день    | <code>d</code>        | 1 день = 24 години      |
| година   | <code>hr</code>       | 1 година = 60 хвилин   |
| хвилина | <code>min</code>      | 1 хвилина = 60 секунд |
| секунда | <code>sec</code>      | ---                   |

  </li>
  <li>
    Однак у вихідному числі використайте <strong>лише</strong> ті значення, які більші за нуль (наприклад, поверніть <code>1 d</code>, а не <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>).
  </li>
  <li>
    Надавайте перевагу більшим одиницям над меншими (наприклад, поверніть <code>2 min, 10 sec</code>, а не <code>1 min, 70 sec</code> чи <code>130 sec</code>).
  </li>
  <li>
    Використайте те ж саме форматування, що й в тестових випадках (одиниці відсортовані від найбільшої до найменшої та розділені комою+пробілом; значення та одиниця розділені пробілом).
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
