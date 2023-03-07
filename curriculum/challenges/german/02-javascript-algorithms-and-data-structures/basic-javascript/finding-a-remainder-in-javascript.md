---
id: 56533eb9ac21ba0edf2244ae
title: Finden eines Rests in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

Der <dfn>Rest</dfn>-Operator `%` gibt den Rest der Division von zwei Zahlen an.

**Beispiel**

<pre>
5 % 2 = 1
5 / 2 = 2 Restwert 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Verwendung**  
In der Mathematik kann man prüfen, ob eine Zahl gerade oder ungerade ist, indem man den Rest der Division der Zahl durch `2` kontrolliert. Gerade Zahlen haben einen Restwert von `0`, während ungerade Zahlen einen Restwert von `1` besitzen.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**Hinweis:** Der <dfn>Rest</dfn>-Operator wird manchmal fälschlicherweise als Modulus-Operator bezeichnet. Es ist dem Modulus sehr ähnlich, funktioniert aber nicht richtig mit negativen Zahlen.

# --instructions--

Setze `remainder` gleich dem Rest von `11` geteilt durch `3` mit dem <dfn>Rest</dfn> (`%`) Operator.

# --hints--

Die Variable `remainder` sollte initialisiert werden.

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

Der Wert von `remainder` sollte `2` sein.

```js
assert(remainder === 2);
```

Du solltest den Operator `%` verwenden.

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function (y) {
  return 'remainder = ' + y;
})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
