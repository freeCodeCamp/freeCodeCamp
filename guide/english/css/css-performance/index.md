---
title: CSS Performance
---
## CSS Performance
Most of the time CSS isn't the reason why your webpage loads slowly. In some cases it can reduce your websites loading time if your CSS file is cluttered with hundreds of unperformant selectors. Here are some basic guidelines, on how to write fast, maintainable CSS.

### Performance of different Selectors
Look at this example:
```css
#unique-id { } 		// fastest
.general-class { }  // also fast
li { }              // ok
* { }               // slow
```
Unsurprisingly, ID selectors are the fastest, followed by classes. Simple tag elements like `div` or `li` are processed rather slowly.

### How an Element is selected
imagine the following CSS:
```css
nav ul li a {
  color: #fff;
}
```

This is not a good idea. There are better ways to select a link element in your navigation. But how does the computer actually select the right element?
First it finds every `a` element on your page. Then it checks if is inside a `li` element, inside an `ul` inside a `div`. So a Browser read the selectors right to left.
If you have hundreds of links this might take a while to process, so what should you do?

### Improve CSS performance
As a rule of thumb:
* Avoid descendant selectors, like `ul li a` etc.
* Don't shy away from using a lot of descriptive class names `.footer-nav-link`
* Try to use the child selector instead if you want to select a direct child of an element `.image-container > img`
* Avoid using universal selectors `* { }`

### Is this really all necessary?
This may have been a problem 20 years ago when computers weren't as fast as they are today. Please don't avoid descendant selectors in the future completely. But keep in mind that your goal is to write maintainable CSS, so a little thinking might be appropriate.
Sometimes the `nav ul li a` selector isn't such a good idea on a page which has hundreds of links. 

