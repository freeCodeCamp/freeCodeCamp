---
title: jQuery
---

## jQuery

![logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/250px-JQuery_logo.svg.png "jQuery logo")

jQuery is the most widely-used JavaScript library, and is used in more than half of all major websites. 

jQuery makes web development easier to use by providing a number of 'helper' functions. These help developers to quickly write DOM (Document Object Model) interactions without needing to manually write as much JavaScript themselves.

jQuery adds a global variable with all of the libraries methods attached. The naming convention is to have this global variable as <code>$</code>. by typing in <code>$.</code> you have all the jQuery methods at your disposal.

## Example

When a user clicks on a button, all <p> elements will be hidden:

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
```

## Adding jQuery to your page

Add the following code to the bottom of your HTML file to include jQuery in your code:

```html
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
```

#### More Information
* [jQuery Home Page](https://jquery.com/)
