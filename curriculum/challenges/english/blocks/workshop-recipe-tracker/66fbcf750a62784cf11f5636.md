---
id: 66fbcf750a62784cf11f5636
title: Step 12
challengeType: 1
dashedName: step-12
---

# --description--

Repeat the process for the `totalIngredients` and `difficultyLevel` properties of `recipe2` and `recipe3`.

# --hints--

You should access the `totalIngredients` property of `recipe2`.

```js
assert.isNotNull(recipe2.totalIngredients);
```

You should assign the result of calling `getTotalIngredients` with `recipe2.ingredients` to the `totalIngredients` property of `recipe2`.

```js
assert.strictEqual(recipe2.totalIngredients, getTotalIngredients(recipe2.ingredients));
```

You should access the `difficultyLevel` property of `recipe2`.

```js
assert.isNotEmpty(recipe2.difficultyLevel);
```

You should assign the result of calling `getDifficultyLevel` with `recipe2.cookingTime` to the `difficultyLevel` property of `recipe2`.

```js
assert.strictEqual(recipe2.difficultyLevel, getDifficultyLevel(recipe2.cookingTime));
```

You should access the `totalIngredients` property of `recipe3`.

```js
assert.isNotNull(recipe3.totalIngredients);
```

You should assign the result of calling `getTotalIngredients` with `recipe3.ingredients` to the `totalIngredients` property of `recipe3`.

```js
assert.strictEqual(recipe3.totalIngredients, getTotalIngredients(recipe3.ingredients));
```

You should access the `difficultyLevel` property of `recipe3`.

```js
assert.isNotEmpty(recipe3.difficultyLevel);
```

You should assign the result of calling `getDifficultyLevel` with `recipe3.cookingTime` to the `difficultyLevel` property of `recipe3`.

```js
assert.strictEqual(recipe3.difficultyLevel, getDifficultyLevel(recipe3.cookingTime));
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

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

--fcc-editable-region--

--fcc-editable-region--
```
