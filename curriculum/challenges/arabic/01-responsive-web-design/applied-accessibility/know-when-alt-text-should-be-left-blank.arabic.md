---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: ''
localeTitle: معرفة متى يجب ترك النص البديل فارغًا
---

## Description
<section id="description"> في آخر تحد ، علمت أن تضمين سمة <code>alt</code> على علامات img إلزامي. ومع ذلك ، في بعض الأحيان يتم تجميع الصور مع تسمية توضيحية تشرحها بالفعل ، أو يتم استخدامها للزينة فقط. في هذه الحالات قد يبدو النص <code>alt</code> زائدا أو غير ضروري. في الحالات التي تكون فيها الصورة مفسّرة بالفعل بمحتوى نصي ، أو لا تضيف معنى إلى صفحة ما ، فإن <code>img</code> لا تزال بحاجة إلى سمة <code>alt</code> ، ولكن يمكن ضبطها على سلسلة فارغة. إليك مثال على ذلك: <code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code> عادةً ما تقع صور الخلفية تحت التصنيف &quot;الزخرفي&quot; أيضًا. ومع ذلك ، يتم تطبيقها عادةً مع قواعد CSS ، وبالتالي فهي ليست جزءًا من عملية قراءة برامج الترميز. <strong>ملحوظة</strong> <br> بالنسبة للصور التي تحتوي على تسمية توضيحية ، قد تحتاج إلى تضمين نص <code>alt</code> ، لأنه يساعد محركات البحث على فهرسة محتوى الصورة. </section>

## Instructions
<section id="instructions"> قام الكاراف كات بترميز صفحة الهيكل العظمي لجزء المدونة الخاص بموقعه على الويب. انه يخطط لإضافة استراحة بصرية بين مادتيه مع صورة زخرفية لسيف الساموراي. أضف سمة <code>alt</code> لعلامة <code>img</code> واضبطها على سلسلة فارغة. (لاحظ أن الصورة <code>src</code> لا ترتبط بملف فعلي - لا تقلق أنه لا توجد سيوف تظهر في الشاشة.) </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي علامة <code>img</code> سمة <code>alt</code> .
    testString: 'assert(!($("img").attr("alt") == undefined), "Your <code>img</code> tag should have an <code>alt</code> attribute.");'
  - text: يجب تعيين سمة <code>alt</code> لسلسلة فارغة.
    testString: 'assert($("img").attr("alt") == "", "The <code>alt</code> attribute should be set to an empty string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
