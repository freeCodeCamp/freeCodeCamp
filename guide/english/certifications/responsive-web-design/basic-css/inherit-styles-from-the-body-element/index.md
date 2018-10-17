---
title: Inherit Styles from the Body Element
---
## Inherit Styles from the Body Element

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
We need to create a ```h1``` element with the text ```Hello World```, then we need to give all elements on your page the color of ```green``` in our ```body``` element's style declaration, and finally, we need add  to our ```body``` element  font-family of ```monospace```.

 ### Solution
 
 #### 1. Create a ```h1``` element with the text ```Hello World```:
 
 add ```h1``` after ```</style>``` element:
 
 ```css
    <h1>Hello World</h1>
```

#### 2. Give all elements on your page the color of ```green``` and font-family of ```monospace``` in our ```body``` element's style declaration:

add between ```<style>``` and ```</style>```:

 ```css
    color: green;
    font-family: monospace;
```
