---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Kommentare in JSX hinzufügen
challengeType: 6
forumTopicId: 301376
dashedName: add-comments-in-jsx
---

# --description--

JSX ist eine Syntax, die in gültiges JavaScript kompiliert wird. Manchmal musst du aus Gründen der Lesbarkeit Kommentare in deinen Code einfügen. Wie die meisten Programmiersprachen hat auch JSX seine eigene Art, dies zu tun.

Um Kommentare in JSX einzufügen, verwendest du die Syntax `{/* */}`, um den Kommentartext einzuschließen.

# --instructions--

Der Code-Editor hat ein JSX-Element, das dem ähnelt, das du in der letzten Aufgabe erstellt hast. Füge irgendwo innerhalb des bereitgestellten `div`-Elements einen Kommentar hinzu, ohne die bestehenden `h1`- oder `p`-Elemente zu verändern.

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

Die bestehenden `h1`- und `p`-Elemente sollten nicht verändert werden.

```js
assert(
  JSX.props.children[0].props.children === 'This is a block of JSX' &&
    JSX.props.children[1].props.children === "Here's a subtitle"
);
```

Das `JSX` sollte eine gültige Kommentarsyntax verwenden.

```js
assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));
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
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```
