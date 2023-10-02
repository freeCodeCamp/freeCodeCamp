---
id: 5a24c314108439a4d4036161
title: تعلم حول إغلاق علامات JSX الذاتي (Self-Closing JSX Tags)
challengeType: 6
forumTopicId: 301396
dashedName: learn-about-self-closing-jsx-tags
---

# --description--

حتى الآن، رأيت كيف يختلف JSX عن HTML بطريقة رئيسة باستخدام `className` ضد `class` لتحديد فئات HTML.

وهناك طريقة هامة أخرى تختلف فيها JSX عن HTML وهي ظريقة علامة الإغلاق الذاتي (self-closing tag).

في HTML، جميع العلامات تقريبا لديها علامات فتح وإغلاق على حد سواء: `<div></div>`؛ علامة الإغلاق تحتوي دائما على قطع أمامي قبل اسم العلامة التي تغلقاها. غير أن هناك حالات خاصة في HTML تسمى "علامات الإغلاق الذاتي". أو العلامات التي لا تتطلب علامة فتح أو إغلاق قبل أن تبدأ علامة أخرى.

على سبيل المثال، يمكن كتابة علامة مثل `<br>` أو `<br />`، ولكن لا ينبغي أن يكتب على أنه `<br></br>` لأنه لا يحتوي على أي محتوى.

في JSX، القواعد مختلفة قليلاً. يمكن كتابة أي عنصر من عناصر JSX مع علامة إغلاق ذاتي، ويجب إغلاق كل عنصر. على سبيل المثال، يجب أن يكتب دائما مثل `<br />` لكي تكون JSX صالحة يمكن نقلها. يمكن كتابة `<div>`، من ناحية أخرى مثل `<div />` أو `<div></div>`. الفرق هو أنه في أول إصدار لبناء الجملة لا تجد طريقة لإدراج أي شيء في `<div />`. سوف ترى في تحديات ألاحقه أن هذا تركيب الجملة مفيدة عند تقديم مكونات React.

# --instructions--

إصلاح الأخطاء في محرر التعليمات البرمجية بحيث تكون JSX صالحة و عمليات النقل تنجح. تيقن من عدم تغيير أي من المحتويات - تحتاج فقط إلى إغلاق العلامات حيث هناك حاجة إليها.

# --hints--

يجب أن يُنتج عنصر `div` من الثابت `JSX`.

```js
assert.strictEqual(JSX.type, 'div');
```

يجب أن يحتوي `div` على علامة `br`.

```js
assert(Enzyme.shallow(JSX).find('br').length === 1);
```

يجب أن يحتوي `div` على وسم `hr`.

```js
assert(Enzyme.shallow(JSX).find('hr').length === 1);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
</div>
);
```
