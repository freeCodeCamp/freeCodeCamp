# jsx-a11y/no-interactive-element-to-noninteractive-role

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Interactive HTML elements indicate _controls_ in the user interface. Interactive elements include `<a href>`, `<button>`, `<input>`, `<select>`, `<textarea>`.

Non-interactive HTML elements and non-interactive ARIA roles indicate _content_ and _containers_ in the user interface. Non-interactive elements include `<main>`, `<area>`, `<h1>` (,`<h2>`, etc), `<img>`, `<li>`, `<ul>` and `<ol>`.

[WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) should not be used to convert an interactive element to a non-interactive element. Non-interactive ARIA roles include `article`, `banner`, `complementary`, `img`, `listitem`, `main`, `region` and `tooltip`.

## How do I resolve this error?

### Case: The element should be a container, like an article

Wrap your interactive element in a `<div>` with the desired role.

```jsx
<div role="article">
  <button>Save</button>
</div>
```

### Case: The element should be content, like an image

Put the content inside your interactive element.

```jsx
<div
  role="button"
  onClick={() => {}}
  onKeyPress={() => {}}
  tabIndex="0">
  <div role="img" aria-label="Save" />
</div>
```

## Rule options

The recommended options for this rule allow the `tr` element to be given a role of `presentation` (or its semantic equivalent `none`). Under normal circumstances, an element with an interactive role should not be semantically neutralized with `presentation` (or `none`).

Options are provided as an object keyed by HTML element name; the value is an array of interactive roles that are allowed on the specified element.

```js
{
  'no-interactive-element-to-noninteractive-role': [
    'error',
    {
      tr: ['none', 'presentation'],
    },
  ]
}
```

Under the recommended options, the following code is valid. It would be invalid under the strict rules.

```jsx
<tr role="presentation" />
```

## Accessibility guidelines

- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources

- [ARIA Spec, States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties)
- [Chrome Audit Rules, AX_ARIA_04](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_04)
- [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)
- [WAI-ARIA Authoring Practices Guide - Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex)
- [Fundamental Keyboard Navigation Conventions](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_generalnav)
- [Mozilla Developer Network - ARIA Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)
