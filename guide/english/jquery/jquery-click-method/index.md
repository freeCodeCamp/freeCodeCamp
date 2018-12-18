---
title: Click Method
---

# Click Method



The jQuery Click method triggers a function when an element is clicked. The function is known as a "handler" because it handles the click event. Functions can
impact the HTML element that is bound to the click using the jQuery Click method, or they can change something else entirely. The most-used form is:

```javascript
$("#clickMe").click(handler)
```

The click method takes the handler function as an argument and executes it every time the element `#clickMe` is clicked. The handler function receives a
parameter known as an [eventObject](http://api.jquery.com/Types/#Event) that can be useful for controlling the action. 

#### Examples
This code shows an alert when a user clicks a button:

```html
<button id="alert">Click Here</button>
```

```javascript
$("#alert").click(function () {
  alert("Hi! I'm an alert");
});
```

[jsFiddle](https://jsfiddle.net/pL63cL6m/)

The [eventObject](http://api.jquery.com/Types/#Event) has some built in methods, including `preventDefault()`, which does exactly what it says - stops
the default event of an element. Here we pevent the anchor tag from acting as a link:

```html
<a id="myLink" href="www.google.com">Link to Google</a>
```

```javascript
$("#myLink").click(function (event) {
  event.preventDefault();
});
```

<a href='https://jsfiddle.net/dy457gbh/' target='_blank' rel='nofollow'>jsFiddle</a>

#### More ways to play with the click method

The handler function can also accept additional data in the form of an object:

```javascript
jqueryElement.click(usefulInfo, handler)
```

The data can be of any type.

```javascript
$("element").click({firstWord: "Hello", secondWord: "World"}, function(event){
    alert(event.data.firstWord);
    alert(event.data.secondWord);
});
```

Invoking the click method without a handler function triggers a click event:

```javascript
$("#alert").click(function () {
  alert("Hi! I'm an alert");
});

$("#alert").click();
```

Now, whenever the page loads, the click event will be triggered when we enter or reload the page, and show the assigned alert.

Also you should prefer to use .on('click',...) over .click(...) because the former can use less memory and work for dynamically added elements.

<a href='https://jsfiddle.net/gspk6gxt/' target='_blank' rel='nofollow'>jsFiddle</a>

#### Common Mistakes

The click event is only bound to elements currently in the DOM at the time of binding, so any elements added afterwards will not be bound. To bind all
elements in the DOM, even if they will be created at a later time, use the `.on()` method.

For example, this click method example:

```javascript
$("element").click(function() {
  alert("I've been clicked!");
});
```

Can be changed to this on method example:

```javascript
$(document).on("click", "element", function() {
  alert("I've been clicked!");
});
```

### Getting The Element From A Click event
This applies to both jQuery and plain JavaScript, but if you set up your event trigger to target a class, you can grab the specific element that triggered the element by using the `this` keyword.  

jQuery happens to make it very easy (and multi browser friendly) to traverse the DOM to find that element's parents, siblings, and children, as well.  

Let's say I have a table full of buttons and I want to target the row that button is in, I can simply wrap `this` in a jQuery selector and then get its `parent` and its parent's `parent` like so:

```javascript
$( document ).on("click", ".myCustomBtnClassInATable", function () {
    var myTableCell = $(this).parent();
    var myTableRow = myTableCell.parent();
    var myTableBody = myTableRow.parent();
    var myTable = myTableBody.parent();
    
    //you can also chain these all together to get what you want in one line
    var myTableBody = $(this).parent().parent().parent();
});
```

It is also interesting to check out the event data for the click event, which you can grab by passing in any variable name to the function in the click event.  You'll most likely see an `e` or `event` in most cases:

```javascript
$( document ).on("click", ".myCustomBtnClassInATable", function (e) { 
    //find out more information about the event variable in the console
    console.log(e);
});
```

#### More Information:

For more information, please visit the [official website](https://api.jquery.com/click/#click).

