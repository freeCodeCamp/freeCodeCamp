---
id: 66fbcf750a62784cf11f5630
title: Step 7
challengeType: 1
dashedName: step-7
---

# --description--

You should now push the three objects into the `recipes` array. To do this, you can use the `push()` method.

Use the `push()` method to push all the recipe objects into the `recipes` array. Make sure to push `recipe1`, `recipe2`, and `recipe3` in that order.

Also delete the `recipe1Name`, `recipe2CookingTime` and `recipe3Ingredients` variables, and the `console.log` statements which log those variables.

# --hints--

You should push all the recipe objects into the `recipes` array. Make sure to push them in the order they are declared.

```js
assert.deepEqual(recipes, [recipe1, recipe2, recipe3]);
```

You should remove the `recipe1Name` variable.

```js
assert.throws(() => recipe1Name, ReferenceError);
```

You should remove the `console.log(recipe1Name);` statement.

```js
assert.notMatch(__helpers.removeJSComments(code), /console\s*\.\s*log\s*\(\s*recipe1Name\s*\)\s*;?/);
```

You should remove the `recipe2CookingTime` variable.

```js
assert.throws(() => recipe2CookingTime, ReferenceError);
```

You should remove the `console.log(recipe2CookingTime);` statement.

```js
assert.notMatch(__helpers.removeJSComments(code), /console\s*\.\s*log\s*\(\s*recipe2CookingTime\s*\)\s*;?/);
```

You should remove the `recipe3Ingredients` variable.

```js
assert.throws(() => recipe3Ingredients, ReferenceError);
```

You should remove the `console.log(recipe3Ingredients);` statement.

```js
assert.notMatch(__helpers.removeJSComments(code), /console\s*\.\s*log\s*\(\s*recipe3Ingredients\s*\)\s*;?/);
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

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

--fcc-editable-region--
const recipe1Name = recipe1.name;
console.log(recipe1Name);

const recipe2CookingTime = recipe2.cookingTime;
console.log(recipe2CookingTime);

const recipe3Ingredients = recipe3.ingredients;
console.log(recipe3Ingredients);
--fcc-editable-region--
```
