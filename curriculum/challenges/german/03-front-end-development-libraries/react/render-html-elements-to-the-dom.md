---
id: 5a24bbe0dba28a8d3cbd4c5f
title: HTML-Elemente in das DOM rendern
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

Bis jetzt hast du gelernt, dass JSX ein praktisches Werkzeug ist, um lesbares HTML in JavaScript zu schreiben. Mit React können wir dieses JSX direkt in das HTML-DOM rendern, indem wir die ReactDOM genannte Rendering-API von React verwenden.

ReactDOM bietet eine einfache Methode zum Rendern von React-Elementen im DOM, die wie folgt aussieht: `ReactDOM.render(componentToRender, targetNode)`, wobei das erste Argument das React-Element oder die Komponente ist, die du rendern willst, und das zweite Argument der DOM-Knoten, in den du die Komponente rendern willst.

Wie zu erwarten, muss `ReactDOM.render()` nach den JSX-Elementdeklarationen aufgerufen werden, genau wie du Variablen deklarieren musst, bevor du sie benutzt.

# --instructions--

Der Code-Editor hat eine einfache JSX-Komponente. Verwende die Methode `ReactDOM.render()`, um diese Komponente auf der Seite darzustellen. Du kannst definierte JSX-Elemente direkt als erstes Argument übergeben und `document.getElementById()` verwenden, um den DOM-Knoten auszuwählen, in dem sie gerendert werden sollen. Es gibt ein `div` mit `id='challenge-node'`, das du verwenden kannst. Achte darauf, dass du die Konstante `JSX` nicht änderst.

# --hints--

Die Konstante `JSX` sollte ein `div`-Element zurückgeben.

```js
assert(JSX.type === 'div');
```

Das `div` sollte ein `h1`-Tag als erstes Element enthalten.

```js
assert(JSX.props.children[0].type === 'h1');
```

Das `div` sollte ein `p`-Tag als zweites Element enthalten.

```js
assert(JSX.props.children[1].type === 'p');
```

Das angegebene JSX-Element sollte zum DOM-Knoten mit der id `challenge-node` werden.

```js
assert(
  document.getElementById('challenge-node').childNodes[0].innerHTML ===
    '<h1>Hello World</h1><p>Lets render this to the DOM</p>'
);
```

# --seed--

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
