# jsx-a11y/autocomplete-valid

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Ensure the autocomplete attribute is correct and suitable for the form field it is used with.

## Rule options

This rule takes one optional object argument of type object:

```
{
    "rules": {
        "jsx-a11y/autocomplete-valid": [ 2, {
            "inputComponents": ["Input", "FormField"]
        }],
    }
}
```

### Succeed
```jsx
<!-- Good: the autocomplete attribute is used according to the HTML specification -->
<input type="text" autocomplete="name" />

<!-- Good: MyInput is not listed in inputComponents -->
<MyInput autocomplete="incorrect" />
```

### Fail
```jsx
<!-- Bad: the autocomplete attribute has an invalid value -->
<input type="text" autocomplete="incorrect" />

<!-- Bad: the autocomplete attribute is on an inappropriate input element -->
<input type="email" autocomplete="url" />

<!-- Bad: MyInput is listed in inputComponents -->
<MyInput autocomplete="incorrect" />
```

## Accessibility guidelines
- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose)

### Resources
- [axe-core, autocomplete-valid](https://dequeuniversity.com/rules/axe/3.2/autocomplete-valid)
- [HTML 5.2, Autocomplete requirements](https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute)
