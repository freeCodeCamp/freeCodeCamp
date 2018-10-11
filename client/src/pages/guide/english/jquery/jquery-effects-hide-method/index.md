---
title: jQuery Effects Hide Method
---
## jQuery Hide Method

In its simplest form, **.hide()** hides the matched element immediately, with no animation. For example:

```javascript
$(".myclass").hide()
```

will hide all the elements whose class is *myclass*. Any jQuery selector can be used.

### .hide() as an animation method

Thanks to its options, **.hide()** can animate the width, height, and opacity of the matched elements simultaneously. 

* Duration can be provided in milliseconds, or using the literals slow (600 ms) and fast(200ms). for example:

```javascript
$("#myobject").hide(800)
```

* A function can be specified to be called once the animation is complete, once per every matched element. This callback is mainly useful for chaining together different animations. For example
```javascript
$("p").hide( "slow", function() {
      $(".titles").hide("fast");
      alert("No more text!");
});
  ```
* More options exist, please refer to the official website for further details.   
  
### .toggle() method

To show / hide elements you can use ```toggle()``` method. If element is hidden ```toggle()``` will show it and vice versa.
Usage:
```javascript
$(".myclass").toggle()
```   

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
JQuery hide() method on the <a href='http://api.jquery.com/hide/' target='_blank' rel='nofollow'>Official website</a>


