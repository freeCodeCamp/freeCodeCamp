---
id: 5a24c314108439a4d4036164
title: Створення компоненту за допомогою композиції
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

Тепер ми поглянемо, як ми можемо скласти декілька React разом. Уявіть, що ви створюєте додаток і вже створили три компоненти: `Navbar`, `Dashboard`, і `Footer`.

Щоб скласти їх разом, ви можете створити компонент `App` *parent*, який відображає кожен з цих трьох компонентів як *children*. Щоб відобразити компонент як дочірній у React компоненті, ви включаєте в перелік ім'я компоненту, написане як власний HTML-тег у JSX. Для прикладу, у методі `render` ви можете написати:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

Коли React стикається із власним HTML-тегом, який посилається на інший компонент (ім'я компоненту взято в дужки у `< />` як в цьому прикладі), він відображає примітку для цього компоненту у місці розташування тегу. Це повинно відображати батьківські/дочірні зв'язки між компонентом `App` і `Navbar`, `Dashboard` та `Footer`.

# --instructions--

У редакторі коду є простий функціональний компонент, який називається `ChildComponent` і компонент класу, який називається `ParentComponent`. Складіть їх обидвох разом, використовуючи відображення `ChildComponent` всередині `ParentComponent`. Пересвідчіться, що закрили тег `ChildComponent` за допомогою навскісної риски перед ним.

**Note:** `ChildComponent` визначається за допомогою функції стрілки ES6, тому що це досить поширена практика під час використання React. Проте, знайте, що це - просто функція. Якщо ви не знайомі з синтаксисом функції зі стрілками, будь ласка, зверніться до розділу JavaScript.

# --hints--

React компонент повинен повертати одинарний `div` елемент.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

Компонент повинен повертати два вкладених елементи.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

Компонент повинен повертати `ChildComponent` в якості другого дочірнього елементу.

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
