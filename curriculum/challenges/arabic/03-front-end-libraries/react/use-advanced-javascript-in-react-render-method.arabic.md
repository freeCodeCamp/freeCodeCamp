---
id: 5a24c314108439a4d4036183
title: Use Advanced JavaScript in React Render Method
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> في التحديات السابقة ، تعلمت كيفية إدخال شفرة جافا سكريبت في شفرة JSX باستخدام أقواس معقوفة ، <code>{ }</code> ، لمهام مثل الوصول إلى الدعائم ، تمرير الدعائم ، الوصول إلى الحالة ، إدراج التعليقات في شفرتك ، ومؤخرًا ، تصميم المكونات الخاصة بك. هذه كلها حالات استخدام شائعة لوضع JavaScript في JSX ، ولكنها ليست الطريقة الوحيدة التي يمكنك من خلالها استخدام شفرة JavaScript في مكونات React الخاصة بك. يمكنك أيضًا كتابة JavaScript مباشرة في طرق <code>render</code> ، قبل العبارة <code>return</code> ، <strong><em>دون</em></strong> إدخالها داخل الأقواس المتعرجة. هذا لأنه ليس بعد داخل كود JSX. عندما تريد استخدام متغير لاحقًا في شفرة JSX <em>داخل</em> بيان <code>return</code> ، فإنك تضع اسم المتغير داخل الأقواس المتعرجة. </section>

## Instructions
<section id="instructions"> في رمز المقدمة، و <code>render</code> طريقة لديه مجموعة يحتوي على 20 عبارات لتمثيل الإجابات وجدت في كلاسيك 1980 ماجيك ثمانية لعبة الكرة. يرتبط حدث النقر بالزر بطريقة <code>ask</code> ، لذلك في كل مرة يتم النقر فوق الزر سيتم إنشاء رقم عشوائي وتخزينه كـ <code>randomIndex</code> في الحالة. في السطر 52 ، احذف السلسلة <code>&quot;change me!&quot;</code> وإعادة تعيين <code>answer</code> CONST ذلك التعليمات البرمجية يصل عشوائيا مؤشر مختلفة من <code>possibleAnswers</code> مجموعة في كل مرة التحديثات المكون. وأخيرا، أدخل <code>answer</code> CONST داخل <code>p</code> العلامات. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون مكون <code>MagicEightBall</code> موجودًا ويجب أن يتم <code>MagicEightBall</code> على الصفحة.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).find("MagicEightBall").length, 1, "The <code>MagicEightBall</code> component should exist and should render to the page.");'
  - text: يجب أن يكون الطفل الأول لـ <code>MagicEightBall</code> عنصر <code>input</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(0).name(), "input", "<code>MagicEightBall</code>&apos;s first child should be an <code>input</code> element.");'
  - text: الطفل الثالث <code>MagicEightBall</code> يجب أن يكون عنصر <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(2).name(), "button", "<code>MagicEightBall</code>&apos;s third child should be a <code>button</code> element.");'
  - text: <code>MagicEightBall</code> يجب تهيئة حالة الصورة مع خاصية <code>userInput</code> وخاصية <code>randomIndex</code> على حد سواء لتعيين قيمة سلسلة فارغة.
    testString: 'assert(Enzyme.mount(React.createElement(MagicEightBall)).state("randomIndex") === "" && Enzyme.mount(React.createElement(MagicEightBall)).state("userInput") === "", "<code>MagicEightBall</code>&apos;s state should be initialized with a property of <code>userInput</code> and a property of <code>randomIndex</code> both set to a value of an empty string.");'
  - text: عندما يتم تحميل <code>MagicEightBall</code> أولاً إلى DOM ، يجب أن يعرض عنصر <code>p</code> فارغًا.
    testString: 'assert(Enzyme.mount(React.createElement(MagicEightBall)).find("p").length === 1 && Enzyme.mount(React.createElement(MagicEightBall)).find("p").text() === "", "When <code>MagicEightBall</code> is first mounted to the DOM, it should return an empty <code>p</code> element.");'
  - text: عندما يتم إدخال النص في عنصر <code>input</code> ويتم النقر فوق الزر ، يجب أن يقوم مكون <code>MagicEightBall</code> بإرجاع عنصر <code>p</code> يحتوي على عنصر عشوائي من الصفيف <code>possibleAnswers</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MagicEightBall)); const simulate = () => { comp.find("input").simulate("change", { target: { value: "test?" }}); comp.find("button").simulate("click"); }; const result = () => comp.find("p").text(); const _1 = () => { simulate(); return waitForIt(() => result()) }; const _2 = () => { simulate(); return waitForIt(() => result()) }; const _3 = () => { simulate(); return waitForIt(() => result()) }; const _4 = () => { simulate(); return waitForIt(() => result()) }; const _5 = () => { simulate(); return waitForIt(() => result()) }; const _6 = () => { simulate(); return waitForIt(() => result()) }; const _7 = () => { simulate(); return waitForIt(() => result()) }; const _8 = () => { simulate(); return waitForIt(() => result()) }; const _9 = () => { simulate(); return waitForIt(() => result()) }; const _10 = () => { simulate(); return waitForIt(() => result()) }; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); const _6_val = await _6(); const _7_val = await _7(); const _8_val = await _8(); const _9_val = await _9(); const _10_val = await _10(); const actualAnswers = [_1_val, _2_val, _3_val, _4_val, _5_val, _6_val, _7_val, _8_val, _9_val, _10_val]; const hasIndex = actualAnswers.filter((answer, i) => possibleAnswers.indexOf(answer) !== -1); const notAllEqual = new Set(actualAnswers); assert(notAllEqual.size > 1 && hasIndex.length === 10, "When text is entered into the <code>input</code> element and the button is clicked, the <code>MagicEightBall</code> component should return a <code>p</code> element that contains a random element from the <code>possibleAnswers</code> array.");}'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ",
      randomIndex: "
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: "
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = 'change me!' // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }

          { /* change code above this line */ }
        </p>
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
