---
title: Child
---
## Child

The child selector is represented by `>` and is placed between two selectors: `parent > child`. It matches any second selector that are children of first selector (the parent). The second selector must be immediate children of the first one.

Here's an example of the syntax:

```css
first selector (parent) > second selector (child) { 
    css declarations; 
}
```

Here's a code example that matches all immediate `span` element of with a `div` parent:

```css
div > span { 
    background-color: red;
}
```

### More Information:
- <a href='https://www.w3.org/TR/CSS22/selector.html#child-selectors' target='_blank' rel='nofollow'>W3C Child Selector Working Draft</a>
