---
id: 6999ad1cdc249e185aaeedbd
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Now create a function called `addHabitat`.

The function should take two parameters: `animal` and `habitat`.

Inside the function, add a new property called `habitat` to the `animal` object and set it equal to the `habitat` parameter.

Return the updated `animal` object.

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

function getSpecies(animal) {
  return animal.species;
}

--fcc-editable-region--

--fcc-editable-region--
```
