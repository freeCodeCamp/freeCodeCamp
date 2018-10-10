---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
videoUrl: ''
localeTitle: احصل على بيانات تحديد الموقع الجغرافي للعثور على إحداثيات نظام تحديد المواقع العالمي للمستخدم
---

## Description
<section id="description"> شيء آخر رائع يمكنك القيام به هو الوصول إلى الموقع الحالي للمستخدم. يحتوي كل متصفح على متصفح مدمج يمكن أن يوفر لك هذه المعلومات. سيحصل المستكشف على خطوط الطول والعرض الحالية للمستخدم. سترى مطالبة للسماح بهذا الموقع أو حظره من معرفة موقعك الحالي. يمكن إكمال التحدي في كلتا الحالتين ، طالما أن الرمز صحيح. عن طريق تحديد السماح ، سترى النص الموجود على هاتف الإخراج يتغير إلى خط العرض وخط الطول. هنا رمز يفعل هذا: <blockquote style=";text-align:right;direction:rtl"> إذا (navigator.geolocation) { <br> navigator.geolocation.getCurrentPosition (الوظيفة (الموضع) { <br> document.getElementById (&#39;data&#39;). innerHTML = &quot;latitude:&quot; + position.coords.latitude + &quot;&lt;br&gt; longitude:&quot; + position.coords.longitude؛ <br> })؛ <br> } </blockquote> أولاً ، يتحقق من وجود كائن <code>navigator.geolocation</code> . إذا حدث ذلك ، يتم <code>getCurrentPosition</code> الأسلوب <code>getCurrentPosition</code> على هذا الكائن ، والذي يبدأ طلبًا غير متزامن لموضع المستخدم. في حالة نجاح الطلب ، يتم تشغيل وظيفة رد الاتصال في الطريقة. تصل هذه الوظيفة إلى قيم كائن <code>position</code> لخط العرض وخط الطول باستخدام تدوين النقطة وتحديث HTML. </section>

## Instructions
<section id="instructions"> أضف رمز المثال داخل علامات <code>script</code> للتحقق من الموقع الحالي للمستخدم وإدراجه في HTML. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/navigator\.geolocation\.getCurrentPosition/g), "Your code should use <code>navigator.geolocation</code> to access the user&#39;s current location.");'
  - text: يجب أن تستخدم شفرتك <code>position.coords.latitude</code> لعرض موقع خط العرض للمستخدم.
    testString: 'assert(code.match(/position\.coords\.latitude/g), "Your code should use <code>position.coords.latitude</code> to display the user&#39;s latitudinal location.");'
  - text: يجب أن تستخدم شفرتك <code>position.coords.longitude</code> لعرض الموقع الطولي للمستخدم.
    testString: 'assert(code.match(/position\.coords\.longitude/g), "Your code should use <code>position.coords.longitude</code> to display the user&#39;s longitudinal location.");'
  - text: يجب عليك عرض موقف المستخدم داخل عنصر div <code>data</code> .
    testString: 'assert(code.match(/document\.getElementById\(\s*?("|")data\1\s*?\)\.innerHTML/g), "You should display the user&#39;s position within the <code>data</code> div element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

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
