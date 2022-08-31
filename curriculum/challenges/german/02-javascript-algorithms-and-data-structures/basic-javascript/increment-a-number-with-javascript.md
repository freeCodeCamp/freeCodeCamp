---
id: 56533eb9ac21ba0edf2244ac
title: Inkrementieren einer Zahl mit JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

Mit dem Operator `++` kannst du eine Variable einfach <dfn>erhöhen</dfn> oder um eins ergänzen.

```js
i++;
```

ist das Äquivalent zu

```js
i = i + 1;
```

**Hinweis:** Die gesamte Zeile wird zu `i++;`, wodurch das Gleichheitszeichen überflüssig wird.

# --instructions--

Ändere den Code, um den `++`-Operator auf `myVar` anzuwenden.

# --hints--

`myVar` sollte gleich `88` sein.

```js
assert(myVar === 88);
```

Du solltest den Zuweisungsoperator nicht verwenden.

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2})/.test(code)
);
```

Du solltest den `++` Operator verwenden.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

Du solltest den Code oberhalb des vorgegebenen Kommentars nicht ändern.

```js
assert(/let myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
let myVar = 87;
myVar++;
```
