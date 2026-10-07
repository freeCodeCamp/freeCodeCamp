# jsx-a11y/no-distracting-elements

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforces that no distracting elements are used. Elements that can be visually distracting can cause accessibility issues with visually impaired users. Such elements are most likely deprecated, and should be avoided. By default, the following elements are visually distracting: `<marquee>` and `<blink>`.

## Rule options

This rule takes one optional object argument of type object:

```json
{
    "rules": {
        "jsx-a11y/no-distracting-elements": [ 2, {
            "elements": [ "marquee", "blink" ],
          }],
    }
}
```

For the `elements` option, these strings determine which JSX elements should be checked for usage. This shouldn't need to be configured unless you have a seriously compelling use case for these elements. You cannot add any additional elements than what is offered, as the schema is only valid with the provided enumerated list. If you have another element that you think may cause a11y issues due to visual impairment, please feel free to file an issue or send a PR!

### Succeed
```jsx
<div />
```

### Fail
```jsx
<marquee />
<blink />
```

## Accessibility guidelines
- [WCAG 2.2.2](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)

### Resources
- [axe-core, marquee](https://dequeuniversity.com/rules/axe/3.2/marquee)
- [axe-core, blink](https://dequeuniversity.com/rules/axe/3.2/blink)
