---
id: 5e6dd14797f5ce267c2f19d0
title: Conway-Folge
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

The Look and say sequence is a recursively defined sequence of numbers.

Definition von Sequenzen

<ul><li>Take a decimal number</li>
<li><span>Look</span> die Zahl an und gruppiere die aufeinanderfolgenden Ziffern der gleichen Ziffer.</li>
<li><span>Say</span> die Zahl, von links nach rechts, Gruppe für Gruppe; wie viele von dieser Ziffer gibt es - gefolgt von der gruppierten Ziffer.</li></ul><span> Dies wird die nächste Zahl der Sequenz sein.</span>

Ein Beispiel:

<ul><li>Starting with the number 1, you have <span>one</span> 1 which produces 11</li>
<li>Beginnend mit 11, hast du <span>zwei</span> 1'en. z.B.: 21</li>
<li>Beginnend bei 21, hast du <span>eine</span> 2, dann <span>eine</span> 1. z.B.: (12)(11) das zu 1211 wird</li>
<li>Beginnend mit 1211, hast du <span>eine</span> 1, <span>eine</span> 2, dann <span>zwei</span> 1'en. z.B.: (11)(12)(21) das zu 111221wird</li></ul>

# --instructions--

Schreibe eine Funktion, die eine Zeichenfolge als Parameter akzeptiert, diese verarbeitet und die resultierende Zeichenfolge zurückgibt.

# --hints--

`lookAndSay` sollte eine Funktion sein.

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` sollte einen String zurückgeben.

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` sollte `"11"` zurückgeben.

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` sollte `"21"` zurückgeben.

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` sollte `"1211"` zurückgeben.

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` sollte `"111221"` zurückgeben.

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` sollte `"13151412"` zurückgeben.

```js
assert.equal(lookAndSay('3542'), '13151412');
```

# --seed--

## --seed-contents--

```js
function lookAndSay(str) {

}
```

# --solutions--

```js
function lookAndSay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1) {
      return seq.length.toString() + p1;
    });
}
```
