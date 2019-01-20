---
title: Context API
localeTitle: Context API
---

# Context API

Новый Context API был реализован в версии React 16.3.

Он существовал и раньше, однако находился в бета-версии, и, таким образом, не имел возможности предоставить инструменты для работы с его помощью.

Цель Context API - позволить разработчикам осуществлять взаимодействие между компонентами без сложных инструментов, не требуя, чтобы они были тесно связаны (связь компонентов типа родитель/дитя).

Это также уменьшает необходимость в многочисленных передачах свойств (props) (пропускание свойств через несколько нижерасположенных компонентов), что позволяет писать более чистый код, упростить его обслуживание и обновление.

Возможности данного API полностью раскрываются, когда мы хотим поделиться данными, к которым будут иметь доступ несколько компонентов.

Context API основывается на двух вещах: компонентах Provider и Consumer.

## Provider

Предположим, в файле TimeProvider.js, созданном исключительно для обеспечения данными, мы хотим разделить некоторое свойство time между компонентами.

```javascript
// Import createContext
import React, { createContext, Component } from 'react';

// Initialize a context with a time value to it
export const TimeContext = createContext({
  time: '',
});

// Create the TimeProvider class to be used by index.js as a provider and initialize a default value
class TimeProvider extends Component {
  state = {
    time: '17:00',
  };

  // Passing the state that we just set as value to be used by our consumer and returning its children
  render() {
    return (
      <TimeContext.Provider value={this.state}>
        {this.props.children}
      </TimeContext.Provider>
    );
  }
}

export default TimeProvider;
```

Нам нужно немного настроить компонент, который будет вызывать дочерний элемент, который, в свою очередь, должен принимать наш контекст (в данном случае <ShowTime />).

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { ShowTime} from "./ShowTime";

// Importing our provider
import TimeProvider from "./utils/timeProvider";

// Calling our Hello component inside our provider
function App() {
  return (
      <TimeProvider>
        <ShowTime />
      </TimeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Consumer

Давайте в файле ShowTime.js вызовем передоваемое значение времени (time) с использованием потребителя (Consumer):

```javascript
// on ShowTime.js
import React from “react”;

import { TimeContext } from “./utils/TimeProvider”;

export default () => (
  <TimeContext.Consumer>
    {value => <p> It’s {value.time} ! </p>}
  </TimeContext.Consumer>
);
```

Данный фрагмент кода должен преобразоваться:

```javascript
<p> It’s 17:00 ! </p>
```
### Динамическое изменение контекста

Чтобы изменить значение параметра время (time), которое мы передаем компоненту ShowTime, нам нужно предоставить нашему контексту функцию, которая может использоваться потребителем для обновления значения.

Давайте просто добавим его в наш компонент Provider

```javascript
// utils.TimeProvider.js
...
// This time we initialize a function to set the time
export const TimeContext = createContext({
  time: "",
  setTime: () => {}
});

// We define the setTime function to store the time we’ll give it
class TimeProvider extends Component {
  state = {
    time : "17:00",
    setTime: time => this.setState({ time : time })
  };

  render() {
    return (
      <TimeContext.Provider value={this.state}>
        {this.props.children}
      </TimeContext.Provider>
    );
  }
}

export default TimeProvider;
```

И вернемся к нашему компоненту Consumer:

```javascript
// on ShowTime.js
import React from “react”;

import { TimeContext } from “./utils/TimeProvider”;

export default () => (
  <TimeContext.Consumer>
    {value => <p> It’s {value.time} ! </p>}
    <input type="text" value={time} onChange={e => setTime(e.target.value)} />
  </TimeContext.Consumer>
);
```

Это даст нам возможность изменять параметр времени (time), которое будет отображаться.

Необходимо запомнить три вещи:
- Создайте компонент Provider, который будет управлять нашими совместно используемыми данными (также называемый хранилищем - Store)
- Создайте компонент Consumer, который будет связываться с хранилищем
- Вложите наш потребительский компонент (Consumer) с созданным провайдером (Provider), чтобы он мог использовать его данные

### Дополнительная информация

- [React - Context Official Documentation ](https://reactjs.org/docs/context.html)



