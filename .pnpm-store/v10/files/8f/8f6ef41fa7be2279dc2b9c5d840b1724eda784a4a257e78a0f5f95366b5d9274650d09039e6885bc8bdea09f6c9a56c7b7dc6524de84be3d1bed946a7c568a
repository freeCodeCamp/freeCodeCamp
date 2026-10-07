# jsx-a11y/no-noninteractive-element-to-interactive-role

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Non-interactive HTML elements indicate _content_ and _containers_ in the user interface. Non-interactive elements include `<main>`, `<area>`, `<h1>` (,`<h2>`, etc), `<img>`, `<li>`, `<ul>` and `<ol>`.

Interactive HTML elements indicate _controls_ in the user interface. Interactive elements include `<a href>`, `<button>`, `<input>`, `<select>`, `<textarea>`.

[WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) should not be used to convert a non-interactive element to an interactive element. Interactive ARIA roles include `button`, `link`, `checkbox`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch` and `textbox`.

## How do I resolve this error?

### Case: This element should be a control, like a button

Put the control inside the non-interactive container element.

```jsx
<li>
  <div
    role="button"
    onClick={() => {}}
    onKeyPress={() => {}}>
    Save
  </div>
</li>
```

Or wrap the content inside your interactive element.

```jsx
<div
  role="button"
  onClick={() => {}}
  onKeyPress={() => {}}
  tabIndex="0">
  <img src="some/file.png" alt="Save" />
</div>
```

## Rule options

The recommended options for this rule allow several common interactive roles to be applied to a non-interactive element. The options are provided as an object keyed by HTML element name; the value is an array of interactive roles that are allowed on the specified element.

```js
{
  'no-noninteractive-element-to-interactive-role': [
    'error',
    {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    },
  ]
}
```

Under the recommended options, the following code is valid. It would be invalid under the strict rules.

```jsx
<ul role="menu" />
```

## Accessibility guidelines

- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources

- [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)
- [WAI-ARIA Authoring Practices Guide - Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex)
- [Fundamental Keyboard Navigation Conventions](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_generalnav)
- [Mozilla Developer Network - ARIA Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)
