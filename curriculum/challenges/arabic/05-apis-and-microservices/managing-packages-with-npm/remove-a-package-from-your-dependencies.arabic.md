---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
localeTitle: قم بإزالة حزمة من التبعيات الخاصة بك
challengeType: 2
---

## Description
<section id='description'> 
لقد قمت الآن باختبار بعض الطرق التي يمكنك من خلالها إدارة تبعيات مشروعك باستخدام قسم تبعيات package.json. لقد قمت بتضمين الحزم الخارجية عن طريق إضافتها إلى الملف وحتى إخبار npm بأنواع الإصدارات التي تريدها باستخدام أحرف خاصة مثل tilde (~) أو علامة الإقحام (^). 
ولكن ماذا لو كنت ترغب في إزالة حزمة خارجية لم تعد بحاجة إليها؟ كنت قد خمنت بالفعل - فقط إزالة "مفتاح" المقابلة: الزوج قيمة لذلك من الاعتماديات الخاصة بك. 
تنطبق هذه الطريقة نفسها على إزالة الحقول الأخرى في الحزمة الخاصة بك. json بالإضافة إلى 
تعليمات 
إزالة لحظة الحزمة من التبعيات الخاصة بك. 
تأكد من حصولك على كمية مناسبة من الفواصل بعد إزالتها. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب ألا تتضمن "التبعيات" "لحظة"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, ''moment'', ''"dependencies" still includes "moment"''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
