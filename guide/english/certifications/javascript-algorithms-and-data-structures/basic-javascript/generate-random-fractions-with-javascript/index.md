---
title: Generate Random Fractions with JavaScript
---
# Generate Random Fractions with JavaScript

Random numbers are useful for creating random behavior.

JavaScript has a `Math.random()` function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus `Math.random()` can return a 0 but never quite return a 1.

## Note

Like Storing Values with the Equal Operator, all function calls will be resolved before the return executes, so we can return the value of the `Math.random()` function.

## Instructions

Change randomFraction to return a random number instead of returning 0.

## **Warning !!!**

### **Spoiler Alert !!**

A solution to follow:

    function randomFraction() {
      // Only change code below this line.
      var result = 0;
      // Math.random() can generate 0. We don't want to     return a 0,
      // so keep generating random numbers until we get one     that isn't 0
      while (result === 0) {
        result = Math.random();
      }

      return result;  
      // Only change code above this line.
    }
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
