---
id: 5a24c314108439a4d4036162
title: Створіть функціональний компонент без стану
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--

Компоненти є ядром React. Все в React є компонентом, і зараз ви дізнаєтесь, як його створити.

Існує два шляхи створення компонента React. Першим способом є використання функції JavaScript. Визначення компонента таким чином створює *функціональний компонент без стану*. Поняття стану в застосунку розглянемо в наступних завданнях. Поки що вважайте, що компонент без стану може отримати дані та відтворити їх, але не керує чи відстежує зміни до цих даних. (Ми розглянемо інший спосіб створення компонента React у наступному завданні.)

Щоб створити компонент за допомогою функції, просто напишіть функцію JavaScript, яка повертає JSX або `null`. Важливо зазначити, що назва функції для React має починатись з великої літери. Ось приклад функціонального компонента без стану, який призначає клас HTML в JSX:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

`<div>` матиме CSS-клас `customClass` після транспіляції.

Оскільки компонент JSX представляє HTML, ви можете об’єднати декілька компонентів, щоб створити складнішу сторінку HTML. Це одна з ключових переваг компонентної архітектури, яку надає React. Це дозволяє складати інтерфейс користувача з багатьох окремих, ізольованих компонентів. Це полегшує створення та обслуговування складних інтерфейсів користувача.

# --instructions--

Редактор коду має функцію `MyComponent`. Завершіть цю функцію, щоб вона повернула єдиний елемент `div`, який містить деякий рядок тексту.

**Примітка:** текст вважається дочірнім елементом елемента `div`, тому ви не зможете використати самозакриваючий тег.

# --hints--

`MyComponent` має повернути JSX.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` має повернути елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Елемент `div` повинен містити рядок тексту.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').text() !== '';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const MyComponent = function() {
  // Change code below this line



  // Change code above this line
}
```

# --solutions--

```jsx
const MyComponent = function() {
  // Change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // Change code above this line
}
```
