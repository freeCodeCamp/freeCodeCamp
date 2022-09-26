---
id: 5eb3e4af7d0e7b760b46cedc
title: Встановлення консолідації
challengeType: 1
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

Дано два набори елементів. Якщо будь-який елемент є спільним для кожного набору, то результатом застосування *consolidation* до цих наборів стане множина наборів із таким змістом:

<ul>
  <li>Два вхідних набори, якщо між двома вхідними наборами елементів немає спільного елемента.</li>
  <li>Єдиний набір - це об'єднання двох вхідних наборів за умови існування спільного елементу між ними.</li>
</ul>

При N наборів елементів, де N > 2, результат буде таким самим, як і багаторазова заміна всіх комбінацій двох наборів їхньою консолідацією. Це триватиме доти, доки подальша консолідація між цими наборами стане неможливою. Якщо N &lt; 2, тоді консолідація не має суворого значення, і вхідні дані можливо повернути.

Ось декілька прикладів:

**Приклад 1:**

Дано два набори `{A,B}` і `{C,D}`, між якими не існує спільного елементу. Результат буде таким самим, як вхідні дані.

**Приклад 2:**

Дано два набори `{A,B}` і `{B,D}`, які мають спільний елемент `B` між наборами. У такому випадку, результатом є єдиний набір `{B,D,A}`. (Зверніть увагу, що порядок елементів у наборі не істотний: `{A,B,D}` те саме, що `{B,D,A}` і `{D,A,B}`, etc).

**Приклад 3:**

Дано три набори `{A,B}`, `{C,D}` і `{D,B}`. Набори `{A,B}` і `{C,D}` не мають між собою спільних елементів. Набори `{A,B}` і `{D,B}` мають один спільний елемент, який сприяє їхньому об'єднанню для отримання результату `{B,D,A}`. Проаналізувавши результат з набором `{C,D}`, який залишився, стає зрозумілим, що вони мають спільний елемент, а тому об'єднуються в кінцевий результат єдиного набору `{A,B,C,D}`

**Приклад 4:**

Консолідація п'яти наборів:

`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}` і `{F,G,H}`

Два набори:

`{A, C, B, D}` і `{G, F, I, H, K}`

# --instructions--

Напишіть функцію, яка приймає масив рядків як параметр. Кожен рядок являє собою набір з символами, що представляють елементи набору. Функція повинна повернути 2D масив, що містить консолідовані набори. Примітка: Кожен набір необхідно відсортувати.

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
