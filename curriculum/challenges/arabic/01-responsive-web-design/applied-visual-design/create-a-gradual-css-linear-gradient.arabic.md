---
id: 587d78a5367417b2b2512ad6
title: Create a Gradual CSS Linear Gradient
challengeType: 0
videoUrl: ''
localeTitle: إنشاء تدرج خطي متدرج CSS
---

## Description
<section id="description"> لا يقتصر تطبيق لون على عناصر HTML على لون واحد مسطح. يوفر CSS القدرة على استخدام انتقالات اللون ، والمعروفة باسم التدرجات ، على العناصر. يتم الوصول إلى هذا من خلال الدالة <code>linear-gradient()</code> لخاصية <code>background</code> . هنا الصيغة العامة: <code>background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);</code> تحدد الوسيطة الأولى الاتجاه الذي يبدأ منه انتقال اللون - يمكن تحديده كدرجة ، حيث يجعل 90deg تدرجًا رأسيًا ويصبح 45deg مائلًا مثل الخط المائل العكسي (Backslash). الوسيطات التالية تحدد ترتيب الألوان المستخدمة في التدرج. مثال: <code>background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));</code> </section>

## Instructions
<section id="instructions"> استخدم <code>linear-gradient()</code> <code>background</code> عنصر <code>div</code> ، <code>#CCFFFF</code> من اتجاه 35 درجة لتغيير اللون من <code>#CCFFFF</code> إلى <code>#FFCCCC</code> . <strong>ملحوظة</strong> <br> بينما هناك طرق أخرى لتحديد قيمة لون ، مثل <code>rgb()</code> أو <code>hsl()</code> ، استخدم قيم سداسية لهذا التحدي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>div</code> على <code>background</code> <code>linear-gradient</code> مع الاتجاه والألوان المحددين.
    testString: 'assert(code.match(/background:\s*?linear-gradient\(35deg,\s*?(#CCFFFF|#CFF),\s*?(#FFCCCC|#FCC)\);/gi), "The <code>div</code> element should have a <code>linear-gradient</code> <code>background</code> with the specified direction and colors.");'

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
    margin: 50px auto;

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
