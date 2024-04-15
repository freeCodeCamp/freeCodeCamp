---
id: 5ea28156e79528a9ab248f27
title: Luhn-Test von Kreditkartennummern
challengeType: 1
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

The Luhn test is used by some credit card companies to distinguish valid credit card numbers from what could be a random selection of digits.

Die Unternehmen, die Kreditkartennummern verwenden, die durch den Luhn-Test validiert werden können, haben Nummern, die den folgenden Test bestehen:

<ol>
  <li> Reverse the order of the digits in the number.</li>
  <li> Nimm die erste, dritte, ... und jede andere ungerade Ziffer der umgekehrten Ziffern und addiere sie, um die Teilsumme s1 zu bilden</li>
  <li> Man nimmt die zweite, vierte ... und jede zweite gerade Ziffer der umgekehrten Ziffern:</li>
    <ol>
      <li>Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits.</li>
      <li>Addiere die Teilsummen der geraden Ziffern, um s2 zu bilden.</li>
    </ol>
  <li>Wenn s1 + s2 auf Null endet, ist die ursprüngliche Zahl eine gültige Kreditkartennummer, wie durch den Luhn-Test überprüft.</li>
</ol>

Beispiel: Die Versuchsnummer ist 49927398716:

```bash
Reverse the digits:
  61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1, 8, 3, 2, 9
  Two times each even digit:
    2, 16, 6, 4, 18
  Sum the digits of each multiplication:
    2, 7, 6, 4, 9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test.
```

# --instructions--

Schreibe eine Funktion, die eine Zahl mit dem Luhn-Test prüft. Gibt true zurück, wenn es eine gültige Zahl ist. Andernfalls wird false zurückgegeben.

# --hints--

`luhnTest` sollte eine Funktion sein.

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` sollte einen Boolean zurückgeben.

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` sollte `true` zurückgeben.

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` sollte `false` zurückgeben.

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` sollte `true` zurückgeben.

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` sollte `false` zurückgeben.

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` sollte `false` zurückgeben.

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` sollte `true` zurückgeben.

```js
assert.equal(luhnTest('1234567812345670'), true);
```

# --seed--

## --seed-contents--

```js
function luhnTest(str) {

}
```

# --solutions--

```js
function luhnTest(str) {
  var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  var counter = 0;
  var incNum;
  var odd = false;
  var temp = String(str).replace(/[^\d]/g, '');
  if (temp.length == 0) return false;
  for (var i = temp.length - 1; i >= 0; --i) {
    incNum = parseInt(temp.charAt(i), 10);
    counter += (odd = !odd) ? incNum : luhnArr[incNum];
  }
  return counter % 10 == 0;
}
```
