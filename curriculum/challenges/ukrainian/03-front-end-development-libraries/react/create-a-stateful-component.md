---
id: 5a24c314108439a4d4036170
title: Створіть компонент зі станом
challengeType: 6
forumTopicId: 301391
dashedName: create-a-stateful-component
---

# --description--

Однією із найважливіших тем у React є стан (`state`). Стан складається з будь-яких даних, про які повинен знати ваш застосунок, і які можуть з часом зазнавати змін. Ваш застосунок має відповідати на зміну стану та представляти оновлений UI за потреби. React пропонує чудове рішення для керування станом у сучасних вебзастосунках.

Ви створюєте стан в компоненті React, оголосивши властивість `state` у класовому компоненті в його конструкторі. Це ініціалізує компонент з `state` після створення. Властивість `state` має бути встановлена на об’єкт JavaScript (`object`). Іншими словами, це виглядає так:

```jsx
this.state = {

}
```

Ви маєте доступ до об’єкта `state` протягом всього життя компонента. Ви можете його оновити, відтворити в UI та передати як пропси до дочірніх компонентів. Об’єкт `state` може бути простим і складним, все залежить від вашого побажання. Зверніть увагу: ви повинні створити класовий компонент, розширивши `React.Component`, щоб створити схожий стан (`state`).

# --instructions--

У редакторі коду існує компонент, який намагається відтворити властивість `firstName` зі свого стану (`state`). Однак тут немає визначеного стану. Ініціалізуйте компонент з `state` в `constructor` і призначте своє ім’я до властивості `firstName`.

# --hints--

`StatefulComponent` має існувати та відтворюватись.

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

`StatefulComponent` має відтворити `div` та елемент `h1`.

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

Стан `StatefulComponent` має ініціалізуватися властивістю `firstName` зі значенням рядка.

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

Властивість `firstName` у стані `StatefulComponent` має відтворитись в елементі `h1`.

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
