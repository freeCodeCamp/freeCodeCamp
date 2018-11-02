---
title: Use class Syntax to Define a Constructor Function
---
## Use class Syntax to Define a Constructor Function


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
In this lesson, you are defining the Vegetable object using class syntax.

## Hint 1:

Create the class called `Vegetable`. It will contain the necessary details about the `Vegetable` object.

## Hint 2:

Put a constructor with a parameter called `name`, and set it to `this.name`.

## Spoiler Alert - Solution Ahead!

## Solution:

```javascript
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
```

=======

Spoiler Warning: here is a basic solution to this challenge in case you're stuck.

```javascript
function makeClass() {
  "use strict";
  /* Alter code below this line */

   class Vegetable {
     constructor(Vegetable){
       this.Vegetable = Vegetable;
  
     }
   }

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

