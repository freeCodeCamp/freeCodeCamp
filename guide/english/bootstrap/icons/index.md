---
title: Icons
---

## Icons

The Bootstrap framework provides you with Glyphicons for icons.
Bootstrap doesn’t include an icon library by default, but it has a handful of recommendations for you to choose from. While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.



### How to use

To use Bootstrap icons, create a `<span>` tag with base class `glyphicon` and individual icon class.
Use it only on elements that contain no text content and have no child elements.

**Code Example:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

<span class="glyphicon glyphicon-search" aria-hidden="true"></span>

`<span class="glyphicon glyphicon-cog"></span>`

<span class="glyphicon glyphicon-cog"></span>

The Bootstrap framework provides you with over 250 icons called glyphs. They come in font format from the Glyphicon Halflings set.

### How To Use

To use Bootstrap icons you simply create a `<span>` tag and apply the applicable CSS class for the icon. A code example has been provided below.

**Code Example:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

<span class="glyphicon glyphicon-search" aria-hidden="true"></span>

### Bootstrap Glyphicon Class List

This is an example of the CSS classes that Bootstrap provides for glyphicons. More of them are avalible <a href='https://getbootstrap.com/docs/3.3/components/#glyphicons' target='_blank' rel='nofollow'>here</a>

`.glyphicon glyphicon-plus` This is Bootstrap's plus/add icon.

<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>

`.glyphicon glyphicon-trash` This is Bootstrap's trash/delete icon.

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


_Note: Bootstrap's Glyphicons are not avalable in Bootstrap V4_

### Things to keep in mind

**Don't mix with other components**

Icon classes cannot be directly combined with other components. They should not be used along with other classes on the same element. Instead, add a nested `<span>` and apply the icon classes to the `<span>`.

**Only use icons on empty elements**

Icon classes should only be used on elements that contain no text content and have no child elements.

_Note: Bootstrap's Glyphicons icon is not avalable on bootstrap V4. However, it still works with V3.3.7 which is avaialble at the link provided below_.

#### More Information:

- [Bootstrap Glyphicons Icons Doc](https://getbootstrap.com/docs/3.3/components/#glyphicons)
