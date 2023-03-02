---
id: 565bbe00e9cc8ac0725390f4
title: عد أوراق اللعب
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

في لُعْبَة بلاك جاك (blackjack)، يمكن للاعب أن يحدد ما إذا كان يتمتع بميزة على اللاعب الموزِّع بواسطة تتبع العدد النسبي للأوراق المرتفعة والمنخفضة المتبقية في مجموعة الورق. هذا يسمى إحصاء الورق (Card Counting).

يكون وجود المزيد من الورق عالي القيمة المتبقي في المجموعة, أفضل للاعب. يتم تعيين قيمة لكل ورقة لعب وفقاً للجدول بالأدنى. عندما يكون العد موجبًا، يجب على اللاعب المراهنة بشكل مرتفع. عندما يكون العد صفرًا أو سلبيًا، يجب أن يراهن اللاعب بشكل منخفض.

<table class='table table-striped'><thead><tr><th>تغيير العد</th><th>الأوراق</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

سوف تكتب وظيفة لعد الورق. سوف تتلقى وسيط (parameter) اسمه `card`, الذي يمكن أن يكون رقما أو مقطع نصي (string)، وسوف تزيد أو تخفض متغير `count` وفقا لقيمة الورقة المعطى (انظر إلى الجدول). ثم ستقوم الوظيفة بإنشاء مقطع نصي يحتوي علي العد الحالي وكلمة `Bet` إذا كان العد إيجابياً، أو `Hold` إذا كان العد صفر أو سلبي. يجب أن يفصل العد الحالي وقرار اللاعب (`Bet` أو `Hold`) بمسافة فارعة واحدة.

**مثال على النتائج:** كالآتي `-3 Hold` أو `5 Bet`

**تلميح**  
لا تعيد تعيين `count` إلى 0 عندما تكون القيمة 7 أو 8 أو 9. لا تنتج قائمة (array(.  
لا تتضمن الاقتباسات (واحدة أو مزدوجة) في الإخراج.

# --hints--

يجب أن تنتج وظيفتك قيمة العدد والنص (`Bet` أو `Hold`) مع حرف فارغ واحد بينهما.

```js
assert(//
  (function () {
    count = 0;
    let out = cc(10);
    const hasSpace = /-?\d+ (Bet|Hold)/.test('' + out);
    return hasSpace;
  })()
);
```

إن أعطيَ الورق 2، 3، 4، 5، 6 بالتسلسل، يجب أن تنتج المقطع `5 Bet`

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

إن أعطيَ الورق 7, 8, 9 بالتسلسل، يجب أن تنتج المقطع `0 Hold`

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

إن أعطيَ الورق 10, J, Q, K, A بالتسلسل، يجب أن تنتج المقطع `-5 Hold`

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

إن أعطيَ الورق 3, 7, Q, 8, A بالتسلسل، يجب أن تنتج المقطع `-1 Hold`

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

إن أعطيَ الورق 2, J, 9, 2, 7 بالتسلسل، يجب أن تنتج المقطع `1 Bet`

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

إن أعطيَ الورق 2، 2، 10 بالتسلسل، يجب أن تنتج المقطع `1 Bet`

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

إن أعطيَ الورق 3, 2, A, 10, K بالتسلسل، يجب أن تنتج المقطع `-1 Hold`

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
