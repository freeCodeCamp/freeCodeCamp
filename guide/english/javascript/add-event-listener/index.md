---
title: addEventListener
---
##addEventListener
The addEventListener method assigns a function to a target event for a particular DOM element.  In simpler terms this method 
says a function or block of code will be executed only when an event is triggered in the HTML DOM. This makes addEventListener 
an important tool for making any webpage interactive.

###Syntax
```
targetelement.addEventListener(event,callback function);

where targetelement is the DOM element, event is the event to attach to the DOM element and callback function is the code 
initiated when the event is triggered.
```
###Example
```
###HTML
<div class=”container”>
<div class=”row”>
<button>First button</button>
<button>Second button</button>
<button id=”myButton”>Click My Button</button>
<button>Fourth Button</button>
</div>
</div>

###JavaScript
document.getElementbyId(“myButton”).addEventListener(“click”,function(){
                                                       alert(“This button has been clicked”);
                                                        });
```

The previous line finds the HTML element with an id of “myButton” and attaches an event listener. In this case, the event is 
“click” meaning whenever the use clicks on “myButton” “alert(’This button has been clicked’) “ will be executed. 

###Note###
addEventListener has several advantages . Firstly, it is possible to attach more than one event to a single element.  This adds 
another layer of interactivity to your website. Second, it clearly separates the javascript code event handling from the HTML 
structure. It is best practice that HTML, CSS and Javascript are kept modular. Lastly, it is possible to attach an event handler 
to more than one element at once by using className or TagName. For example, the above code could be rewritten
to apply to all the buttons.

```
document.getElementsByTagName (“button”).addEventListener(“click”,function(){
                                                           alert(“This button has been clicked”);
                                                           });


```


#### Other Resources
<a href=https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener' target='_blank' rel='nofollow'>Mozilla Developer article on addEventListener</a>



---

