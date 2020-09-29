---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
videoUrl: ''
localeTitle: إنشاء مكون React
---

## Description
<section id="description"> والطريقة الأخرى لتعريف مكون React تكون مع بنية <code>class</code> ES6. في المثال التالي ، يقوم <code>Kitten</code> بتوسيع <code>React.Component</code> : <blockquote style=";text-align:right;direction:rtl"> class Kitten يمد React.Component { <br> منشئ (الدعائم) { <br> السوبر (الدعائم)؛ <br> } <br><br> يجعل() { <br> إرجاع ( <br> &lt;h1&gt; تحليل مرحبا &lt;/ H1&gt; <br> )؛ <br> } <br> } </blockquote> هذا ينشئ فئة ES6 <code>Kitten</code> الذي يمتد فئة <code>React.Component</code> . لذا ، أصبح بإمكان فئة <code>Kitten</code> الآن الوصول إلى العديد من ميزات React المفيدة ، مثل الخطافات المحلية ودورة الحياة. لا تقلق إذا لم تكن على دراية بهذه الشروط حتى الآن ، سيتم تغطيتها بمزيد من التفصيل في تحديات لاحقة. لاحظ أيضًا أن فئة <code>Kitten</code> بها <code>constructor</code> مُعرَّف داخلها يستدعي <code>super()</code> . ويستخدم <code>super()</code> لاستدعاء منشئ الفئة الأصل ، في هذه الحالة <code>React.Component</code> . المنشئ هو طريقة خاصة تستخدم أثناء تهيئة الكائنات التي يتم إنشاؤها باستخدام الكلمة الأساسية <code>class</code> . ومن أفضل الممارسات لاستدعاء المكون <code>constructor</code> مع <code>super</code> ، وتمرير <code>props</code> على حد سواء. هذا يجعل من تهيئة المكون بشكل صحيح. في الوقت الحالي ، اعلم أنه من المعتاد تضمين هذا الرمز. قريبا سترى استخدامات أخرى للمنشئ وكذلك <code>props</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يعيد مكون React عنصر <code>div</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).type() === "div", "The React component should return a <code>div</code> element.");'
  - text: يجب على <code>div</code> إرجاعه عرض رأس <code>h1</code> بداخله.
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.shallow(React.createElement(MyComponent)).html()), "The returned <code>div</code> should render an <code>h1</code> header within it.");'
  - text: يجب أن يحتوي رأس <code>h1</code> على السلسلة <code>Hello React!</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).html() === "<div><h1>Hello React!</h1></div>", "The <code>h1</code> header should contain the string <code>Hello React!</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line



    // change code above this line
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
