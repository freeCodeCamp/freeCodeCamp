# jsx-a11y/no-aria-hidden-on-focusable

<!-- end auto-generated rule header -->

Enforce that `aria-hidden="true"` is not set on focusable elements.

`aria-hidden="true"` can be used to hide purely decorative content from screen reader users. An element with `aria-hidden="true"` that can also be reached by keyboard can lead to confusion or unexpected behavior for screen reader users. Avoid using `aria-hidden="true"` on focusable elements.

## Rule details

### Succeed
```jsx
  <div aria-hidden="true" />
  <img aria-hidden="true" />
  <a aria-hidden="false" href="#" />
  <button aria-hidden="true" tabIndex="-1" /> // `tabIndex=-1` removes the element from sequential focus navigation so we don't flag it.
  <a href="/" />
  <div aria-hidden="true"><a href="#"></a></div> // This is also bad but will not be handled by this rule.
```

### Fail
```jsx
  <div aria-hidden="true" tabIndex="0" />
  <input aria-hidden="true" />
  <a href="/" aria-hidden="true" />
  <button aria-hidden="true" />
  <textarea aria-hidden="true" />
```

## Accessibility guidelines
General best practice (reference resources)

### Resources

- [aria-hidden elements do not contain focusable elements](https://dequeuniversity.com/rules/axe/html/4.4/aria-hidden-focus)
- [Element with aria-hidden has no content in sequential focus navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/proposed/)
- [MDN aria-hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
