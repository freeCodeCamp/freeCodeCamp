---
title: Comment out HTML
---

## Problem

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

## Objective
Within the problem, we need to use `<!--` before a html element and `-->` after the html element, on the `<h1>` and `<p>` elements, in order to comment out these elements and allow the `<h2>` to be clearly seen. However, the problem shows that `<!--` and `-->` are preventing the content to be seen, as these tags are used between the whole content itself. 

## Example
```
<!-- code -->
```
 
 subElement | Description
 ---------- | -----------
 `<!--` | Opening tag
 code | Commented text
 `-->` | Closing tag
 
 If you want to comment just some elements in the code you want to wrap them in a comment element - create an opening tag before them and a closing tag right after.

**Note:** Comment syntax is the same of every other HTML element.

Have fun!

## Solution
Within the problem above, we can insert `-->` below the `<h1>` element but above the `<h2>` element as shown:

### Before adding `-->`
```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>
```

### After adding `-->`
```html
<!--
<h1>Hello World</h1>
-->
<h2>CatPhotoApp</h2>
```

Although, we have successfully commented out the `<h1>` element, the `<p>` element is still visibly seen with the `<h2>` element, as well as `-->`, which would display the output as shown below:

<pre>
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
</pre>

Hence, we need to add `<!--` below the `<h2>` element but above the `<p>` element as shown:

### Before adding `<!--`
```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

### After adding `<!--`
```html
<h2>CatPhotoApp</h2>
<!--
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

This will allow the code to display the output as:

<pre>
<h2> CatPhotoApp </h2>
</pre>

## Final Solution
```html
<!--
<h1>Hello World</h1>
-->
<h2>CatPhotoApp</h2>
<!--
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

#### More Information:
[CSS Width Property](https://www.w3schools.com/cssref/pr_dim_width.asp)\
[Image Width - Control Image Size with CSS](https://html.com/attributes/img-width/#Control_Image_Size_with_CSS)

