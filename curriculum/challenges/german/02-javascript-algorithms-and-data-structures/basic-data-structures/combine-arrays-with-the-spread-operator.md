---
id: 587d7b7b367417b2b2512b17
title: Kombiniere Arrays mit dem Spread-Operator
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

Ein anderer großer Vorteil des <dfn>spread</dfn>-Operators ist die Fähigkeit, Arrays zu kombinieren, oder um alle Elemente eines Arrays in ein anderes einzufügen, und zwar bei jedem Index. Mit traditionelleren Syntaxen können wir Arrays verketten, aber das erlaubt uns nur, Arrays am Ende eines Arrays und am Anfang eines anderen zu kombinieren. Die Spread-Syntax erleichtert den folgenden Vorgang erheblich:

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` würde den Wert `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']` besitzen.

Mit der Spreadsyntax haben wir gerade eine Operation durchgeführt, die bei Verwendung herkömmlicher Methoden komplexer und ausführlicher gewesen wäre.

# --instructions--

Wir haben eine Funktion `spreadOut` definiert, welche die Variable `sentence` zurückgibt. Verändere die Funktion mit dem <dfn>spread</dfn>-Operator so, dass es den Array `['learning', 'to', 'code', 'is', 'fun']` zurückgibt.

# --hints--

`spreadOut` sollte `["learning", "to", "code", "is", "fun"]` zurückgeben

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

Die Funktion `spreadOut` sollte die Spread-Syntax verwenden

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```
