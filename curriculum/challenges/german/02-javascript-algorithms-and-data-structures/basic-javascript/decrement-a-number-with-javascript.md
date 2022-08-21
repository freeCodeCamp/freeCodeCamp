---
id: 56533eb9ac21ba0edf2244ad
title: Dekrementieren einer Zahl mit JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

Mit dem Operator `--` kannst du eine Variable einfach <dfn>dekrementieren</dfn> oder um eins verringern.

```js
i--;
```

ist das Äquivalent zu

```js
i = i - 1;
```

**Hinweis:** Die gesamte Zeile wird zu `i--;`, wodurch das Gleichheitszeichen überflüssig wird.

# --instructions--

Ändere den Code, um den `--` Operator auf `myVar` anzuwenden.

# --hints--

`myVar` sollte gleich `10` sein.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` sollte geändert werden.

```js
assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

Du solltest `myVar` keine `10` zuordnen.

```js
assert(!code.match(/myVar\s*=\s*10.*?;?/));
```

Du solltest den `--` Operator auf `myVar` anwenden.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

Du solltest den Code oberhalb des vorgegebenen Kommentars nicht ändern.

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
