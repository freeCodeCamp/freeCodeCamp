---
id: aff0395860f5d3034dc0bfc9
title: Telefonnummern-Prüfer
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

Gebe `true` zurück, wenn der übergebene String wie eine gültige US-Telefonnummer aussieht.

Der Benutzer kann das Formularfeld beliebig ausfüllen, solange es das Format einer gültigen US-Nummer hat. Im Folgenden sind Beispiele für gültige Formate für US-Nummern aufgeführt (für andere Alternativen siehe Tests unten):

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

Für diese Aufgabe wird dir ein String wie `800-692-7753` oder `8oo-six427676;laskdjf` angezeigt. Deine Aufgabe ist es, die US-Telefonnummer anhand einer Kombination der oben angegebenen Formate zu bestätigen oder abzulehnen. Die Vorwahl ist erforderlich. Wenn die Landesvorwahl angegeben ist, musst du bestätigen, dass die Landesvorwahl `1` ist. Gib `true` aus, wenn der String eine gültige US-Telefonnummer ist; ansonsten soll `false` ausgegeben werden.

# --hints--

`telephoneCheck("555-555-5555")` soll einen Boolean zurückgeben.

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` soll `true` zurückgeben.

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` sollte `true` zurückgeben.

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` sollte `true` zurückgeben.

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` sollte `true` zurückgeben.

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` sollte `true` zurückgeben.

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` sollte `true` zurückgeben.

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` sollte `true` zurückgeben.

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` sollte `true` zurückgeben.

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telefoncheck("11 555-555-5555")` sollte `false` zurückgeben.

```js
assert(telephoneCheck('11 555-555-5555') === false);
```

# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```
