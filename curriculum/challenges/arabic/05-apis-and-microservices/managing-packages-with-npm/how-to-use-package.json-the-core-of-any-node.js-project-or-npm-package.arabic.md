---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
localeTitle: "كيفية استخدام package.json ، أو Core of Any Node.js Project أو npm Package"
challengeType: 2
---

## Description
<section id='description'> 
إن ملف package.json هو مركز أي مشروع Node.js أو حزمة npm. يخزن معلومات حول مشروعك تمامًا مثل <head> - يصف القسم في مستند HTML محتوى صفحة الويب. يتكون package.json من كائن JSON واحد حيث يتم تخزين المعلومات في "مفتاح": أزواج القيم. لا يوجد سوى حقلين مطلوبين في الحد الأدنى من package.json - الاسم والإصدار - إلا أنه من الممارسات الجيدة توفير معلومات إضافية حول مشروعك يمكن أن تكون مفيدة للمستخدمين أو مشرفين المستقبل. 
حقل المؤلف 
إذا ذهبت إلى مشروع Glitch الذي قمت بإعداده سابقًا وانظرت إلى الجانب الأيسر من شاشتك ، فستجد شجرة الملفات حيث يمكنك رؤية نظرة عامة على مختلف الملفات في مشروعك. ضمن القسم الخلفي لشجرة الملفات ، ستجد حزمة package.json - الملف الذي سنحسّنه في التحديين التاليين. 
أحد أكثر أجزاء المعلومات شيوعًا في هذا الملف هو حقل المؤلف الذي يحدد منشئ المشروع. يمكن أن يكون إما سلسلة أو كائن مع تفاصيل الاتصال. الهدف موصى به للمشاريع الأكبر ، ولكن في حالتنا ، سوف تفعل سلسلة بسيطة مثل المثال التالي. 
<code>"author": "Jane Doe",</code> 
Instructions 
أضف اسمك إلى حقل المؤلف في الحزمة. json لمشروع Glitch. 
تذكر أنك تكتب JSON. 
يجب أن تستخدم جميع أسماء الحقول علامات اقتباس مزدوجة (") ، على سبيل المثال" المؤلف " 
يجب فصل جميع الحقول بفاصلة (،) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json يجب أن يكون مفتاح "المؤلف" صالح
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.author, ''"author" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
