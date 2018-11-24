---
title: How to Use Links
---
## How to Use Links

Links are found in many webpages and its purpose is to allow users to visit other webpages.

<br/>In HTML, you can use the `<a>` tag to create a hyperlink. 

```html
<a href="url">link text</a>
```
The href attribute is very important, as it defines what the destination address is. 
<br/>The link text is the actual visable text.


<br/>For example, if you wanted something to link to the freeCodeCamp website, you could type:
```html
<a href="https://www.freecodecamp.org/">freeCodeCamp</a>
```
When run, this will display the text "freeCodeCamp", but it links to the website `"https://www.freecodecamp.org"`. Clicking on the text will send you to the specified address. Neat!

### Links in images

Links don't need to only be text. You can add a link to an image as well!

```html
<a href="https://www.freecodecamp.org"
   <img src="freecodecamp.png" alt = "freeCodeCamp's logo">
</a>
```

What we do here is we put an <img> tag inside of an <a> tag. This allows us to click the image to go to the link, which is `https://www.freecodecamp.org`. Double neato!

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [MDN - HTML <a> Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
