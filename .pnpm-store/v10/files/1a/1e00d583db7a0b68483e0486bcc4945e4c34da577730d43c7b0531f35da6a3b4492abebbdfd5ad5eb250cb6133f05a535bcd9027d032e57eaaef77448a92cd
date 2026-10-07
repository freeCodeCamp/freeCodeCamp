# jsx-a11y/role-supports-aria-props

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`. Many ARIA attributes (states and properties) can only be used on elements with particular roles. Some elements have implicit roles, such as `<a href="#" />`, which will resolve to `role="link"`.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<!-- Good: the radiogroup role does support the aria-required property -->
<ul role="radiogroup" aria-required aria-labelledby="foo">
    <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

### Fail

```jsx
<!-- Bad: the radio role does not support the aria-required property -->
<ul role="radiogroup" aria-labelledby="foo">
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

## Accessibility guidelines
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources
- [ARIA Spec, States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties)
- [Chrome Audit Rules, AX_ARIA_10](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_10)
