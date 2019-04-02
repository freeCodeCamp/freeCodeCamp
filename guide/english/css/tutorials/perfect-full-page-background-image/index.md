---
title: Perfect Full Page Background Image
---
## Perfect Full Page Background Image

Here is three ways you can achieve the full page background image and I listed the advantage of each solution.

### Solution 1

The advantages of this solution:

* fits to specific viewports
* perfect for hudge banner image
* still allows you to add content after
* no whitespace in the viewport.

html:

```
<div class="bg-image"> </div>
```
css:

```
.bg-image
{
  background-size: cover;
  background-image: url('myimage.jpg');
  height: 100vh;
}
```
[Codepen for solution 1](https://codepen.io/takachou/pen/pxVPGY/)

### Solution 2

This uses the image as a background for the div. This solution allows you to add content down.

html:

```
<div class="bg-image"> </div>
```

css:

```
body, html {
	height: 100%;
}

.bg-image {
    background-image: url("myimage.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```

[Codepen for solution 2](https://codepen.io/takachou/pen/gBzRwK)

### Solution 3 [credits](https://css-tricks.com/perfect-full-page-background-image/)
This Solution contains some specifics:

* Fills entire page with image, no white space
* Scales image as needed
* Retains image proportions (aspect ratio)


```
html { 
  background: url(images/bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
```
[Codepen for solution 3](https://codepen.io/takachou/pen/bmMRgz)

#### More Information:
- [How TO - Full Page Image](https://www.w3schools.com/howto/howto_css_full_page.asp)
- [CSS-Tricks - Perfect Full Page Background Image ](https://css-tricks.com/perfect-full-page-background-image/)

