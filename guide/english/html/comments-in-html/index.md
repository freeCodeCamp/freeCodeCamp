---
title: Comments in HTML
---
## Comments in HTML

The comment tag is an element used to leave notes, mostly related to the project or the website. This tag is frequently used to explain something in the code or leave some recommendations about the project. The comment tag also makes it easier for the developer to come back at a later stage and understand the code he's written earlier. Comments can also be used for commenting out lines of code for debugging purposes.


It is good practice to add comments to your code, especially when working with a team or at a company. It is also important that you write clear and concise comments that another developer could easier understand.  

Comments are started with `<!--` and ended with `-->`, and can span multiple lines. They can contain code or text, and won't appear on the front-end of the website when a user visits a page. You can view comments through the Inspector Console, or by viewing Page Source.


### Example
```html
<!-- You can comment out a large number of lines like this.
  Author: xyz
  Date: xx/xx/xxxx
  Purpose: abc
  Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR
-->
<!DOCTYPE html>
<html>
	<body>
		<h1>FreeCodeCamp web</h1>
		<!-- Leave some space between the h1 and the p in order to understand what we are talking about-->
		<p>FreeCodeCamp is an open-source project that needs your help</p>
	        <!-- For readability of code use proper indentation -->
	</body>
</html>
```
## Conditional Comments
Conditional Comments define some HTML tags to be executed when a certain condition is fulfilled.

Conditional Comments are only recognized by Internet Explorer Version 5 through Version 9 (IE5 - IE9).

Older IE versions often need additional CSS to display your pages accurately. Conditional comments can fulfill this purpose.

### Example
```html
<!DOCTYPE html>
<html>
  <body>
    <!--[if IE 9]>
    <h1>FreeCodeCamp web</h1>
    <p>FreeCodeCamp is an open-source project that needs your help</p>
    <![endif]-->
  </body>
</html>
```

### IE Conditional Comments

These comments are only available in Internet Explorer and can be used up to IE9. There is a chance you will never see them, but it is good to know about their existence as they do exist on some older sites. Conditional Comments are a way to serve a different and/or optimal experience for different client browsers. For example:

```html
<!--[if lt IE 9]> <p>Your browser is lower than IE9</p> <![endif]-->     
<!--[if IE 9]> <p>Your browser is IE9</p> <![endif]-->
<!--[if gt IE 9]> <p>Your browser is greater than IE9</p> <![endif]-->
```


[About conditional comments](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)

IE Conditional Comments are really helpful when you wish to serve each IE version with a slightly different CSS. IE (and other browsers) can have rendering bugs, or rather, 'quirks' that render your page a little differently than what you would expect. These require some CSS tricks to workaround (or even to make use of!) quirks, and so the conditional comments are good for targeting specific versions.

For example, this CSS would only apply on IE 7 / 8:
```html
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="ie-7-stylesheet.css" />
<![endif]-->

<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="ie-8-stylesheet.css" />
<![endif]-->
```

#### Tip
**CTRL + /** is a keyboard shortcut which works in probably all modern text editors to create the comments. It creates a single line comment, but if you want to comment more lines, just highlight all the area and press it.

#### More Information
* [About conditional comments](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)
* [Some IE CSS bugs](https://css-tricks.com/ie-css-bugs-thatll-get-you-every-time/)
* [IE CSS bugs and fixes](https://code.tutsplus.com/tutorials/9-most-common-ie-bugs-and-how-to-fix-them--net-7764)
