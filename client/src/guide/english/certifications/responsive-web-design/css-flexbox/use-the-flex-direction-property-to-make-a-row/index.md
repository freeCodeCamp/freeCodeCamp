---
title: Use the flex-direction Property to Make a Row
---
## Use the flex-direction Property to Make a Row

Once you have a flex container by adding <i>display: flex;</i> to the parent container, you can specify if you want the children to be stacked in a row by adding the following:
```css
#box-container {
    display: flex; /* This makes the flex container */
    height: 500px;
    flex-direction: row-reverse; /* This makes the direction be a row with reversed elements */
  }
```
You will notice how the colors switch positions as the default direction of flex containers are rows as you might have noticed from the <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed/index.md' target='_blank' rel='nofollow'>tweet example</a>.
