---
id: 5a24c314108439a4d4036180
title: Оптимізація Re-Renders з shouldComponentUpdate
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

Тепер, коли компонент переходить у новий `state` або отримує новий `props`, він повторно перетворює себе і свої дочірні елементи. Як правило, це нормально. Але React надає метод, що можна викликати, коли дочірній елемент отримує новий `state` або `props` і встановлює, чи потрібно його оновлювати. Цей метод називається `shouldComponentUpdate()`, він створює параметри `nextProps` й `nextState`.

Цей метод допомагає оптимізувати роботу програми. Наприклад, при звичайному процесі компоненти ререндеряться, коли вони отримують нові `props`, навіть якщо `props` не змінювались. Можете скористатися `shouldComponentUpdate()`, щоб запобігти цьому, шляхом порівняння `props`. Метод має видати `boolean` значення, що говорить React, чи потрібно обновити компонент. Можете порівняти поточні props (`this.props`) з новими props (`nextProps`), щоб визначити, чи потрібно їх оновити, та відповідно повернути сигнал `true` або `false`.

# --instructions--

Метод `shouldComponentUpdate()` додається до компонента `OnlyEvens`. Зараз цей метод повертає `true`, тому `OnlyEvens` ререндерить щоразу, як він отримує нові `props`. Змініть метод так, щоб `OnlyEvens` оновлювався лише коли `value` нового props парна. Натисніть `Add` кнопку та перегляньте порядок дій у консолі браузера, в той час, як працює цикл.

# --hints--

Компонент `Controller` має показувати компонент `OnlyEvens` як дочірній елемент.

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

Метод `shouldComponentUpdate` має бути визначеним у компоненті `OnlyEvens`.

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

Компонент `OnlyEvens` має повертати тег `h1`, що рендерить значення `this.props.value`.

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

`OnlyEvens` має ререндерити лише тоді, коли `nextProps.value` парна.

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
