---
id: 587d7dbc367417b2b2512bb1
title: Ein einfaches JSX-Element erstellen
challengeType: 6
forumTopicId: 301390
dashedName: create-a-simple-jsx-element
---

# --description--

React ist eine Open-Source-View-Bibliothek, die von Facebook entwickelt und gepflegt wird. Es ist ein großartiges Werkzeug, um die Benutzeroberfläche (UI) von modernen Webanwendungen zu gestalten.

React verwendet eine Syntax-Erweiterung von JavaScript namens JSX, mit der du HTML direkt in JavaScript schreiben kannst. Das hat mehrere Vorteile. Damit kannst du die volle Programmierleistung von JavaScript in HTML nutzen und deinen Code lesbar halten. Im Großen und Ganzen ähnelt JSX dem HTML, das du bereits gelernt hast, aber es gibt ein paar wichtige Unterschiede, die wir in diesen Aufgaben behandeln werden.

Da JSX zum Beispiel eine syntaktische Erweiterung von JavaScript ist, kannst du JavaScript direkt in JSX schreiben. Dazu schließt du einfach den Code, der als JavaScript behandelt werden soll, in geschweifte Klammern ein: `{ 'this is treated as JavaScript code' }`. Behalte dies im Hinterkopf, da es in mehreren zukünftigen Aufgaben verwendet wird.

Da JSX jedoch kein gültiges JavaScript ist, muss JSX-Code in JavaScript kompiliert werden. Der Transpiler Babel ist ein beliebtes Werkzeug für diesen Prozess. Damit du es leichter hast, ist er hinter den Kulissen für diese Aufgaben bereits hinzugefügt. Wenn du zufällig syntaktisch ungültiges JSX schreibst, wird der erste Test in dieser Aufgabe fehlschlagen.

Es ist erwähnenswert, dass die Aufgaben unter der Haube `ReactDOM.render(JSX, document.getElementById('root'))` aufrufen. Dieser Funktionsaufruf platziert dein JSX in Reacts eigener, leichtgewichtiger Repräsentation des DOMs. React verwendet dann Snapshots des eigenen DOM, um nur bestimmte Teile des aktuellen DOM zu aktualisieren.

# --instructions--

Der aktuelle Code verwendet JSX, um ein `div`-Element der Konstante `JSX` zuzuordnen. Ersetze das `div` durch ein `h1`-Element und füge den Text `Hello JSX!` darin ein.

# --hints--

Die Konstante `JSX` sollte ein `h1`-Element zurückgeben.

```js
assert(JSX.type === 'h1');
```

Der `h1`-Tag sollte den Text `Hello JSX!` enthalten.

```js
assert(Enzyme.shallow(JSX).contains('Hello JSX!'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = <div></div>;
```

# --solutions--

```jsx
const JSX = <h1>Hello JSX!</h1>;
```
