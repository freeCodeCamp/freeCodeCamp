---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: استخدم Array.map () Dynamically Render Elements
---

## Description
<section id="description"> العرض الشرطي مفيد ، ولكن قد تحتاج إلى المكونات الخاصة بك لعرض عدد غير معروف من العناصر. في كثير من الأحيان في البرمجة التفاعلية ، لا يملك المبرمج أي طريقة لمعرفة حالة التطبيق حتى وقت التشغيل ، وذلك لأن الكثير يعتمد على تفاعل المستخدم مع هذا البرنامج. يحتاج المبرمجون إلى كتابة التعليمات البرمجية الخاصة بهم لمعالجة هذه الحالة غير المعروفة بشكل صحيح في وقت مبكر. استخدام <code>Array.map()</code> في <code>Array.map()</code> يوضح هذا المفهوم. على سبيل المثال ، يمكنك إنشاء تطبيق &quot;قائمة المهام&quot; البسيط. كمبرمج ، ليس لديك طريقة لمعرفة عدد العناصر التي قد يكون لدى المستخدم في قائمته. تحتاج إلى إعداد المكون الخاص بك <em><strong>لعرض</strong></em> العدد الصحيح لعناصر القوائم <em><strong>بشكل ديناميكي</strong></em> قبل أن يقرر شخص ما يستخدم البرنامج اليوم أن يكون يوم الغسيل. </section>

## Instructions
<section id="instructions"> يحتوي محرر التعليمة البرمجية على معظم مكون <code>MyToDoList</code> تم إعداده. يجب أن يبدو بعض هذا الرمز مألوفًا إذا أكملت تحديًا للنموذج المتحكم فيه. ستلاحظ <code>textarea</code> و <code>button</code> ، جنبا إلى جنب مع اثنين من الأساليب التي تتبع ولاياتهم، ولكن يتم تقديم أي شيء للالصفحة إلى الآن. داخل <code>constructor</code> ، إنشاء <code>this.state</code> الكائن وتحديد دولتين: <code>userInput</code> يجب تهيئة باعتبارها سلسلة فارغة، و <code>toDoList</code> يجب تهيئة كصفيف فارغة. بعد ذلك ، قم بحذف التعليق في طريقة العرض <code>render()</code> بجوار متغير <code>items</code> . في مكانها، خريطة على <code>toDoList</code> مجموعة المخزنة في الحالة الداخلية للمكون حيوي وتجعل من <code>li</code> لكل عنصر. حاول إدخال سلسلة <code>eat, code, sleep, repeat</code> في <code>textarea</code> ، ثم انقر فوق الزر وشاهد ما يحدث. <strong>ملاحظة:</strong> قد تعرف أن جميع العناصر الفرعية التابعة التي تم إنشاؤها بواسطة عملية تعيين مثل هذه تحتاج إلى أن يتم توفيرها بسمة <code>key</code> فريدة. لا تقلق ، هذا هو موضوع التحدي التالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يوجد مكون MyToDoList ثم تقديم إلى الصفحة.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").length === 1; })(), "The MyToDoList component should exist and render to the page.");'
  - text: يجب أن يكون الطفل الأول من <code>MyToDoList</code> عنصر <code>textarea</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").children().childAt(0).type() === "textarea"; })(), "The first child of <code>MyToDoList</code> should be a <code>textarea</code> element.");'
  - text: يجب أن يكون الطفل الثالث من <code>MyToDoList</code> عنصر <code>button</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").children().childAt(2).type() === "button"; })(), "The third child of <code>MyToDoList</code> should be a <code>button</code> element.");'
  - text: حالة <code>MyToDoList</code> يجب تهيئة مع <code>toDoList</code> كصفيف فارغة.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return Array.isArray(initialState.toDoList) === true && initialState.toDoList.length === 0; })(), "The state of <code>MyToDoList</code> should be initialized with <code>toDoList</code> as an empty array.");'
  - text: حالة <code>MyToDoList</code> يجب تهيئة مع <code>userInput</code> باعتبارها سلسلة فارغة.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return typeof initialState.userInput === "string" && initialState.userInput.length === 0; })(), "The state of <code>MyToDoList</code> should be initialized with <code>userInput</code> as an empty string.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const simulateChange = (el, value) => el.simulate("change", {target: {value}}); const state_1 = () => { return waitForIt(() => mockedComponent.find("ul").find("li"))}; const setInput = () => { return waitForIt(() => simulateChange(mockedComponent.find("textarea"), "testA, testB, testC"))}; const click = () => { return waitForIt(() => mockedComponent.find("button").simulate("click"))}; const state_2 = () => { return waitForIt(() => { const nodes = mockedComponent.find("ul").find("li"); return { nodes, text: nodes.reduce((t, n) => t + n.text(), "") }; })}; const setInput_2 = () => { return waitForIt(() => simulateChange(mockedComponent.find("textarea"), "t1, t2, t3, t4, t5, t6"))}; const click_1 = () => { return waitForIt(() => mockedComponent.find("button").simulate("click"))}; const state_3 = () => { return waitForIt(() => { const nodes = mockedComponent.find("ul").find("li"); return { nodes, text: nodes.reduce((t, n) => t + n.text(), "") }; })}; const awaited_state_1 = await state_1(); const awaited_setInput = await setInput(); const awaited_click = await click(); const awaited_state_2 = await state_2(); const awaited_setInput_2 = await setInput_2(); const awaited_click_1 = await click_1(); const awaited_state_3 = await state_3(); assert(awaited_state_1.length === 0 && awaited_state_2.nodes.length === 3 && awaited_state_3.nodes.length === 6 && awaited_state_2.text === "testA testB testC" && awaited_state_3.text === "t1 t2 t3 t4 t5 t6", "When the <code>Create List</code> button is clicked, the <code>MyToDoList</code> component should dynamically return an unordered list that contains a list item element for every item of a comma-separated list entered into the <code>textarea</code> element."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
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
