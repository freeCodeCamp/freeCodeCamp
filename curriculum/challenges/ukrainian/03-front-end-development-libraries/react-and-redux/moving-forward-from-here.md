---
id: 5a24c314108439a4d403614a
title: Перейдіть далі
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

Вітаємо! Ви закінчили уроки з React та Redux. Є ще одна річ, на яку варто звернути увагу, перш ніж рухатися далі. Як правило, ви не будете писати застосунки React в такому редакторі коду. Це завдання дає вам уявлення про те, як виглядає синтаксис, якщо ви працюєте з файловою системою на своєму пристрої. Код повинен виглядати подібно, за винятком використання інструкцій `import` (вони використовують всі залежності, які були в завданнях).

Зрештою, написання коду React і Redux зазвичай вимагає певного налаштування. Це може швидко ускладнитись. Якщо вам цікаво експериментувати на власному пристрої, <a href="https://www.freecodecamp.org/news/install-react-with-create-react-app/" target="_blank" rel="noopener noreferrer nofollow">Create React App</a> вже налаштований та готовий до роботи.

Або ж ви можете використати Babel як препроцесор JavaScript в CodePen, додати React та ReactDOM як зовнішні ресурси JavaScript, й працювати там.

# --instructions--

Введіть повідомлення `'Now I know React and Redux!'` на консолі.

# --hints--

Повідомлення `Now I know React and Redux!` має бути введеним на консолі.

```js
(getUserInput) =>
  assert(
    /console\s*\.\s*log\s*\(\s*('|"|`)Now I know React and Redux!\1\s*\)/.test(
      getUserInput('index')
    )
  );
```

# --seed--

## --seed-contents--

```jsx
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
```

# --solutions--

```jsx
console.log('Now I know React and Redux!');
```
