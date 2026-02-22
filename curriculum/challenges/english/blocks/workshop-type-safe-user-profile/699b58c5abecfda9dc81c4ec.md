---
id: 699b58c5abecfda9dc81c4ec
title: Step 3
challengeType: 1
dashedName: step-3
---

# --description--

Right now the `profile` object only has three properties. But it would be nice to have a few more. 

Add a property called `mood` to the `profile` object. Its value should be `null`.

Remember you can add properties to an object by using dot notation or bracket notation like this:

```js
const person = {
  name: "Alice",
  age: 25
};

// Adding a new property using dot notation
person.city = "New York";

// Adding a new property using bracket notation
person["job"] = "Engineer";
```

# --hints--

Your `profile` object should have a `mood` property.

```js
assert.property(profile, "mood");
```

Your `mood` property should have a value of `null`.

```js
assert.propertyVal(profile, "mood", null);
```

# --seed--

## --seed-contents--

```ts
const profile = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
}

--fcc-editable-region--

--fcc-editable-region--

console.log(profile);
```
