---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: ''
localeTitle: استخدم CSS Linear Gradient لإنشاء عنصر مخطط
---

## Description
<section id="description"> تتشابه دالة <code>repeating-linear-gradient()</code> إلى حد كبير مع <code>linear-gradient()</code> مع الفارق الرئيسي الذي يكرر نمط التدرج المحدد. ويقبل <code>repeating-linear-gradient()</code> مجموعة متنوعة من القيم ، ولكن من أجل البساطة ، ستعمل مع قيم زاوية وقيم توقف اللون في هذا التحدي. قيمة الزاوية هي اتجاه التدرج. تشبه نقاط توقف اللون قيم العرض التي تشير إلى مكان حدوث النقل ، ويتم تقديمها بنسبة مئوية أو عدد من وحدات البكسل. في المثال الموضحة في محرر التعليمة البرمجية ، يبدأ التدرج باللون <code>yellow</code> عند 0 بكسل والذي يمتزج باللون <code>blue</code> الثاني على بعد 40 بكسل من البداية. ونظرًا لأن توقف اللون التالي يبلغ 40 بكسل أيضًا ، يتغير التدرج فورًا إلى اللون <code>green</code> الثالث ، الذي يمتزج نفسه مع قيمة اللون الرابع <code>red</code> حيث أن هذا هو 80 بكسل بعيدًا عن بداية التدرج. في هذا المثال ، يساعد على التفكير في توقف اللون كزوجين حيث يتم مزج كل لونين معًا. <code>0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px</code> إذا كان كل لونين من قيم إيقاف اللون هما نفس اللون ، فإن المزج ليس ملحوظًا لأنه بين نفس اللون ، متبوعًا بفترة انتقال صلبة إلى اللون التالي ، حتى ينتهي بك الأمر مع المشارب. </section>

## Instructions
<section id="instructions"> جعل خطوط عن طريق تغيير <code>repeating-linear-gradient()</code> لاستخدام زاوية التدرج من <code>45deg</code> ، ثم تعيين أول لونين توقف عن اللون <code>yellow</code> ، وأخيرا توقف اللونين الثاني إلى اللون <code>black</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون زاوية <code>repeating-linear-gradient()</code> 45 درجة.
    testString: 'assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should be 45deg.");'
  - text: يجب ألا تكون زاوية <code>repeating-linear-gradient()</code> 90 درجة
    testString: 'assert(!code.match(/90deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should no longer be 90deg");'
  - text: يجب أن يكون لون التوقف عند 0 بكسل <code>yellow</code> .
    testString: 'assert(code.match(/yellow\s+?0(px)?/gi), "The color stop at 0 pixels should be <code>yellow</code>.");'
  - text: يجب أن تكون درجة اللون الواحدة عند 40 بكسل <code>yellow</code> .
    testString: 'assert(code.match(/yellow\s+?40px/gi), "One color stop at 40 pixels should be <code>yellow</code>.");'
  - text: يجب أن يكون اللون الثاني في 40 بكسل <code>black</code> .
    testString: 'assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi), "The second color stop at 40 pixels should be <code>black</code>.");'
  - text: يجب أن تكون نقطة توقف اللون الأخيرة عند 80 بكسل <code>black</code> .
    testString: 'assert(code.match(/black\s+?80px/gi), "The last color stop at 80 pixels should be <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
