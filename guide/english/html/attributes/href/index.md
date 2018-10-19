---
title: Href
---
## Href

Hypertext Reference (HREF) is an HTML attribute that you use to specify a link destination or Uniform Resource Locator (URL). Most commonly you will see the HREF attribute paired with an anchor tag `<a>`.

The exact behavior of the HREF attribute depends on the element that is using it. For instance, when used with the `<a>` tag, it is referencing the location of an object expressed as a URL. When using the HREF attribute with the `<image>` tag, the HREF attribute is referencing the URL location of an image to render.

### Examples:
Link to Google's Homepage:

  -> The text "Visit Google's Homepage" acts like the link to the Homepage
  
```html
<a href="https://www.google.com">Visit Google’s Homepage</a>
```

Image as an Link:

  -> Google Logo that refers to Google's Homepage
  
```html
<a href="https://www.google.com">
<img border="0" alt="Google" src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" width="100" height="100">
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
<a href='https://tomayko.com/blog/2008/wtf-is-an-href-anyway' target='_blank' rel='nofollow'>WTF is a href anyway</a>
<a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href' target='_blank' rel='nofollow'>MDN</a>
