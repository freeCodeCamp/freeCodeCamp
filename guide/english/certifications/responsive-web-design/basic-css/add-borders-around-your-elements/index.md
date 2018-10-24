---
title: Add Borders Around Your Elements
---
## Add Borders Around Your Elements
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

We need to create a class called ```thick-green-border```. This class should add a 10px, solid, green border around an HTML element. and after, we need to apply the class to your cat photo.

## Solution:

We add between ```<style>``` and ```</style>``` new class ```thick-green-border``` with properties:

```js
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }
```
Also, we can add properties this way:

```js
  .thick-green-border {
    border: 10px solid green;
  }
```
The final stage is adding this class to image:

```js
<img class="smaller-image thick-green-border" 
src="https://bit.ly/fcc-relaxing-cat" 
alt="A cute orange cat lying on its back.">
```
