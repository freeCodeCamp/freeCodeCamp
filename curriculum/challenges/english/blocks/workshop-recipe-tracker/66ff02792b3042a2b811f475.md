---
id: 66ff02792b3042a2b811f475
title: Step 3
challengeType: 1
dashedName: step-3
---

# --description--

Add the following properties to the `recipe1` object:

| Key | Value   |
| ----------- | ------- |
|`cookingTime`|`22`|
|`totalIngredients`|`null`|
|`difficultyLevel`|`""`|

The properties with `null` and empty string values will be updated later after you calculate them.

# --hints--

Your `recipe1` object should have a `cookingTime` property.

```js
assert.property(recipe1, "cookingTime");
```

Your `cookingTime` property should be set to `22`.

```js
assert.equal(recipe1.cookingTime, 22);
```

Your `recipe1` object should have a `totalIngredients` property.

```js
assert.property(recipe1, "totalIngredients");
```

Your `totalIngredients` property should be set to `null`.

```js
assert.isNull(recipe1.totalIngredients);
```

Your `recipe1` object should have a `difficultyLevel` property.

```js
assert.property(recipe1, "difficultyLevel");
```

Your `difficultyLevel` property should be set to an empty string.

```js
assert.deepEqual(recipe1.difficultyLevel, "");
```

# --seed--

## --seed-contents--

```js
const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
--fcc-editable-region--
  
--fcc-editable-region--
};
```
