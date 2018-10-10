---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: ''
localeTitle: قم بإنشاء استعلام وسائط
---

## Description
<section id="description"> استعلامات الوسائط هي تقنية جديدة تم تقديمها في CSS3 لتغيير عرض المحتوى استنادًا إلى أحجام مختلفة لإطار العرض. إطار العرض هو منطقة مرئية للمستخدم لصفحة ويب ، ويختلف باختلاف الجهاز المستخدم للدخول إلى الموقع. تتكون استعلامات الوسائط من نوع وسائط ، وإذا كان نوع الوسائط هذا يطابق نوع الجهاز الذي يتم عرض المستند عليه ، يتم تطبيق الأنماط. يمكنك الحصول على العديد من المحددات والأنماط داخل استعلام الوسائط الخاص بك كما تريد. في ما يلي مثال لاستعلام وسائط يُرجع المحتوى عندما يكون عرض الجهاز أقل من أو يساوي 100 بكسل: <code>@media (max-width: 100px) { /* CSS Rules */ }</code> ويعيد استعلام الوسائط التالي المحتوى عند يبلغ ارتفاع الجهاز أكثر من أو يساوي 350 بكسل:media <code>@media (min-height: 350px) { /* CSS Rules */ }</code> تذكر ، لا يتم تطبيق CSS داخل استعلام الوسائط إلا إذا كان نوع الوسائط يتطابق مع الجهاز المستخدم. </section>

## Instructions
<section id="instructions"> أضف استعلام وسائط ، بحيث يكون للعلامة <code>p</code> <code>font-size</code> يبلغ 10 بكسل عندما يكون ارتفاع الجهاز أقل من أو يساوي 800 بكسل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون عنصر <code>p</code> لديك <code>font-size</code> <code>height</code> بكسل عندما يكون <code>height</code> الجهاز أقل من 800 بكسل أو يساويه.
    testString: 'assert($("p").css("font-size") == "10px", "Your <code>p</code> element should have the <code>font-size</code> of 10px when the device <code>height</code> is less than or equal to 800px.");'
  - text: قم بتعريف استعلام <code>@media</code> لأجهزة ذات <code>height</code> أقل من أو يساوي 800 بكسل.
    testString: 'assert(code.match(/@media\s*?\(\s*?max-height\s*?:\s*?800px\s*?\)/g), "Declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 20px;
  }

  /* Add media query below */

</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
