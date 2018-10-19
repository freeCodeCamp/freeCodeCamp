---
title: CSS Custom Properties
---
## CSS Custom Properties

CSS custom properties are also referred to as CSS variables. As of October 2018, CSS custom properties are still an experimental technology. Consider [browser support](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility) before using the feature in production. 

### Declaring Custom Properties
Within a selector, custom properties are declared using two hyphens (--) and the name, followed by the value. The value can be simple, such as a color (RGB, hexcode, etc.) or size (using pixel, em, rem, etc.), or it can be more complex, like a dropshadow definition. See the examples below.
```css
:root {
  --firstVariable: red;
  --headerSize: 16px;
  --dropShadow: 1px 1px 2px 2px rgba(100,100,100,0.2);
```

Declaring custom properties in the `:root` selector make those properties globally available. The `:root` selector can be considered the same as the `html` selector.

### Using Custom Properties
To use a custom property, the `var()` function is used, which takes a single argument of the custom property name.
```css 
h1 {
  font-size: var(--headerSize);
}
 
.card {
  box-shadow: var(--dropShadow);
}
```

### Cascading Custom Properties
When custom properties are declared in the `:root` selector, those properties are globally available; any style rules can use the properties. If a custom property needs to be different for specific element, class, or id, a property of the same can be declared in that selector. The compiler will first look for a property name within the immediate enclosing selector, then move to the `:root`. 

```css
:root {
  --font-color: red;
}

h1 {
  --font-color: blue;
}

h1 {
  font-color: var(--font-color); /* blue */
}

h2 {
  font-color: var(--font-color); /* red */
}
```

#### More Information:
For more information visit: 
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [W3C Candidate Recommendation Document](https://www.w3.org/TR/css-variables/)
- [Browser Support](https://caniuse.com/#feat=css-variables)
- [A Practical Guide to CSS Variables(SitePoint)](https://www.sitepoint.com/practical-guide-css-variables-custom-properties/)
