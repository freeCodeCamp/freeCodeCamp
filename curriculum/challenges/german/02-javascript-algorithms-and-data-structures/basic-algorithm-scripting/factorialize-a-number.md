---
id: a302f7aae1aa3152a5b413bc
title: Faktorisierung einer Zahl
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

Gib die Fakultät der übergebenen ganzen Zahl zurück.

Wenn die ganze Zahl mit dem Buchstaben `n` dargestellt wird, ist eine Fakultät das Produkt aller positiven ganzen Zahlen kleiner oder gleich `n`.

Fakultäten werden häufig mit der Kurzschreibweise `n!` dargestellt.

Zum Beispiel: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Nur ganze Zahlen größer oder gleich null werden der Funktion übergeben.

# --hints--

`factorialize(5)` sollte eine Zahl zurückgeben.

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` sollte `120` zurückgeben.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` sollte `3628800` zurückgeben.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` sollte `2432902008176640000` zurückgeben.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` sollte `1` zurückgeben.

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
