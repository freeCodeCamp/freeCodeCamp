---	
title: Generate Random Whole Numbers with JavaScript	
---

## Generate Random Whole Numbers with JavaScript

Here’s the setup:

```javascript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.
  Math.floor(Math.random() * 10);
  return Math.floor(Math.random());
}
```

We need to use ```Math.floor()``` with ```Math.random()``` to generate and return a random whole number between 0 and 9.
Putting ```Math.floor()``` and ```Math.random()``` together, this is what our code looks like:

```javascript
Math.floor(Math.random() * 10);
```

And we need change the value of ```return```:

```javascript
return Math.floor(Math.random());
```

Here’s a full solution:

```javascript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random()*10);
}
```
