---
title: Use getters and setters to Control Access to an Object
---
## Use getters and setters to Control Access to an Object

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Getters and setters are critical parts of a class/object. They allow you to control their attributes from the outside. They will become more prominent when you get started with the Object-Oriented Programming unit (coming up!). For now, this exercise shows you how to manipulate them with ES6.

## Hint 1:

Create the class, Thermostat. You're going to put your constructor, getter, and setter in here.

## Hint 2:

Give the constructor a parameter (which you can name anything you want). Set the parameter to an attribute of the same name. Remember, you are initially setting things in Farenheit temperature.

## Hint 3:

Create a get method that converts the Farenheit attribute to Celsius. Use the formula given to you.

## Hint 4:

Create a set method of the same name as the get method. It should have a parameter that accepts celsius temperature. Convert it to farenheit, and set it to the attribute.

## Spoiler Alert - Solution Ahead!

## Solution

```javascript
function makeClass() {
  "use strict";
  /* Alter code below this line */
  
  class Thermostat{
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  
  /* Alter code above this line */
  return Thermostat;
}
```
