---
id: 5a24c314108439a4d4036162
title: Створення функціонального компонента Stateless
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--

Компоненти є ядром React. Все в React є компонентом, і тут ви дізнаєтеся, як їх створити.

Існує два шляхи створення компонента React. Першим способом є використання функції JavaScript. Визначення компонента таким чином створює * stateless functional component*. Поняття стану у додатку буде розглянуто у подальших завданнях. Поки що думайте про компонент stateless як про той, який може отримувати дані та надавати їх, але не керує та не відстежує зміни цих даних. (Ми розглянемо інший спосіб створення компонента React у наступному завданні.)

Щоб створити компонент з функцією, варто лише написати функцію JavaScript, яка повертає або JSX, або `null`. Важливо відзначити, що для React важливим є початок назви вашої функції з великої літери. Ось приклад функціонального компонента stateless, який призначає клас HTML у JSX:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

Після перенесення `<div>` матиме клас CSS `customClass`.

Оскільки компонент JSX представляє HTML, ви маєте можливість об'єднати кілька компонентів разом, щоб створити більш складну сторінку HTML. Це одна з ключових переваг компонентної архітектури, яку надає React. Це дозволяє складати інтерфейс користувача з багатьох окремих, ізольованих компонентів. Це полегшує створення та обслуговування складних інтерфейсів користувача.

# --instructions--

Редактор коду має функцію `MyComponent`. Виконайте цю функцію, щоб вона повернула єдиний елемент `div`, який містить деякий рядок тексту.

** Примітка.** Текст вважається дочірнім елементом `div`, тому ви не зможете використовувати тег із самозакриттям.

# --hints--

`MyComponent` має повертати JSX.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` має повертати елемент `div`.

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
