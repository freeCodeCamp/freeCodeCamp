---
title: jQuery
---

## jQuery

![logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/250px-JQuery_logo.svg.png "jQuery logo")

jQuery is the most widely-used JavaScript library, and is used in more than half of all major websites. 

jQuery makes web development easier to use by providing a number of 'helper' functions. These help developers to quickly write DOM (Document Object Model) interactions without needing to manually write as much JavaScript themselves.

jQuery adds a global variable with all of the libraries methods attached. The naming convention is to have this global variable as <code>$</code>. by typing in <code>$.</code> you have all the jQuery methods at your disposal.

## Example

When a user clicks on a button, all \<p> elements will be hidden:

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
```

#### More Information
* [jQuery Home Page](https://jquery.com/)
* [Book on Web Development for jQuery](https://www.amazon.com/Web-Design-HTML-JavaScript-jQuery/dp/1118907442/ref=sr_1_6?s=books&ie=UTF8&qid=1544031092&sr=1-6&keywords=javascript+programming)
