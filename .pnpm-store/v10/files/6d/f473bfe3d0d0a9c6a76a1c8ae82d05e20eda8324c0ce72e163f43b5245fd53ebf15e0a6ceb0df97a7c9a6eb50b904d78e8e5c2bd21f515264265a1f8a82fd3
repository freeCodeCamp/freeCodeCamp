# jsx-a11y/click-events-have-key-events

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce `onClick` is accompanied by at least one of the following: `onKeyUp`, `onKeyDown`, `onKeyPress`. Coding for the keyboard is important for users with physical disabilities who cannot use a mouse, AT compatibility, and screen reader users. This does not apply for interactive or hidden elements.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<div onClick={() => {}} onKeyDown={this.handleKeyDown} />
<div onClick={() => {}} onKeyUp={this.handleKeyUp} />
<div onClick={() => {}} onKeyPress={this.handleKeyPress} />
<button onClick={() => {}} />
<div onClick{() => {}} aria-hidden="true" />
```

### Fail
```jsx
<div onClick={() => {}} />
```

## Accessibility guidelines
- [WCAG 2.1.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
