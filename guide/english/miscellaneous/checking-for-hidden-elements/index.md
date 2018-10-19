---
title: Checking for Hidden Elements
---
There are times where you might need to check if an element is visible or hidden on the screen so that you can perform some action on it given its state. I was looking around at some solutions on Stack Overflow for trying to ascertain whether an element was visible, and I wasn't satisfied by the answers I received.

One answer was to use the jQuery library, and then check to see if the element has the pseudoclass of `:visible` by using this format: `$(element).is(':visible')`. This works for elements that are hidden by using `display: none;` on them, but it does not work on any element that has its `visibility` set to `hidden`. It also does not work if the parent element is the only element that is hidden from view. If any parent element of the element tested is hidden, using either `visibility` or `display`, the element being tested will come back as visible, despite it not being visible on the screen.

## The Solution

I came up with a pure JavaScript function which solves this problem that has no dependancies and is a cross browser compliant solution. This function will analyze the element first to see if either its `display` or `visibility` properties are being shown as `none` or `hidden` respectively. Then, if those come back normal, it checks all parent elements up to the body of the document. If a parent element of the element being tested is hidden, that means that the element being tested is not visible in the document.

<a href='http://codepen.io/marcusparsons/pen/bpNqgY' target='_blank' rel='nofollow'>Here is a sample CodePen that demonstrates this behavior and even shows the comparison being use the jQuery solution and my pure JavaScript solution</a>. Notice in the CodePen that even though the element is cleary hidden from view, using jQuery's `.is(':visible')` is not a viable option for truly checking any element for visibility.

And here is the function I created:

    function isVisible (element) {
        //start with initial element to check visibility and display
        var el = document.querySelector(element);
        //display and visibility vary per browser and must be sought in different ways depending on the browser
        var t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility;
        var t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display;
        //if either of these are true, then the element is not visible
        if (t1 === "hidden" || t2 === "none") {
            return false;
        }
        //This regex is used to scan the parent nodes all the way up to the body element
        while (!(/body/i).test(el)) {
            //get the next parent node
            el = el.parentNode;
            //grab the values, if available, 
            t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility;
            t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display;
            if (t1 === "hidden" || t2 === "none") {
                return false;
            }
        }
        //if all scans are not successful, then the element is visible
        return true;
    }

And to use the function, you only need to call it with a query string to select the element to test i.e.

    <body>
    	<p style="visibility: hidden;" id="myP">My paragraph</p>
        <script type="text/javascript">
        	//include isVisible function
        	alert('Is my paragraph visible? ' + isVisible('#myP'));
        </script>
    </body>

And the resulting alert will be: `Is my paragraph visible? false`