---
id: 5cfa3679138e7d9595b9d9d4
title: استبدال الحلقات باستخدام التكرار (Replace Loops using Recursion)
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

يكون معنى التكرار (Recursion) أنه يمكن أن تستخدم الوظيفة نفسها. للمساعدة في فهم هذا، ابدأ بالتفكير في المهمة التالية: أضرب أول عناصر `n` من قائمة ليصبح لديك ناتج ضرب هذه العناصر. باستخدام حلقة `for`، يمكنك القيام بما يلي:

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

لكن، لاحظ أن `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. وهذا يعني أنه يمكنك إعادة كتابة `multiply` بداخل نفسه ولا تحتاج أبدا إلى استخدام حلقة.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

النسخة المتكررة (recursive) من `multiply` توضح تفاصيل ذلك. في <dfn>حالة أصلية</dfn>، حيث `n <= 0`، فإنه ينتج 1. بالنسبة للقيم الذين أكبر من `n`، فإنه يستدعي نفسه، ولكن مع `n - 1`. يتم تفعيل الوظيفة (function) بنفس الطريقة، فعيل `multiply` مرة أخرى حتى `n <= 0`. في هذه المرحلة، يمكن ينتجوا جميع الوظائف (functions) و الوظيفة `multiply` الأصلية الإجابة.

**ملاحظة:** يجب أن يكون الوظائف المتكررة (Recursive functions) لها حالة مبدئيا (base case) تنتج دون تفعيل الـوظيفة (function) مره أخرى (في هذا المثال، عندما يكون `n <= 0`)، وإلا فلن يتمكنوا أبدا من التوقف عن التفعيل.

# --instructions--

اكتب وظيفة متكررة (recursive function) الآتية `sum(arr, n)`، التي ستنتج مجموع العناصر الأولى `n` من القائمة (array) الآتية `arr`.

# --hints--

`sum([1], 0)` يجب أن يساوي 0.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` يجب أن يساوي 2.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` يجب أن يساوي 9.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

لا ينبغي أن يعتمد كودك على أي نوع من الحلقات (loops) سواء (`for`, أو `while`, أو وظائف (functions) مثل `forEach`, أو `map`, أو `filter`, أو `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

يجب عليك استخدام الـ recursion لحل هذه المشكلة.

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
