---
id: 5eb3e4af7d0e7b760b46cedc
title: Встановлене об’єднання
challengeType: 1
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

Дано дві множини елементів. Якщо між цими множинами є спільний елемент, то результатом їх *об’єднання* є множина множин, вмістом якої є:

<ul>
  <li>Дві вхідні множини, якщо між ними не існує спільного елемента.</li>
  <li>Одна множина, яка є об’єднанням двох вхідних множин, якщо в них є спільний елемент.</li>
</ul>

Якщо дано N множин елементів, де N > 2, то результат буде таким самим, як і для багаторазової перестановки всіх комбінацій двох множин шляхом їх об’єднання, допоки не буде можливим наступне об’єднання. Якщо N &lt; 2, то об’єднання не має строгого значення та вхідні дані можна повернути.

Ось декілька прикладів:

**Приклад 1:**

Дано дві множини: `{A,B}` та `{C,D}`. Оскільки між ними немає спільних елементів, результат буде таким же, як і вхідні дані.

**Приклад 2:**

Дано дві множини: `{A,B}` та `{B,D}`. Між ними є спільний елемент `B`, тому результатом буде множина `{B,D,A}`. (Зауважте, що порядок елементів не має значення: `{A,B,D}` позначає те ж саме, що й `{B,D,A}`, `{D,A,B}` тощо).

**Приклад 3:**

Дано три множини: `{A,B}`, `{C,D}` та `{D,B}`. Між `{A,B}` та `{C,D}` немає спільних елементів, але між `{A,B}` та `{D,B}` є спільний елемент, що утворює результат `{B,D,A}`. Цей результат має спільний елемент з множиною, яка залишилась (`{C,D}`), тому кінцевим результатом буде множина `{A,B,C,D}`.

**Приклад 4:**

Об’єднанням п’яти множин:

`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}` та `{F,G,H}`

є дві множини:

`{A, C, B, D}` та `{G, F, I, H, K}`

# --instructions--

Напишіть функцію, яка приймає масив рядків як параметр. Кожен рядок представляє множину символів, які є елементами множини. Функція має повернути 2D-масив, який містить об’єднані множини. Примітка: множини мають бути відсортованими.

# --hints--

`setConsolidation` має бути функцією.

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` має повернути масив.

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` має повернути `[["C", "D"], ["A", "B"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` має повернути `[["A", "B", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` має повернути `[["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` має повернути `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['HIK', 'AB', 'CD', 'DB', 'FGH']), [
  ['F', 'G', 'H', 'I', 'K'],
  ['A', 'B', 'C', 'D']
]);
```

# --seed--

## --seed-contents--

```js
function setConsolidation(sets) {

}
```

# --solutions--

```js
function setConsolidation(sets) {
  function addAll(l1, l2) {
    l2.forEach(function(e) {
      if (l1.indexOf(e) == -1) l1.push(e);
    });
  }

  function consolidate(sets) {
    var r = [];
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i];
      {
        var new_r = [];
        new_r.push(s);
        for (var j = 0; j < r.length; j++) {
          var x = r[j];
          {
            if (
              !(function(c1, c2) {
                for (var i = 0; i < c1.length; i++) {
                  if (c2.indexOf(c1[i]) >= 0) return false;
                }
                return true;
              })(s, x)
            ) {
              (function(l1, l2) {
                addAll(l1, l2);
              })(s, x);
            } else {
              new_r.push(x);
            }
          }
        }
        r = new_r;
      }
    }
    return r;
  }

  function consolidateR(sets) {
    if (sets.length < 2) return sets;
    var r = [];
    r.push(sets[0]);
    {
      var arr1 = consolidateR(sets.slice(1, sets.length));
      for (var i = 0; i < arr1.length; i++) {
        var x = arr1[i];
        {
          if (
            !(function(c1, c2) {
              for (var i = 0; i < c1.length; i++) {
                if (c2.indexOf(c1[i]) >= 0) return false;
              }
              return true;
            })(r[0], x)
          ) {
            (function(l1, l2) {
              return l1.push.apply(l1, l2);
            })(r[0], x);
          } else {
            r.push(x);
          }
        }
      }
    }
    return r;
  }

  function hashSetList(set) {
    var r = [];
    for (var i = 0; i < set.length; i++) {
      r.push([]);
      for (var j = 0; j < set[i].length; j++)
        (function(s, e) {
          if (s.indexOf(e) == -1) {
            s.push(e);
            return true;
          } else {
            return false;
          }
        })(r[i], set[i].charAt(j));
    }
    return r;
  }

  var h1 = consolidate(hashSetList(sets)).map(function(e) {
    e.sort();
    return e;
  });
  return h1;
}
```
