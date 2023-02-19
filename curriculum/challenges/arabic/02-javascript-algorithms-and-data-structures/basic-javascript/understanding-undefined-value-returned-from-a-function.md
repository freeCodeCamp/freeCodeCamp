---
id: 598e8944f009e646fc236146
title: فهم القيم غير المحددة المنتجة من وظيفة
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

تستطيع الوظيفة أن تتضمن عبارة `return` ولكن ليست ملزمة بفعل ذلك. في حالة أن الوظيفة لا تحتوي على عبارة `return`، عند تفعيلها، يتم معالجة الكود الداخلي في الوظيفة، ولكن القيمة المنتجة تكون `undefined`.

**مثال**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

الوظيفة `addSum` بدون `return`. ستغير الوظيفة قيمة المتغير الشامل `sum`، ولكن تكون القيمة المنتجة للوظيفة هي `undefined`.

# --instructions--

أنشئ وظيفة `addFive` دون أي معطيات. تضيف الوظيفة 5 إلى متغير `sum` ولكن تكون القيمة المنتجة `undefined`.

# --hints--

يجب أن تكون `addFive` وظيفة.

```js
assert(typeof addFive === 'function');
```

بمجرد تشغيل كلا الوظيفتين، يجب أن يكون `sum` يساوي `8`.

```js
assert(sum === 8);
```

يجب أن تنتج `addFive` القيمة `undefined`.

```js
assert(addFive() === undefined);
```

داخل وظيفة `addFive`، يجب عليك إضافة `5` إلى المتغير `sum`.

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
