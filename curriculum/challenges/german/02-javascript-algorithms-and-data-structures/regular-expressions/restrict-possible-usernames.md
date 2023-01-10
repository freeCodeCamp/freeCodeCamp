---
id: 587d7db8367417b2b2512ba2
title: Mögliche Benutzernamen einschränken
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

Nutzernamen werden überall im Internet verwendet. Sie geben den Nutzern eine einzigartige Identität auf ihren Lieblingsseiten.

Du musst alle Benutzernamen in einer Datenbank überprüfen. Hier sind einige einfache Regeln, die du bei der Erstellung deines Benutzernamens beachten musst.

1) Nutzernamen dürfen nur alphanumerische Zeichen enthalten.

2) Die einzigen Zahlen im Benutzernamen müssen am Ende stehen. Am Ende können es null oder mehr sein. Der Benutzername darf nicht mit einer Zahl beginnen.

3) Der Benutzername kann in Klein- und Großbuchstaben geschrieben werden.

4) Benutzernamen müssen mindestens zwei Zeichen lang sein. Ein zweistelliger Benutzername kann nur Buchstaben des Alphabets als Zeichen verwenden.

# --instructions--

Ändere den regulären Ausdruck `userCheck` so, dass er den oben genannten Bedingungen entspricht.

# --hints--

Dein regulärer Ausdruck sollte auf den String `JACK` passen.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

Dein regulärer Ausdruck sollte nicht auf den String `J` passen.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

Dein regulärer Ausdruck sollte auf den String `Jo` passen.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

Dein regulärer Ausdruck sollte auf den String `Oceans11` passen.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

Dein regulärer Ausdruck sollte auf den String `RegexGuru` passen.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

Dein regulärer Ausdruck sollte nicht auf den String `007` passen.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

Dein regulärer Ausdruck sollte nicht auf den String `9` passen.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

Dein regulärer Ausdruck sollte nicht auf den String `A1` passen.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

Dein regulärer Ausdruck sollte nicht auf den String `BadUs3rnam3` passen.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

Dein regulärer Ausdruck sollte auf den String `Z97` passen.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

Dein regulärer Ausdruck sollte nicht auf den String `c57bT3` passen.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

Dein regulärer Ausdruck sollte auf den String `AB1` passen.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

Dein regulärer Ausdruck sollte nicht auf den String `J%4` passen.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
