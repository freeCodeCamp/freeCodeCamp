---
id: 587d7fb2367417b2b2512bf5
title: الحصول على إدخال معلمة المسار من العميل
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

When building an API, we have to allow users to communicate to us what they want to get from our service. على سبيل المثال، إذا كان العميل يطلب معلومات عن مستخدم مخزّن في قاعدة البيانات، هم بحاجة إلى طريقة تمكننا من معرفة المستخدم الذي يهتمون به. ومن الطرق الممكنة لتحقيق هذه النتيجة استخدام route parameter. معلمات(Parameters) المسار تُسمّى أجزاء من عنوان URL، المحدد بالقطع (/). Each segment captures the value of the part of the URL which matches its position. يمكن العثور على القيم التي تم الحصول عليها في كائن `req.params`.

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

قم ببناء خادم استجابة محمول في المسار `GET /:word/echo`. الرد بكائن JSON يأخذ التركيب `{echo: word}`. يمكنك العثور على الكلمة المراد تكرارها في `req.params.word`. يمكنك اختبار مسارك من شريط عنوان المتصفح الخاص بك ، وزيارة بعض المسارات المطابقة ، على سبيل المثال `your-app-rootpath/freecodecamp/echo`.

# --hints--

الاختبار 1 : خادم الاستجابة الخاص بك يجب أن يكرر الكلمات بشكل صحيح

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

الاختبار 2 : خادم الاستجابة الخاص بك يجب أن يكرر الكلمات بشكل صحيح

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
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
