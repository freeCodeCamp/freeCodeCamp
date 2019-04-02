---
title: Function.prototype.bind
---
## Function.prototype.bind

`bind` is a method on the prototype of all functions in JavaScript. 
It allows you to create a new function from an existing function, change the new function's `this` context, and provide any arguments you want the new function to be called with. 
The arguments provided to `bind` will precede any arguments that are passed to the new function when it is called.


### Using `bind` to change `this` in a function

The first argument provided to `bind` is the `this` context the function will be bound to. 
If you do not want to change the value of `this` pass `null` as the first argument.

You are tasked with writing code to update the number of attendees as they arrive at a conference.
You create a simple webpage that has a button that, when clicked, increments the `numOfAttendees`
property on the confrence object. You use jQuery to add a click handler to your button, but after clicking the button the confrence object has not changed. Your code might look something like this.

```javascript
var nodevember = {
  numOfAttendees: 0,
  incrementNumOfAttendees: function() {
    this.numOfAttendees++;
  }
  // other properties
};

$('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees);
```

This is a common problem when working with jQuery and JavaScript. When you click the button the `this` keyword in the method you passed to jQuery's `on` method references the button and not the conference object. You can bind the `this` context of your method to solve the problem.

```javascript
var nodevember = {
  numOfAttendees: 0,
  incrementNumOfAttendees: function() {
    this.numOfAttendees++;
  }
  // other properties
};

$('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember));
```

Now when the button is clicked `this` references the `nodevember` object.

### Providing arguments to a function with `bind`

Each argument passed to `bind` after the first will precede any arguments passed when the function is called.
This allows you to pre-apply arguments to a function. In the example below, `combineStrings` takes two strings and concatenates them together. `bind` is then used to create a function that always provides "Cool" as the first string.

```javascript
function combineStrings(str1, str2) {
  return str1 + " " + str2
}

var makeCool = combineStrings.bind(null, "Cool");

makeCool("trick"); // "Cool trick"
```

The guide on <a href='https://guide.freecodecamp.org/javascript/this-reference' target='_blank' rel='nofollow'>this reference</a> has more information about how what the `this` keyword references can change.

More details on the `bind` method can be found on Mozilla's <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind' target='_blank' rel='nofollow'>MDN docs</a>.

