---
id: 587d7790367417b2b2512ab0
title: Use tabindex to Add Keyboard Focus to an Element
challengeType: 0
videoUrl: ''
localeTitle: استخدم tabindex إلى إضافة Keyboard Keyboard إلى عنصر
---

## Description
<section id="description"> <code>tabindex</code> سمة <code>tabindex</code> HTML على ثلاث وظائف مميزة تتعلق بتركيز لوحة المفاتيح للعنصر. عندما يكون على علامة ، فإنه يشير إلى أنه يمكن التركيز على العنصر. تحدد القيمة (عدد صحيح موجب أو سلبي أو صفر) السلوك. تتلقى عناصر معينة ، مثل الروابط وعناصر التحكم في النموذج ، تركيز لوحة المفاتيح تلقائيًا عند قيام المستخدم بالتبويب من خلال صفحة. إنه بنفس ترتيب العناصر الموجودة في ترميز مصدر HTML. يمكن إعطاء هذه الوظيفة نفسها لعناصر أخرى ، مثل <code>div</code> و <code>span</code> و <code>p</code> ، بوضع سمة <code>tabindex=&quot;0&quot;</code> عليها. إليك مثال: <code>&lt;div tabindex=&quot;0&quot;&gt;I need keyboard focus!&lt;/div&gt;</code> <strong>ملاحظة</strong> <br> <code>tabindex</code> قيمة <code>tabindex</code> سالبة (عادة -1) إلى أن العنصر قابل للتركيز ، ولكن لا يمكن الوصول إليه عن طريق لوحة المفاتيح. يتم استخدام هذه الطريقة بشكل عام للتركيز على المحتوى برمجيًا (مثلما يحدث عندما يتم تنشيط <code>div</code> المستخدم في نافذة منبثقة) ، وهو خارج نطاق هذه التحديات. </section>

## Instructions
<section id="instructions"> أنشأ Camper Cat استبيانًا جديدًا لجمع معلومات حول مستخدميه. وهو يعلم أن حقول الإدخال تحصل تلقائيًا على تركيز لوحة المفاتيح ، ولكنه يريد التأكد من أن مستخدمي لوحة المفاتيح يتوقفون مؤقتًا عند استخدام الإرشادات أثناء الجدولة خلال العناصر. إضافة سمة <code>tabindex</code> إلى علامة <code>p</code> وتعيين قيمتها إلى &quot;0&quot;. المكافأة - باستخدام <code>tabindex</code> تمكّن أيضًا <code>tabindex</code> CSS الزائفة <code>:focus</code> على العمل على علامة <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تضيف التعليمات البرمجية الخاصة بك سمة <code>tabindex</code> إلى علامة <code>p</code> التي تحتوي على إرشادات النموذج.
    testString: 'assert($("p").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the <code>p</code> tag that holds the form instructions.");'
  - text: يجب أن تقوم التعليمات البرمجية بتعيين السمة <code>tabindex</code> على علامة <code>p</code> إلى قيمة 0.
    testString: 'assert($("p").attr("tabindex") == "0", "Your code should set the <code>tabindex</code> attribute on the <code>p</code> tag to a value of 0.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
