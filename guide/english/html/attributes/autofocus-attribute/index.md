---
title: Autofocus Attribute
---
## Autofocus Attribute | HTML5

The **autofocus** attribute is a boolean attribute.

When present, it specifies that the element should automatically get input focus when the page loads.

Only one form element in a document can have the **autofocus** attribute. It cannot be applied to `<input type="hidden">`.

### Applies to

| Element | Attribute |
| :-- | :-- |
| `<button>` | autofocus |
| `<input>` | autofocus |
| `<select>` | autofocus |
| `<textarea>` | autofocus |

### Example

```html
<form>
    <input type="text" name="fname" autofocus>
    <input type="text" name="lname">
</form>
```

### Compatibility

This is an HTML5 attribute.

### Browser Support

The autofocus attribute has the following browser support for each element:
| Element | Chrome | Internet Explorer/Edge | Firefox | Safari | Opera |
| form | 5.0 | 10.0 | 4.0 | 5.0 | 9.6 |
| input | 5.0 | 10.0 | 4.0 | 5.0 | 9.6 |
| textarea | Yes | 10.0 | 4.0 | Yes | Yes |

#### More Information:

[HTML autofocus Attribute](https://www.w3schools.com/tags/att_autofocus.asp) on w3schools.com

[&lt;input&gt; autofocus attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) on MDN web docs
