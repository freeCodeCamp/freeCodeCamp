---
id: 5a24c314108439a4d4036170
title: Створити компонент Stateful
challengeType: 6
forumTopicId: 301391
dashedName: create-a-stateful-component
---

# --description--

Однією із найважливіших тем у React є `state`. Стан складається з будь-яких даних, про які потрібно знати, і які можуть з часом зазнавати змін. Ви хочете, щоб ваші програми відповіли на зміни стану і представили оновлений інтерфейс, коли це необхідно. React пропонує чудове рішення для управління станом сучасних веб-додатків.

Ви створюєте стан в компоненті React, вказавши про властивість `state` для класу компоненту з його `constructor`. Це ініціалізує компонент з `state`, коли він створюється. Властивість `state` повинна бути встановлена на JavaScript `object`. Іншими словами, це виглядає так:

```jsx
this.state = {

}
```

У вас є доступ до предмета `state` протягом усього життя вашого компонента. Ви можете його оновити, візуалізувати його в своєму інтерфейсі, і передати його як протоколи до споріднених документів. Об'єкт `state` може бути як простим, так і складним, в залежності від того, який вам потрібен. Зверніть увагу, ви повинні створити клас компонентів, розширивши `React.Component` для того, щоб створити такий як цей `state`.

# --instructions--

У кодовому редакторі є компонент, який намагається візуалізувати властивість `firstName` з його `state`. Однак, `state` є невизначеним. Ініціалізуйте компонент з `state` в `constructor` і призначте своє ім'я до властивості `firstName`.

# --hints--

`StatefulComponent` повинен існувати і візуалізуватися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return mockedComponent.find('StatefulComponent').length === 1;
  })()
);
```

`StatefulComponent` повинен візуалізувати `div` і `h1` елемент.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

Стан `StatefulComponent` повинен бути ініціалізований з властивістю `firstName`, яка встановлена на рядок.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' && typeof initialState.firstName === 'string'
    );
  })()
);
```

Властивість `firstName` у стані `StatefulComponent` повинна візуалізуватись в елементі `h1`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return mockedComponent.find('h1').text() === initialState.firstName;
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line

    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'freeCodeCamp!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```
