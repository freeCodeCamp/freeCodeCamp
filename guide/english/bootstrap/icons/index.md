---
title: Icons
---

## Icons

The Bootstrap framework provides you Glyphicons for icon.
Bootstrap doesn’t include an icon library by default, but it has a handful of recommendations for you to choose from. While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.



### How to use

To use Bootstrap icon create a span tag with base class `glyphicon` and  individual icon class.
Use it only on elements that contain no text content and have no child elements.

**Code Example:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

<span class="glyphicon glyphicon-search" aria-hidden="true"></span>

`<span class="glyphicon glyphicon-cog"></span>`

<span class="glyphicon glyphicon-cog"></span>

The Bootstrap framework provides you with over 250 icons called glyphs. They come in font format from the Glyphicon Halflings set.

### How To Use

To use bootstrap icons you simply create `<span>` tag and apply the applicable CSS class for the icon. A code example has been provided below.

**Code Example:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

<span class="glyphicon glyphicon-search" aria-hidden="true"></span>

### Bootstrap Glyphicon Class List

This is an example of the CSS classes that bootstrap provides for glyphicons. More of them is avalible <a href='https://getbootstrap.com/docs/3.3/components/#glyphicons' target='_blank' rel='nofollow'>here</a>

`.glyphicon glyphicon-plus` This is bootstrap's plus/add icon.

<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>

`.glyphicon glyphicon-trash` This is bootstrap's trash/delete icon.

<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>

_Note: Do not include the dot in the HTML Class Attribute, referring to the classes with a dot is only used when adjusting the classes in CSS._

### Bootstrap Icon in Buttons

```html
  <button type="button" class="btn btn-default" aria-label="Left Align">
    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
  </button>
```
<button type="button" class="btn btn-default" aria-label="Left Align">
  <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
</button>

_Note: Bootstrap's Glyphicons icon is not avalable on bootstrap V4_

### More Information:

- [Bootstrap Glyphicons Icons Doc](https://getbootstrap.com/docs/3.3/components/#glyphicons)
