---
title: CSS Grid Layout
---
## CSS Grid Layout
CSS Grid Layout is the most powerful layout system available in CSS, providing an easy way to divide a page into major regions and how different regions relate to each other.

It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system.

Though Grid Layout isn't fully supported by all browsers, it's the most advanced and conveniet way to make page layouts.

### What CSS Grid Layout Does
It makes CSS a bit more programmatic; you tell it where to put things and it just does it, eliminating a lot of the guess-and-check problems of old.

#### A few great features:
- Determine spacing using column and row spans (this element spans two columns, that one spans three, etc.)
- "Name" each section of your page (using the `grid-area` property) and use `grid-template-areas` to write out where each section belongs.
- Set widths and lengths of each section using [fractional units (`fr`)](https://css-tricks.com/introduction-fr-css-unit/) instead of using math to figure out percentages.
- Define repeating grid elements using `repeat()` instead of typing out instructions for each element.

### An Example

```html
<header>Header</header>
<nav>
	<ul>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
	</ul>
</nav>
<article>
	<p>How awesome is this?</p>
</article>
<aside>
	<p>Super awesome.</p>
</aside>
<footer>
	<p>Copyright Example.com</p>
</footer>
```

```css
body {
  display: grid;
  grid-template-areas: 
    "header header"
    "navigation navigation"
    "content sidebar"
    "foot foot";
  width: 80%;
  margin: 10px auto;
  grid-gap: 10px;
}
header {
  grid-area: header;
}
nav {
  grid-area: navigation;
}
nav ul {
  display: grid;
  grid-gap: 20px;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);
  margin: 0px auto;
  padding: 0;
}
nav ul li {
  margin: 0;
  list-style-type: none;
}
article {
  grid-area: content;
}
aside {
  grid-area: sidebar;
}
footer {
  grid-area: foot;
}

header,
article,
aside,
footer,
nav,
li {
  border: 3px solid darkgreen;
  border-radius: 5px;
  background-color: rgba(128, 194, 128,.5);
  padding: 1em;
  color: black;
  font-family: verdana, arial, sans-serif;
}
```
You can see what it looks like [on Codepen](https://codepen.io/alexkadis/pen/dgjoQo).

#### More Resources:
- [Learn CSS Grid](https://learncssgrid.com/)
- [A Complete Guide to CSS Grid Layout](http://chris.house/blog/a-complete-guide-css-grid-layout/)
- [Grid by Example](https://gridbyexample.com/)
- [Wes Bos - Free CSS Grid Course](https://cssgrid.io/)
- [YouTube - CSS Grid Playlist](https://www.youtube.com/watch?v=FEnRpy9Xfes&list=PLbSquHt1VCf1x_-1ytlVMT0AMwADlWtc1)
- [Mozilla - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

More info about browser support can be read at <a href="https://caniuse.com/#feat=css-grid" target="_blank">https://caniuse.com</a>.
