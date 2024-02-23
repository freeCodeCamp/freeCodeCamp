---
id: 587d778b367417b2b2512aa8
title: إضافة منتقي تاريخ يمكن الوصول إليه
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

غالبًا ما تتضمن النماذج حقل `input` ، والذي يمكن استخدامه لإنشاء العديد من العناصر المختلفة للتحكم في النموذج. خاصية `type` على هذا العنصر تشير إلي أي نوع `input` سيتم إنشاؤه.

ربما تكون قد لاحظت وجود أنواع المدخلات `text` و `submit` في تحديات سابقة، و HTML5 قد وفرت خيار حقل `date`. اعتمادا على دعم المتصفح، يظهر منتقي التاريخ في حقل `input` عندما يكون في التركيز، مما يجعل تعبئة النموذج أسهل لجميع المستخدمين.

بالنسبة إلى المتصفحات الأقدم ، سيكون type افتراضيًا بقيمة ` text ` ،لساعد في إظهار تنسيق التاريخ المتوقع للمستخدمين في `label`  أو  `placeholder` في النص احتياطيا.

إليك مثال:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

يقوم Camper Cat بإعداد بطولة Mortal Kombat ويريد أن يطلب من منافسيه معرفة التاريخ الأفضل. أضف علامة `input` مع سمة `type` من نوع `date`، و مع سمة `id` بقيمة `pickdate`، و أيضا سمة `name` بقيمة `date`.

# --hints--

يجب أن يحتوي الكود علي علامة `input` واحد لخانة محدد التاريخ.

```js
assert($('input').length == 2);
```

يجب أن يحتوي علامة `input` على سمة `type` بقيمة `date`.

```js
assert($('input').attr('type') == 'date');
```

يجب أن يحتوي علامة `input` على سمة `id` بقيمة `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

يجب أن يحتوي علامة `input` على سمة `name` بقيمة `date`.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

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

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

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
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
