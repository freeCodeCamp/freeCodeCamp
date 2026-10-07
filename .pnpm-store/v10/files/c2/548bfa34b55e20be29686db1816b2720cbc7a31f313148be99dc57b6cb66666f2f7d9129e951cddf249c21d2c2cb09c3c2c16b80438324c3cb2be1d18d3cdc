# jsx-a11y/aria-unsupported-elements

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Certain reserved DOM elements do not support ARIA roles, states and properties. This is often because they are not visible, for example `meta`, `html`, `script`, `style`. This rule enforces that these DOM elements do not contain the `role` and/or `aria-*` props.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<!-- Good: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" />
```

### Fail
```jsx
<!-- Bad: the meta element should not be given any ARIA attributes -->
<meta charset="UTF-8" aria-hidden="false" />
```

## Accessibility guidelines
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources
- [Chrome Audit Rules, AX_ARIA_12](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_12)
- [DPUB-ARIA roles](https://www.w3.org/TR/dpub-aria-1.0/)
