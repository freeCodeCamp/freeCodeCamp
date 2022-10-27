---
id: 598e8944f009e646fc236146
title: فهم القيم غير المحددة المرتجعة من الوظيفة (Understanding Undefined Value returned from a Function)
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

يمكن أن يتضمن الوظيفة عبارة `return` ولكن ليس عليه أن يفعل ذلك. في حالة أن الوظيفة لا يحتوي على عبارة `return` عندما يتم استدعائه، تتم معالجة الكود الداخلي في الوظيفة ولكن القيمة التي يتم إرجاعها هي `undefined`.

**مثال**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

تكون `addSum` وظيفة دون `return`. سيغير وظيفة المتغير `sum` العالمي الآتي, ولكن تكون القيمة المرتجعة للوظيفة `undefined`.

# --instructions--

أنشئ وظيفة `addFive` دون أي حجج. تضيف الوظيفة 5 إلى متغير `sum` ولكن تكون قيمته المرتجعة `undefined`.

# --hints--

يجب أن تكون `addFive` وظيفة.

```js
assert(typeof addFive === 'function');
```

بمجرد تشغيل كلتا الوظيفتين، يجب أن يكون `sum` يساوي `8`.

```js
assert(sum === 8);
```

يجب أن تنتج `addFive` القيمة المرتجعة `undefined`.

```js
assert(addFive() === undefined);
```

داخل وظيفة `addFive`، يجب عليك إضافة `5` إلى متغير `sum`.

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
