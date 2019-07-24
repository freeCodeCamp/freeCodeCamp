---
title: Record Collection
---

# Record Collection

---
## Problem Explanation

You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.

Write a function which takes an **id**, a property (**prop**), and a **value**.

For the given **id** in **collection**:

If **value** is non-blank (**value !== ""**), then update or set the **value** for the **prop**.

If the **prop** is **"tracks"** and **value** is non-blank, check to see if the given element in the array has the property of "tracks". If the element has the property of "tracks", push the **value** onto the end of the "tracks" array. If the element does not have the **property**, create the property and value pair.

If **value** is blank, delete that **prop**.

Always return the entire collection object.

*   Change the code below `// Only change code below this line` and up to `// Alter values below to test your code`.
*   Take note that you are editing the inside of the `updateRecords` function.
*   For the given **id** parameter, which is associated to the **collection** object:
    *   If the **value** parameter isn't an empty string, update (or set) the **value** parameter for the **prop** parameter.
    *   If the **prop** parameter is equal to `"tracks"` and the **value** isn't an empty string, push the **value** onto the end of the **tracks** array.
    *   If **value** is an empty string, delete that **prop** from the object.
*   Finally, return the **collection** object.

### Hint 1

Use an `else if` statement to check the needed steps.

### Hint 2

The second step listed in the instructions should be first in your `else if` statement.


### Hint 3

To access the value of a key in this object, you will use `collection[id][prop]`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}
```

#### Code Explanation

*   First checks if **prop** is equal to **tracks** AND if **value** isn't a blank string. If both tests pass, **value** is pushed into the **tracks** array.
*   If that first check doesn't pass, it next checks only if **value** isn't a blank string. If that test passes, either a new key (**prop**) and value (**value**) are added to the object, or an existing key is updated if the **prop** already exists.
*   If both these checks fail (meaning **value** must be an empty string), then the key (**prop**) is removed from the object.

**Example Run**

*   `updateRecords(5439, "artist", "ABBA");` runs.
*   **prop** is equal to "artist", not "tracks", so the first part of the `else if` statement fails.
*   **value** is not a blank string, so the second part of the else if statement passes.
*   `artist: "ABBA"` is added to the `5439` `id`.


#### Relevant Links

*   [fCC's challenge: Accessing Objects Properties with Bracket Notation](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/)
*   [fCC's challenge: Add New Properties to a JavaScript Object](http://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object)
*   [fCC's challenge: Delete Properties from a JavaScript Object](http://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object)
*   [fCC's challenge: Accessing Nested Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects/)
*  ["Array.prototype.push()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*  ["delete operator" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

</details>