---
title: Flexbox
---
## Flexbox
Flexbox is a new way to structure content in CSS3. It provides a wonderful way to create responsive websites that work well across different screen sizes and order content.

There are 3 simple steps to use flexbox.

1. Convert parent container to a flex container by using <i>display:flex;</i> in the css section
2. Adjust arrangement of different containers using <i>flex-direction</i>
3. Adjust individual items by using properties like justify-content, align-items etc.

The Flexbox Layout aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space.<br><br>
<img src="https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png" width="80%" height="auto" alt="flexUsage"><br><br>
<ul>
  <li><b>main-axis</b>: The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).</li>
  <li><b>main-start | main-end</b>The flex items are placed within the container starting from main-start and going to main-end.</li>: 
  <li><b>main size</b>: A flex item's width or height, whichever is in the main dimension, is the item's main size. The flex item's main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.</li>
  <li><b>cross axis</b>: The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.</li>
  <li><b>cross-start | cross-end</b>: Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.</li>
  <li><b>cross size</b>: The width or height of a flex item, whichever is in the cross dimension, is the item's cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.</li>
 </ul>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- <a href='https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35' target='_blank' rel='nofollow'>This is a great article</a> to read up to understand more about flexbox
- This is a highly recommended practical <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">guide</a>
- <a href='https://flexboxfroggy.com/#it'>Flexboxes Playground - play to learn </a>
