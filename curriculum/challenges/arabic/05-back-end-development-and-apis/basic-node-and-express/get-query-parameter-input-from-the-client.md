---
id: 587d7fb2367417b2b2512bf6
title: الحصول على باراميتر Query المُدخل من المستخدم
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

ومن الطرق الشائعة الأخرى للحصول على مدخلات من العميل باستخدام ترميز البيانات بعد مسار path باستخدام query string. تم تعيين سلسلة الاستعلام بواسطة علامة استفهام (?)، وتشمل حقل = أزواج القيمة. يتم فصل كل زوجين بواسطة علامة (&). يمكن لـ Express تحليل البيانات من Query String، وتعبئة الكائن `req.query`. بعض الأحرف، مثل النسبة المئوية (%)، لا يمكن أن تكون في عناوين URLs ويجب أن تكون مشفرة في تنسيق مختلف قبل أن تتمكن من إرسالها. إذا كنت تستخدم API من JavaScript، يمكنك استخدام أساليب محددة لترميز/فك شفرة هذه الأحرف.

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

بناء نقطة نهاية API، محمولة على `GET /name`. الرد بمستند JSON، يأخذ البنية `{ name: 'firstname lastname'}`. يجب تشفير معلمات الاسم الأول والأخير في نص query على سبيل المثال `?first=firstname&last=lastname`.

**Note:** In the following exercise you are going to receive data from a POST request, at the same `/name` route path. If you want, you can use the method `app.route(path).get(handler).post(handler)`. This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.

# --hints--

Test 1 : Your API endpoint should respond with `{ "name": "Mick Jagger" }` when the `/name` endpoint is called with `?first=Mick&last=Jagger`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Test 2 : Your API endpoint should respond with `{ "name": "Keith Richards" }` when the `/name` endpoint is called with `?first=Keith&last=Richards`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
      );
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
