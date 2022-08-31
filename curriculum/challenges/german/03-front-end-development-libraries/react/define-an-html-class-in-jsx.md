---
id: 5a24c314108439a4d4036160
title: Definiere eine HTML-Klasse in JSX
challengeType: 6
forumTopicId: 301393
dashedName: define-an-html-class-in-jsx
---

# --description--

Jetzt, wo du dich mit dem Schreiben von JSX vertraut gemacht hast, fragst du dich vielleicht, wie es sich von HTML unterscheidet.

Bisher mag es so aussehen, als ob HTML und JSX genau dasselbe sind.

Ein wichtiger Unterschied in JSX ist, dass du das Wort `class` nicht mehr verwenden kannst, um HTML-Klassen zu definieren. Das liegt daran, dass `class` ein reserviertes Wort in JavaScript ist. Stattdessen verwendet JSX `className`.

Tatsächlich wird die Namenskonvention für alle HTML-Attribute und Ereignisreferenzen in JSX zu camelCase. Ein Klick-Ereignis in JSX heißt zum Beispiel `onClick`, statt `onclick`. Genauso wird `onchange` zu `onChange`. Das ist zwar ein feiner Unterschied, aber ein wichtiger, den du im Hinterkopf behalten solltest.

# --instructions--

Wende eine Klasse von `myDiv` auf das `div` an, das im JSX-Code angegeben ist.

# --hints--

Die Konstante `JSX` sollte ein `div`-Element zurückgeben.

```js
assert.strictEqual(JSX.type, 'div');
```

Das `div` sollte eine Klasse von `myDiv` besitzen.

```js
assert.strictEqual(JSX.props.className, 'myDiv');
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
    <h1>Add a class to this div</h1>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```
