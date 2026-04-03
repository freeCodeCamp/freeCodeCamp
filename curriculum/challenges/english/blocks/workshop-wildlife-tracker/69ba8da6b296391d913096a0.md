---
id: 69ba8da6b296391d913096a0
title: Step 5
challengeType: 1
dashedName: step-5
---

# --description--

Now create a second object called `elephant`.

Add the following properties:

- `species` with the value `"Elephant"`
- `age` with the value `10`
- `isEndangered` with the value `true`

# --hints--

You should create a variable named `elephant`.

```js
assert.exists(elephant);
```

`elephant` should have a `species` property equal to `"Elephant"`.

```js
assert.propertyVal(elephant, "species", "Elephant");
```

`elephant` should have an `age` property equal to `10`.

```js
assert.propertyVal(elephant, "age", 10);
```

`elephant` should have an `isEndangered` property equal to `true`.

```js
assert.propertyVal(elephant, "isEndangered", true);
```

# --seed--

## --seed-contents--

```js
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

--fcc-editable-region--

--fcc-editable-region--
```
