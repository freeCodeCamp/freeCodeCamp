---
id: 587d7dbc367417b2b2512bb1
title: إنشاء عنصر JSX بسيط
challengeType: 6
forumTopicId: 301390
dashedName: create-a-simple-jsx-element
---

# --description--

React هي مكتبة عرض مفتوح المصدر (Open Source) تم إنشاؤها وصيانتها بواسطة Facebook. إنها أداة رائعة لإنشاء واجهة المستخدم (UI) لتطبيقات الويب الحديثة.

يستخدم React امتداد بناء الجملة JavaScript يسمى JSX الذي يسمح لك بكتابة HTML قاصدًا داخل JavaScript. وهذا يحتوي عدة فوائد. يتيح لك استخدام القوة البرنامجية JavaScript الكاملة داخل HTML، ويساعد على إبقاء التعليمات البرمجية (code) الخاصة بك مقروءة. في الغالب، JSX شبيه HTML الذي تعلمته من قبل، غير أن هناك بعض الاختلافات الرئيسية التي سيتم تغطيتها في جميع مراحل هذه التحديات.

على سبيل المثال، لأن JSX هو امتداد تكتيكي JavaScript، يمكنك في الواقع كتابة JavaScript قاصدًا داخل JSX. للقيام بذلك، قم ببساطة بإدراج الرمز الذي تريد معاملته مثل JavaScript ضمن أقواس منحنية: `{ 'this is treated as JavaScript code' }`. ضع هذا في اعتبارنا، لأنه يستخدم في العديد من التحديات المستقبلية.

لكن، لأن JSX غير صالح مثل JavaScript، يجب تحويل رموز JSX إلى JavaScript. والناقل Babel هو أداة شعبية لهذه العملية. من أجل راحتك، تمت إضافتها فعلًا خلف الكواليس لهذه التحديات. إذا حدث لك أن تكتب JSX غير صالح، فسترى الاختبار الأول في هذه التحديات يفشل.

وتجدر الإشارة إلى أن التحديات في ظل هذه البيئة تستخدم `ReactDOM.render(JSX, document.getElementById('root'))`. مكالمة الوظيفة هذه هي ما يضع JSX الخاص بك في تمثيل React الخفيف الوزن يخص DOM. ثم يستخدم لقطات React في DOM الخاصة به لتحسين التحديث فقط أجزاء محددة من DOM الفعلية.

# --instructions--

الكود الحالي يستخدم JSX لتعيين عنصر `div` إلى الثابت `JSX`. استبدال عنصر `div` بعنصر `h1` وإضافة النص `Hello JSX!` داخله.

# --hints--

يجب أن ينتج الثابت `JSX` عنصر `h1`.

```js
assert(JSX.type === 'h1');
```

يجب أن تتضمن علامة `h1` النص `Hello JSX!`

```js
assert(Enzyme.shallow(JSX).contains('Hello JSX!'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = <div></div>;
```

# --solutions--

```jsx
const JSX = <h1>Hello JSX!</h1>;
```
