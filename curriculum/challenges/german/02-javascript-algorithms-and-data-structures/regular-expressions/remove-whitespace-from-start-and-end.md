---
id: 587d7dbb367417b2b2512bac
title: Leerzeichen am Anfang und Ende entfernen
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

Manchmal sind Leerzeichen um Strings herum nicht erwünscht, aber sie sind da. Bei der typischen Verarbeitung von Strings werden die Leerzeichen am Anfang und am Ende entfernt.

# --instructions--

Schreibe einen regulären Ausdruck und verwende die entsprechenden String-Methoden, um Leerzeichen am Anfang und Ende von Strings zu entfernen.

**Hinweis:** Die Methode `String.prototype.trim()` würde hier funktionieren, aber du musst diese Aufgabe mit regulären Ausdrücken lösen.

# --hints--

`result` sollte gleich dem String `Hello, World!` sein.

```js
assert(result === 'Hello, World!');
```

Deine Lösung sollte nicht die Methode `String.prototype.trim()` verwenden.

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

Der Variable `result` sollte nicht direkt ein String zugewiesen werden.

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

Der Wert der Variable `hello` sollte nicht geändert werden.

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
