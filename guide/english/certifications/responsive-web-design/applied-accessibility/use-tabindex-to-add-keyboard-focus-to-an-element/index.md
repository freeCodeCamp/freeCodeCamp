---
title: Use tabindex to Add Keyboard Focus to an Element
---
## Use tabindex to Add Keyboard Focus to an Element

Following the instructions:

Add a tabindex attribute to the p tag and set its value to "0".


 the line 16 
 ```css
    <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>
```

becomes:
 ```css
    <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>
```

In this way it will receive keyboard focus when a user tabs through a page.
