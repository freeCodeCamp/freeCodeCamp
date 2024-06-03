---
id: 5a24c314108439a4d4036164
title: Створіть компонент за допомогою композиції
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

Тепер розглянемо, як можна компонувати декілька компонентів React. Уявіть, що ви будуєте застосунок і вже створили три компоненти: `Navbar`, `Dashboard` та `Footer`.

Щоб компонувати їх, ви можете створити *батьківський* компонент `App`, який відтворює ці три компоненти як *дочірні*. Щоб відтворити компонент як дочірній в компоненті React, помістіть назву компонента (написану як власні теги HTML) в JSX. Для прикладу, у методі `render` ви можете написати:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

Коли React стикається з власним тегом HTML, який посилається на інший компонент (назва компонента в `< />`), він відтворює розмітку для цього компонента в місці розташування тегу. Це має проілюструвати батьківські/дочірні зв’язки між компонентом `App` та `Navbar`, `Dashboard`, `Footer`.

# --instructions--

У редакторі коду є простий функціональний компонент під назвою `ChildComponent` та класовий компонент під назвою `ParentComponent`. Компонуйте їх, відтворивши `ChildComponent` в межах `ParentComponent`. Переконайтесь, що закрили тег `ChildComponent` за допомогою скісної риски.

**Примітка:** `ChildComponent` визначено за допомогою стрілкової функції ES6, оскільки це досить поширена практика під час використання React.

# --hints--

Компонент React має повернути єдиний елемент `div`.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

Компонент має повернути два вкладені елементи.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

Компонент має повернути `ChildComponent` як свій другий дочірній елемент.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ParentComponent));
    return (
      mockedComponent.find('ParentComponent').find('ChildComponent').length ===
      1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
