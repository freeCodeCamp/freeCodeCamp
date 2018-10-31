---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
videoUrl: ''
localeTitle: الحد من حجم البند باستخدام وظيفة minmax
---

## Description
<section id="description"> هناك وظيفة أخرى مدمجة لاستخدامها مع <code>grid-template-columns</code> <code>grid-template-rows</code> تسمى <code>minmax</code> . يتم استخدامه لتقييد حجم العناصر عند تغيير حجم حاوية الشبكة. للقيام بذلك ، تحتاج إلى تحديد نطاق الحجم المقبول لعنصرك. هنا مثال: <blockquote style=";text-align:right;direction:rtl"> أعمدة قوالب الشبكة: minmax 100 بكسل (50 بكسل ، 200 بكسل) ؛ </blockquote> في التعليمات البرمجية أعلاه ، يتم تعيين <code>grid-template-columns</code> لإنشاء عمودين ؛ الأول بعرض 100 بكسل ، والثاني يحتوي على الحد الأدنى للعرض 50 بكسل والحد الأقصى للعرض 200 بكسل. </section>

## Instructions
<section id="instructions"> باستخدام <code>minmax</code> وظيفة، استبدل <code>1fr</code> في <code>repeat</code> وظيفة مع حجم العمود الذي يحتوي الحد الأدنى للعرض <code>90px</code> والحد الأقصى للعرض <code>1fr</code> ، وتغيير حجم لوحة المعاينة لمعرفة التأثير. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> يجب أن يكون من الدرجة على <code>grid-template-columns</code> الممتلكات التي تم تعيينها لتكرار 3 أعمدة مع الحد الأدنى لعرض <code>90px</code> وأقصى عرض لها <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the minimum width of <code>90px</code> and maximum width of <code>1fr</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* change the code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
