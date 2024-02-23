---
id: 5a24c314108439a4d4036180
title: Оптимізуйте повторне відтворення з shouldComponentUpdate
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

Наразі, якщо компонент отримує новий стан чи пропс, він повторно відтворює себе та свої дочірні компоненти. Як правило, це нормально. Але React надає метод життєвого циклу, який можна викликати, коли дочірні компоненти отримують новий стан чи пропс, та оголосити, чи компонентам потрібне оновлення. Цей метод називається `shouldComponentUpdate()`, і він приймає `nextProps` та `nextState` як параметри.

Цей метод допомагає оптимізувати роботу застосунку. Наприклад, при звичайному процесі компоненти повторно відтворюються, коли отримують нові пропси, навіть якщо пропси не змінювались. Ви можете використати `shouldComponentUpdate()`, щоб уникнути цього, порівнявши пропси. Метод має повернути булеве значення (`boolean`), яке повідомляє React, чи потрібно оновити компонент. Ви можете порівняти поточні пропси (`this.props`) з наступними пропсами (`nextProps`), щоб визначити, чи потрібне оновлення, та відповідно повернути `true` чи `false`.

# --instructions--

Метод `shouldComponentUpdate()` додано до компонента під назвою `OnlyEvens`. Зараз цей метод повертає `true`, тому `OnlyEvens` повторно відтворюється кожен раз, коли отримує новий пропс. Змініть метод так, щоб `OnlyEvens` оновлювався лише тоді, коли значення нового пропсу є парним. Натисніть кнопку `Add` та перегляньте порядок подій в консолі браузера, коли запущено хуки життєвого циклу.

# --hints--

Компонент `Controller` має відтворити компонент `OnlyEvens` як дочірній.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Controller));
    return (
      mockedComponent.find('Controller').length === 1 &&
      mockedComponent.find('OnlyEvens').length === 1
    );
  })()
);
```

Метод `shouldComponentUpdate` має бути визначеним в компоненті `OnlyEvens`.

```js
assert(
  (() => {
    const child = React.createElement(OnlyEvens)
      .type.prototype.shouldComponentUpdate.toString()
      .replace(/s/g, '');
    return child !== 'undefined';
  })()
);
```

Компонент `OnlyEvens` має повернути тег `h1`, який відтворює значення `this.props.value`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 1000 });
    return mockedComponent.find('h1').html();
  };
  const second = () => {
    mockedComponent.setState({ value: 10 });
    return mockedComponent.find('h1').html();
  };
  const firstValue = first();
  const secondValue = second();
  assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
})();
```

`OnlyEvens` має повторно відтворюватись лише тоді, коли значення `nextProps.value` є парним.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 8 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ value: 7 });
    return mockedComponent.find('h1').text();
  };
  const third = () => {
    mockedComponent.setState({ value: 42 });
    return mockedComponent.find('h1').text();
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return true;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

# --solutions--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```
