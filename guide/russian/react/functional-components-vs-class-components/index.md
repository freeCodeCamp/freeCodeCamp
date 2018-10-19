---
title: Functional Components vs Class Components
localeTitle: Функциональные компоненты и компоненты класса
---
## Функциональные компоненты и компоненты класса

В React есть в основном два компонента:

*   Функциональные компоненты
*   Компоненты класса

## Функциональные компоненты

*   Функциональные компоненты - это основные функции JavaScript. Они обычно являются функциями стрелок (arrow functions), но также могут быть созданы с помощью ключевого слова `function`.
*   Иногда они называются "dumb" или "stateless, поскольку они просто принимают данные и отображают их в той или иной форме; то есть они в основном отвечают за представление пользовательского интерфейса.
*   Реагирующие методы жизненного цикла (например, `componentDidMount` ) не могут использоваться в функциональных компонентах.
*   В функциональных компонентах не используется метод рендеринга.
*   Они в основном отвечают за пользовательский интерфейс и обычно являются только презентационными (например, компонента Button).
*   Функциональные компоненты могут принимать и использовать props.
*   Функциональные компоненты должны быть предпочтительными, если вам не нужно использовать состояние React.

```js
import React from "react";

const Person = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);

export default Person;
```

## Компоненты класса

*   Компоненты класса используют класс ES6 и расширяют класс `Component` в React.
*   Иногда они называются "smart" или "stateful", поскольку они склонны реализовывать логику и состояние.
*   Методы жизненного цикла React могут использоваться внутри компонентов класса (например, `componentDidMount` ).
*   Вы передаете props до компонентов класса и `this.props` доступ к ним с помощью `this.props`

```js
import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default Person;
```

## Больше информации

*   [Реагировать на компоненты](https://reactjs.org/docs/components-and-props.html)
*   [Функциональные компоненты класса vs](https://react.christmas/16)
*   [Функциональные компоненты Stateful vs без состояния](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
*   [Состояние и жизненный цикл](https://reactjs.org/docs/state-and-lifecycle.html)
