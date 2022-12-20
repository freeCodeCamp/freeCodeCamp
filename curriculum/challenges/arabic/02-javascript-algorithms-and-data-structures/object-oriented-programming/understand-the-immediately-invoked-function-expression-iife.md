---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

النمط الشائع في JavaScript هو تنفيذ الوظيفة (function) بمجرد إعلانه:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

هذا اسمه anonymous function expression الذي ينفذ على الفور، ويخرج `Chirp, chirp!` على الفور.

لاحظ أن ال function ليس له اسم وليس مخزن في متغير. ويؤدي القوسان () الواردان في نهاية ال function expression إلى تنفيذه أو استدعاءه على الفور. هذا النمط يعرف بـ <dfn>immediately invoked function expression</dfn> او <dfn>IIFE</dfn>.

# --instructions--

أعد كتابة الدالة `makeNest` وأزيل استدعائها بحيث أنها تصبح anonymous immediately invoked function expression (IIFE).

# --hints--

وينبغي أن يكون ال function مجهول اي anonymous.

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

يجب أن يكون ال function الخاص بك بين قوسين في نهاية التعبير لاستدعائه على الفور.

```js
assert(/\(.*(\)\(|\}\(\))\)/.test(code.replace(/[\s;]/g, '')));
```

# --seed--

## --seed-contents--

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

# --solutions--

```js
(function () {
  console.log("A cozy nest is ready");
})();
```

---

```js
(function () {
  console.log("A cozy nest is ready");
}());
```

---

```js
(() => {
  console.log("A cozy nest is ready");
})();
```

---

```js
(() =>
  console.log("A cozy nest is ready")
)();
```
