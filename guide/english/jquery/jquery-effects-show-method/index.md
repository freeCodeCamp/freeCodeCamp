---
title: jQuery Effects Show Method
---
## jQuery Effects Show Method

In its simplest form, **.show()** displays the matched element immediately, with no animation. For example:
```javascript
$(".myclass").show();
```
will show all the elements whose class is *myclass*. Any jQuery selector can be used.

However, this method does not override `!important` in the CSS style, such as `display: none !important`. 

### .show() as an animation method

Thanks to its options, **.show()** can animate the width, height, and opacity of the matched elements simultaneously. 

* Duration can be provided in milliseconds, or using the literals slow (600 ms) and fast(200ms). for example:
```javascript
$("#myobject").show("slow");
```

* A function can be specified to be called once the animation is complete, once per every matched element. for example
```javascript
$("#title").show( "slow", function() {
    $("p").show("fast");
});
  ```
* More options exist, please refer to the official website for further details.

### .slideDown() method
This method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items.
Usage:
```javascript
$(".myclass").slideDown(); //will expand the element with the identifier myclass for 400 ms.
$(".myclass").slideDown(1000); //will expand the element with the identifier myclass for 1000 ms.
$(".myclass").slideDown("slow"); //will expand the element with the identifier myclass for 600 ms.
$(".myclass").slideDown("fast"); //will expand the element with the identifier myclass for 200 ms.
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
JQuery Show() method on the <a href='http://api.jquery.com/show/' target='_blank' rel='nofollow'>Official website</a> 

