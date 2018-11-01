---
title: Links
---
## Links

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/attributes/links/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### <a name="link-top"></a> General Links
Links are used everywhere on the web, with the purpose of directing users to various content items. They're usually indicated by your cursor turning into a hand icon. Links can be text, images, or other elements contained within your HTML or webpage. 

You use an anchor element/tag (```<a>```) to define your link, which also needs a destination address(url) that you'll access with the ```href``` attribute.
```html
<a href="url">Link Text</a>
```
Here's a snippet that makes the phrase 'The freeCodeCamp Guide' a link:
```html
<a href="https://guide.freecodecamp.org">The freeCodeCamp Guide</a>
```
The link ends up looking like this: [The freeCodeCamp Guide](https://guide.freecodecamp.org)
### Links in a New Tab
If you'd like your link to open in a new tab, you'll use the ```target``` attribute along with the ```"_blank"``` 
value inside your opening ```<a>``` tag. That looks like this: 
```html 
<a href="url" target="_blank">Link Text</a>
```
Here is another example, using the offical freeCodeCamp Guide as the ```href=""``` destination, and "The freeCodeCamp Guide" as the link text:
```html
<!-- target="_blank" makes the link open in a new tab. -->
<a href="https://guide.freecodecamp.org" target="_blank">The freeCodeCamp Guide</a>
```
### Links on the Same Page
When you need to guide users to a specific part of your webpage, let's assume the very bottom, you first need to create an html element with an ```#id``` that you want direct your user to - in this case the ```<footer>``` at the bottom of the webpage. For example:
```html
<!-- Here we create a <footer> with an id of #footer -->
<footer id="footer">Powered by freeCodeCamp</footer>
```
Now to link to the footer (make the page scroll down to the footer when you click it), we have to assign the hash ```#``` symbol to the ```href``` attribute like this:
```html
<a href="#footer>More about us<a/>
```
To demonstrate how this works, here is a link that takes you to the top of this page: <a href="#link-top">Click Here.</a> 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://www.w3schools.com/html/html_links.asp" target="_blank">w3schools - HTML Links</a>

<a href="https://www.w3schools.com/tags/att_a_target.asp" target="_blank">w3schools - Target Attribute</a>