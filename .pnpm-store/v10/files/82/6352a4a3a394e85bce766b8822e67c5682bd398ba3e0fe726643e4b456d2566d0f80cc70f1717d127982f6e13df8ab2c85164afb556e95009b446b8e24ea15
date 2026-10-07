# jsx-a11y/role-has-required-aria-props

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Elements with ARIA roles must have all required attributes for that role.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<!-- Good: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>
```

### Fail

```jsx
<!-- Bad: the checkbox role requires the aria-checked state -->
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
```

## Accessibility guidelines
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources
- [ARIA Spec, Roles](https://www.w3.org/TR/wai-aria/#roles)
- [Chrome Audit Rules, AX_ARIA_03](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_03)
