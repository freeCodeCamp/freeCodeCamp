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

Consider this sentence:

```md
It was really ____, and we ____ ourselves ____.
```

تحتوي هذه الجملة على ثلاث قطع مفقودة - صفة وفعل وظرف ، ويمكننا إضافة كلمات من اختيارنا لإكمالها. يمكننا بعد ذلك إسناد الجملة المكتملة إلى متغير على النحو التالي:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

في هذا التحدي، نقدم لكم اسماً وفعلاً ووصفاً وظرفاً. تحتاج إلى تكوين جملة كاملة باستخدام الكلمات التي تختارها، إلى جانب الكلمات التي نقدمها.

سوف تحتاج إلى استخدام مشغل الـ string concatenation الآتي `+` لبناء string جديد، باستخدام المتغيرات المتاحة: `myNoun` و `myAdjective` و `myVerb` و `myAdverb`. ستقوم بعد ذلك بتعيين الـ string الذي تم تشكيله إلى متغير `wordBlanks`. لا يجب عليك تغيير الكلمات المسندة إلى المتغيرات.

سوف تحتاج أيضا إلى حساب المسافات الموجودة في سلسلتك، بحيث تحتوي الجملة الأخيرة على مسافات بين جميع الكلمات. وينبغي أن تكون النتيجة جملة كاملة.

# --hints--

`wordBlanks` يجب أن تكون string.

```js
assert(typeof wordBlanks === 'string');
```

لا يجب عليك تغيير القيم المعينة إلى `myNoun` او `myVerb` او `myAdjective` أو `myAdverb`.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

يجب ألا تستخدم القيم `dog` او `ran` او `big` او `quickly` لإنشاء `wordBlanks`.

```js
const newCode = removeAssignments(__helpers.removeJSComments(code));
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` should contain all of the words assigned to the variables `myNoun`, `myVerb`, `myAdjective` and `myAdverb` separated by non-word characters (and any additional words of your choice).

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
