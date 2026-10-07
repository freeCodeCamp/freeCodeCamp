# jsx-a11y/no-redundant-roles

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Some HTML elements have native semantics that are implemented by the browser. This includes default/implicit ARIA roles. Setting an ARIA role that matches its default/implicit role is redundant since it is already set by the browser.

## Rule options

The default options for this rule allow an implicit role of `navigation` to be applied to a `nav` element as is [advised by w3](https://www.w3.org/WAI/GL/wiki/Using_HTML5_nav_element#Example:The_.3Cnav.3E_element). The options are provided as an object keyed by HTML element name; the value is an array of implicit ARIA roles that are allowed on the specified element.

```js
{
  'jsx-a11y/no-redundant-roles': [
    'error',
    {
      nav: ['navigation'],
    },
  ],
}
```

### Succeed

```jsx
<div />
<button role="presentation" />
<MyComponent role="main" />
```

### Fail

```jsx
<button role="button" />
<img role="img" src="foo.jpg" />
```

## Accessibility guidelines

General best practice (reference resources)

### Resources

- [ARIA Spec, ARIA Adds Nothing to Default Semantics of Most HTML Elements](https://www.w3.org/TR/using-aria/#aria-does-nothing)
- [Identifying SVG as an image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#identifying_svg_as_an_image)
