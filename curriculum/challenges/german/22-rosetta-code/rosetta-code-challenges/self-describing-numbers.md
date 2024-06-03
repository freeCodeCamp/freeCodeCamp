---
id: 5eaf48389ee512d4d103684b
title: Selbstbeschreibende Zahlen
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

There are several so-called "self-describing" or "self-descriptive" integers.

Eine ganze Zahl wird als "selbstbeschreibend" bezeichnet, wenn sie die Eigenschaft hat, dass, wenn die Ziffernpositionen mit 0 bis N-1 beschriftet sind, die Ziffer an jeder Position gleich der Anzahl ist, wie oft diese Ziffer in der Zahl vorkommt.

Zum Beispiel ist **2020** eine vierstellige selbstbeschreibende Zahl:

<ul>
    <li> position 0 has value 2 and there are two 0s in the number; </li>
    <li> Position 1 hat den Wert 0 und es gibt keine 1en in der Zahl; </li>
    <li> Position 2 hat den Wert 2 und es gibt zwei 2en; </li>
    <li> Position 3 hat den Wert 0, und es gibt keine 3er; </li>
</ul>

Selbstbeschreibende Zahlen &lt; 100.000.000 sind: 1210, 2020, 21200, 3211000, 42101000.

# --instructions--

Schreibe eine Funktion, die eine positive ganze Zahl als Parameter annimmt. Wenn sie selbstbeschreibend ist, wird true zurückgegeben. Andernfalls wird false zurückgegeben.

# --hints--

`isSelfDescribing` sollte eine Funktion sein.

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` sollte einen Boolean zurückgeben.

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` sollte `true` zurückgeben.

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` sollte `false` zurückgeben.

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` sollte `true` zurückgeben.

```js
assert.equal(isSelfDescribing(3211000), true);
```

# --seed--

## --seed-contents--

```js
function isSelfDescribing(n) {

}
```

# --solutions--

```js
function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }

    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}
```
