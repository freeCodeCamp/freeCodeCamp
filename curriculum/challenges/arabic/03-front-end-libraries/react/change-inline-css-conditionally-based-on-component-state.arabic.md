---
id: 5a24c314108439a4d4036189
title: Change Inline CSS Conditionally Based on Component State
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: تغيير CSS المضمنة بناء على حالة المكون
---

## Description
<section id="description"> في هذه المرحلة ، كنت قد رأيت عدة تطبيقات من تقديم الشرطي واستخدام أنماط مضمنة. إليك مثال آخر يجمع بين هذين الموضوعين. يمكنك أيضًا عرض CSS استنادًا إلى حالة مكون React. للقيام بذلك ، تحقق من شرط ، وإذا تم استيفاء هذا الشرط ، يمكنك تعديل كائن الأنماط الذي تم تعيينه لعناصر JSX في طريقة العرض. هذا النموذج مهم لفهمه لأنه تحول مثير عن النهج التقليدي لتطبيق الأنماط عن طريق تعديل عناصر DOM مباشرة (وهو أمر شائع جدًا مع jQuery ، على سبيل المثال). في هذا النهج ، يجب عليك تتبع متى تتغير العناصر وكذلك التعامل مع التلاعب الفعلي مباشرة. قد يصعب عليك تتبع التغييرات ، مما قد يجعل واجهة المستخدم الخاصة بك غير قابلة للتنبؤ. عندما تقوم بتعيين كائن نمط يستند إلى شرط ، فإنك تصف كيف يجب أن تبدو واجهة المستخدم كدالة لحالة التطبيق. هناك تدفق واضح للمعلومات يتحرك فقط في اتجاه واحد. هذه هي الطريقة المفضلة عند كتابة التطبيقات باستخدام React. </section>

## Instructions
<section id="instructions"> يحتوي محرر التعليمة البرمجية على مكون إدخال بسيط يتحكم فيه مع حدود منسقة. تريد نمط أحمر الحدود هذا إذا كان المستخدم يكتب أكثر من 15 حرفًا من النص في مربع الإدخال. أضف شرطًا للتحقق من ذلك ، وإذا كان الشرط صالحًا ، <code>3px solid red</code> نمط حدود الإدخال إلى <code>3px solid red</code> . يمكنك تجربتها عن طريق إدخال النص في الإدخال. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم مكون <code>GateKeeper</code> بعرض عنصر <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("div").length === 1; })(), "The <code>GateKeeper</code> component should render a <code>div</code> element.");'
  - text: يجب أن يتم تهيئة المكون <code>GateKeeper</code> مع مفتاح <code>input</code> الرئيسي الذي تم تعيينه إلى سلسلة فارغة.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.state().input === ""; })(), "The <code>GateKeeper</code> component should be initialized with a state key <code>input</code> set to an empty string.");'
  - text: يجب أن يقوم مكون <code>GateKeeper</code> بعرض علامة <code>h3</code> وعلامة <code>input</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("h3").length === 1 && mockedComponent.find("input").length === 1; })(), "The <code>GateKeeper</code> component should render an <code>h3</code> tag and an <code>input</code> tag.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("input").props().style.border === "1px solid black"; })(), "The <code>input</code> tag should initially have a style of <code>1px solid black</code> for the <code>border</code> property.");'
  - text: يجب أن تكون علامة <code>input</code> على شكل حد <code>3px solid red</code> إذا كانت قيمة الإدخال في الحالة أطول من 15 حرفًا.
    testString: 'async () => {  const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); const simulateChange = (el, value) => el.simulate("change", {target: {value}}); let initialStyle = mockedComponent.find("input").props().style.border; const state_1 = () => { mockedComponent.setState({input: "this is 15 char" }); return waitForIt(() => mockedComponent.find("input").props().style.border )}; const state_2 = () => { mockedComponent.setState({input: "A very long string longer than 15 characters." }); return waitForIt(() => mockedComponent.find("input").props().style.border )}; const style_1 = await state_1(); const style_2 = await state_2(); assert(initialStyle === "1px solid black" && style_1 === "1px solid black" && style_2 === "3px solid red", "The <code>input</code> tag should be styled with a border of <code>3px solid red</code> if the input value in state is longer than 15 characters."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line

    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
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
