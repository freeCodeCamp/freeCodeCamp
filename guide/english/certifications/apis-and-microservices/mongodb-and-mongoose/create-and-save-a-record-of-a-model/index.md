---
title: Create and Save a Record of a Model
---
# Create and Save a Record of a Model

## Hints

### Hint #1

You need to do the following:
1. Create a model of a person, using the schema from exercise 2
2. Create a new person, including their attributes
3. Save the new person you created
4. Put your new person inside the `createAndSavePerson` function

## Solutions

<details><summary>Solution #1 (Click to Show/Hide)</summary>

Code for `myApp.js`
  
```javascript
/** 1) Install & Set up mongoose */

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

/** 2) Create a 'Person' Model */
var personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

/** 3) Create and Save a Person */
var Person = mongoose.model('Person', personSchema);

var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["vodka", "air"]});

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};
```
</details>
