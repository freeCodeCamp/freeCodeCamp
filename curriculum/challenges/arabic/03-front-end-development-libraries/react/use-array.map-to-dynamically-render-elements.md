---
id: 5a24c314108439a4d403618a
title: استخدام Array.map() لإنتاج عناصر ديناميكية
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

الإنتاج الشرطي (Conditional rendering) مفيد، لكنك قد تحتاج إلى مكوناتك لإنتاج عدد غير معروف من العناصر. في كثير من الأحيان في البرمجة التفاعلية، لا يملك المبرمج طريقة لمعرفة ما هي حالة التطبيق حتى وقت التشغيل، لأن الكثير يعتمد على تفاعل المستخدم مع ذلك البرنامَج. يحتاج المبرمجون إلى كتابة تعليماتهم البرمجية للتعامل بشكل صحيح مع تلك الحالة غير المعروفة مسبقاً. باستخدام `Array.map()` في React ستوضح هذا المفهوم.

على سبيل المثال، يمكنك إنشاء تطبيق بسيط "To Do List". كمبرمج، ليس لديك أي طريقة لمعرفة عدد العناصر التي قد يكون لدى المستخدم في قائمته. تحتاج إلى إعداد المكون الخاص بك لإنتاج العدد الصحيح من عناصر القائمة بشكل ديناميكي, قبل أن يقرر شخص ما يستخدم البرنامَج أن اليوم هو يوم للتنظيف.

# --instructions--

يحتوي محرر التعليمات البرمجية على معظم مكون `MyToDoList` الذي تم إنشائه. بعض هذه التعليمات البرمجية تبدو مألوفة إذا قمت بملء تحدي النموذج الخاضع للتحكم (controlled form). ستلاحظ `textarea` و `button`، بالإضافة إلى بعض الطرق الذي تتتبع حالتهم، ولكن لا يوجد شيء حتى الآن في الصفحة.

داخل `constructor`، أنشئ `this.state` الكائن وحدد حالتين: `userInput` يجب تهيئته مثل string فارغة، و `toDoList` يجب تهيئتها كقائمة فارغة. بعد ذلك، احذف قيمة `null` في طريقة `render()` بجانب متغير `items`. في مكانها، عين (map) القيم في القائمة `toDoList` المخزنة في الحالة الداخلية للمكون وتنتج `li` بشكل ديناميكي لكل عنصر. حاول إدخال string بقيمة `eat, code, sleep, repeat` في `textarea`, ثم انقر فوق الزر وشاهد ما يحدث.

**ملاحظة:** قد تعلم أن جميع العناصر الفرعية الإخوة التي تم إنشاؤها بواسطة عملية تعيين مثل هذه تحتاج إلى تزويدها بخاصية `key` فريد. لا تقلق، هذا هو موضوع التحدي التالي.

# --hints--

يجب أن يكون مكون MyToDoList موجوداً وأن يُنتج في الصفحة.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

أول عنصر فرعي لكل `MyToDoList` يجب أن يكون عنصر `textarea`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

ثاني عنصر فرعي لكل `MyToDoList` يجب أن يكون عنصر `br`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

ثالث عنصر فرعي لكل `MyToDoList` يجب أن يكون عنصر `button`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

يجب تهيئة حالة `MyToDoList` مع `toDoList` كقائمة فارغة.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

يجب تهيئة حالة `MyToDoList` مع `userInput` على شكل string فارغ.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

عند النقر على زر `Create List`، عنصر `MyToDoList` يجب أن يعيد ديناميكيا قائمة غير مرتبة تحتوي على عنصر قائمة لكل عنصر من قائمة مفصولة بفواصل (comma-separated list) تم إدخاله في عنصر `textarea`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return mockedComponent.find('ul').find('li');
  };
  const setInput = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      'testA, testB, testC'
    );
  };
  const click = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_2 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const setInput_2 = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      't1, t2, t3, t4, t5, t6'
    );
  };
  const click_1 = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_3 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const awaited_state_1 = state_1();
  const awaited_setInput = setInput();
  const awaited_click = click();
  const awaited_state_2 = state_2();
  const awaited_setInput_2 = setInput_2();
  const awaited_click_1 = click_1();
  const awaited_state_3 = state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testAtestBtestC' &&
      awaited_state_3.text === 't1t2t3t4t5t6'
  );
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
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
    const items = null; // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
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
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```
