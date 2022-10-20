---
id: 5cddbfd622f1a59093ec611d
title: أنشاء برنامَج Module
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

بدأت JavaScript بدور صغير تلعبه على شبكة ويب بتنسيق HTML. اليوم، إنها ضخمة، وبعض المواقع يتم بناؤها بالكامل تقريبا باستخدام JavaScript. من أجل جعل JavaScript أكثر نمطية ونظيفة وقابلة للصيانة؛ قدم ES6 طريقة لمشاركة الكود بسهولة بين ملفات JavaScript. يتضمن هذا تصدير أجزاء من ملف لاستخدامها في ملف أو أكثر من الملفات الأخرى، واستيراد الأجزاء التي تحتاجها، حيث تحتاجها. من أجل الاستفادة من هذه العملية، تحتاج إلى إنشاء script في مستند HTML الخاص بك مع `type` من `module`. إليك مثال:

```html
<script type="module" src="filename.js"></script>
```

يتمكن script الذي يستخدم نوع `module` هذا من أن يستخدم `import` و `export`, سوف تتعلم عنهم في التحديات القادمة.

# --instructions--

قم بإضافة script إلى مستند HTML من نوع `module` وإعطائه الملف المصدر `index.js`

# --hints--

يجب عليك إنشاء علامة `script`.

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

يجب أن يحتوي علامة `script` على سمة `type` بقيمة `module`.

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

يجب أن يحتوي علامة `script` علي `src` بقيمة `index.js`.

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
