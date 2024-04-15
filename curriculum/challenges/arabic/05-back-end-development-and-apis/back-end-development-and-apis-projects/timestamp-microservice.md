---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

Build a full stack JavaScript app that is functionally similar to this: <a href="https://timestamp-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://timestamp-microservice.freecodecamp.rocks</a>. سوف يقوم يلزمك العمل على هذا المشروع بكتابة كود باستخدام إحدى الطرق التالية:

-   أستنسخ <a href="https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">هذا مستودع من GitHub</a> واكمل مشروعك محلياً.
-   Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete your project.
-   استخدم أي منشئ لموقع لإكمال المشروع. تأكد من دمج جميع الملفات من مستودعنا في GitHub في مشروعك.

**ملاحظة:** ليس الغرض من هذا المشروع تحويل المناطق الزمنية، لذلك افترض إن جميع التواريخ الصحيحة المرسلة ستحلل بواسطة `new Date()` كتواريخ GMT.

# --hints--

يجب عليك تقديم URL لمشروعك، وليس عنوان المثال.

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

يجب أن ينتج كائن JSON عند طلب `/api/:date?` التاريخ الصحيح بهوية (key) المسمى `unix` الذي يكون طابع زمني Unix من تاريخ المدخل بالمللي ثانية (كرقم)

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

يجب أن ينتج عند كائن JSON طلب `/api/:date?` مع تاريخ صحيح مع هوية `utc` وتكون قيمته مقطع نصي من تاريخ المدخل. وينسق مثل: `Thu, 01 Jan 1970 00:00:00 GMT`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Your project can handle dates that can be successfully parsed by `new Date(date_string)`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011, GMT').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

If the input date string is invalid, the API returns an object having the structure `{ error : "Invalid Date" }`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

An empty date parameter should return the current time in a JSON object with a `unix` key

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

An empty date parameter should return the current time in a JSON object with a `utc` key

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
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
