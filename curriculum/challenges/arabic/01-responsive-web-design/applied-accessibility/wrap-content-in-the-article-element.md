---
id: 587d774e367417b2b2512aa0
title: غلف المحتوي بعنصر article
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` هو عنصر آخر من عناصر HTML5 الجديدة التي تضيف المعنى الدلالي الي الـ markup. `article` هو عنصر تقسيم ويستخدم لتغليف المحتوي القائم بذاته. يعمل العلامة بشكل جيد مع إدخالات المدونة أو مشاركات المنتدى أو المقالات الإخبارية.

تحديد فيما إذا كان المحتوى يستطيع أن يكون مستقلا هو عادة حكم شخصي، ولكن هناك عدة اختبارات بسيطة يمكنك استخدامها. اسأل نفسك إذا كنت قد قمت بإزالة كل السياق المحيط، هل سيظل المحتوى منطقياً؟ وبالمثل بالنسبة للنص، هل سيظل المحتوى صحيحا إذا كان في RSS feed ؟

تذكر أن الناس الذين يستخدمون التقنيات المساعدة يعتمدون على كود مكتوب بطريقه منظمه وذات معني لفهم عملك بشكل أفضل.

**ملاحظة:** عنصر `section` جديد أيضا مع HTML5، ولديه معنى دلالي مختلف قليلا عن `article`. عنصر `article` هو لمحتوى مستقل، و `section` هو لتجميع المحتوى المرتبط بمواضيع محددة. ويمكن استخدامها داخل بعضها البعض حسب الحاجة. على سبيل المثال، إذا كان الكتاب عبارة عن `article`، فإن كل فصل في الكتاب عبارة عن `section`. عندما لا توجد علاقة بين مجموعات المحتوى، عندها استخدم عنصر `div`.

`<div>` - محتوى المجموعات `<section>` - محتوى المجموعات ذات الصلة `<article>` - محتوى المجموعات المستقل القائم بذاته

# --instructions--

استخدم Camper Cat علامات `article` لتغليف المشاركات على صفحة مدونته، لكنه نسي استخدامها حول المشاركة العلوية. قم بتغيير علامة `div` لاستخدام علامة `article` بدلاً منه.

# --hints--

الكود الخاص بك يجب أن يحتوي على ثلاث علامات `article`.

```js
assert($('article').length == 3);
```

يجب ألا يحتوي الكود الخاص بك على أي علامة `div`.

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
