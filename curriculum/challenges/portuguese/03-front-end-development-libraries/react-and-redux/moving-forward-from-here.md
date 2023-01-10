---
id: 5a24c314108439a4d403614a
title: Seguindo adiante a partir daqui
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

Parabéns! Você concluiu as lições sobre React e Redux. Vale a pena destacar um último item antes de continuar. Normalmente, você não escreverá apps React em um editor de código como esse. Esse desafio dá a você uma ideia de como a sintaxe se parece se você está trabalhando com o npm e um sistema de arquivos na sua própria máquina. O código deve ser similar, exceto para o uso de instruções de `import` (essas puxam em todas as dependências fornecidas para você nos desafios). A seção "Gerenciar pacotes com npm" cobre o npm com mais detalhes.

Finalmente, escrever código React e Redux geralmente requer alguma configuração. Isto pode tornar-se complicado rapidamente. Se você estiver interessado em experimentar em sua própria máquina, o <a href="https://www.freecodecamp.org/news/install-react-with-create-react-app/" target="_blank" rel="noopener noreferrer nofollow">Create React App</a> vem configurado e pronto para ser usado.

Como alternativa, você pode habilitar o Babel como um pré-processador de JavaScript no CodePen, adicionar React e ReactDOM como recursos externos de JavaScript, e trabalhar lá também.

# --instructions--

Exiba a mensagem `'Now I know React and Redux!'` no console.

# --hints--

A mensagem `Now I know React and Redux!` deve ser exibida no console.

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
