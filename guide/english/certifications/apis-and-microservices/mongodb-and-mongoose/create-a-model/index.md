---
title: Create a Model
---

# Create a Model


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

There are 3 things to do in this challenge. You can click each item to see the code.

**Assign Mongoose Schema to a variable**
This is not necessary but will make your code easier to read.

```javascript
const Schema = mongoose.Schema;
```

See the [Mongoose docs](https://mongoosejs.com/docs/guide.html) first where is a lot of useful stuff. 
When you are building schema you can use either of three options for name validation
```

name: String
name: {type: String}
name: {type: String, required: true} //preferred
```

**Create Person schema.**

```javascript
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
```
**Note**: If you choose to skip the first step, you have to use `mongoose.Schema` instead of `Schema`.

**Create Person model from the schema.**

```javascript
const Person = mongoose.model("Person", personSchema);
```
</details>

