---
id: 5a8b073d06fa14fcfde687aa
title: Exercise Tracker
localeTitle: متتبع التمرين
challengeType: 4
isRequired: true
---

## Description
<section id='description'> 
قم بإنشاء تطبيق جافا سكريبت كاملا يشبه وظيفيًا ما يلي: <a href='https://nonstop-pond.glitch.me/' target='_blank'>https://nonstop-pond.glitch.me/</a>.
 
سيتطلب عملك كتابة برنامجك على مشروعنا المبدأي في Glitch. بعد الانتهاء من هذا المشروع ، يمكنك نسخ عنوان URL الافتراضي الخاص بك (إلى الصفحة الرئيسية لتطبيقك) في هذه الشاشة لاختباره!
يمكنك أيضا اختياريا كتابة مشروعك على نظام أساسي آخر ، ولكن يجب أن يكون مرئيًا بشكل عام لاختبارنا. 
ابدأ هذا المشروع على Glitch باستخدام <a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/' target='_blank'>هذا الرابط</a> أو استنساخ <a href='https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/'>هذا المشروع</a> على GitHub! إذا كنت تستخدم Glitch ، تذكر لحفظ الرابط لمشروعك في مكان آمن! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يمكنني إنشاء مستخدم عن طريق نشر اسم مستخدم بيانات النموذج إلى / api / exercise / new-user وسيتم إرجاع كائن باسم المستخدم و <code>_id</code> .
    testString: ''
  - text: يمكنني الحصول على مجموعة من جميع المستخدمين عن طريق الحصول على api / exercise / users مع نفس المعلومات عند إنشاء مستخدم.
    testString: ''
  - text: "يمكنني إضافة تمرين إلى أي مستخدم عن طريق نشر بيانات userId (_id) ، والوصف ، والمدة ، والتاريخ الاختياري إلى / api / exercise / add. إذا لم يتم تقديم تاريخ ، فسيستخدم التاريخ الحالي. سيعرض التطبيق كائن المستخدم مع إضافة حقول التمرين "
    testString: ''
  - text: يمكنني استرداد سجل تمرين كامل لأي مستخدم من خلال الحصول على / api / exercise / log بمعلمة userId (_id). سيقوم التطبيق بإرجاع كائن المستخدم مع سجل صفيف المضافة وعدد (العدد الكلي للتمرين).
    testString: ''
  - text: "يمكنني استرداد جزء من سجل أي مستخدم عن طريق تمرير المعلمات الاختيارية من وإلى أو الحد. (تنسيق التاريخ yyyy-mm-dd ، limit = int) "
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
