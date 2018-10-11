---
title: How to Create an HTML Button That Acts Like a Link
---
## How to Create an HTML Button That Acts Like a Link

Sometimes you may want to use a button to link to another page or website rather than to submit a form or something like that. This is fairly simple to do and can be achieved in several ways.

One way is to simply wrap your `<button>` tag in an `<a>` tag:
  
```html
<a href='https://www.freecodecamp.org/'><button>Link To freeCodeCamp</button></a>
```

This transforms your entire button into a link. 

A second option is to create your link as you normally would with your `<a>` tag and then style it via CSS:
  
```html
<a href='https://www.freecodecamp.org/'>Link To freeCodeCamp</a>
```

Once you've created your link, you can the use CSS to make it look like a button. For instance, you could add a border, a background color, some styles for when the user is hovering the link...

Another way to add a button is to wrap an `input` inside `form` tags. Specify the desired target URL in the form action attribute.

```html
<form action="http://google.com">
    <input type="submit" value="Go to Google" />
</form>
```

#### More Information:
* [FreeCodeCamp Guide - styling buttons](https://guide.freecodecamp.org/css/css-buttons/)
* [How to create an HTML button that acts like a link?](https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link)
