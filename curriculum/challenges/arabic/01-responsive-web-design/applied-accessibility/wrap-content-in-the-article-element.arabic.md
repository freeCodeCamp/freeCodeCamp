---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: ''
localeTitle: التفاف المحتوى في المادة عنصر
---

## Description
<section id="description"> <code>article</code> عبارة عن عنصر آخر من عناصر HTML5 الجديدة التي تضيف المعنى الدلالي لترميزك. <code>Article</code> هي عنصر تقسيمي ، وتُستخدم لفك محتوى مستقل ومكتوب ذاتيًا. تعمل العلامة جيدًا مع إدخالات المدونات أو مشاركات المنتدى أو المقالات الإخبارية. عادةً ما يكون تحديد ما إذا كان المحتوى قائمًا بذاته أم لا ، ولكن هناك بعض الاختبارات البسيطة التي يمكنك استخدامها. اسأل نفسك ما إذا كنت قد أزلت كل السياق المحيط ، فهل سيظل هذا المحتوى منطقيًا؟ وبالمثل بالنسبة للنص ، هل سيتم تعليق المحتوى إذا كان في خلاصة RSS؟ تذكر أن الأشخاص الذين يستخدمون تقنيات مساعدة يعتمدون على ترميز منظم ، ذي معنى لغوي لفهم عملك بشكل أفضل. <strong>ملاحظة حول <code>section</code> <code>div</code></strong> <br> عنصر <code>section</code> جديد أيضًا مع HTML5 ، وله معنى دلالي مختلف قليلاً عن <code>article</code> . <code>article</code> للمحتوى المستقل ، <code>section</code> لتجميع المحتوى ذي الصلة الموضوعية. يمكن استخدامها داخل بعضها البعض ، حسب الحاجة. على سبيل المثال ، إذا كان الكتاب هو <code>article</code> ، فكل فصل هو <code>section</code> . عند عدم وجود علاقة بين مجموعات المحتوى ، استخدم <code>div</code> . <blockquote style=";text-align:right;direction:rtl"> &lt;div&gt; - محتوى المجموعات <br> &lt;section&gt; - مجموعات ذات صلة بالمحتوى <br> &lt;article&gt; - مجموعات محتوى مستقل بذاته <br></blockquote></section>

## Instructions
<section id="instructions"> استخدم Camper Cat علامات <code>article</code> لتغليف المشاركات في صفحة مدونته ، ولكنه نسي استخدامها في الجزء العلوي منها. غيّر علامة <code>div</code> لاستخدام علامة <code>article</code> بدلاً من ذلك. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي شفرتك على ثلاث علامات <code>article</code> .
    testString: 'assert($("article").length == 3, "Your code should have three <code>article</code> tags.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
