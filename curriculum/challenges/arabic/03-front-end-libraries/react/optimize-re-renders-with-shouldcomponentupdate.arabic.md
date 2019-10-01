---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: تحسين Re-Renders مع shouldComponentUpdate
---

## Description
<section id="description"> حتى الآن ، إذا تلقى أي مكون <code>state</code> جديدة أو <code>props</code> جديدة ، فإنه يعيد نفسه وجميع أبنائه. هذا عادة ما يرام. لكن React يوفر طريقة دورة حياة يمكنك الاتصال بها عندما تتلقى مكونات <code>state</code> الطفل أو <code>props</code> الجديدة ، وتعلن تحديدًا إذا كان يجب تحديث المكونات أم لا. هذه الطريقة هي <code>shouldComponentUpdate()</code> ، وتستغرق <code>nextProps</code> و <code>nextState</code> كمعلمات. هذه الطريقة هي طريقة مفيدة لتحسين الأداء. على سبيل المثال ، السلوك الافتراضي هو أن المكون الخاص بك re-renders عندما يتلقى <code>props</code> الجديدة ، حتى إذا لم يتم تغيير <code>props</code> . يمكنك استخدام <code>shouldComponentUpdate()</code> لمنع هذا عن طريق مقارنة <code>props</code> . يجب أن تقوم الطريقة بإرجاع قيمة <code>boolean</code> تخبر رد ما إذا كان سيتم تحديث المكون أم لا. يمكنك مقارنة الدعائم الحالية ( <code>this.props</code> ) <code>this.props</code> التالية ( <code>nextProps</code> ) لتحديد ما إذا كنت بحاجة إلى التحديث أم لا ، وإرجاع <code>true</code> أو <code>false</code> وفقًا لذلك. </section>

## Instructions
<section id="instructions"> يتم إضافة أسلوب <code>shouldComponentUpdate()</code> في مكون يسمى <code>OnlyEvens</code> . حاليًا ، يعود هذا الأسلوب إلى <code>true</code> لذا تعيد <code>OnlyEvens</code> الظهور في كل مرة تتلقى فيها <code>props</code> الجديدة. قم بتعديل الطريقة بحيث لا يتم تحديث <code>OnlyEvens</code> إلا إذا كانت <code>value</code> الدعائم الجديدة حتى. انقر فوق الزر <code>Add</code> وشاهد ترتيب الأحداث في وحدة تحكم المستعرض الخاص بك أثناء تشغيل hooks دورة الحياة الأخرى. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم مكون <code>Controller</code> <code>OnlyEvens</code> مكون <code>OnlyEvens</code> كطفل.
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("OnlyEvens").length === 1; })(), "The <code>Controller</code> component should render the <code>OnlyEvens</code> component as a child.");'
  - text: ''
    testString: 'assert((() => { const child = React.createElement(OnlyEvens).type.prototype.shouldComponentUpdate.toString().replace(/s/g,""); return child !== "undefined"; })(), "The <code>shouldComponentUpdate</code> method should be defined on the <code>OnlyEvens</code> component.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 1000 }); return waitForIt(() => mockedComponent.find("h1").html()); }; const second = () => { mockedComponent.setState({ value: 10 }); return waitForIt(() => mockedComponent.find("h1").html()); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === "<h1>1000</h1>" && secondValue === "<h1>10</h1>", "The <code>OnlyEvens</code> component should return an <code>h1</code> tag which renders the value of <code>this.props.value</code>."); }; '
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 8 }); return waitForIt(() => mockedComponent.find("h1").text()); }; const second = () => { mockedComponent.setState({ value: 7 }); return waitForIt(() => mockedComponent.find("h1").text()); }; const third = () => { mockedComponent.setState({ value: 42 }); return waitForIt(() => mockedComponent.find("h1").text()); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(firstValue === "8" && secondValue === "8" && thirdValue === "42", "<code>OnlyEvens</code> should re-render only when <code>nextProps.value</code> is even."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
    return true;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
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
