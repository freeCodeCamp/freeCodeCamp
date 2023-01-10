---
id: 5a24c314108439a4d4036181
title: Представляємо вбудовані стилі
challengeType: 6
forumTopicId: 301395
dashedName: introducing-inline-styles
---

# --description--

Наявні інші складні концепції, що додають потужних можливостей для вашого коду React. Проте вас може зацікавити, більш проста задача, як стилізувати ті JSX елементи, які ви створюєте в React. Ви, можливо, знаєте, що це не буде в точності теж саме, що і робота з HTML, тому що <a href="/learn/front-end-development-libraries/react/define-an-html-class-in-jsx" target="_blank" rel="noopener noreferrer nofollow"> є способом, за допомогою якого ви застосовуєте класи до JSX елементів</a>.

Якщо ви імпортували стилі із таблиці стилів, то не суттєво відрізняється. Ви застосовуєте класи для вашого JSX елементу, користуючись `className` атрибута, також використовуєте стилі класу до вашої таблиці стилів. Інший варіант – це застосувати вбудовані стилі, які дуже поширені в розробці ReactJS.

Ви застосовуєте вбудовані стилі до елементів JSX подібно до того, як це робиться в HTML, але з деякими відмінностями в JSX. Ось приклад вбудованого стилю в HTML:

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

Елементи JSX використовують атрибут `style`, але через шлях передачі JSX ви не можете встановити значення `string`. Замість цього зробіть його таким самим, як JavaScript `object`. Наприклад:

```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

Зверніть увагу, як ми зібрали значення `fontSize` у шрифті? Це тому, що React не буде приймати ключі кеба-регістру в об'єкті стилю. React може застосувати ім'я з правильними властивостями для нас у HTML.

# --instructions--

Додайте атрибут `style` до `div` в редактор коду, щоб надати тексту червоного кольору а шрифту розміру `72px`.

Зверніть увагу, ви можете за необхідністю встановити розмір шрифту як номер, пропускаючи одиниці виміру `px`, або записати це як `72px`.
# --hints--

Компонент повинен відображати елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Елемент `div` повинен мати `red` колір.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

Елемент `div` повинен мати розмір шрифту `72px`.

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
