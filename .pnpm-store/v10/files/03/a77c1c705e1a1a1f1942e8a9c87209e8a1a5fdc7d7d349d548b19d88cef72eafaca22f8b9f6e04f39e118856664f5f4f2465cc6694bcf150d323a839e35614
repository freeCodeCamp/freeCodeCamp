# jsx-a11y/heading-has-content

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce that heading elements (`h1`, `h2`, etc.) have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the `aria-hidden` prop. Refer to the references to learn about why this is important.

## Rule options

This rule takes one optional object argument of type object:

```json
{
    "rules": {
        "jsx-a11y/heading-has-content": [ 2, {
            "components": [ "MyHeading" ],
          }],
    }
}
```

For the `components` option, these strings determine which JSX elements (**always including** `<h1>` thru `<h6>`) should be checked for having content. This is a good use case when you have a wrapper component that simply renders an `h1` element (like in React):


```js
// Header.js
const Header = props => {
  return (
    <h1 {...props}>{ props.children }</h1>
  );
}

...

// CreateAccount.js (for example)
...
return (
  <Header>Create Account</Header>
);
```

#### Bad
```jsx
function Foo(props) {
  return <label {...props} />
}
```

### Succeed
```jsx
<h1>Heading Content!</h1>
<h1><TextWrapper /><h1>
<h1 dangerouslySetInnerHTML={{ __html: 'foo' }} />
```

### Fail
```jsx
<h1 />
<h1><TextWrapper aria-hidden />
```

## Accessibility guidelines
- [WCAG 2.4.6](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)

### Resources
- [axe-core, empty-heading](https://dequeuniversity.com/rules/axe/3.2/empty-heading)
