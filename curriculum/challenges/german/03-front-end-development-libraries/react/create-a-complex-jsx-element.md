---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Ein komplexes JSX-Element erstellen
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

Die letzte Aufgabe war ein einfaches Beispiel für JSX, aber JSX kann auch komplexeres HTML darstellen.

Eine wichtige Sache, die du über verschachtelte JSX wissen musst, ist, dass sie ein einzelnes Element zurückgeben müssen.

Dieses eine Elternelement würde alle anderen Ebenen der verschachtelten Elemente umschließen.

Zum Beispiel werden mehrere JSX-Elemente, die als Geschwister ohne elterliches Wrapper-Element geschrieben wurden, nicht transpiliert.

Hier ist ein Beispiel:

**Gültiges JSX:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**Ungültiges JSX:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

Definiere eine neue Konstante `JSX`, die ein `div` rendert, das die folgenden Elemente in dieser Reihenfolge enthält:

Ein `h1`, ein `p` und eine ungeordnete Liste, die drei `li` Elemente enthält. Du kannst jeden beliebigen Text in jedes Element einfügen.

**Hinweis:** Wenn du mehrere Elemente wie dieses darstellst, kannst du sie alle in Klammern einschließen, aber das ist nicht unbedingt erforderlich. Beachte auch, dass diese Aufgabe ein `div`-Tag verwendet, um alle Kindelemente in einem einzigen Elternelement zu verpacken. Wenn du das `div` entfernst, wird das JSX nicht mehr transpiliert. Behalte dies im Hinterkopf, denn es gilt auch, wenn du JSX-Elemente in React-Komponenten zurückgibst.

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

Das `div` sollte ein `ul`-Tag als drittes Element enthalten.

```js
assert(JSX.props.children[2].type === 'ul');
```

Das `ul` sollte drei `li`-Elemente enthalten.

```js
assert(
  JSX.props.children
    .filter((ele) => ele.type === 'ul')[0]
    .props.children.filter((ele) => ele.type === 'li').length === 3
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx

```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```
