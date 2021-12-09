---
id: 5a24c314108439a4d4036183
title: Використовуйте розширений JavaScript у методі React Render
challengeType: 6
forumTopicId: 301415
dashedName: use-advanced-javascript-in-react-render-method
---

# --description--

Під час попередніх занять, ви вивчили, як вводити код JavaScript у код JSX, за допомогою фігурних дужок, `{ }`, для таких завдань, як отримання доступу до ресурсів, передачі ресурсів, перегляду поточного стану, додавання коментарів до вашого коду, і зовсім нещодавно – для стилізації ваших компонентів. Усі вони є поширеними варіантами використання JavaScript у JSX, проте це не єдиний спосіб використання коду JavaScript у ваших компонентах React.

Ви також можете прямо вписати ваші методи JavaScript у `render`, перед командою `return`,, *** без ***, вставляючи їх у фігурні дужки. Це тому, що це ще не у межах коду JSX. Якщо ви захочете використати змінну пізніше у коді JSX * всередині команди * the `return`, потрібно помістити назву змінної у фігурні дужки.

# --instructions--

У даному коді, метод `render` складається з бази, що містить 20 аспектів, для представлення відповідей, знайдених у класичній іграшці 1980's Magic Eight Ball. Процес натискання кнопки пов'язаний з методом `ask`, тому при кожному натисканні на кнопку, відбудеться генерування випадкового номеру та його збереження у стані як `randomIndex`. На рядку 52, видаліть рядок `change me!` та перепризначте the `answer` const, аби ваш код випадковим чином організовував інший індекс з масиву `possibleAnswers` кожного разу, коли коли компонент оновлюється. Наостанок, вставте константу `answer` всередину `p` теґів.

# --hints--

Компонент `MagicEightBall` повинен існувати та відображатися на сторінці.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall)).find('MagicEightBall')
    .length,
  1
);
```

Перший дочірній елемент `MagicEightBall` повинен бути елементом `input`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(0)
    .name(),
  'input'
);
```

Третій дочірній елемент `MagicEightBall` повинен бути елементом `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(2)
    .name(),
  'button'
);
```

Стан `MagicEightBall` повинен починатися з властивостями `userInput` та `randomIndex`, які обидва відповідають значенню пустого рядка.

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).state('randomIndex') ===
    '' &&
    Enzyme.mount(React.createElement(MagicEightBall)).state('userInput') === ''
);
```

Коли `MagicEightBall` вперше піднімається до DOM, він повинен повернутися до пустого елементу `p`.

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).find('p').length === 1 &&
    Enzyme.mount(React.createElement(MagicEightBall)).find('p').text() === ''
);
```

Коли текст введено у елемент `input` та кнопку натиснуто, компонент `MagicEightBall` має повернутися до елементу a `p`, що містить випадковий елемент із масиву `possibleAnswers`.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MagicEightBall));
  const simulate = () => {
    comp.find('input').simulate('change', { target: { value: 'test?' } });
    comp.find('button').simulate('click');
  };
  const result = () => comp.find('p').text();
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
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const actualAnswers = [
    _1_val,
    _2_val,
    _3_val,
    _4_val,
    _5_val,
    _6_val,
    _7_val,
    _8_val,
    _9_val,
    _10_val
  ];
  const hasIndex = actualAnswers.filter(
    (answer, i) => possibleAnswers.indexOf(answer) !== -1
  );
  const notAllEqual = new Set(actualAnswers);
  assert(notAllEqual.size > 1 && hasIndex.length === 10);
})();
```

# --seed--

## --after-user-code--

```jsx
var possibleAnswers = [
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
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
  'Most likely'
];
ReactDOM.render(<MagicEightBall />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
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
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = 'change me!'; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}

          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
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
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful',
      'Most likely'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}
```
