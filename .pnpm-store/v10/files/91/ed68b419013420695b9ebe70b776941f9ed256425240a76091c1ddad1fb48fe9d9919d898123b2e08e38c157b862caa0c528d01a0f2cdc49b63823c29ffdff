# jsx-a11y/control-has-associated-label

🚫 This rule is _disabled_ in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce that a control (an interactive element) has a text label.

There are two supported ways to supply a control with a text label:

- Provide text content inside the element.
- Use the `aria-label` attribute on the element, with a text value.
- Use the `aria-labelledby` attribute on the element, and point the IDREF value to an element with an accessible label.
- Alternatively, with an `img` tag, you may use the `alt` attribute to supply a text description of the image.

The rule is permissive in the sense that it will assume that expressions will eventually provide a label. So an element like this will pass.

```jsx
<button type="button">{maybeSomethingThatContainsALabel}</button>
```

## How do I resolve this error?

### Case: I have a simple button that requires a label.

Provide text content in the `button` element.

```jsx
<button type="button">Save</button>
```

### Case: I have an icon button and I don't want visible text.

Use the `aria-label` attribute and provide the text label as the value.

```jsx
<button type="button" aria-label="Save" class="icon-save" />
```

### Case: The label for my element is already located on the page and I don't want to repeat the text in my source code.

Use the `aria-labelledby` attribute and point the IDREF value to an element with an accessible label.

```jsx
<div id="js_1">Comment</div>
<textarea aria-labelledby="js_1"></textarea>
```

### Case: My label and input components are custom components, but I still want to require that they have an accessible text label.

You can configure the rule to be aware of your custom components. Refer to the Rule Details below.

```jsx
<CustomInput label="Surname" type="text" value={value} />
```

## Rule options

This rule takes one optional object argument of type object:

```json
{
  "rules": {
    "jsx-a11y/control-has-associated-label": [ 2, {
      "labelAttributes": ["label"],
      "controlComponents": ["CustomComponent"],
      "ignoreElements": [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "video",
      ],
      "ignoreRoles": [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid",
      ],
      "depth": 3,
    }],
  }
}
```

- `labelAttributes` is a list of attributes to check on the control component and its children for a label. Use this if you have a custom component that uses a string passed on a prop to render an HTML `label`, for example.
- `controlComponents` is a list of custom React Components names that will render down to an interactive element.
- `ignoreElements` is an array of elements that should not be considered control (interactive) elements and therefore they do not require a text label.
- `ignoreRoles` is an array of ARIA roles that should not be considered control (interactive) roles and therefore they do not require a text label.
- `depth` (default 2, max 25) is an integer that determines how deep within a `JSXElement` the rule should look for text content or an element with a label to determine if the interactive element will have an accessible label.

### Succeed
```jsx
<button type="button" aria-label="Save" class="icon-save" />
```

### Fail
```jsx
<button type="button" class="icon-save" />
```

## Accessibility guidelines
- [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [WCAG 3.3.2](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
