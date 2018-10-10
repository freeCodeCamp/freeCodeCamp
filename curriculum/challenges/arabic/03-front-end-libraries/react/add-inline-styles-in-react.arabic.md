---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: إضافة أنماط مضمنة في React
---

## Description
<section id="description"> ربما لاحظت في التحدي الأخير أن هناك العديد من الاختلافات في بناء الجملة من أنماط HTML المضمنة بالإضافة إلى تعيين سمة <code>style</code> إلى كائن جافا سكريبت. أولاً ، تستخدم أسماء بعض خصائص أنماط CSS حالة الجمل. على سبيل المثال ، تعيين التحدي الأخير حجم الخط مع <code>fontSize</code> بدلاً من <code>font-size</code> . الكلمات الواصلة مثل <code>font-size</code> هي بنية غير صالحة لخصائص كائن جافا سكريبت ، لذا يستخدم React حالة الجمل. وكقاعدة عامة ، تتم كتابة أي خصائص نمط متصل باستخدام حالة الجمل في JSX. من المفترض أن تكون جميع وحدات قيمة قيمة الخاصية (مثل <code>height</code> <code>width</code> <code>fontSize</code> ) في <code>px</code> ما لم يتم تحديد خلاف ذلك. إذا كنت تريد استخدام <code>em</code> ، على سبيل المثال ، يمكنك التفاف القيمة والوحدات بين علامات اقتباس ، مثل <code>{fontSize: &quot;4em&quot;}</code> . بخلاف قيم الطول الافتراضية إلى <code>px</code> ، يجب أن يتم التفاف جميع قيم الخصائص الأخرى بين علامتي اقتباس. </section>

## Instructions
<section id="instructions"> إذا كان لديك مجموعة كبيرة من الأنماط ، فيمكنك تعيين <code>object</code> نمط على ثابت للحفاظ على تنظيم التعليمات البرمجية الخاصة بك. uncomment في <code>styles</code> الثابتة وتعلن عن <code>object</code> له ثلاث خصائص النمط والقيم الخاصة بهم. إعطاء <code>div</code> لون <code>&quot;purple&quot;</code> ، حجم خط من <code>40</code> ، وحدود من <code>&quot;2px solid purple&quot;</code> . ثم قم بتعيين سمة <code>style</code> تساوي ثابت <code>styles</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون متغير <code>styles</code> <code>object</code> له ثلاث خصائص.
    testString: 'assert(Object.keys(styles).length === 3, "The <code>styles</code> variable should be an <code>object</code> with three properties.");'
  - text: يجب أن يكون لمتغير <code>styles</code> خاصية <code>color</code> معين بقيمة <code>purple</code> .
    testString: 'assert(styles.color === "purple", "The <code>styles</code> variable should have a <code>color</code> property set to a value of <code>purple</code>.");'
  - text: ''
    testString: 'assert(styles.fontSize === 40, "The <code>styles</code> variable should have a <code>fontSize</code> property set to a value of <code>40</code>.");'
  - text: ''
    testString: 'assert(styles.border === "2px solid purple", "The <code>styles</code> variable should have a <code>border</code> property set to a value of <code>2px solid purple</code>.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return mockedComponent.type() === "div"; })(), "The component should render a <code>div</code> element.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return (mockedComponent.props().style.color === "purple" && mockedComponent.props().style.fontSize === 40 && mockedComponent.props().style.border === "2px solid purple"); })(), "The <code>div</code> element should have its styles defined by the <code>styles</code> object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// const styles =
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
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
