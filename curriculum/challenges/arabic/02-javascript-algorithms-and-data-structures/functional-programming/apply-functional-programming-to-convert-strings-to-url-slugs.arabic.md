---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
videoUrl: ''
localeTitle: تطبيق برمجة وظيفية لتحويل السلاسل إلى Slug URL
---

## Description
<section id="description"> غطت التحديات الأخيرة عدة عدد من صفيفات السلسلة والصفيف المفيدة التي تتبع مبادئ البرمجة الوظيفية. لقد تعلمنا أيضًا عن <code>reduce</code> ، وهي طريقة قوية تستخدم لتقليل المشكلات إلى نماذج أبسط. من متوسطات الحوسبة إلى الفرز ، يمكن تحقيق أي عملية صفيف بتطبيقها. أذكر أن <code>map</code> <code>filter</code> هي حالات خاصة من <code>reduce</code> . دعونا ندمج ما تعلمناه لحل مشكلة عملية. تحتوي العديد من مواقع إدارة المحتوى (CMS) على عناوين وظيفة تتم إضافتها إلى جزء من عنوان URL لأغراض بسيطة للإشارة المرجعية. على سبيل المثال ، إذا كتبت منشورًا متوسطًا بعنوان &quot;Stop Using Reduce&quot; ، فمن المحتمل أن يكون لعنوان URL شكل من أشكال سلسلة العنوان فيه (&quot;... / stop-using-reduction&quot;). ربما تكون قد لاحظت هذا بالفعل على موقع freeCodeCamp. </section>

## Instructions
<section id="instructions"> املأ وظيفة <code>urlSlug</code> بحيث يحول <code>title</code> سلسلة ويعيد الإصدار <code>urlSlug</code> لعنوان URL. يمكنك استخدام أي من الطرق المغطاة في هذا القسم ، ولا تستخدم <code>replace</code> . فيما يلي المتطلبات: الإدخال عبارة عن سلسلة تحتوي على مسافات وكلمات ذات عناوين مكتوبة. الإخراج عبارة عن سلسلة تحتوي على مسافات بين الكلمات التي تم استبدالها بواصلة ( <code>-</code> ) يجب أن يكون الإخراج جميع الأحرف ذات الأحجام المنخفضة. يجب ألا يحتوي الإخراج على أية مسافات </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب ألا يتغير متغير <code>globalTitle</code> .
    testString: 'assert(globalTitle === "Winter Is Coming", "The <code>globalTitle</code> variable should not change.");'
  - text: يجب ألا تستخدم شفرتك طريقة <code>replace</code> لهذا التحدي.
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method for this challenge.");'
  - text: يجب أن ترجع <code>urlSlug(&quot;Winter Is Coming&quot;)</code> <code>&quot;winter-is-coming&quot;</code> .
    testString: 'assert(urlSlug("Winter Is Coming") === "winter-is-coming", "<code>urlSlug("Winter Is Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: يجب أن ترجع <code>urlSlug(&quot; Winter Is  Coming&quot;)</code> <code>&quot;winter-is-coming&quot;</code> .
    testString: 'assert(urlSlug(" Winter Is  Coming") === "winter-is-coming", "<code>urlSlug(" Winter Is  &nbsp;Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: <code>urlSlug(&quot;A Mind Needs Books Like A Sword Needs A Whetstone&quot;)</code> <code>&quot;a-mind-needs-books-like-a-sword-needs-a-whetstone&quot;</code> .
    testString: 'assert(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") === "a-mind-needs-books-like-a-sword-needs-a-whetstone", "<code>urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")</code> should return <code>"a-mind-needs-books-like-a-sword-needs-a-whetstone"</code>.");'
  - text: يجب أن ترجع <code>urlSlug(&quot;Hold The Door&quot;)</code> <code>&quot;hold-the-door&quot;</code> .
    testString: 'assert(urlSlug("Hold The Door") === "hold-the-door", "<code>urlSlug("Hold The Door")</code> should return <code>"hold-the-door"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {


}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
