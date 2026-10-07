# jsx-a11y/iframe-has-title

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

`<iframe>` elements must have a unique title property to indicate its content to the user.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<iframe title="This is a unique title" />
<iframe title={uniqueTitle} />
```

### Fail
```jsx
<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={''} />
<iframe title={``} />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />
```

## Accessibility guidelines
- [WCAG 2.4.1](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks)
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources
- [axe-core, frame-title](https://dequeuniversity.com/rules/axe/3.2/frame-title)
