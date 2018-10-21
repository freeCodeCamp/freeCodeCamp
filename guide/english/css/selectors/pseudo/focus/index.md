---
title: Focus
---
## Focus

### Definition

The `:focus` represents an element that has received a focus state, triggered by an event from the keyboard. Trigger action comes from pressing the **TAB** key, which visually create a ring around an element.

### Syntax

`:focus`

### Example

```
a:focus {
  color: red;  
}
```

### Output
[JSfiddle Link](https://jsfiddle.net/ejae7vb3/1/)


#### More Information:
[MDN - Mozilla Developers Network | :focus - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

The :focus CSS pseudo-class is used to select the element that has focus (such as a form input).

It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's "tab" key.

Syntax:

```css
:focus
```

## Example

HTML:

```html
<form>
  <input type="text" value="The background will turn yellow when you click on it.">
</form>
```

CSS:

```css
input:focus {
   background-color: yellow;
}
```

#### More Information:
For more information visit [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

[W3.org | CSS Documentation](https://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)
