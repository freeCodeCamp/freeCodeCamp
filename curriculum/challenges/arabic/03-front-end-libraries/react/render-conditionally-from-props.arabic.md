---
id: 5a24c314108439a4d4036188
title: Render Conditionally from Props
challengeType: 6
videoUrl: ''
localeTitle: تجعل مشروط من الدعائم
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتواجد مكون <code>GameOfChance</code> وأن يتم <code>GameOfChance</code> إلى الصفحة.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("GameOfChance").length, 1, "The <code>GameOfChance</code> component should exist and render to the page.");'
  - text: يجب أن تقوم <code>GameOfChance</code> بإرجاع عنصر <code>button</code> واحد.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("button").length, 1, "<code>GameOfChance</code> should return a single <code>button</code> element.");'
  - text: يجب أن تقوم <code>GameOfChance</code> بإرجاع نسخة واحدة من مكون <code>Results</code> ، الذي يحتوي على سند باسم <code>fiftyFifty</code> .
    testString: 'assert(Enzyme.mount(React.createElement(GameOfChance)).find("Results").length === 1 && Enzyme.mount(React.createElement(GameOfChance)).find("Results").props().hasOwnProperty("fiftyFifty") === true, "<code>GameOfChance</code> should return a single instance of the <code>Results</code> component, which has a prop called <code>fiftyFifty</code>.");'
  - text: يجب تهيئة حالة <code>GameOfChance</code> مع خاصية <code>counter</code> لتعيين قيمة <code>1</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).state().counter, 1, "<code>GameOfChance</code> state should be initialized with a property of <code>counter</code> set to a value of <code>1</code>.");'
  - text: 'عندما يتم تقديم مكون <code>GameOfChance</code> أولاً إلى DOM ، يجب إرجاع عنصر <code>p</code> مع النص الداخلي لـ <code>Turn: 1</code> .'
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("p").text(), "Turn: 1", "When the <code>GameOfChance</code> component is first rendered to the DOM, a <code>p</code> element should be returned with the inner text of <code>Turn: 1</code>.");'
  - text: 'في كل مرة يتم النقر فوق الزر ، يجب زيادة حالة العداد بقيمة 1 ، ويجب تقديم عنصر <code>p</code> واحد إلى DOM الذي يحتوي على النص &quot;Turn: N&quot; ، حيث N هي قيمة حالة العداد.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find("button").simulate("click"); };const result = () => ({ count: comp.state("counter"), text: comp.find("p").text() });const _1 = () => { simulate(); return waitForIt(() => result())}; const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); assert(_1_val.count === 2 && _1_val.text === "Turn: 2" && _2_val.count === 3 && _2_val.text === "Turn: 3" && _3_val.count === 4 && _3_val.text === "Turn: 4" && _4_val.count === 5 && _4_val.text === "Turn: 5" && _5_val.count === 6 && _5_val.text === "Turn: 6", "Each time the button is clicked, the counter state should be incremented by a value of 1, and a single <code>p</code> element should be rendered to the DOM that contains the text "Turn: N", where N is the value of the counter state."); }; '
  - text: عندما يتم أولاً تثبيت المكون <code>GameOfChance</code> إلى DOM و في كل مرة يتم النقر فوق الزر بعد ذلك ، يجب إرجاع عنصر <code>h1</code> مفرد يعرض عشوائياً إما <code>You Win!</code> أو <code>You Lose!</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find("button").simulate("click"); };const result = () => ({ h1: comp.find("h1").length, text: comp.find("h1").text() });const _1 = result(); const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _6 = () => { simulate(); return waitForIt(() => result())}; const _7 = () => { simulate(); return waitForIt(() => result())}; const _8 = () => { simulate(); return waitForIt(() => result())}; const _9 = () => { simulate(); return waitForIt(() => result())}; const _10 = () => { simulate(); return waitForIt(() => result())}; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); const _6_val = await _6(); const _7_val = await _7(); const _8_val = await _8(); const _9_val = await _9(); const _10_val = await _10(); const __text = new Set([_1.text, _2_val.text, _3_val.text, _4_val.text, _5_val.text, _6_val.text, _7_val.text, _8_val.text, _9_val.text, _10_val.text]); const __h1 = new Set([_1.h1, _2_val.h1, _3_val.h1, _4_val.h1, _5_val.h1, _6_val.h1, _7_val.h1, _8_val.h1, _9_val.h1, _10_val.h1]); assert(__text.size === 2 && __h1.size === 1, "When the <code>GameOfChance</code> component is first mounted to the DOM and each time the button is clicked thereafter, a single <code>h1</code> element should be returned that randomly renders either <code>You Win!</code> or <code>You Lose!</code>."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        /* change code here */
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: 0 // change code here
    });
  }
  render() {
    let expression = null; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
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
