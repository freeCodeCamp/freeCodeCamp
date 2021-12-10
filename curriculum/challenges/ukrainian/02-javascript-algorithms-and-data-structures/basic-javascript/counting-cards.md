---
id: 565bbe00e9cc8ac0725390f4
title: Підрахунок карт
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

У казино грі Blackjack гравець може здобути перевагу над казино, відстежуючи відносне число старших та молодших карт, що залишились в колоді. Це називається [Підрахунок карт](https://en.wikipedia.org/wiki/Card_counting).

Чим більше старших карт у колоді, тим краще для гравця. Кожній карті присвоєно значення відповідно до нижчеподаної таблиці. Коли рахунок є більшим за нуль, гравець повинен ставити старшу карту. Коли рахунок дорівнює нулю або є меншим, гравець повинен ставити молодшу карту.

<table class='table table-striped'><thead><tr><th>Зміна рахунку</th><th>Карти</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'К', 'A'</td></tr></tbody></table>

Ви писатимете функцію підрахунку карт. Вона матиме параметр `card`, який може бути числом або рядком, а також збільшить або зменшить загальну змінну `count` відповідно до значення карти (див. таблицю). Тоді функція поверне рядок з поточним рахунком і рядок `Bet`, якщо рахунок більше нуля, або `Hold`, якщо рахунок дорівнює або менше нуля. Між поточним рахунком та рішенням гравця (`Bet` чи `Hold`) повиннен бути один пробіл.

**Приклад результатів:** `-3 Hold` або `5 Bet`

**Підказка**  
НЕ скидайте `count` до 0, коли значення 7, 8 або 9. Не повертайте масив.  
Не вставляйте лапки (одинарні чи подвійні) у результаті.

# --hints--

Послідовність карт 2, 3, 4, 5, 6 має повернути рядок `5 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(3);
    cc(4);
    cc(5);
    var out = cc(6);
    if (out === '5 Bet') {
      return true;
    }
    return false;
  })()
);
```

Послідовність карт 7, 8, 9 має повернути рядок `0 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(7);
    cc(8);
    var out = cc(9);
    if (out === '0 Hold') {
      return true;
    }
    return false;
  })()
);
```

Послідовність карт 10, J, Q, K, A має повернути рядок `-5 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(10);
    cc('J');
    cc('Q');
    cc('K');
    var out = cc('A');
    if (out === '-5 Hold') {
      return true;
    }
    return false;
  })()
);
```

Послідовність карт 3, 7, Q, 8, A має повернути рядок `-1 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(7);
    cc('Q');
    cc(8);
    var out = cc('A');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

Послідовність карт 2, J, 9, 2, 7 має повернути рядок `1 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc('J');
    cc(9);
    cc(2);
    var out = cc(7);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

Послідовність карт 2, 2, 10 має повернути рядок `1 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(2);
    var out = cc(10);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

Послідовність карт 3, 2, A, 10, K має повернути рядок `-1 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(2);
    cc('A');
    cc(10);
    var out = cc('K');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

# --seed--

## --seed-contents--

```js
let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

# --solutions--

```js
let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```
