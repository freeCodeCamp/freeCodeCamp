---
id: 699b58c5abecfda9dc81c4ec
title: Step 3
challengeType: 1
dashedName: step-3
---

# --description--

Right now the `profile` object only has three properties. But it would be nice to have a few more. 

Add a property called `mood` to the `profile` object. Its value should be `null`.

# --hints--

Your `profile` object should have a `mood` property.

```js
assert.property(profile, "mood");
```

Your `mood` property should have a value of `null`.

```js
assert.isNull(profile?.mood);
```

# --seed--

## --seed-contents--

```ts
--fcc-editable-region--
const profile = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,

}
--fcc-editable-region--

console.log(profile);
```
