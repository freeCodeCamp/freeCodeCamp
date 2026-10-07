# jsx-a11y/label-has-for

❌ This rule is deprecated. It was replaced by [`jsx-a11y/label-has-associated-control`](label-has-associated-control.md).

🚫 This rule is _disabled_ in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

_This rule was deprecated in v6.1.0. It will no longer be maintained._

Enforce label tags have associated control.

There are two supported ways to associate a label with a control:

- nesting: by wrapping a control in a label tag
- id: by using the prop `htmlFor` (or any configured attribute) as in `htmlFor=[ID of control]`

To fully cover 100% of assistive devices, you're encouraged to validate for both nesting and id.

## Rule options

This rule takes one optional object argument of type object:

```json
{
    "rules": {
        "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "every": [ "nesting", "id" ]
            },
            "allowChildren": false
        }]
    }
}
```

For the `components` option, these strings determine which JSX elements (**always including** `<label>`) should be checked for having `htmlFor` prop. This is a good use case when you have a wrapper component that simply renders a `label` element (like in React):

```js
// Label.js
const Label = props => {
  const {
    htmlFor,
    ...otherProps
  } = props;

  return (
    <label htmlFor={htmlFor} {...otherProps} />
  );
}

...

// CreateAccount.js (for example)
...
return (
  <form>
    <input id="firstName" type="text" />
    <Label htmlFor="firstName">First Name</Label>
  </form>
);
```

The `required` option (defaults to `"required": { "every": ["nesting", "id"] }`) determines which checks are activated. You're allowed to pass in one of the following types:

- string: must be one of the acceptable strings (`"nesting"` or `"id"`)
- object, must have one of the following properties:

  - some: an array of acceptable strings, will pass if ANY of the requested checks passed
  - every: an array of acceptable strings, will pass if ALL of the requested checks passed

The `allowChildren` option (defaults to `false`) determines whether `{children}` content is allowed to be passed into a `label` element. For example, the following pattern, by default, is not allowed:

```js
<label>{children}</label>
```

However, if `allowChildren` is set to `true`, no error will be raised. If you want to pass in `{children}` content without raising an error, because you cannot be sure what `{children}` will render, then set `allowChildren` to `true`.

Note that passing props as spread attribute without `htmlFor` explicitly defined will cause this rule to fail. Explicitly pass down `htmlFor` prop for rule to pass. The prop must have an actual value to pass. Use `Label` component above as a reference. **It is a good thing to explicitly pass props that you expect to be passed for self-documentation.** For example:

#### Bad

```jsx
function Foo(props) {
  return <label {...props} />
}
```

#### Good

```jsx
function Foo({ htmlFor, ...props}) {
    return <label htmlFor={htmlFor} {...props} />
}

// OR

function Foo(props) {
    const {
        htmlFor,
        ...otherProps
    } = props;

   return <label htmlFor={htmlFor} {...otherProps} />
}
```

### Succeed

```jsx
<label htmlFor="firstName">
  <input type="text" id="firstName" />
  First Name
</label>
```

### Fail

```jsx
<input type="text" id="firstName" />
<label>First Name</label>
```

## Accessibility guidelines

- [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [WCAG 3.3.2](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
