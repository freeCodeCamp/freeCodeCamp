---
id: 5a24c314108439a4d403616a
title: Передайте масив як пропси
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

В попередньому завданні ви дізнались, як передати інформацію з батьківського компонента до дочірнього у вигляді пропсів (`props`) або властивостей. У цьому завданні дізнаємось, як передати масиви у вигляді пропсів. Щоб передати масив до елемента JSX, його потрібно розглядати як JavaScript та написати у фігурних дужках.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

Потім дочірній компонент отримує доступ до властивості масиву `colors`. При доступі до властивості можна використовувати такі методи масиву, як `join()`.

```jsx
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
```

Це об’єднає всі елементи масиву `colors` у рядок, розділений комами, і створить `<p>green, blue, red</p>`. Пізніше ми дізнаємось про інші поширені методи відтворення масивів даних у React.

# --instructions--

У редакторі коду є компоненти `List` та `ToDo`. При відтворенні кожного `List` з компонента `ToDo`, передайте властивість `tasks`, призначену до масиву завдань (наприклад, `["walk dog", "workout"]`). Потім отримайте доступ до масиву `tasks` в компоненті `List`, показавши значення в межах елемента `p`. Використайте `join(", ")`, щоб показати масив `props.tasks` в елементі `p` як список, розділений комами. У сьогоднішньому списку має бути щонайменше 2 завдання, а у завтрашньому — щонайменше 3 завдання.

# --hints--

Компонент `ToDo` має повернути єдиний зовнішній `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

Третій дочірній компонент компонента `ToDo` має бути екземпляром компонента `List`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

П’ятий дочірній компонент компонента `ToDo` має бути екземпляром компонента `List`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

Обидва екземпляри компонента `List` повинні мати властивість `tasks`, яка є типом масиву.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      Array.isArray(mockedComponent.find('List').get(0).props.tasks) &&
      Array.isArray(mockedComponent.find('List').get(1).props.tasks)
    );
  })()
);
```

Перший компонент `List`, що представляє завдання на сьогодні, повинен містити 2 або більше елементів.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

Другий компонент `List`, що представляє завдання на завтра, повинен містити 3 або більше елементів.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

Компонент `List` має відтворити значення пропсу `tasks` в тегу `p`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      mockedComponent
        .find('p')
        .get(0)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(0)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',') &&
      mockedComponent
        .find('p')
        .get(1)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(1)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',')
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```
