---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> هناك مفاهيم معقدة أخرى تضيف إمكانات قوية لرمز React الخاص بك. ولكن قد تتساءل عن المشكلة الأكثر بساطة حول كيفية تصميم عناصر JSX التي تقوم بإنشائها في React. من المحتمل أنك تعلم أنه لن يكون بالضبط نفس العمل مع HTML بسبب <a target="_blank" href="/learn/front-end-libraries/react/define-an-html-class-in-jsx">طريقة تطبيق الطبقات على عناصر JSX</a> . إذا قمت باستيراد أنماط من ورقة أنماط ، فإنها لا تختلف كثيرًا على الإطلاق. يمكنك تطبيق فئة على عنصر JSX باستخدام السمة <code>className</code> ، وتطبيق الأنماط على الفصل الدراسي في ورقة الأنماط. خيار آخر هو تطبيق الأنماط <strong><em>المضمنة</em></strong> ، والتي تكون شائعة جدًا في تطوير ReactJS. يمكنك تطبيق أنماط مضمنة على عناصر JSX مشابهة لطريقة عمل ذلك في HTML ، ولكن مع بعض الاختلافات في JSX. في ما يلي مثال لنمط مضمَّن في HTML: <code>&lt;div style=&quot;color: yellow; font-size: 16px&quot;&gt;Mellow Yellow&lt;/div&gt;</code> تستخدم عناصر JSX سمة <code>style</code> ، ولكن نظرًا لطريقة تشفير JSX ، يمكنك قم بتعيين القيمة إلى <code>string</code> . بدلاً من ذلك ، يمكنك تعيينه يساوي <code>object</code> JavaScript. إليك مثال على ذلك: <code>&lt;div style={{color: &quot;yellow&quot;, fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;</code> لاحظ كيف نحصل على خاصية &quot;fontSize&quot;؟ وذلك لأن React لن يقبل مفاتيح حالة الكباب في كائن النمط. سيطبق React اسم الخاصية الصحيح لنا في HTML. </section>

## Instructions
<section id="instructions"> أضف سمة <code>style</code> إلى <code>div</code> في محرر الشفرة لإعطاء النص لونًا أحمر وحجم خط يبلغ 72 بكسل. لاحظ أنه يمكنك تعيين حجم الخط بشكل اختياري ليكون رقمًا ، أو حذف الوحدات &quot;px&quot; ، أو كتابتها كـ &quot;72px&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يعرض المكون عنصر <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().type() === "div"; })(), "The component should render a <code>div</code> element.");'
  - text: يجب أن يكون عنصر <code>div</code> بلون <code>red</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().props().style.color === "red"; })(), "The <code>div</code> element should have a color of <code>red</code>.");'
  - text: يجب أن يكون حجم عنصر <code>div</code> بحجم <code>72px</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return (mockedComponent.children().props().style.fontSize === 72 || mockedComponent.children().props().style.fontSize === "72" || mockedComponent.children().props().style.fontSize === "72px"); })(), "The <code>div</code> element should have a font size of <code>72px</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};

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
