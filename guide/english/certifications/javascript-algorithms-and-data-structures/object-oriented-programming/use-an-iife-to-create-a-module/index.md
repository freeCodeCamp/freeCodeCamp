---
title: Use an IIFE to Create a Module
---
# Use an IIFE to Create a Module


---
## Hints

### Hint 1

Both `Mixin`'s must be wrapped in a new `funModule` so an esay starting point is to comment out all the code so far.

```javascript
/*let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
*/
```

Then below start writing your new `funModule` code. Inside the new module, you need to write a return statement to return both `Mixin` code blocks. Simply copy both original `Mixin` code blocks into your new module code, but remember to seperate both mixins with a `,`


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();
```

</details>

<details><summary>Solution 1 (Click to Show/Hide)</summary>

If using ES6, the same can be rewritten as:

```javascript
let funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => { true; };
    },
    singMixin: (obj) => {
      obj.sing = () => { console.log("Singing to an awesome tune"); }
    }

  }
})();
```

</details>
