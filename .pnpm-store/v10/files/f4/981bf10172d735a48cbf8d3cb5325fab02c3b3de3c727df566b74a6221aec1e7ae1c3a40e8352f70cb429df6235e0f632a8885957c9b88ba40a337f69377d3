# jsx-a11y/no-noninteractive-element-interactions

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Non-interactive HTML elements and non-interactive ARIA roles indicate _content_ and _containers_ in the user interface. A non-interactive element does not support event handlers (mouse and key handlers). Non-interactive elements include `<main>`, `<area>`, `<h1>` (,`<h2>`, etc), `<p>`, `<img>`, `<li>`, `<ul>` and `<ol>`. Non-interactive [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) include `article`, `banner`, `complementary`, `img`, `listitem`, `main`, `region` and `tooltip`.

## How do I resolve this error?

### Case: This element acts like a button, link, menuitem, etc

Move the event handler function to an inner element that is either a semantically interactive element (`<button>`, `<a href>`) or that has an interactive role. This leaves the _content_ or _container_ semantic value of this element intact.

Common interactive roles include:

  1. `button`
  1. `link`
  1. `checkbox`
  1. `menuitem`
  1. `menuitemcheckbox`
  1. `menuitemradio`
  1. `option`
  1. `radio`
  1. `searchbox`
  1. `switch`
  1. `textbox`

Note: Adding a role to your element does **not** add behavior. When a semantic HTML element like `<button>` is used, then it will also respond to Enter key presses when it has focus. The developer is responsible for providing the expected behavior of an element that the role suggests it would have: focusability and key press support.
see [WAI-ARIA Authoring Practices Guide - Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex).

### Case: This element is catching bubbled events from elements that it contains

Move the event handler function to an inner element like `<div>` and give that element a role of `presentation`. This leaves the _content_ or _container_ semantic value of this element intact.

```jsx
<div role="article">
  <div
    onClick="onClickHandler"
    onKeyPress={onKeyPressHandler}
    role="presentation">
    {this.props.children}
  </div>
</div>
```

Marking an element with the role `presentation` indicates to assistive technology that this element should be ignored; it exists to support the web application and is not meant for humans to interact with directly.

### Case: This is a heading that expands/collapses content on the package

Headers often double as expand/collapse controls for the content they headline. An accordion component is a common example of this pattern. Rather than assign the interaction handling code to the heading itself, put a button inside the heading instead. This pattern retains the role of the heading and the role of the button.

```jsx
<h3>
  <button onClick={this._expandSection}>News</button>
</h3>
<ul id="articles-list">
  <li>...</li>
</ul>
```

### Case: This element is a table cell

Table cells (and tables in general) are meant to contain data. ARIA provides us with a construct called a [Grid](https://w3c.github.io/aria-practices/#grid) that is essentially a 2 dimensional logical container for content and interactive elements.

You have two options in this case.

#### Option 1, move the interactive content inside the table cells

For instance, move the button inside the cell:

```jsx
<table>
  <tr>
    <td><button>Sort</button></td>
  </tr>
</table>
```

This preserves the table cell semantics and the button semantics; the two are not conflated on the cell.

#### Option 2, convert the table into an ARIA grid

If your user interface has a table-like layout, but is filled with interactive components in the cells, consider converting the table into a grid.

```jsx
<table role="grid">
  <tr>
    <td role="gridcell" onClick={this.sort}>Sort</td>
  </tr>
</table>
```

You can also put the interactive content inside the grid cell. This maintains the semantic distinction between the cell and the interaction content, although a grid cell can be interactive.

## Rule options

You may configure which handler props should be taken into account when applying this rule. The recommended configuration includes the following 6 handlers.

```javascript
'jsx-a11y/no-noninteractive-element-interactions': [
  'error',
  {
    handlers: [
      'onClick',
      'onMouseDown',
      'onMouseUp',
      'onKeyPress',
      'onKeyDown',
      'onKeyUp',
    ],
  },
],
```

Adjust the list of handler prop names in the handlers array to increase or decrease the coverage surface of this rule in your codebase.

### Succeed

```jsx
<div onClick={() => void 0} role="button" />
<div onClick={() => void 0} role="presentation" />
<input type="text" onClick={() => void 0} /> // Interactive element does not require role.
<button onClick={() => void 0} className="foo" /> // button is interactive.
<div onClick={() => void 0} role="button" aria-hidden /> // This is hidden from screen reader.
<Input onClick={() => void 0} type="hidden" /> // This is a higher-level DOM component
```

### Fail

```jsx
<li onClick={() => void 0} />
<div onClick={() => void 0} role="listitem" />
```

## Accessibility guidelines

- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources

- [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)
- [WAI-ARIA Authoring Practices Guide - Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex)
- [Fundamental Keyboard Navigation Conventions](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_generalnav)
- [Mozilla Developer Network - ARIA Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)
