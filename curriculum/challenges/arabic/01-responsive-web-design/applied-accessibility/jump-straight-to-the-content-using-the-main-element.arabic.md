---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: ''
localeTitle: الانتقال مباشرةً إلى المحتوى باستخدام العنصر الرئيسي
---

## Description
<section id="description"> قدم HTML5 عددًا من العناصر الجديدة التي توفر للمطورين مزيدًا من الخيارات مع تضمين ميزات إمكانية الوصول أيضًا. تتضمن هذه العلامات <code>main</code> ، <code>header</code> <code>footer</code> ، <code>footer</code> ، <code>nav</code> ، <code>article</code> ، <code>section</code> ، وغيرها. بشكل افتراضي ، يعرض المتصفح هذه العناصر بشكل مشابه <code>div</code> المتواضع. ومع ذلك ، فإن استخدامها عند الاقتضاء يعطي معنًى إضافيًا في ترميزك. يمكن أن يشير اسم العلامة وحده إلى نوع المعلومات التي يحتوي عليها ، مما يضيف معنىً دلاليًا إلى ذلك المحتوى. يمكن للتكنولوجيات المساعدة الوصول إلى هذه المعلومات لتوفير ملخص صفحة أفضل أو خيارات التنقل لمستخدميها. يتم استخدام العنصر <code>main</code> لتغليف المحتوى (الأساسي) ، ويجب أن يكون هناك واحد فقط لكل صفحة. من المفترض أن تحيط المعلومات المتعلقة بالموضوع المركزي لصفحتك. لا يُقصد به تضمين عناصر تكرر عبر الصفحات ، مثل روابط التنقل أو إعلانات البانر. تحتوي العلامة <code>main</code> أيضًا على ميزة <code>main</code> مضمّنة يمكن للتكنولوجيا المساعدة استخدامها للانتقال سريعًا إلى المحتوى الرئيسي. إذا رأيت في أي وقت مضى رابط &quot;الانتقال إلى المحتوى الرئيسي&quot; في أعلى الصفحة ، فإن استخدام علامة رئيسية تلقائيًا يعطي الأجهزة المساعدة تلك الوظائف. </section>

## Instructions
<section id="instructions"> كامبر كات لديه بعض الأفكار الكبيرة لصفحة أسلحة النينجا. ساعده في إعداد ترميزه عن طريق إضافة علامات فتح وإغلاق <code>main</code> بين <code>header</code> <code>footer</code> (مغطاة في تحديات أخرى). احتفظ بالعلامات <code>main</code> فارغة في الوقت الحالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>main</code> علامة <code>main</code> واحدة.
    testString: 'assert($("main").length == 1, "Your code should have one <code>main</code> tag.");'
  - text: و <code>main</code> يجب أن تكون العلامات بين إغلاق <code>header</code> العلامة وافتتاح <code>footer</code> العلامة.
    testString: 'assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi), "The <code>main</code> tags should be between the closing <code>header</code> tag and the opening <code>footer</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
