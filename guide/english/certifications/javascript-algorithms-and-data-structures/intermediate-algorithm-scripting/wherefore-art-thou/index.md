---
title: Wherefore Art Thou
---

# Wherefore Art Thou

---
## Problem Explanation

Write an algorithm that will take an `array` for the first argument and return an `array` with all the `object`s that matches all the properties and values in the `Object` passed as second parameter.

#### Relevant Links

*   <a href= 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for' target='_blank' rel='nofollow'>For Loops</a>
*   <a href= 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter' target='_blank' rel='nofollow'>Array.prototype.filter()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>
<a href= 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys' target='_blank' rel='nofollow'>Object.keys()</a>


---
## Hints

### Hint 1

You may use `for` loop or the `Array.prototype.filter` method.


### Hint 2

Try to use the `Object.prototype.hasOwnProperty` method to know if the property name exists in an object (as its own property).


### Hint 3

Check equivalence of `Object` in `collection` with `Object` passed as second parameter to `whatIsInAName` function.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```
```

#### Code Explanation

*   We filter through the array using `.filter()`.
*   Using a `for loop` we loop through each item in the object.
*   We use a `if statement` to check if the object in the collection doesn't have the key and the property value doesn't match the value in source.
*   We return `false` if the above `if statement` is correct. Otherwise, we return `true`;

#### Relevant Links

*   <a>For Loops</a>
*   <a>Array.prototype.filter()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```

#### Code Explanation

*   We filter through the collection using `.filter()`.
*   Next, we return a `Boolean` value for the `.filter()` method.
*   Finally, we reduce to `Boolean` value to be returned for the `.every()` method.

#### Relevant Links

*   <a>Array.prototype.filter()</a>
*   <a>Array.prototype.every()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>
</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>

```javascript
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```

#### Code Explanation

*   We start by filtering through `collection` using `Array.filter()`.
*   Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
*   Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
*   This single Boolean will be used to filter through the collection.

#### Relevant Links

*   <a>Array.prototype.filter()</a>
*   <a>Array.prototype.reduce()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank' rel='nofollow'>Object.hasOwnProperty()</a>

</details>