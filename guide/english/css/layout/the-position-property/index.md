---
title: The Position Property
---
## The Position Property

The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
The position property specifies the type of positioning method used for an element.
The position proprty isn't generally used to create layouts, but instead it is used to position elements that somehow stand out from the page flow.

There are five different position values:

* static
* relative - this is more like a default position for the body element. The absolute position is somewhat dependent on it. If an element has the **position:relative** declared, an element declared with the **position:absolute** will be relative to it or dependent on it.
* fixed
* absolute - this value takes an element with its declaration out of the normal flow of the document and makes it relative to the body element since it is dependent on the  **position:relative** declaration.

For example, a div element nested in a main element, if the **position:absolute** property is declared for the div element, it moves away from the main element to the body element, this position of the div element can change if the main element is declared with the **position:relative** property or any other child elements of the main element.
* sticky
Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://www.w3schools.com/css/css_positioning.asp" target="_blank">The is a good article</a> to read up to understand more about the position property.
<a href="https://www.youtube.com/watch?v=P6UgYq3J3Qs" target="_blank">Great video that explains better</a> by Kevin Powell.


