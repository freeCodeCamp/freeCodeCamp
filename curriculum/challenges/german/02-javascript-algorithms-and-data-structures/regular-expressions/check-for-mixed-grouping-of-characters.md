---
id: 5c3dda8b4d8df89bea71600f
title: Prüfung auf gemischte Gruppierung von Zeichen
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

Manchmal wollen wir mit einem regulären Ausdruck nach Gruppen von Zeichen suchen und dazu verwenden wir die Klammern `()`.

Wenn du entweder `Penguin` oder `Pumpkin` in einem String finden willst, kannst du den folgenden regulären Ausdruck verwenden: `/P(engu|umpk)in/g`

Prüfe dann mit der Methode `test()`, ob die gewünschten Stringgruppen im Teststring enthalten sind.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

Die Methode `test` würde hier `true` zurückgeben.

# --instructions--

Korrigiere den regulären Ausdruck so, dass er die Namen `Franklin Roosevelt` oder `Eleanor Roosevelt` unter Berücksichtigung der Groß- und Kleinschreibung prüft und Zugeständnisse bei mittleren Namen macht.

Dann korrigiere den Code so, dass der von dir erstellte reguläre Ausdruck mit `myString` abgeglichen wird und entweder `true` oder `false` zurückgegeben wird, je nachdem, ob der reguläre Ausdruck passt.

# --hints--

Dein regulärer Ausdruck `myRegex` sollte `true` für den String `Franklin D. Roosevelt` zurückgeben.

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

Dein regulärer Ausdruck `myRegex` sollte `true` für den String `Eleanor Roosevelt` zurückgeben.

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

Dein regulärer Ausdruck `myRegex` sollte `false` für den String `Franklin Rosevelt` zurückgeben.

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

Dein regulärer Ausdruck `myRegex` sollte `false` für den String `Frank Roosevelt` zurückgeben.

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

Dein regulärer Ausdruck `myRegex` sollte `false` für den String `FranklinRoosevelt` zurückgeben.

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

Dein regulärer Ausdruck `myRegex` sollte `false` für den String `EleanorRoosevelt` zurückgeben.

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

Du solltest `.test()` verwenden, um den regulären Ausdruck zu testen.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

Dein Ergebnis sollte `true` zurückgeben.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
