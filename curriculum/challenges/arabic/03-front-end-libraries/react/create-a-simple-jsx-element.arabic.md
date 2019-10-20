---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: إنشاء عنصر بسيط JSX
---

## Description
<section id="description"> <strong>مقدمة:</strong> React هي مكتبة مفتوحة المصدر تم إنشاؤها بواسطة Facebook. إنها أداة رائعة لعرض واجهة المستخدم (UI) لتطبيقات الويب الحديثة. يستخدم React امتدادًا لغويًا لجافا سكريبت يُسمى JSX والذي يسمح لك بكتابة HTML مباشرةً داخل JavaScript. هذا له العديد من الفوائد. فهو يتيح لك استخدام القوة البرمجية الكاملة لجافا سكريبت في HTML ، ويساعد على إبقاء كودك قابلاً للقراءة. بالنسبة للجزء الأكبر ، تشبه JSX HTML الذي تعلمته بالفعل ، ولكن هناك بعض الاختلافات الأساسية التي سيتم تغطيتها خلال هذه التحديات. على سبيل المثال ، نظرًا لأن JSX عبارة عن امتداد نحوي لجافا سكريبت ، يمكنك في الواقع كتابة JavaScript مباشرة داخل JSX. للقيام بذلك ، ما عليك سوى تضمين الشفرة التي تريد معاملتها على هيئة JavaScript ضمن أقواس معقوفة: <code>{ &#39;this is treated as JavaScript code&#39; }</code> . ضع ذلك في الاعتبار ، نظرًا لأنه يُستخدم في العديد من التحديات المستقبلية. ومع ذلك ، نظرًا لأن JSX ليس جافا سكريبت صالحًا ، يجب ترجمة شفرة JSX إلى جافا سكريبت. أداة النقل المشذر Babel هي أداة شائعة لهذه العملية. من أجل راحتك ، تمت إضافة بالفعل خلف الكواليس لهذه التحديات. إذا حدث لك أن تكتب JSX غير صحيح من الناحية التركيبية ، فسترى أول اختبار في هذه التحديات يفشل. تجدر الإشارة إلى أنه تحت غطاء محرك السيارة التحديات تدعوا <code>ReactDOM.render(JSX, document.getElementById(&#39;root&#39;))</code> . هذه الدعوة الدالة هي ما يضع JSX الخاص بك في تمثيل React خفيف الوزن الخاص بـ DOM. ثم تستخدم React لقطات من DOM الخاصة بها لتحسين تحديث أجزاء معينة فقط من DOM الفعلي. </section>

## Instructions
<section id="instructions"> <strong>التعليمات:</strong> تستخدم الشفرة الحالية JSX لتعيين عنصر <code>div</code> إلى <code>JSX</code> المستمر. استبدل <code>div</code> بعنصر <code>h1</code> وأضف النص <code>Hello JSX!</code> داخله. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم <code>JSX</code> المستمر بإرجاع عنصر <code>h1</code> .
    testString: 'assert(JSX.type === "h1", "The constant <code>JSX</code> should return an <code>h1</code> element.");'
  - text: يجب أن تتضمن علامة <code>h1</code> النص <code>Hello JSX!</code>
    testString: 'assert(Enzyme.shallow(JSX).contains("Hello JSX!"), "The <code>h1</code> tag should include the text <code>Hello JSX!</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = <div></div>;

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
