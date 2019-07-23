---
title: Create Many Records with model.create()
---
# Create Many Records with model.create()

## Hints

* Create an array of objects. Each object has a name, age and an array of favorite foods. Use the variable name `arrayOfPeople`.
* Create your many records (ie. create your people) inside the callback for `createManyPeople`. 
* Use `Model.create()` to create many records. You should replace `Model` with the name of the model you defined in the previous section. Most likely you called your model `Person`.
* The `Model.create` function requires a callback, similar to the `person.save` function you used in the previous section.

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
var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["vodka", "air"]});
janeFonda.save(function(err, janeFonda) {
  if (err) return console.error(err);
});
var createAndSavePerson = function(done) {
  done(null, janeFonda);
};

/** 4) Create many People with `Model.create()` */
var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};
```

</details>
