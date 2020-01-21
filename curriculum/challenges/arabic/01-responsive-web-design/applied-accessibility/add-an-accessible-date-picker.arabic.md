---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: إضافة منتقي تاريخ يسهل الوصول إليه
---

## Description
<section id="description"> تشتمل النماذج غالبًا على حقل <code>input</code> ، والذي يمكن استخدامه لإنشاء عدة عناصر تحكم مختلفة. تشير السمة <code>type</code> في هذا العنصر إلى نوع الإدخال الذي سيتم إنشاؤه. ربما لاحظت <code>text</code> و <code>input</code> أنواع المدخلات في التحديات السابقة، وقدم HTML5 خيارًا لتحديد حقل <code>date</code>. اعتمادًا على دعم المتصفح، يظهر منتقي التاريخ في حقل <code>input</code> عندما يكون في التركيز، مما يجعل ملء نموذج أسهل لجميع المستخدمين. بالنسبة للمتصفحات القديمة، سيتم الكتابة افتراضيًا على <code>text</code>، لذلك يساعد على عرض تنسيق التاريخ المتوقع للمستخدمين في التصنيف أو كنص نائب للعنصر فقط. إليك مثال:
  
```html
<label for="input1">أدخل تاريخًا:</label>
<input type="date" id="input1" name="input1">
```
</section>

## Instructions
<section id="instructions"> يقوم كامبر كات بإعداد بطولة مورتال كومبات ويريد أن يطلب من منافسيه معرفة التاريخ الأفضل. إضافة علامة <code>input</code> تحتوي على سمة <code>type</code> من &quot;date&quot; ، وسمة <code>id</code> من &quot;pickdate&quot; ، وسمة <code>name</code> من &quot;date&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تضيف الكود الخاص بك علامة <code>input</code> واحدة لحقل محدد التاريخ.
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: يجب أن تحتوي علامة <code>input</code> سمة <code>type</code> بقيمة تاريخ.
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: يجب أن تحتوي علامة <code>input</code> الخاصة بك على سمة <code>id</code> بقيمة اختيار.
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: يجب أن تحتوي علامة <code>input</code> سمة <code>name</code> لها قيمة التاريخ.
    testString: 'assert($("input").attr("name") == "date", "Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Add your code below this line -->



        <!-- Add your code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
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
