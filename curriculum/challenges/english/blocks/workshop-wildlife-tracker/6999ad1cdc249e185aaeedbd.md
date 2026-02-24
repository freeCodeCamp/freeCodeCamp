---
id: 6999ad1cdc249e185aaeedbd
title: Step 7
challengeType: 1
dashedName: step-7
---

# --description--

In this step, you will create a function that adds a new property to an object.

Here is an example of adding a property inside a function:

```js
const cat = {
  species: "Cat"
};

const addColor = (pet, color) => {
  pet.color = color;
  return pet;
}

console.log(addColor(cat, "White")); 
// {
//   species: 'Cat',
//   color: 'White'
// }
```

In this example, the `color` property is added to the `cat` object.

Now create a function called `addHabitat`.

The function should take two parameters: `animal` and `habitat`.

Inside the function, add a new property called `habitat` to the `animal` object.

Set its value equal to the `habitat` parameter.

Return the updated `animal` object.

After creating the function, use `console.log` to call `addHabitat(tiger, "Rainforest")` so you can see the updated `tiger` object in the console.

# --hints--

You should create a function named `addHabitat`.

```js
assert.exists(addHabitat);
assert.isFunction(addHabitat);
```

The `addHabitat` function should have two parameters.

```js
assert.lengthOf(addHabitat, 2);
```

Calling `addHabitat(tiger, "Rainforest")` should add a habitat property to tiger.

```js
const updatedTiger = addHabitat(tiger, "Rainforest");

assert.deepEqual(updatedTiger, {
  species: "Tiger",
  age: 5,
  isEndangered: true,
  habitat: "Rainforest"
});
```

`addHabitat` should use the function parameters and work with any object.

```js
const lion = { species: "Lion" };
const updatedLion = addHabitat(lion, "Savanna");

assert.strictEqual(updatedLion.habitat, "Savanna");
```

# --seed--

## --seed-contents--

```js
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

--fcc-editable-region--

--fcc-editable-region--
```
