---
title: First-Letter
---
## First-Letter
 The ```::first-letter``` CSS pseudo-element styles the first letter of a slected HTML element.
 General Syntax:
 ```css
::first-letter
```
 ## Example
 ```css
/* First letter of every paragraph is set to 50px */
p::first-letter {
  font-size: 50px;
}
```
 ## More Examples
 A great example of a practical use case is if you wanted to make make the first letter in a paragraph large or decorative (commonly known as drop caps).
 ```html
<p class="drop-caps">Join a community of millions of people learning to code together. Meet coders in your city. Get experience by coding for nonprofits. Level up your career.</p>
```
 ```css
.drop-caps::first-letter {
  background: repeating-linear-gradient(45deg, #85144b4f, #85144b4f 10px, #fff 10px, #fff 20px);
  border: 2px solid;
  color: #85144b;
  float: left;
  font-family: 'Times New Roman';
  font-size: 100px;
  line-height: 80px;
  margin-right: 10px;
  padding: 4px;
}
```
 #### More Information:
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)
* [W3 Schools](https://www.w3schools.com/cssref/sel_firstletter.asp)
* [CSS Tricks - Drop Caps](https://css-tricks.com/snippets/css/drop-caps/)
