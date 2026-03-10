---
id: 670e4f45f7116c0f216a5177
title: Step 6
challengeType: 1
dashedName: step-6
---

# --description--

Before you move on, you should practice how to access properties from an object.

You can use either dot (`.`) or bracket (`[]`) notation to do this. Here's an example:

```js
const person = {
  name: "John",
  age: 30,
  job: "Software Engineer"
};

console.log(person.name); // John
console.log(person['age']);  // 30
```

Access the `name` property of `recipe1`, and assign it to the variable `recipe1Name`.

Next, access the `cookingTime` property of `recipe2` and assign it to the variable `recipe2CookingTime`.

Finally, access the `ingredients` property of `recipe3` and assign it to the variable `recipe3Ingredients`.

Make sure all the variables you created are logged to the console.

# --hints--

You should create a `recipe1Name` variable.

```js
assert.isDefined(recipe1Name);
```

You should assign the value of the `name` property of `recipe1` to your `recipe1name` variable.

```js
assert.strictEqual(recipe1Name, recipe1.name);
```

You should log `recipe1Name` to the console.

```js
assert.match(code, /console\.log\(\s*recipe1Name\s*\)/);
```

You should create a `recipe2CookingTime` variable.

```js
assert.isDefined(recipe2CookingTime);
```

You should assign the value of the `cookingTime` property of `recipe2` to your `recipe2CookingTime` variable.

```js
assert.strictEqual(recipe2CookingTime, recipe2.cookingTime);
```

You should log `recipe2CookingTime` to the console.

```js
assert.match(code, /console\.log\(recipe2CookingTime\)/);
```

You should create a `recipe3Ingredients` variable.

```js
assert.isDefined(recipe3Ingredients);
```

You should assign the value of the `ingredients` property of `recipe3` to your `recipe3Ingredients` variable.

```js
assert.strictEqual(recipe3Ingredients, recipe3.ingredients);
```

You should log `recipe3Ingredients` to the console.

```js
assert.match(code, /console\.log\(recipe3Ingredients\)/);
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

--fcc-editable-region--
```
