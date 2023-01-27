---
id: 5a24c314108439a4d403618d
title: React auf dem Server mit renderToString rendern
challengeType: 6
forumTopicId: 301407
dashedName: render-react-on-the-server-with-rendertostring
---

# --description--

Bis jetzt hast du React-Komponenten auf dem Client gerendert. Normalerweise wirst du das immer tun. Es gibt jedoch einige Anwendungsfälle, in denen es sinnvoll ist, eine React-Komponente auf dem Server zu rendern. Da React eine JavaScript-View-Bibliothek ist und du mit Node JavaScript auf dem Server ausführen kannst, ist dies möglich. Tatsächlich bietet React eine `renderToString()`-Methode, die du für diesen Zweck verwenden kannst.

Es gibt zwei wichtige Gründe, warum das Rendering auf dem Server in einer realen Anwendung verwendet werden kann. Erstens würden deine React-Apps sonst aus einer relativ leeren HTML-Datei und einem großen Bündel von JavaScript bestehen, wenn sie zum ersten Mal in den Browser geladen werden. Das ist vielleicht nicht ideal für Suchmaschinen, die versuchen, den Inhalt deiner Seiten zu indexieren, damit die Leute dich finden können. Wenn du das anfängliche HTML-Markup auf dem Server renderst und an den Client sendest, enthält das erste Laden der Seite das gesamte Markup der Seite, das von Suchmaschinen gecrawlt werden kann. Zweitens wird die Seite dadurch schneller geladen, weil der gerenderte HTML-Code kleiner ist als der JavaScript-Code der gesamten App. React wird deine App auch nach dem ersten Laden erkennen und verwalten können.

# --instructions--

Die Methode `renderToString()` wird auf dem `ReactDOMServer` bereitgestellt, der hier als globales Objekt verfügbar ist. Die Methode benötigt ein Argument, das ein React-Element ist. Verwende dies, um `App` als String zu rendern.

# --hints--

Die Komponente `App` sollte mit `ReactDOMServer.renderToString` als String gerendert werden.

```js
(getUserInput) =>
  assert(
    getUserInput('index')
      .replace(/ /g, '')
      .includes('ReactDOMServer.renderToString(<App/>)') &&
      Enzyme.mount(React.createElement(App)).children().name() === 'div'
  );
```

# --seed--

## --before-user-code--

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };
```

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
```

# --solutions--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App/>);
```
