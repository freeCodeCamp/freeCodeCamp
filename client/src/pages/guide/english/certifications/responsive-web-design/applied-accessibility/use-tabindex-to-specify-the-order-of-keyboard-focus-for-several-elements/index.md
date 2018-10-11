---
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
---
## Use tabindex to Specify the Order of Keyboard Focus for Several Elements

Following the instructions:

Add a tabindex attribute set to "1" to the search input, and a tabindex attribute set to "2" to the submit input.

 the lines 16 and 17
 ```css
    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">
```

become:

 ```css
    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">
```

In this way the search input and submit input form controls to be the first two items in the tab order.
