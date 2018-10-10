---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
videoUrl: ''
localeTitle: تمديد البنائين لتلقي الحجج
---

## Description
<section id="description"> عملت <code>Bird</code> <code>Dog</code> من التحدي الأخير بشكل جيد. ومع ذلك ، لاحظ أن جميع <code>Birds</code> التي يتم إنشاؤها بواسطة منشئ <code>Bird</code> تسمى تلقائيًا Albert ، وهي زرقاء اللون ، ولها أرجل. ماذا لو كنت تريد الطيور ذات القيم المختلفة للاسم واللون؟ من الممكن تغيير خصائص كل طائر يدويًا ، لكن ذلك سيكون كثيرًا من العمل: <blockquote style=";text-align:right;direction:rtl"> دعونا بجعة = طائر جديد () ؛ <br> swan.name = &quot;Carlos&quot;؛ <br> swan.color = &quot;white&quot;؛ </blockquote> افترض أنك كنت تكتب برنامج لتتبع مئات أو حتى الآلاف من الطيور المختلفة في القفص. سيستغرق الأمر الكثير من الوقت لإنشاء جميع الطيور ، ثم تغيير الخصائص إلى قيم مختلفة لكل واحد. لإنشاء كائنات <code>Bird</code> مختلفة بسهولة أكبر ، يمكنك تصميم منشئ Bird الخاص بك لقبول المعلمات: <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور (الاسم واللون) { <br> this.name = name؛ <br> this.color = لون؛ <br> this.numLegs = 2 ، <br> } </blockquote> ثم قم بتمرير القيم كحجج لتعريف كل طائر فريد في منشئ <code>Bird</code> : <code>let cardinal = new Bird(&quot;Bruce&quot;, &quot;red&quot;);</code> هذا يعطي مثال جديد من <code>Bird</code> مع اسم وخصائص اللون لتعيين بروس والأحمر ، على التوالي. لا يزال يتم تعيين الخاصية <code>numLegs</code> إلى 2. يحتوي <code>cardinal</code> على هذه الخصائص: <blockquote style=";text-align:right;direction:rtl"> cardinal.name // =&gt; بروس <br> cardinal.color // =&gt; أحمر <br> cardinal.numLegs // =&gt; 2 </blockquote> المنشئ أكثر مرونة. من الممكن الآن تحديد خصائص كل <code>Bird</code> في وقت إنشائه ، وهو أحد الطرق التي تكون بها منشئات جافا سكريبت مفيدة للغاية. يقوموا بتجميع الأشياء معًا استنادًا إلى الخصائص والسلوكيات المشتركة وتحديد مخطط يعمل تلقائيًا على إنشائها. </section>

## Instructions
<section id="instructions"> إنشاء منشئ <code>Dog</code> آخر. هذه المرة ، إعداده لاتخاذ المعلمات <code>name</code> <code>color</code> ، ولها خاصية <code>numLegs</code> ثابتة في 4. ثم إنشاء <code>Dog</code> جديد المحفوظة في <code>terrier</code> متغير. تمريرها جهازي كوسائط <code>name</code> ولخصائص <code>color</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> يجب أن يحصل على حجة <code>name</code> .
    testString: 'assert((new Dog("Clifford")).name === "Clifford", "<code>Dog</code> should receive an argument for <code>name</code>.");'
  - text: يجب أن يحصل <code>Dog</code> على حجة <code>color</code> .
    testString: 'assert((new Dog("Clifford", "yellow")).color === "yellow", "<code>Dog</code> should receive an argument for <code>color</code>.");'
  - text: يجب أن يكون <code>Dog</code> لديه خاصية <code>numLegs</code> مضبوطة على 4.
    testString: 'assert((new Dog("Clifford")).numLegs === 4, "<code>Dog</code> should have property <code>numLegs</code> set to 4.");'
  - text: يجب أن يتم إنشاء <code>terrier</code> باستخدام منشئ <code>Dog</code> .
    testString: 'assert(terrier instanceof Dog, "<code>terrier</code> should be created using the <code>Dog</code> constructor.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {

}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
