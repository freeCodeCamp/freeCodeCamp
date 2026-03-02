---
id: 66fbcf750a62784cf11f5635
title: Step 11
challengeType: 1
dashedName: step-11
---

# --description--

You can now fill in each item of the `recipes` array with values for the `totalIngredients` and `difficultyLevel` properties.

For now, access the `totalIngredients` and `difficultyLevel` of `recipe1` and set them to the appropriate results of function calls and arguments.

# --hints--

You should access the `totalIngredients` property of `recipe1`.

```js
assert.isNotNull(recipe1.totalIngredients);
```

You should assign the result of calling `getTotalIngredients` with `recipe1.ingredients` to the `totalIngredients` property of `recipe1`.

```js
assert.strictEqual(recipe1.totalIngredients, getTotalIngredients(recipe1.ingredients));
```

You should access the `difficultyLevel` property of `recipe1`.

```js
assert.isNotEmpty(recipe1.difficultyLevel);
```

You should assign the result of calling `getDifficultyLevel` with `recipe1.cookingTime` to the `cookingTime` property of `recipe1`.

```js
assert.strictEqual(recipe1.difficultyLevel, getDifficultyLevel(recipe1.cookingTime));
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

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

--fcc-editable-region--

--fcc-editable-region--
```
