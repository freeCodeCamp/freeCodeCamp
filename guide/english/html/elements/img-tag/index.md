---
title: Img Tag
---
## Img Tag

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
A simple HTML Image element can be included in an HTML document like this:

```html
<img src="path/to/image/file" alt="this is a cool picture" title="Some descriptive text goes here">
```

`alt` tags provide alternate text for an image. One use of the `alt` tag is for visually impaired people using a screen reader; they can be read the `alt` tag of the image in order to understand the image's meaning.

The `title` attribute is optional and will provide additional information about the image. Most browsers display this information in a tooltip when the user hovers over it.

Note that the path to the image file can be either relative or absolute. Also, remember that the `img` element is self-closing, meaning that it does not close with the `</img>` tag and instead closes with just a single `>`.

Example:

```html
<img src="https://example.com/image.png" alt="my picture" title="This is an example picture">
```

(This is assuming that the html file is at https://example.com/index.html, so it's in the same folder as the image file)

is the same as:

```html
<img src="image.png" alt="my picture" title="This is an example picture">
```

Sometimes an <img> element will also use two other attributes to specify its size, `height` and `width`, as shown below:

```html
<img src="image.png" alt="my picture" width="650" height="400" />
```

The values are specified in pixels, but the size is usually specified in CSS rather than HTML.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img' target='_blank' rel='nofollow'>MDN</a>
<a href="https://www.w3schools.com/TAGs/tag_img.asp">W3Schools</a>
