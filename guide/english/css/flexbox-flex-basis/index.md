---
title: Flex Basis
---

# Flex-basis

To determine the initial width or height of a flex element along the main axis, we can use <code>flex-basis:</code> instead of <code>width:</code> or <code>height:</code>. <code>flex-basis:</code> is dynamic, so it can shrink or grow to fit inside the flex container.
<code>flex-basis:</code> can be set as a value, e.g. <code>200px;</code> <code>20vw;</code> <code>50vh;</code> or <code>auto</code>. Auto will assess the contents of the flex item and expand or contract with them. Example 1 shows a nested div with <code>flex-basis: 20vw;</code>, while the second and third use <code>flex-basis: auto;</code>.

**Example 1:**
```css
.container {
display: flex;
flex-direction: row;
justify-content: center;
background-color: yellow;
}
.box {
background-color: brown;
flex-basis: 20vw;
height: 200px;
box-sizing: border-box;
border: solid 1px black;
color: white;
}
```
```html
<div class="container">
<div class="box">Box 1</div>
</div>
```
![text alt](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/flex-basis-20vw.png "flex-basis: 20vw;")

**Examples 2 and 3:**
```css
.box {
background-color: brown;
flex-basis: auto;
height: 200px;
box-sizing: border-box;
border: solid 1px black;
color: white;
}
```
![text alt](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/flex-basis-auto-shrank.png "flex-basis: auto;") 

![text alt](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/flex-basis-auto-resized-to-longer-content.png "flex-basis: auto;") 
