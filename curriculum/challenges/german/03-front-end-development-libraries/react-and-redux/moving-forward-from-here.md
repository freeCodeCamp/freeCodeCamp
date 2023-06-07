---
id: 5a24c314108439a4d403614a
title: Von hier aus weitergehen
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

Glückwunsch! Du hast die Lektionen über React und Redux abgeschlossen. Bevor du weitermachst, gibt es noch einen letzten Punkt, den du beachten solltest. Normalerweise schreibst du React-Apps nicht in einem Code-Editor wie diesem. Diese Aufgabe gibt dir einen Einblick, wie die Syntax aussieht, wenn du mit npm und einem Dateisystem auf deinem eigenen Rechner arbeitest. Der Code sollte ähnlich aussehen, bis auf die Verwendung von `import`-Anweisungen (diese ziehen alle Abhängigkeiten herein, die dir in den Aufgaben zur Verfügung gestellt wurden). Der Abschnitt "Pakete mit npm verwalten" geht näher auf npm ein.

Schließlich erfordert das Schreiben von React- und Redux-Code in der Regel eine gewisse Konfiguration. Das kann schnell kompliziert werden. Wenn du auf deinem eigenen Rechner experimentieren möchtest, ist die <a href="https://www.freecodecamp.org/news/install-react-with-create-react-app/" target="_blank" rel="noopener noreferrer nofollow">Create React App</a> bereits konfiguriert und einsatzbereit.

Alternativ kannst du Babel als JavaScript-Präprozessor in CodePen aktivieren, React und ReactDOM als externe JavaScript-Ressourcen hinzufügen und auch dort arbeiten.

# --instructions--

Logge die Meldung `'Now I know React and Redux!'` in der Konsole.

# --hints--

Die Meldung `Now I know React and Redux!` sollte in der Konsole geloggt werden.

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
