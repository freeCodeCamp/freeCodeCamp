---
id: 5a24c314108439a4d4036188
title: أنتاج مشروطاً (Conditionally) من مِيزات Props
challengeType: 6
forumTopicId: 301405
dashedName: render-conditionally-from-props
---

# --description--

حتى الآن، لقد رأيت كيفية استخدام `if/else`، و `&&`، وternary operator مثل (`condition ? expressionIfTrue : expressionIfFalse`) لاتخاذ قرارات مشروطة حول ما يجب القيام به ومتى. ومع ذلك، هناك موضوع مهم متبقي للمناقشة يسمح لك بالجمع بين أي أو كل هذه المفاهيم مع خاصية أخرى قوية React: مِيزات (props). استخدام مِيزات (props) لجعل التعليمات البرمجية مشروطة أمر شائع جدا مع مطوري الذي يستخدموا React، فهم يستخدمون قيمة مِيزة (prop) معين لاتخاذ القرارات تلقائياً حول ما يجب القيام به.

في هذا التحدي، ستضع مكوناً فرعياً لاتخاذ القرارات بناءً على مِيزات. ستستخدم أيضًا ternary operator، ولكن يمكنكم أن ترى كيف أن العديد من المفاهيم الأخرى التي تمت تغطيتها في التحديات القليلة السابقة قد تكون مفيدة بنفس القدر في هذا السياق.

# --instructions--

يحتوي محرر التعليمات البرمجية على مكونين محددين بشكل جزئي لك: أحد الأساسين يسمى `GameOfChance`، والفرعي يسمى `Results`. تستخدم لإنشاء لُعْبَة بسيطة حيث يقوم المستخدم بالضغط على زر لمعرفة ما إذا كان يفوز أو يخسر.

أولا، ستحتاج إلى تعبير بسيط ينتج قيمة عشوائيا مختلفة في كل مرة يتم تشغيلها. يمكنك استخدام `Math.random()`. هذه الطريقة تنتج قيمة بين `0` (شامل) و `1` (حصري) في كل مرة يتم تسميتها. إذاً الإمكانات تكون 50/50،أستخدم `Math.random() >= .5` في التعبير الخاص بك. من الناحية الإحصائية، سيعود هذا التعبير `true` بنسبة 50% من الوقت، و `false` بنسبة 50%. في طريقة الإنتاج، استبدل `null` بالتعبير الوارد أعلاه لإكمال إعلان المتغير.

الآن لديك تعبير يمكنك استخدامه لاتخاذ قرار عشوائي في التعليمات البرمجية. بعد ذلك تحتاج إلى تنفيذ هذا. تقديم `Results` كعنصر فرعي من `GameOfChance`، وتمرير في `expression` كمِيزة يسمى `fiftyFifty`. في مكون `Results`، كتابة ternary expression لإنتاج عنصر `h1` بالنص `You Win!` أو `You Lose!` بناء على مِيزة `fiftyFifty` التي يتم تمريره من `GameOfChance`. وأخيرا، تحقق أن طريقة `handleClick()` تحسب كل دورة، بحيث يعرف المستخدم عدد المرات التي تلعبها. وهذا يساعد أيضا على إبلاغ المستخدم بأن المكون قد تم تحديثه فعلًا في حالة فوزه أو فقدانه مرتين على التوالي.

# --hints--

يجب أن يكون مكون `GameOfChance` موجوداً وأن يُنتج في الصفحة.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance` يجب أن يعيد عنصر `button` واحد.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance` يجب أن بنتج مكون `Results` مرة واحد، الذي يحتوي على مِيزة تسمى `fiftyFifty`.

```js
assert(
  Enzyme.mount(React.createElement(GameOfChance)).find('Results').length ===
    1 &&
    Enzyme.mount(React.createElement(GameOfChance))
      .find('Results')
      .props()
      .hasOwnProperty('fiftyFifty') === true
);
```

`GameOfChance` يجب تبدئ حالة (state) تحتوي على خاصية `counter` بقيمة `1`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

عندما يتم تسليم المكون `GameOfChance` أول مرة إلى DOM، يجب إرجاع عنصر `p` مع النص الداخلي من `Turn: 1`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

في كل مرة يتم النقر على الزر، يجب زيادة حالة (state) برنامَج counter بقيمة 1، وينبغي تقديم عنصر واحد `p` إلى DOM الذي يحتوي على نص `Turn: N`، حيث `N` هي قيمة حالة (state) برنامَج counter.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    count: comp.state('counter'),
    text: comp.find('p').text()
  });
  const _1 = () => {
    simulate();
    return result();
  };
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  assert(
    _1_val.count === 2 &&
      _1_val.text === 'Turn: 2' &&
      _2_val.count === 3 &&
      _2_val.text === 'Turn: 3' &&
      _3_val.count === 4 &&
      _3_val.text === 'Turn: 4' &&
      _4_val.count === 5 &&
      _4_val.text === 'Turn: 5' &&
      _5_val.count === 6 &&
      _5_val.text === 'Turn: 6'
  );
})();
```

عندما يتم تحميل عنصر `GameOfChance` أول مرة إلى DOM وفي كل مرة يتم النقر على الزر بعد ذلك، يتم إنتاج عنصر `h1` واحد الذي يمنحك عشوائياً `You Win!` أو `You Lose!`. ملاحظة: هذا قد يفشل عشوائيا. إذا حدث ذلك، يرجى المحاولة مرة أخرى.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    h1: comp.find('h1').length,
    text: comp.find('h1').text()
  });
  const _1 = result();
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _6 = () => {
    simulate();
    return result();
  };
  const _7 = () => {
    simulate();
    return result();
  };
  const _8 = () => {
    simulate();
    return result();
  };
  const _9 = () => {
    simulate();
    return result();
  };
  const _10 = () => {
    simulate();
    return result();
  };
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const __text = new Set([
    _1.text,
    _2_val.text,
    _3_val.text,
    _4_val.text,
    _5_val.text,
    _6_val.text,
    _7_val.text,
    _8_val.text,
    _9_val.text,
    _10_val.text
  ]);
  const __h1 = new Set([
    _1.h1,
    _2_val.h1,
    _3_val.h1,
    _4_val.h1,
    _5_val.h1,
    _6_val.h1,
    _7_val.h1,
    _8_val.h1,
    _9_val.h1,
    _10_val.h1
  ]);
  assert(__text.size === 2 && __h1.size === 1);
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GameOfChance />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1></h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState
      }
    });
  }
  render() {
    const expression = null; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}

        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```

# --solutions--

```jsx
// We want this to be deterministic for testing purposes.
const randomSequence = [true, false, false, true, true, false, false, true, true, false];
let index = 0;
const fiftyFifty = () => randomSequence[index++ % randomSequence.length];

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={fiftyFifty()} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```
