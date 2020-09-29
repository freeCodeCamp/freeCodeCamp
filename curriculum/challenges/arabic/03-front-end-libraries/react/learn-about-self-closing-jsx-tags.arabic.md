---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
videoUrl: ''
localeTitle: تعرف على علامات JSX ذاتية الإغلاق
---

## Description
<section id="description"> لقد رأيت حتى الآن كيف يختلف JSX عن HTML بطريقة أساسية باستخدام <code>className</code> مقابل <code>class</code> لتعريف فئات HTML. هناك طريقة أخرى مهمة تختلف بها JSX عن HTML وهي فكرة العلامة ذاتية الإغلاق. في HTML ، تحتوي كل العلامات تقريبًا على علامة فتح وإغلاق: <code>&lt;div&gt;&lt;/div&gt;</code> ؛ تحتوي علامة الإغلاق دائمًا على شرطة مائلة للأمام قبل اسم العلامة الذي تقوم بإغلاقه. ومع ذلك ، هناك حالات خاصة في HTML تسمى &quot;علامات الإغلاق الذاتي&quot; ، أو العلامات التي لا تتطلب علامة فتح وإغلاق قبل أن تبدأ علامة أخرى. على سبيل المثال ، يمكن كتابة علامة فاصل الخط كـ <code>&lt;br&gt;</code> أو كـ <code>&lt;br /&gt;</code> ، ولكن لا يجب كتابتها أبدًا كـ <code>&lt;br&gt;&lt;/br&gt;</code> لأنها لا تحتوي على أي محتوى. في JSX ، تختلف القواعد قليلاً. يمكن كتابة أي عنصر JSX بعلامة إغلاق ذاتي ، ويجب إغلاق كل عنصر. على سبيل المثال ، يجب كتابة علامة فاصل الأسطر ، على سبيل المثال ، <code>&lt;br /&gt;</code> لكي تكون JSX سارية ويمكن تحريكها. يمكن كتابة <code>&lt;div&gt;</code> ، على الجانب الآخر ، كـ <code>&lt;div /&gt;</code> أو <code>&lt;div&gt;&lt;/div&gt;</code> . والفرق هو أنه في طريقة تركيب الجملة الأولى لا توجد طريقة لتضمين أي شيء في <code>&lt;div /&gt;</code> . سترى في تحديات لاحقة أن بناء الجملة هذا مفيد عند تقديم مكونات React. </section>

## Instructions
<section id="instructions"> أصلح الأخطاء في محرر الشفرة بحيث تكون JSX صالحة وتنتهي بنجاح. تأكد من عدم تغيير أي محتوى - فأنت تحتاج فقط إلى إغلاق العلامات عند الحاجة إليها. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب على <code>JSX</code> المستمر إرجاع عنصر <code>div</code> .
    testString: 'assert.strictEqual(JSX.type, "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: يجب أن يحتوي <code>div</code> على علامة <code>br</code> .
    testString: 'assert(Enzyme.shallow(JSX).find("br").length === 1, "The <code>div</code> should contain a <code>br</code> tag.");'
  - text: يجب أن يحتوي <code>div</code> على علامة <code>hr</code> .
    testString: 'assert(Enzyme.shallow(JSX).find("hr").length === 1, "The <code>div</code> should contain an <code>hr</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    {/* remove comment and change code below this line
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
    remove comment and change code above this line */}
  </div>
);

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
