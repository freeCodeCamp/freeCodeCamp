---
title: Href
---
## Href

Hypertext Reference (HREF) is an HTML attribute that you use to specify a link destination or Uniform Resource Locator (URL). Most commonly you will see the HREF attribute paired with an anchor tag `<a>`.

The exact behavior of the HREF attribute depends on the element that is using it. For instance, when used with the `<a>` tag, it is referencing the location of an object expressed as a URL. When using the HREF attribute with the `<image>` tag, the HREF attribute is referencing the URL location of an image to render.

Additionally, an HREF may also reference a file on a server or a local directory. A directory can be considered a folder on a computer. For instance, you might wish to create a hyperlink that points to the main page of a website. Typically the main page of a website has the file name `index.html`, so instead of a full URL, you may simply type `index.html`. Please note that if the file is not in the same directory it may require you to add a `/` or a `../` to move into or out of the current directory.

### Examples:
Link to Google's Homepage:

  -> The text "Visit Google's Homepage" acts like the link to the Homepage
  
```html
<a href="https://www.google.com">Visit Google’s Homepage</a>
```
Above `href` is an attribute and `https://www.google.com` is its value.

Image as an Link:

  -> Google Logo that refers to Google's Homepage
  
```html
<a href="https://www.google.com">
<img border="0" alt="Google" src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" width="100" height="100">
```

Link to an index file on the same directory:

  -> The text "Index File" acts like the link to a file titled `index.html`
  
```html
<a href="index.html">Index File</a>
```
  
Tags that use HREF:
```html
<a>
<area>
<base>
<cursor>
<discard>
<feImage>
<hatch>
<image>
<link>
<mesh>
<meshgradient>
<mpath>
<pattern>
<script>
<textPath>
<use>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://tomayko.com/blog/2008/wtf-is-an-href-anyway' target='_blank' rel='nofollow'>WTF is a href anyway</a><br>
<a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href' target='_blank' rel='nofollow'>MDN</a>
