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
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- استخدم أي منشئ موقع لإكمال المشروع. تحقق انك أضفت جميع الملفات من مستودعنا في GitHub في مشروعك.

إن ملف `package.json` مركز أي مشروع Node.js أو حزمة npm. It stores information about your project. ويتكون من كائن JSON واحد حيث يتم تخزين المعلومات في أزواج key-value. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information.

You can create the `package.json` file from the terminal using the `npm init` command. This will run a guided setup. Using `npm init` with the `-y` flag will generate the file without having it ask any questions, `npm init -y`.

If you look at the file tree of your project, you will find the `package.json` file on the top level of the tree. هذا هو الملف الذي سوف تحسنه في التحديات القادمة.

واحدة من أكثر المعلومات شيوعا في هذا الملف هي خانة `author`. تحدد اسم منشئ المشروع، وممكن أن يتكون من مقطع نصي أو كائن مع جهة اتصال أو تفاصيل أخرى. يوصى باستخدام كائن لمشاريع أكبر، ولكن مقطع نصي بسيط مثل المثال التالي ينفع لهذا المشروع.

```json
"author": "Jane Doe",
```

# --instructions--

Add your name as the `author` of the project in the `package.json` file.

**ملاحظة:** تذكر أنك تكتب JSON، لذلك يجب أن تستخدم جميع أسماء الخانات علامات اقتباس مزدوجة (") وأن تكون مفصولة بفاصلة (,).

If you are using Gitpod, make sure the app is running and the preview window is open. Copy the preview window's URL and paste it into the Solution Link input below.

# --hints--

`package.json` should have a valid "author" key

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
