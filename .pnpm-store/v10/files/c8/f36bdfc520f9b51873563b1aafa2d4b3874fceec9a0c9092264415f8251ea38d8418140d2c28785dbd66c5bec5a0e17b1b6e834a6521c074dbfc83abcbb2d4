# jsx-a11y/aria-props

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Elements cannot use an invalid ARIA attribute. This will fail if it finds an `aria-*` property that is not listed in [WAI-ARIA States and Properties spec](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties).

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<!-- Good: Labeled using correctly spelled aria-labelledby -->
<div id="address_label">Enter your address</div>
<input aria-labelledby="address_label">
```

### Fail

```jsx
<!-- Bad: Labeled using incorrectly spelled aria-labeledby -->
<div id="address_label">Enter your address</div>
<input aria-labeledby="address_label">
```

## Accessibility guidelines
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
