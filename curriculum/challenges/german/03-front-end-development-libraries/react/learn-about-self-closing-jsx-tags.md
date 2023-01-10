---
id: 5a24c314108439a4d4036161
title: Lerne etwas über selbstschließende JSX-Tags
challengeType: 6
forumTopicId: 301396
dashedName: learn-about-self-closing-jsx-tags
---

# --description--

Bisher hast du gesehen, dass sich JSX in einem wichtigen Punkt von HTML unterscheidet, nämlich in der Verwendung von `className` gegenüber `class` für die Definition von HTML-Klassen.

Ein weiterer wichtiger Unterschied zwischen JSX und HTML besteht in der Idee des selbstschließenden Tags.

In HTML haben fast alle Tags sowohl einen öffnenden als auch einen schließenden Tag: `<div></div>`; der schließende Tag hat immer einen Schrägstrich vor dem Namen des Tags, den du schließt. Es gibt jedoch spezielle Fälle in HTML, die "selbstschließende Tags" genannt werden, also Tags, die keinen öffnenden und schließenden Tag benötigen, bevor ein anderer Tag beginnen kann.

Das Zeilenumbruch-Tag kann zum Beispiel als `<br>` oder als `<br />` geschrieben werden, sollte aber nie als `<br></br>` geschrieben werden, da es keinen Inhalt enthält.

In JSX sind die Regeln ein wenig anders. Jedes JSX-Element kann mit einem selbstschließenden Tag geschrieben werden, und jedes Element muss geschlossen werden. Der Zeilenumbruch-Tag muss zum Beispiel immer als `<br />` geschrieben werden, um gültiges JSX zu sein, das transpiliert werden kann. Ein `<div>` hingegen kann als `<div />` oder `<div></div>` geschrieben werden. Der Unterschied ist, dass es in der ersten Syntaxversion keine Möglichkeit gibt, etwas in das `<div />` einzuschließen. Du wirst in späteren Aufgaben sehen, dass diese Syntax beim Rendern von React-Komponenten nützlich ist.

# --instructions--

Behebe die Fehler im Code-Editor, damit es gültiges JSX ist und erfolgreich transpiliert wird. Achte darauf, dass du nichts am Inhalt änderst - du musst nur die Tags schließen, wo sie gebraucht werden.

# --hints--

Die Konstante `JSX` sollte ein `div`-Element zurückgeben.

```js
assert.strictEqual(JSX.type, 'div');
```

Das `div` sollte ein `br`-Tag enthalten.

```js
assert(Enzyme.shallow(JSX).find('br').length === 1);
```

Das `div` sollte ein `hr`-Tag enthalten.

```js
assert(Enzyme.shallow(JSX).find('hr').length === 1);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
</div>
);
```
