# jsx-a11y/anchor-has-content

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce that anchors have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the `aria-hidden` prop. Refer to the references to learn about why this is important.

Alternatively, you may use the `title` prop or the `aria-label` prop.

## Rule options

This rule takes one optional object argument of type object:

```json
{
    "rules": {
        "jsx-a11y/anchor-has-content": [ 2, {
            "components": [ "Anchor" ],
          }],
    }
}
```

For the `components` option, these strings determine which JSX elements (**always including** `<a>`) should be checked for having content. This is a good use case when you have a wrapper component that simply renders an `a` element (like in React):

```js
// Anchor.js
const Anchor = props => {
  return (
    <a {...props}>{ props.children }</a>
  );
}

...

// CreateAccount.js (for example)
...
return (
  <Anchor>Create Account</Anchor>
);
```


### Succeed
```jsx
<a>Anchor Content!</a>
<a><TextWrapper /></a>
<a dangerouslySetInnerHTML={{ __html: 'foo' }} />
<a title='foo' />
<a aria-label='foo' />
```

### Fail
```jsx
<a />
<a><TextWrapper aria-hidden /></a>
```
## Accessibility guidelines
- [WCAG 2.4.4](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context)
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources
- [axe-core, link-name](https://dequeuniversity.com/rules/axe/3.2/link-name)
