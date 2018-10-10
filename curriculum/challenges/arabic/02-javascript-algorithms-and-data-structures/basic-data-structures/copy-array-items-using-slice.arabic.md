---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1
videoUrl: ''
localeTitle: نسخ صفيف العناصر باستخدام شريحة ()
---

## Description
<section id="description"> الطريقة التالية التي سنقوم بتغطيتها هي <code>slice()</code> . <code>slice()</code> ، بدلاً من تعديل صفيف أو نسخ أو <em>مقتطفات</em> ، عدد معين من العناصر إلى صفيف جديد ، تاركاً المصفوفة يتم استدعاؤها دون مساس. تأخذ <code>slice()</code> معلمتين فقط - الأولى هي المؤشر الذي يبدأ عنده الاستخراج ، والثاني هو المؤشر الذي يتم عنده إيقاف الاستخراج (يحدث الاستخراج حتى ، ولكن ليس بما في ذلك العنصر في هذا المؤشر). النظر في هذا: <blockquote style=";text-align:right;direction:rtl"> السماح للظروف الجوية = [&#39;المطر&#39; ، &#39;الثلج&#39; ، &#39;المتجمدة&#39; ، &#39;البرد&#39; ، &#39;واضح&#39;] ؛ <br><br> السماح todaysWeather = weatherConditions.slice (1 ، 3) ؛ <br> // todaysWeather يساوي [&#39;snow&#39;، &#39;sleet&#39;]؛ <br> // weatherConditions لا يزال يساوي [&#39;المطر&#39; ، &#39;الثلج&#39; ، &#39;المتجمدة&#39; ، &#39;البرد&#39; ، &#39;واضح&#39;] <br></blockquote> في الواقع ، قمنا بإنشاء مصفوفة جديدة عن طريق استخراج عناصر من صفيف موجود. </section>

## Instructions
<section id="instructions"> لقد حددنا دالة ، <code>forecast</code> ، تأخذ صفيفًا كحجة. قم بتعديل الوظيفة باستخدام <code>slice()</code> لاستخراج المعلومات من صفيف الوسيطة وإرجاع صفيف جديد يحتوي على عناصر <code>&#39;warm&#39;</code> و <code>&#39;sunny&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تعود <code>forecast</code> <code>[&quot;warm&quot;, &quot;sunny&quot;]</code>'
    testString: 'assert.deepEqual(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]), ["warm", "sunny"], "<code>forecast</code> should return <code>["warm", "sunny"]");'
  - text: يجب أن تستخدم وظيفة <code>forecast</code> طريقة <code>slice()</code>
    testString: 'assert(/\.slice\(/.test(code), "The <code>forecast</code> function should utilize the <code>slice()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function forecast(arr) {
  // change code below this line

  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
