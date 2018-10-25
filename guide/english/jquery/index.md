---
title: jQuery
---

## jQuery

![logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/250px-JQuery_logo.svg.png "jQuery logo")

jQuery is the most widely-used JavaScript library, and is used in more than half of all major websites. It's motto is "write less, Do more...!"

jQuery makes web development easier to use by providing a number of 'helper' functions. These help developers to quickly write DOM (Document Object Model) interactions without needing to manually write as much JavaScript themselves.

jQuery adds a global variable with all of the libraries methods attached. The naming convention is to have this global variable as <code>$</code>. by typing in <code>$.</code> you have all the jQuery methods at your disposal.

##Get to Start

Before yo study the JQuery you shuold have basic knowledges on these topics
    1. HTML
    2. CSS
    3. JavaScript
These are the most famous companies who use Jquery as there frameworks
    Google
    Microsoft
    Netflix
## Example



```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
```
  $("button").click(function() This is defining the function to when user click the button, contents under p element will hide. This is the simple machanism of Jquery
  
#### More Information
* [jQuery Home Page](https://jquery.com/)
