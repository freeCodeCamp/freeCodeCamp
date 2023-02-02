---
id: 587d7fb3367417b2b2512bfb
title: 'استخدام package.json، مركز أي مشروع Node.js أو حزمة npm'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

العمل على هذه التحديات سوف ينطوي على كتابة كودك باستخدام إحدى الطرق التالية:

- انسخ <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow"> هذا المستودع من GitHub</a> واكمل مشروعك محلياً.
- استخدم <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">مشروعنا المبدئي على Replit</a> لإكمال هذه التحديات.
- استخدم أي منشئ موقع لإكمال المشروع. تحقق انك أضفت جميع الملفات من مستودعنا في GitHub في مشروعك.

إذا استخدمت Replit، اتبع هذه الخطوات لإعداد المشروع:

-   ابدأ باستيراد (import) المشروع إلى Replit.
-   بعد ذلك، سترى نافذة `.replit`.
-   اختار `Use run command` وانقر على زر `Done`.

عند الانتهاء، تأكد من استضافة ديمو لمشروعك في مكان عام. ثم أرسل عنوانه (URL) في خانة "رابط الحل".

إن ملف `package.json` مركز أي مشروع Node.js أو حزمة npm. وإنه يخزن معلومات حول مشروعك، مثلما يخزن قسم &lt;head> من مستند HTML محتوى صفحة ويب. ويتكون من كائن JSON واحد حيث يتم تخزين المعلومات في أزواج key-value. وهناك مجالان مطلوبان فقط؛ "name" و "version"، ولكن الممارسة الجيدة هي أن تقدِّم معلومات إضافية عن مشروعك، التي يمكن أن تكون مفيدة للمستخدمين أو المشرفين في المستقبل.

إذا نظرت إلى شجرة ملف مشروعك، سوف تجد ملف package.json في أعلى مستوى من الشجرة. هذا هو الملف الذي سوف تحسنه في التحديات القادمة.

واحدة من أكثر المعلومات شيوعا في هذا الملف هي خانة `author`. تحدد اسم منشئ المشروع، وممكن أن يتكون من مقطع نصي أو كائن مع جهة اتصال أو تفاصيل أخرى. يوصى باستخدام كائن لمشاريع أكبر، ولكن مقطع نصي بسيط مثل المثال التالي ينفع لهذا المشروع.

```json
"author": "Jane Doe",
```

# --instructions--

أضف اسمك كمؤلف للمشروع بداخل `author` في ملف المشروع package.json.

**ملاحظة:** تذكر أنك تكتب JSON، لذلك يجب أن تستخدم جميع أسماء الخانات علامات اقتباس مزدوجة (") وأن تكون مفصولة بفاصلة (,).

# --hints--

يجب أن يحتوي package.json على هوية "author" صحيحة

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
