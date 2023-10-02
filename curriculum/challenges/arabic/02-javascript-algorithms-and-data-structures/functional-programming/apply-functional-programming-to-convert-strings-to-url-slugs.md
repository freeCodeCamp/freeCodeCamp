---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

قد غطت التحديات العديدة الأخيرة عددا من الـ methods المفيدة للـ arrays والـ strings والتي تتبع مبادئ الـ functional programming. لقد تعلمنا أيضًا عن `reduce`، وهي method قوية تستخدم للحد من المشاكل إلى أشكال أبسط. من حساب المتوسطات الي الفرز، اي عملية علي array يمكن تحقيقها بتطبيقا. تذكر أن `map` و `filter` هم حالات خاصة من `reduce`.

دعونا نجمع ما تعلمناه لحل مشكلة عملية.

تحتوي العديد من مواقع إدارة المحتوى (CMS) على عناوين منشور تمت إضافتها إلى جزء من عنوان URL لأغراض مرجعية. على سبيل المثال، إذا قمت بكتابة منشور علي موقع Medium بعنوان `Stop Using Reduce`، من المحتمل أن يكون عنوان URL يحتوي على جزء ما من عنوان المنشور (`.../stop-using-reduce`). ربما كنت قد لاحظت هذا بالفعل على موقع freeCodeCamp.

# --instructions--

قم بملء دالة `urlSlug` بحيث تقوم بتحويل `title` وإرجاع النسخة الموصولة بعلامة الشرطة للـ URL. يمكنك استخدام أي من الـ methods التي يغطيها هذا القسم، ولكن لا تستخدم `replace`. وفيما يلي المتطلبات:

الإدخال عبارة عن string مع مسافات وكلمات title-cased، اي ان اول حرف من كل كلمة يكون حرف كبير (Uppercase)

الإخراج عبارة عن string مع مسافات بين الكلمات التي تم استبدالها بعلامة الشرطة (`-`)

يجب ان تكون جميع الحروف المخرجة lower-case

لا ينبغي أن يحتوي الناتج على أي مسافات

# --hints--

لا ينبغي أن يستخدم الكود الخاص بك `replace` لهذا التحدي.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` يجب أن يعيد السلسلة `winter-is-coming`.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")`  يجب أن يعيد السلسلة `winter-is-coming`.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` يجب أن يعيد السلسلة `a-mind-needs-books-like-a-sword-needs-a-whetstone`.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` يجب أن يعيد السلسلة `hold-the-door`.

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

# --solutions--

```js
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
