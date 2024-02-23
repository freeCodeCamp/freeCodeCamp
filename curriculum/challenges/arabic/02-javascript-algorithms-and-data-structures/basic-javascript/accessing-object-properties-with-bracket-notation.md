---
id: 56533eb9ac21ba0edf2244c8
title: الوصول لخصائص (Properties) الكائن (Object) بواسطة استخدام dot و علامات الأقواس
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

الطريقة الثانية للوصول إلى خصائص الكائن هي استخدام علامات الأقواس (`[]`). في حال إن خاصية الكائن الذي تحاول الوصول إليه يحتوي على مسافة في اسمه, سوف تحتاج إلى استخدام علامات الأقواس (bracket notation).

على أية حال, فانه يمكنك أستخدام bracket notation على خصائص الكائن من دون مسافات.

هذا مثال على استخدام علامات الأقواس لقراءة خاصية الكائن:

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

سوف يحتوي `myObj["Space Name"]` على نص `Kirk`, و سوف يحتوي `myObj['More Space']` على نص `Spock`, و سوف يحتوي `myObj["NoSpace"]` على نص `USS Enterprise`.

لاحظ يجب أن تكون أسماء الخاصية مع المسافات في علامتا التنصيص (أحاديا أو ثنائيا).

# --instructions--

أقراء قيم خصائص `an entree` و `the drink` في `testObj` باستخدام علامات الأقواس وعينهم إلى `entreeValue` و `drinkValue` على التوالي.

# --hints--

يجب أن يكون `entreeValue` مقطع نصي

```js
assert(typeof entreeValue === 'string');
```

يجب ان يكون قيمة `entreeValue` نص `hamburger`

```js
assert(entreeValue === 'hamburger');
```

يجب أن تكون `drinkValue` نص

```js
assert(typeof drinkValue === 'string');
```

يجب أن تكون قيمة `drinkValue` نص `water`

```js
assert(drinkValue === 'water');
```

يجب عليك أستخدام علامات الأقواس مرتين

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
