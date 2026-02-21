---
id: 6999ad1cdc249e185aaeedbd
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

Now create a function called `addHabitat`.

The function should take two parameters: `animal` and `habitat`.

Inside the function, add a new property called `habitat` to the `animal` object.

Set its value equal to the `habitat` parameter.

Return the updated `animal` object.

Here is an example of adding a property inside a function:

```js
const cat = {
  species: "Cat"
};

function addColor(pet, color) {
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

After creating the function, use `console.log` to call `addHabitat(tiger, "Rainforest")` so you can see the updated `tiger` object in the console.

# --hints--

`addHabitat` should be a function.

```js
assert.isFunction(addHabitat);
```

Calling `addHabitat(tiger, "Rainforest")` should add a habitat property to tiger.

```js
addHabitat(tiger, "Rainforest");
assert.property(tiger, "habitat");
```

`tiger.habitat` should equal "Rainforest".

```js
addHabitat(tiger, "Rainforest");
assert.strictEqual(tiger.habitat, "Rainforest");
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
