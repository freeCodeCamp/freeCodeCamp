---
id: 56533eb9ac21ba0edf2244bb
title: فراغات الكلمة (Word Blanks)
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

تم تزويدك بجمل ناقصة بعض الكلمات، مثل الأسماء و الأفعال و النعوت و الظروف. ثم أملأ القطع المفقودة بكلمات من اختيارك بطريقة تجعل الجملة المكتملة منطقية.

فكر في هذه الجملة - كانت حقاً **\_\_\_\_\_**، ونحن **\_\_\_\_** أيضا **\_\_\_\_\_**. هذه الجملة لها ثلاث قطع مفقودة - نعمة و فعل و ظرف، ويمكنك إضافة كلمات من اختيارك لإكمالها. ويمكن بعد ذلك أن نحيل الجملة المستكملة إلى متغير (variable) على النحو التالي:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

في هذا التحدي، نقدم لكم اسماً وفعلاً ووصفاً وظرفاً. تحتاج إلى تشكيل جملة كاملة باستخدام كلمات من اختيارك، إلى جانب الكلمات التي نقدمها.

سوف تحتاج إلى استخدام مشغل ضم المقاطع (string concatenation operator) `+` لبناء مقطع نصي جديد، باستخدام المتغيرات المتاحة: `myNoun`، و `myAdjective`، و `myVerb`، و `myAdverb`. بعد ذلك عيين المقطع النصي الذي تم تشكيله إلى متغير `wordBlanks`. لا يجب عليك تغيير الكلمات المسندة إلى متغيرات.

سوف تحتاج أيضا إلى حساب المسافات الموجودة في مقطعك، بحيث أن تحتوي الجملة الأخيرة على مسافات بين جميع الكلمات. ينبغي أن تكون النتيجة جملة كاملة.

# --hints--

يجب أن تكون `wordBlanks` مقطع نصي.

```js
assert(typeof wordBlanks === 'string');
```

لا يجب عليك تغيير القيم المعينة إلى `myNoun` أو `myVerb`, أو `myAdjective`, أو `myAdverb`.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

يجب ألا تستخدم القيم `dog` أو `ran`, أو `big`, أو `quickly` مباشرةً لإنشاء `wordBlanks`.

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

يجب أن يحتوي `wordBlanks` على جميع الكلمات المخصصة للمتغيرات `myNoun`, و `myVerb`, و `myAdjective`, و `myAdverb` المفصولة برموز ليست بكلمات (مع أي كلمات إضافية من اختيارك).

```js
assert(
  /\bdog\b/.test(wordBlanks) &&
    /\bbig\b/.test(wordBlanks) &&
    /\bran\b/.test(wordBlanks) &&
    /\bquickly\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

## --seed-contents--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
