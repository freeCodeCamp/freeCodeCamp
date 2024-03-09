---
id: 587d7fb1367417b2b2512bf3
title: تنفيذ برنامج وسيط(midleware) لمسجل الطلبات على مستوى الجذر
challengeType: 2
forumTopicId: 301514
dashedName: implement-a-root-level-request-logger-middleware
---

# --description--

في وقت سابق، تم تقديمك إلى دالة `express.static()` midleware. الآن حان الوقت لرؤية ما هو البرنامج الوسيط(midleware) ، بمزيد من التفصيل. وظائف البرامج الوسيطة (midleware) هي وظائف تأخذ 3 تمريرات: عنصر الطلب (request) ، عنصر الاستجابة(response)، والدالة التالية(next) في دورة طلب الاستجابة للتطبيق. هذه الدوال تنفذ بعض التعليمات البرمجية التي يمكن أن يكون لها تأثيرات جانبية على التطبيق، وعادة ما تضيف معلومات إلى كائنات الطلب أو الاستجابة. ويمكنها أيضا أن تنهي الدورة بإرسال رد عند استيفاء بعض الشروط. وإذا لم يرسلوا الرد عند القيام بذلك، فإنهم يشرعون في تنفيذ الوظيفة التالية في المكدس. يؤدي هذا إلى استدعاء الوسيطة الثالثة،`next()`.

انظر إلى المثال التالي:

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

دعونا نفترض أنك قمت بتركيب هذه الوظيفة على مسار. عندما يتطابق الطلب مع المسار، فإنه يعرض نص "I’m a middleware"، ثم يقوم بتنفيذ الدالة التالية في المكدس. في هذا التمارين ، سوف تقوم ببناء منتوج على مستوى الجذر. كما رأيت في التحدي 4، لتحميل دالة البرنامج الوسيط(middleware) على مستوى الجذر ، يمكنك استخدام طريقة `app.use(<mware-function>)`. في هذه الحالة، سيتم تنفيذ الوظيفة لجميع الطلبات، ولكن يمكنك أيضا وضع شروط أكثر تحديداً. على سبيل المثال، إذا كنت تريد تنفيذ دالة فقط لطلبات POST ، يمكنك استخدام `app.post(<mware-function>)`. توجد طرق مشابهة لجميع أفعال HTTP (GET, DELETE, PUT …).

# --instructions--

بناء مسجل بسيط. لكل طلب، يجب أن يسجل في وحدة التحكم(console) نص يأخذ التنسيق التالي: `method path - ip`. مثال سيبدوا هكذا: `GET /json - ::ffff:127.0.0.1`. لاحظ أن هناك مسافة بين `method` و `path` وأن الفاصل بين `path` و `ip` محاط بمسافة على كلا الجانبين. يمكنك الحصول على طريقة الطلب (http verb)، ومسار المسار النسبي، و ip للمتصل من عنصر الطلب باستخدام `req.method`, `req.path` and `req.ip`. تذّكر أن تستدعي `next()` عند الانتهاء من ذلك، أو أن الخادم الخاص بك سيكون عالقاً إلى الأبد. تأكد من فتح "السجلات"(Logs) ، ومعرفة ماذا يحدث عند وصول بعض الطلبات.

**ملاحظة:** express تُقيّم الدوال بالترتيب التي تظهر به في الكود. هذا صحيح أيضا للبرمجيات الوسيطة (middleware). إذا أردت أن تعمل على جميع المسارات ، فيجب تثبيتها قبلها.

# --hints--

يجب أن يكون البرنامج الوسطي لتسجيل مستوى الروت نشط

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/root-middleware-logger').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'root-level logger is not working as expected'
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
