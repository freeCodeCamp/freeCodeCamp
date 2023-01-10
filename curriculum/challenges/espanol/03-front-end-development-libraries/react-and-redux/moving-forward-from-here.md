---
id: 5a24c314108439a4d403614a
title: Avanzando desde aquí
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

¡Felicidades! Has terminado las lecciones sobre React y Redux. Hay un último punto que vale la pena señalar antes de seguir adelante. Por lo general, no escribirás aplicaciones React en un editor de código como este. Este desafío te da una idea de cómo es la sintaxis si trabajas con npm y un sistema de archivos en tu propia máquina. El código debería ser similar, excepto por el uso de las sentencias `import` (éstas traen todas las dependencias que se te han proporcionado en los desafíos). La sección "Gestión de paquetes con npm" cubre npm con más detalle.

Por último, escribir código React y Redux generalmente requiere cierta configuración. Esto puede complicarse rápidamente. Si te interesa experimentar en tu propia máquina, <a href="https://www.freecodecamp.org/news/install-react-with-create-react-app/" target="_blank" rel="noopener noreferrer nofollow">Create React App</a> viene configurado y listo para funcionar.

Alternativamente, puedes habilitar Babel como un preprocesador de JavaScript en CodePen, añadir React y ReactDOM como recursos externos de JavaScript, y trabajar allí también.

# --instructions--

Imprime el mensaje `'Now I know React and Redux!'` en la consola.

# --hints--

El mensaje `Now I know React and Redux!` debe imprimirse en la consola.

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
