---
title: Checking if the Element Is Currently Hidden
---
If you need to check the visibility status of some element on the page, you can do that easily with jQuery library with the simple block of code like the one below.

    var display = ( jQuery('#someElement').is(':visible') );
    var visibility = ( jQuery('#someElement').css('visibility') != 'hidden' );
    var status = ( display && visibility );
    console.log( status );

So, if the element is currently visible on the page the **`console.log(status)`** would return `true` and in any other case it would return `false`. The `false` statement would be returned for this two cases:

*   if element has `display:none;`
*   if element has `visibility: hidden`

and for more advanced checking like this: **is the element visible on the viewport now** I would recomend to use <a href='http://benpickles.github.io/onScreen/' target='_blank' rel='nofollow'>jQuery onScreen plugin</a>