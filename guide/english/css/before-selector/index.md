---
title: Before Selector
---
## Before Selector

The CSS **::before** selector can be used to insert anything before the content an element or elements. It allows the designer perform any css design before the content in an element. It is used by attaching **::before** to an element it is to be used on. 

Let's look at some examples:

<!--Css -->
```css

p::before { 
    content: "";
    border: solid 5px #ccc
}

span.comment::before{
  content: "Comment: ";
  color: blue;
}

```
<!--Html-->

```html

<p> To infinity and beyond</p>
<p> I am buz lightyear, I come in peace.</p>

<span class="comment"> May the force be with you</span>
<br/>
<span> Do. Or do not. There is no try</span>

```

In the example above we are prepending a grey border before every paragraph element on a page and we are also prepending the words comment in blue before every span element with the class comment. 

> You can check out this demo here https://jsfiddle.net/398by400/

#### Definition and usage
`::before` is one of the CSS pseudo-elements selectors, which are used to style specified parts of an element. In this case, we can insert content before some HTML element from CSS. Although we will see the content in the page, it is not part of the DOM, what means that we can't manipulate it from Javascript. One trick to solve this handicap: passing the content with a data attribute and use jQuery to manipulate it. Here is an example of use:

```css
   p::before {
     content: "Hello ";
   }
```

```html
<p>world!!</p>
```

This will show `Hello world!!` in the page.

Not only strings, also images, counters or even nothing ("", useful for clearfix) can be inserted into the `content` attribute, but <strong>not HTML</strong>. There are a good number of cool things that can be made using ```::before``` and ```after``` in a creative way. You can take a look in the next link if you are curious: <a href='https://www.w3schools.com/css/css_pseudo_elements.asp' target='_blank' rel='nofollow'>A Whole Bunch of Amazing Stuff Pseudo Elements Can Do</a>

#### Single-colon vs. Double-colon
There's a bit of discussion about the right way of using pseudo-elements: old style single-colon (```:before```), used in CSS specifications 1 and 2, versus CSS3 recomendation, double-colon (```::before```), mainly to <em>"establish a discrimination between pseudo-classes and pseudo-elements"</em>. But for compatibility reasons, single-colon is still accepted. Talking about compatibility, IE8 supports the single-colon notation only. 

#### More Information:

<a href='https://www.w3schools.com/css/css_pseudo_elements.asp' target='_blank' rel='nofollow'>W3Schools CSS Pseudo-elements</a>

<a href='https://css-tricks.com/almanac/selectors/a/after-and-before/' rel='nofollow'>CSS-Tricks ::after/::before</a>

<a href='https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin' rel='nofollow'>Selecting and manipulating CSS pseudo-elements such as ::before and ::after using jQuery</a>
