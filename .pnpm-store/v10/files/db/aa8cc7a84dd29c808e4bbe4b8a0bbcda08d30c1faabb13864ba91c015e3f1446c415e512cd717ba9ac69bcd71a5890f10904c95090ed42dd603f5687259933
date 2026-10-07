# jsx-a11y/tabindex-no-positive

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Avoid positive `tabIndex` property values to synchronize the flow of the page with keyboard tab order.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<span tabIndex="0">foo</span>
<span tabIndex="-1">bar</span>
<span tabIndex={0}>baz</span>
```

### Fail
```jsx
<span tabIndex="5">foo</span>
<span tabIndex="3">bar</span>
<span tabIndex="1">baz</span>
<span tabIndex="2">never really sure what goes after baz</span>
```

## Accessibility guidelines
- [WCAG 2.4.3](https://www.w3.org/WAI/WCAG21/Understanding/focus-order)

### Resources
- [Chrome Audit Rules, AX_FOCUS_03](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03)
