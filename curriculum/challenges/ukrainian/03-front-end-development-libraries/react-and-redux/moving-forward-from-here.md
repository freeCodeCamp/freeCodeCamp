---
id: 5a24c314108439a4d403614a
title: Просування вперед
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

Вітаємо! Ви закінчили уроки з React та Redux. Є ще одна річ, на яку варто звернути увагу, перш ніж рухатися далі. Як правило, ви не будете писати програми React в редакторі коду, як цей. Це завдання дає вам уявлення про те, як виглядає синтаксис, якщо ви працюєте з npm і файловою системою на своєму пристрої. Код повинен виглядати подібно, за винятком використання команд `import` (які викличуть усі залежності, які були передбачені для вас у завданнях). Розділ "Керування пакунками з npm" містить детальнішу інформацію про npm.

Зрештою, написання коду React і Redux зазвичай вимагає певного налаштування. Це може швидко ускладнитись. Якщо вам цікаво експериментувати на власному пристрої, <a href="https://www.freecodecamp.org/news/install-react-with-create-react-app/" target="_blank" rel="noopener noreferrer nofollow">Create React App</a> вже є налаштованим та готовим до роботи.

Крім того, ви можете включити Babel як JavaScript Preprocessor в CodePen, додати React і ReactDOM як зовнішні ресурси JavaScript, а також працювати там.

# --instructions--

Зазначте у консолі повідомлення `'Now I know React and Redux!'`.

# --hints--

Повідомлення `Now I know React and Redux!` має бути зазначеним у консолі.

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
