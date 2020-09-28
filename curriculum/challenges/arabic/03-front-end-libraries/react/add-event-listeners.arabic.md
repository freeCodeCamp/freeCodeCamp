---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
videoUrl: ''
localeTitle: اضافة المستمعين الحدث
---

## Description
<section id="description"> تعد طريقة <code>componentDidMount()</code> هي أيضًا أفضل مكان لإرفاق أي مستمعين للحدث تحتاج إلى إضافته للحصول على وظائف محددة. يوفر React نظام أحداث تركيبية يلتف حول نظام الأحداث الأصلي في المتصفحات. هذا يعني أن نظام الأحداث الاصطناعية يتصرف بالضبط نفس الشيء بغض النظر عن متصفح المستخدم - حتى لو كانت الأحداث الأصلية قد تتصرف بشكل مختلف بين المتصفحات المختلفة. لقد سبق لك استخدام بعض معالجات الأحداث الاصطناعية هذه ، مثل <code>onClick()</code> . يعد نظام الحدث الصناعي React رائعًا لاستخدامه لمعظم التفاعلات التي ستديرها على عناصر DOM. ومع ذلك ، إذا كنت تريد إرفاق معالج أحداث إلى كائنات المستند أو النافذة ، يجب عليك القيام بذلك مباشرة. </section>

## Instructions
<section id="instructions"> إرفاق مستمع حدث في أسلوب <code>componentDidMount()</code> لأحداث <code>keydown</code> وقم بتشغيل هذه الأحداث <code>handleKeyPress()</code> callback. يمكنك استخدام <code>document.addEventListener()</code> الذي يأخذ الحدث (بين علامتي الاقتباس) كوسيطة أولى والاستدعاء كالوسيطة الثانية. ثم ، في <code>componentWillUnmount()</code> ، إزالة هذا الإصغاء الحدث نفسه. يمكنك تمرير الوسيطات نفسها إلى <code>document.removeEventListener()</code> . من الممارسات الجيدة استخدام طريقة دورة الحياة هذه للقيام بأي تنظيف على مكونات React قبل أن يتم إزالتها وتدميرها. تعد إزالة مستمعي الحدث مثالاً على أحد إجراءات التنظيف. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم <code>MyComponent</code> بعرض عنصر <code>div</code> يلف علامة <code>h1</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").children().find("h1").length === 1; })(), "<code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.");'
  - text: يجب إرفاق مستمع في keydown للمستند في <code>componentDidMount</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const didMountString = mockedComponent.instance().componentDidMount.toString(); return new RegExp("document\.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress").test(didMountString); })(), "A keydown listener should be attached to the document in <code>componentDidMount</code>.");'
  - text: يجب إزالة مستمع الملف الشخصي من الوثيقة في <code>componentWillUnmount</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const willUnmountString = mockedComponent.instance().componentWillUnmount.toString(); return new RegExp("document\.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress").test(willUnmountString); })(), "The keydown listener should be removed from the document in <code>componentWillUnmount</code>.");'
  - text: بمجرد تركيب المكون ، يجب أن يؤدي الضغط على <code>enter</code> تحديث حالته وعلامة <code>h1</code> المقدمة.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const beforeState = mockedComponent.state("message"); const beforeText = mockedComponent.find("h1").text(); const pressEnterKey = () => { mockedComponent.instance().handleKeyPress({ keyCode: 13 }); return waitForIt(() => { mockedComponent.update(); return { state: mockedComponent.state("message"), text: mockedComponent.find("h1").text()}; });}; const afterKeyPress = await pressEnterKey(); assert(beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text, "Once the component has mounted, pressing <code>enter</code> should update its state and the rendered <code>h1</code> tag."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
