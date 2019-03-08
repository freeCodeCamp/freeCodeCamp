---
title: Navigation Bars
---
## Navigation Bars

Navigation bars are a very important element to any website. They provide the primary method of navigation by presenting a list of links to a user. There are many methods to creating a navigation bar. The easiest way to create a navigation bar is to use an unordered list and style it with CSS.

Navigation Bars are mostly made up of `<ul>` lists that are horizontally arranged and styled.

While styling the navigation bars, it's common to remove the extra spacing created by the `<ul>` and `<li>` tags as well as the bulletpoints that are automatically inserted:

```css
  list-style-type: none;
  margin: 0px;
  padding: 0px;
```   

**Example:**

There are two parts to any navigation: the HTML and the CSS. This is just a quick example.

```html
<nav class="myNav">                                 <!-- Any element can be used here -->
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

```css
/* Define the main Navigation block */
.myNav {
  display: block;
  height: 50px;
  line-height: 50px;
  background-color: #333;
}
/* Remove bullets, margin and padding */
.myNav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.myNav li {
  float: left;
  /* Or you can use display: inline; */
}
/* Define the block styling for the links */
.myNav li a {
  display: inline-block;
  text-align: center;
  padding: 14px 16px;
}
/* This is optional, however if you want to display the active link differently apply a background to it */
.myNav li a.active {
  background-color: #3786E1;
}
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
More Navigation Examples: [W3Schools](https://www.w3schools.com/css/css_navbar.asp)
