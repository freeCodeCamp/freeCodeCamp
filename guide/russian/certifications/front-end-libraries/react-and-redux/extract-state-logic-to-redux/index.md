---
title: Extract State Logic to Redux
localeTitle: Извлечь логику состояния в Redux
---
## Извлечь логику состояния в Redux

Это заглушка. [Помогите нашему сообществу расширить его](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react-and-redux/extract-state-logic-to-redux/index.md) .

[Это руководство по быстрому стилю поможет вам принять ваш запрос на тягу](https://github.com/freecodecamp/guides/blob/master/README.md) .

Предлагаемое решение:

```javascript
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

```
