---
id: 567af2437cbaa8c51670a16c
title: Objekte auf Eigenschaften prüfen
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Um zu prüfen, ob eine Eigenschaft eines bestimmten Objekts existiert oder nicht, kannst du die Methode `.hasOwnProperty()` verwenden. `someObject.hasOwnProperty(someProperty)` gibt `true` oder `false` zurück, je nachdem, ob die Eigenschaft auf dem Objekt gefunden wird oder nicht.

**Beispiel**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

Der erste `checkForProperty`-Funktionsaufruf gibt `true` zurück, während der zweite `false` zurückgibt.

# --instructions--

Ändere die Funktion `checkObj` so, dass sie prüft, ob das Objekt, das an den Funktionsparameter `obj` übergeben wurde, die spezifische Eigenschaft enthält, die an den Funktionsparameter `checkProp` übergeben wurde. Wenn die an `checkProp` übergebene Eigenschaft auf `obj` gefunden wird, wird der Wert dieser Eigenschaft zurückgegeben. Wenn nicht, wird `Not Found` zurückgegeben.

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` sollte den String `pony` zurückgeben.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` sollte den String `kitten` zurückgeben.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` sollte den String `Not Found` zurückgeben.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` sollte den String `Seattle` zurückgeben.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` sollte den String `Not Found` zurückgeben.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` sollte den String `Not Found` zurückgeben.

```js
assert(checkObj({ pet: 'kitten', bed: 'sleigh' }, 'gift') === 'Not Found');
```

# --seed--

## --seed-contents--

```js
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
```

# --solutions--

```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```
