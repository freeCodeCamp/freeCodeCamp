---
id: 66edcd0ecb4b25dc64a34804
title: JavaScript Objects Quiz
challengeType: 8
dashedName: quiz-javascript-objects
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following does NOT describe an object in JavaScript?

#### --distractors--

A collection of key-value pairs.

---

A container for properties and methods.

---

A non-primitive data type.

#### --answer--

A primitive data type.

### --question--

#### --text--

Which of the following object definitions is invalid?

#### --distractors--

`const book = { "pages": 255 };`

---

`const car = { year: 2025 };`

---

`const person = { "name": "nora" };`

#### --answer--

`const product = { color: blue };`

### --question--

#### --text--

How can you access the `job` property of this `person` object?

```js
let person = { job: "Software Developer" };
```

#### --distractors--

`person -> job`

---

`person#job`

---

`person[job]`

#### --answer--

`person.job`

### --question--

#### --text--

How can you access the `street` property of the `person` object below?

```js
const person = {
  address: {
    street: "sample-street"
  }
};
```

#### --distractors--

`person -> address -> street`

---

`person#address#street`

---

`person[address.street]`

#### --answer--

`person["address"]["street"]`

### --question--

#### --text--

Which of these property keys can only be accessed using bracket notation?

#### --distractors--

A property key that is known and static.

---

A property key that is nested within multiple levels of an object.

---

A property key that might not exist in the object.

#### --answer--

A property key that is dynamic.

### --question--

#### --text--

Which of the following correctly uses destructuring to access the `name` property of the `person` object below?

```js
const person = { name: "John" }
```

#### --distractors--

`const name = person.name;`

---

`const name = person["name"];`

---

`const { ...name } = person;`

#### --answer--

`const { name } = person;`

### --question--

#### --text--

Which of the following correctly uses destructuring to access the `flour` property of the `recipe` object below?

```js
const recipe = {
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};
```

#### --distractors--

`const flour = recipe.ingredients.flour;`

---

`const flour = recipe["ingredients"]["flour"];`

---

`const { ingredients: flour } = recipe;`

#### --answer--

`const { ingredients: { flour } } = recipe;`

### --question--

#### --text--

How can you assign a default value to a property key when using destructuring in JavaScript?

#### --distractors--

`const key = object.key && "defaultValue";`

---

`const key = object.key || "defaultValue";`

---

`const { key: "defaultValue" } = object;`

#### --answer--

`const { key = "defaultValue" } = object;`

### --question--

#### --text--

How can you check if a `car` object has a `year` property?

#### --distractors--

`year.hasProperty("car");`

---

`car.hasProperty("year");`

---

`car.hasOwnProperty(year);`

#### --answer--

`car.hasOwnProperty("year");`

### --question--

#### --text--

What is an object method?

#### --distractors--

A string associated with an object.

---

An array associated with an object.

---

A number associated with an object.

#### --answer--

A function associated with an object.

### --question--

#### --text--

How can you call the `add` method of this `calculator` object to add the numbers `10` and `7`?

```js
const calculator = {
  add: function(a, b) {
    return a + b;
  }
};
```

#### --distractors--

`calculator#add(10, 7);`

---

`calculator.call(add(10, 7));`

---

`add.calculator(10, 7);`

#### --answer--

`calculator.add(10, 7);`

### --question--

#### --text--

Which operator removes a property from an object?

#### --distractors--

`remove`

---

`erase`

---

`discard`

#### --answer--

`delete`

### --question--

#### --text--

How can you check if a `score` property exists in a `player` object?

#### --distractors--

`player in "score"`

---

`player in score`

---

`score in player`

#### --answer--

`"score" in player`

### --question--

#### --text--

How can you create a new empty object in JavaScript?

#### --distractors--

`object() new`

---

`new object()`

---

`Object() new`

#### --answer--

`new Object()`

### --question--

#### --text--

What is the correct syntax for using optional chaining in JavaScript?

#### --distractors--

`object?key`

---

`object.["key"]`

---

`object.?key`

#### --answer--

`object?.key`

### --question--

#### --text--

What is optional chaining used for in JavaScript?

#### --distractors--

Used to define variables with default values.

---

Used to define optional methods within an object that may or may not be called.

---

Used to write more concise code by chaining multiple method calls together in a single statement.

#### --answer--

Used to safely access properties of an object that might be `null` or `undefined`.

### --question--

#### --text--

What method is used to convert a JavaScript object into a JSON string?

#### --distractors--

`Stringify.toJSON()`

---

`JSON.toObject()`

---

`Object.toJSON()`

#### --answer--

`JSON.stringify()`

### --question--

#### --text--

What method converts a JSON string back into a JavaScript object?

#### --distractors--

`JSON.toObject()`

---

`JSON.convert()`

---

`JSON.object()`

#### --answer--

`JSON.parse()`

### --question--

#### --text--

Which one of these options accesses the `color` property of a `toy` object using bracket notation?

#### --distractors--

`toy.color`

---

`toy[color]`

---

`color[toy]`

#### --answer--

`toy["color"]`

### --question--

#### --text--

How can you access the `home` phone of this `learner` object in JavaScript using dot notation?

```js
const learner = {
  name: "Nora",
  age: 45,
  contact: {
    email: "nora@email.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};
```

#### --distractors--

`learner.name.phone.home`

---

`learner.email.work`

---

`learner.contact.home`

#### --answer--

`learner.contact.phone.home`

