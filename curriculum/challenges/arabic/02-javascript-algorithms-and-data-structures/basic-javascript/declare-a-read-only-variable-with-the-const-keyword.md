---
id: 587d7b87367417b2b2512b41
title: إعلان متغير ثابت للقراءة فقط باستخدام مصطلح const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

لا يكون أستخدام مصطلح `let` الطريقة الجديدة الوحيدة لإعلان المتغيرات. في ES6، يمكنك أيضا إعلان المتغيرات باستخدام كلمة `const`.

تحتوي `const` كل الميزات الرائعة الموجودة في `let`، مع المكافأة الإضافية و هي أن المتغيرات المعلنة بواسطة `const` تستعمل للقراءة فقط. وإنهم قيم ثابتة، مما يعني أنه بمجرد إعلان المتغير باستخدام `const`، فلا يمكن إعادة تعيينه:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

ستعرض وحدة التحكم خطأ بسبب إعادة تعيين قيمة `FAV_PET`.

يجب عليك دائماً إعلان المتغيرات التي لا تريد إعادة تعيينها باستخدام المصطلح `const`. يساعد هذا عندما تحاول بالخطأ إعادة تعيين متغير من المفترض أن يظل ثابتًا.

**ملاحظة:** من الشائع عند المطورين استخدام معرّفات بأسلوب uppercase للمتغيرات ذات القيم الثابتة وأسلوب lowercase أو camelCase للقيم القابلة للتغيير ( مثل الكائنات (objects) والقوائم (arrays)). سوف تتعلم المزيد عن الكائنات, والقوائم, و القيم الثابتة, والقيم القابلة للتغيير في تحديات لاحقة. أيضا في التحديات اللاحقة، سترى أمثلة لمعرِّفات المتغيرات uppercase أو lowercase أو camelCase.

# --instructions--

غيّر الكود بحيث يعلن جميع المتغيرات باستعمال `let` أو `const`. استخدم `let` عندما ترغب بتغير المتغير، و استخدم `const` عندما ترغب ببقي المتغير ثابتاً. كذلك اعد تسمية المتغيرات المعلنة باستعمال `const` لتتوافق مع الممارسات الشائعة. لا تغيير المقاطع المعينة للمتغيرات.

# --hints--

يجب ألا تكون `var` موجودة في التعليمات البرمجية.

```js
assert.notMatch(code, /var/g);
```

يجب عليك تغيير `fCC` لتكون كلها uppercase.

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

يجب أن يكون متغير `FCC` ثابت معلن بواسطة `const`.

```js
assert.match(code, /const\s+FCC/);
```

لا ينبغي تغيير المقطع النصي في المتغير `FCC`.

```js
assert.equal(FCC, 'freeCodeCamp');
```

يجب أن تعلن `fact` بواسطة `let`.

```js
assert.match(code, /(let\s+fact)/g);
```

يجب تغيير `console.log` لطباعة المتغيرات `FCC` و `fact`.

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
