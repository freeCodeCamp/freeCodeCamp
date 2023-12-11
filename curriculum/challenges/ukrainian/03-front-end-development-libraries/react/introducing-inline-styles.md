---
id: 5a24c314108439a4d4036181
title: Вступ до вбудованих стилів
challengeType: 6
forumTopicId: 301395
dashedName: introducing-inline-styles
---

# --description--

Існують й інші складні поняття, які додають потужні можливості до коду React. Але вас може цікавити простіше завдання: як стилізувати елементи JSX, створені в React. Ви, можливо, знаєте, що це не буде в точності те ж саме, що і робота з HTML, через <a href="/learn/front-end-development-libraries/react/define-an-html-class-in-jsx" target="_blank" rel="noopener noreferrer nofollow">спосіб, за допомогою якого ви застосовуєте класи до елементів JSX</a>.

Якщо ви імпортуєте стилі із таблиці стилів, то суттєвої різниці немає. Ви застосовуєте класи до елемента JSX за допомогою атрибута `className`, та застосовуєте стилі до класу в таблиці стилів. Інший варіант — застосувати вбудовані стилі, які дуже поширені в розробці ReactJS.

Вбудовані стилі застосовують до елементів JSX схоже до того, як це роблять в HTML, але з декількома відмінностями JSX. Ось приклад вбудованого стилю в HTML:

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

Елементи JSX використовують атрибут `style`, але ви не можете встановити значення на `string` через спосіб транспіляції JSX. Натомість його можна встановити на об’єкт JavaScript (`object`). Наприклад:

```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

Помітили, як ми використали верблюдячийРегістр у властивості `fontSize`? Причина в тому, що React не приймає ключі в-шашличному-регістрі в об’єкті стилю. React застосує правильну назву властивості в HTML за нас.

# --instructions--

Додайте атрибут `style` до `div` в редакторі коду, щоб надати тексту червоний колір та розмір шрифту `72px`.

Зверніть увагу, що за бажанням ви можете встановити розмір шрифту на число, опустивши одиниці виміру `px`, або написати як `"72px"`.
# --hints--

Компонент має відтворити елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Елемент `div` повинен мати колір зі значенням `red`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

Елемент `div` повинен мати розмір шрифту зі значенням `72px`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return (
      mockedComponent.children().props().style.fontSize === 72 ||
      mockedComponent.children().props().style.fontSize === '72' ||
      mockedComponent.children().props().style.fontSize === '72px'
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};
```

# --solutions--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
```
