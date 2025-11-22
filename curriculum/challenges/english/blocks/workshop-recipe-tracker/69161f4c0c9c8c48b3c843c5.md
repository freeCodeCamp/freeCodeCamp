---
id: 69161f4c0c9c8c48b3c843c5
title: Step 5
challengeType: 1
dashedName: step-5
---

# --description--

Create a `recipe3` object with the following properties and values:

|Key|Value|
|-----------|-------|
|`name`|`Vegetable Stir Fry`|
|`ingredients`|`["broccoli", "carrot", "bell pepper"]`|
|`cookingTime`|`15`|
|`totalIngredients`|`null`|
|`difficultyLevel`|`""`|

# --hints--

You should create an object named `recipe3`.

```js
assert.isObject(recipe3);
```

Your `recipe3` object should have a `name` property.

```js
assert.property(recipe3, "name");
```

Your `name` property should be set to `Vegetable Stir Fry`.

```js
assert.equal(recipe3.name, "Vegetable Stir Fry");
```

Your `recipe3` object should have an `ingredients` property.

```js
assert.property(recipe3, "ingredients");
```

Your `ingredients` property should have an array value.

```js
assert.isArray(recipe3.ingredients);
```

The array value of your `ingredients` property should have `broccoli`, `carrot` and `bell pepper` in it.

```js
assert.deepEqual(recipe3.ingredients, ["broccoli", "carrot", "bell pepper"]);
```

Your `recipe3` object should have a `cookingTime` property.

```js
assert.property(recipe3, "cookingTime");
```

Your `cookingTime` property value should be a number.

```js
assert.isNumber(recipe3.cookingTime);
```

Your `cookingTime` property should be set to `15`.

```js
assert.equal(recipe3.cookingTime, 15);
```

Your `recipe3` object should have a `totalIngredients` property.

```js
assert.property(recipe3, "totalIngredients");
```

Your `totalIngredients` property should be set to `null`.

```js
assert.isNull(recipe3.totalIngredients);
```

Your `recipe3` object should have a `difficultyLevel` property.

```js
assert.property(recipe3, "difficultyLevel");
```

Your `difficultyLevel` property should be set to an empty string.

```js
assert.deepEqual(recipe3.difficultyLevel, "");
```

# --seed--

## --seed-contents--

```js
const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

--fcc-editable-region--

--fcc-editable-region--
```
