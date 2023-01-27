---
id: 5a661e0f1068aca922b3ef17
title: الوصول إلى محتويات القائمة (Array) باستخدام علامات الأقواس (Bracket Notation)
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

السمة الأساسية لأي هيكل للبيانات هي، بالطبع، القدرة ليس فقط على تخزين البيانات، ولكن على أن تكون قادراً على استرداد تلك البيانات في حال رغبت بذلك. لذا، الآن بعد أن تعلمنا كيفية إنشاء القائمة، لنبدأ بالتفكير حول كيفية الوصول إلى معلومات القائمة.

عندما نحدد القائمة بسيطة كما هو مبين أدناه، هناك 3 عناصر فيها:

```js
let ourArray = ["a", "b", "c"];
```

في القائمة، يحتوي كل عنصر على ترتيب <dfn>index</dfn>. هذا الترتيب يتضاعف كموقع ذلك العنصر في القائمة، وكيف تشير إليه. ومع ذلك، من المهم ملاحظة أن القائمات JavaScript هي <dfn>قائمات مترتبة من الصفر</dfn>، بمعنى أن العنصر الأول للقائمة هو في الواقع في موضع ***صفر*** وليس الأول. من أجل استرجاع عنصر من قائمة يمكننا إرفاق ترتيب بين قوسين وإلحاقه إلى نهاية القائمة، أو أكثر شيوعاً، إلى متغير يشير إلى كائن من نوع قائمة. هذا معروف باسم علامات الأقواس <dfn>bracket notation</dfn>. على سبيل المثال، إذا أردنا استرداد `a` من `ourArray`و تعيينه إلى متغير، يمكننا أن نفعل ذلك بواسطة التعليمات البرمجية التالية:

```js
let ourVariable = ourArray[0];
```

الآن `ourVariable` لديه قيمة `a`.

بالإضافة إلى الوصول إلى القيمة المرتبطة بالترتيب، يمكنك أيضًا *تعيين* ترتيب إلى قيمة باستخدام نفس الطريقة:

```js
ourArray[1] = "not b anymore";
```

باستخدام علامات الأقواس، قمنا الآن بإعادة تعيين العنصر في الترتيب 1 من المقطع النصي `b`، إلى `not b anymore`. الآن `ourArray` هو `["a", "not b anymore", "c"]`.

# --instructions--

من أجل استكمال هذا التحدي، عيّن الموضع الثاني (ترتيب `1`) من `myArray` إلى أي شيء تريده، إلا الحرف `b`.

# --hints--

`myArray[0]` يجب أن يساوي الحرف `a`

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` يجب ألّا يساوي الحرف `b`

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` يجب أن يساوي الحرف `c`

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` يجب أن يساوي الحرف `d`

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
