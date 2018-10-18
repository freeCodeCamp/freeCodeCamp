---
title: Clear Property
---
## Clear Property


You can use the `clear` property to push down an element, preventing it from appearing next to the precedent floated element.

The `clear` property can have the following values:

This property is used after the `float` property is used to "clear" out the `float`.

```css
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;
```

### Example:

![Clear Property Image](https://image.ibb.co/defebR/clear.png "Clear Property")

In the example above, the yellow `div` has the property `float:left`, and could fit under the coral `div`. However, as the yellow `div` has also the property `clear: both`, it moves down below the floated elements.

#### More Information:
* https://css-tricks.com/almanac/properties/c/clear/
* https://www.w3schools.com/cssref/pr_class_clear.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/clear
