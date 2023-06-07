---
id: 5a24c314108439a4d4036188
title: Умовний рендеринг з пропс
challengeType: 6
forumTopicId: 301405
dashedName: render-conditionally-from-props
---

# --description--

Наразі ви бачили, як використовувати `if/else`, `&&` та тернарний оператор (`condition ? expressionIfTrue : expressionIfFalse`), щоб приймати умовні рішення про те, що і коли відображати. Проте залишилася ще одна важлива для огляду тема, вивчення якої дозволить поєднувати всі ці поняття з іншою потужною функцією React: пропси. Використання пропсів для умовного рендерингу коду є дуже поширеним явищем серед React-розробників: вони використовують значення даного пропсу для автоматичного прийняття рішень про те, що відображати.

В цьому завданні вам доведеться налаштовувати дочірній компонент задля прийняття рішень на основі пропс стосовно рендерингу. Також ви зіштовхнетеся з використанням трикомпонентного оператора та побачите, як деякі з інших, описаних у минулих завданнях, понять можуть бути настільки ж корисними у даному контексті.

# --instructions--

Редактор коду складається з двох компонентів, які частково для вас визначені: батьківський, з назвою `GameOfChance`, та дочірній - `Results`. Вони використовуються при створенні простих ігор, де користувач натискає клавішу, аби перевірити, виграв він або вона чи ні.

Перш за все, вам знадобиться простий вираз, який випадковим чином повертає різні значення при кожному запуску. Можна використати `Math.random()`. Цей метод повертає значення між `0` (включно) та `1` (виключно) кожного разу, коли він викликається. Таким чином, для шансу 50/50 використовуйте у своєму виразі `Math.random() >= .5`. З точки зору статистики, цей вираз поверне `true` в 50% випадків та `false` - в інших 50%. В методі рендерингу, замініть `null` на вираз, наведений вище, задля завершення оголошення змінної.

Тепер у вас є вираз, здатний приймати випадкове рішення у коді. Наступне, що треба - це впровадити його. Відрендеріть компонент `Results` як дочірний від `GameOfChance` та передайте `expression` як пропс з назвою `fiftyFifty`. В компоненті `Results` напишіть трикомпонентний вираз на основі пропсу `fiftyFifty`, взятого з `GameOfChance`, для рендерингу елементу `h1` з текстом `You Win!` або `You Lose!`. Вкінці переконайтеся, що метод `handleClick()` правильно обчислює кожний хід, щоб користувач знав скільки разів він зіграв. Це також дозволить користувачеві дізнатися, що компонент дійсно оновився, коли він виграв або програв двічі поспіль.

# --hints--

Компонент `GameOfChance` має існувати та рендеритися на сторінці.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance` має повертати окремий елемент `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance` має повертати єдиний екземлпяр компоненту `Results`, який має пропс `fiftyFifty`.

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

Стан `GameOfChance` має бути ініціалізовано властивістю `counter`, що має значення `1`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

Якщо компонент `GameOfChance` вперше відображається в DOM, елемент `p` має повернутися із внутрішнім текстом `Turn: 1`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

Кожного разу, коли натискається кнопка, стан лічильника має збільшуватися на значення 1, а одинарний елемент `p` повинен бути відображений у DOM, що містить текст text `Turn: N`, де `N` - це значення стану лічильника.

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

Коли компонент `GameOfChance` підключається спочатку до DOM і після того, як натискають на кнопку, має повертатися одинарний елемент `h1`, який випадковим чином показує `You Win!` або `You Lose!`. Примітка: це може випадково вийти з ладу. Якщо це сталося, спробуйте ще раз.

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
