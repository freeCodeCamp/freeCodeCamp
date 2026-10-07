# jsx-a11y/aria-activedescendant-has-tabindex

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

`aria-activedescendant` is used to manage focus within a [composite widget](https://www.w3.org/TR/wai-aria/#composite).
The element with the attribute `aria-activedescendant` retains the active document
focus; it indicates which of its child elements has secondary focus by assigning
the ID of that element to the value of `aria-activedescendant`. This pattern is
used to build a widget like a search typeahead select list. The search input box
retains document focus so that the user can type in the input. If the down arrow
key is pressed and a search suggestion is highlighted, the ID of the suggestion
element will be applied as the value of `aria-activedescendant` on the input
element.

Because an element with `aria-activedescendant` must be tabbable, it must either
have an inherent `tabIndex` of zero or declare a `tabIndex` attribute.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<CustomComponent />
<CustomComponent aria-activedescendant={someID} />
<CustomComponent aria-activedescendant={someID} tabIndex={0} />
<CustomComponent aria-activedescendant={someID} tabIndex={-1} />
<div />
<input />
<div tabIndex={0} />
<div aria-activedescendant={someID} tabIndex={0} />
<div aria-activedescendant={someID} tabIndex="0" />
<div aria-activedescendant={someID} tabIndex={1} />
<div aria-activedescendant={someID} tabIndex={-1} />
<div aria-activedescendant={someID} tabIndex="-1" />
<input aria-activedescendant={someID} />
<input aria-activedescendant={someID} tabIndex={0} />
<input aria-activedescendant={someID} tabIndex={-1} />
```

### Fail
```jsx
<div aria-activedescendant={someID} />
```

## Accessibility guidelines
General best practice (reference resources)

### Resources
- [MDN, Using the aria-activedescendant attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-activedescendant_attribute)
