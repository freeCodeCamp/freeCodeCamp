---
id: 567af2437cbaa8c51670a16c
title: Objekte auf Eigenschaften prüfen
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Manchmal ist es nützlich zu prüfen, ob die Eigenschaft eines bestimmten Objekts existiert oder nicht. Wir können die Methode `.hasOwnProperty(propname)` von Objekten verwenden, um festzustellen, ob das Objekt den angegebenen Eigenschaftsnamen enthält. `.hasOwnProperty()` gibt `true` oder `false` zurück, wenn die Eigenschaft gefunden wird oder nicht.

**Beispiel**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

Die erste `hasOwnProperty` gibt `true` zurück, während die zweite `false` zurückgibt.

# --instructions--

Ändere die Funktion `checkObj` so, dass sie prüft, ob ein an die Funktion übergebenes Objekt (`obj`) eine bestimmte Eigenschaft enthält (`checkProp`). Wenn die Eigenschaft gefunden wird, wird der Wert der Eigenschaft zurückgegeben. Wenn nicht, wird `"Not Found"` zurückgegeben.

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
