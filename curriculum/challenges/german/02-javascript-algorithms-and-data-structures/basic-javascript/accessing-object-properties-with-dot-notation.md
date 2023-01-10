---
id: 56533eb9ac21ba0edf2244c7
title: Zugriff auf Objekteigenschaften mithilfe der Punktschreibweise
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

Es gibt zwei Möglichkeiten, auf die Eigenschaften eines Objekts zuzugreifen: die Punktschreibweise (`.`) und die Klammerschreibweise (`[]`), ähnlich wie bei einem Array.

Die Punktschreibweise verwendest du, wenn du den Namen der Eigenschaft, auf die du zugreifen willst, schon vorher kennst.

Hier ist ein Beispiel für die Verwendung der Punktschreibweise (`.`), um die Eigenschaft eines Objekts zu lesen:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` hätte einen String mit dem Wert `val1` und `prop2val` einen String mit dem Wert `val2`.

# --instructions--

Lies die Eigenschaftswerte von `testObj` in Punktschreibweise ein. Setze die Variable `hatValue` gleich der Eigenschaft `hat` des Objekts und setze die Variable `shirtValue` gleich der Eigenschaft `shirt` des Objekts.

# --hints--

`hatValue` sollte ein String sein

```js
assert(typeof hatValue === 'string');
```

Der Wert von `hatValue` sollte der String `ballcap` sein

```js
assert(hatValue === 'ballcap');
```

`shirtValue` sollte ein String sein

```js
assert(typeof shirtValue === 'string');
```

Der Wert von `shirtValue` sollte der String `jersey` sein

```js
assert(shirtValue === 'jersey');
```

Du solltest die Punktschreibweise zweimal verwenden

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
