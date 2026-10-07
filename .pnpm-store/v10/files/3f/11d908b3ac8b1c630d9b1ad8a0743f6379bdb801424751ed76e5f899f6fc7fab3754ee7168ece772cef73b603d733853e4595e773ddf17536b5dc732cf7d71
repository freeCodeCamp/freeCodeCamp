# jsx-a11y/label-has-associated-control

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce that a label tag has a text label and an associated control.

There are two supported ways to associate a label with a control:

- Wrapping a control in a label tag.
- Adding `htmlFor` to a label and assigning it a DOM ID string that indicates an input on the page.

This rule checks that any `label` tag (or an indicated custom component that will output a `label` tag) either (1) wraps an `input` element (or an indicated custom component that will output an `input` tag) or (2) has an `htmlFor` attribute and that the `label` tag has text content.

## How do I resolve this error?

### Case: I just want a text label associated with an input.

The simplest way to achieve an association between a label and an input is to wrap the input in the label.

```jsx
<label>
  Surname
  <input type="text" />
</label>
```

All modern browsers and assistive technology will associate the label with the control.

### Case: The label is a sibling of the control.

In this case, use `htmlFor` and an ID to associate the controls.

```jsx
<label htmlFor={domId}>Surname</label>
<input type="text" id={domId} />
```

### Case: My label and input components are custom components.

You can configure the rule to be aware of your custom components.

```jsx
<CustomInputLabel label="Surname">
  <CustomInput type="text" value={value} />
</CustomInputLabel>
```

And the configuration:

```json
{
  "rules": {
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
  }
}
```

### Case: I have two labels for the same input

If the second `label` is in a different part of the HTML, then the second one can only contain `htmlFor` but not nesting. You will probably need eslint override comment on the second label.

```jsx
{/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
<label htmlFor="a">
  Username:
</label>
...
<label htmlFor="a">
  <input id="a" />
</label>
```

## How to manage IDs of `input`

A common way to think of `id` with libraries like React is, `id`s should be avoided since it must be unique on the page, and components need to be reusable. Hence it is tempted to generate `id` during render-time if `id` is required. *However:*

IDs shouldn't be generated in the browser, so that server and client rendering are deterministic. Render-time uuids aren't just a hack, they're actually broken and should never be used.

To restate, **every ID needs to be deterministic**, on the server and the client, and guaranteed to be unique on the page. EG: For each input, a required ID prop can be passed down from as far up the tree as possible to guarantee uniqueness.

## Rule options

This rule takes one optional object argument of type object:

```json
{
  "rules": {
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomLabel"],
      "labelAttributes": ["inputLabel"],
      "controlComponents": ["CustomInput"],
      "assert": "both",
      "depth": 3,
    }],
  }
}
```

`labelComponents` is a list of custom React Component names that should be checked for an associated control.

`labelAttributes` is a list of attributes to check on the label component and its children for a label. Use this if you have a custom component that uses a string passed on a prop to render an HTML `label`, for example.

`controlComponents` is a list of custom React Components names that will output an input element. [Glob format](https://linuxhint.com/bash_globbing_tutorial/) is also supported for specifying names (e.g., `Label*` matches `LabelComponent` but not `CustomLabel`, `????Label` matches `LinkLabel` but not `CustomLabel`).

`assert` asserts that the label has htmlFor, a nested label, both or either. Available options: `'htmlFor', 'nesting', 'both', 'either'`.

`depth` (default 2, max 25) is an integer that determines how deep within a `JSXElement` label the rule should look for text content or an element with a label to determine if the `label` element will have an accessible label.

### Fail
```jsx
function Foo(props) {
  return <label {...props} />
}
```

### Succeed
```jsx
function Foo(props) {
    const {
        htmlFor,
        ...otherProps
    } = props;

   return <label htmlFor={htmlFor} {...otherProps} />
}
```

### Fail
```jsx
<input type="text" />
<label>Surname</label>
```

### Succeed
```jsx
<label>
  <input type="text" />
  Surname
</label>
```

## Accessibility guidelines
- [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [WCAG 3.3.2](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
