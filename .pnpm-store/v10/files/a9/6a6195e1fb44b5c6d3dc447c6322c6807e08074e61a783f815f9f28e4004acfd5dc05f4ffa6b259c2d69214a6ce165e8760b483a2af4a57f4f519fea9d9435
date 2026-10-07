# jsx-a11y/mouse-events-have-key-events

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce onmouseover/onmouseout are accompanied by onfocus/onblur. Coding for the keyboard is important for users with physical disabilities who cannot use a mouse, AT compatibility, and screen reader users.

## Rule options

By default, this rule checks that `onmouseover` is paired with `onfocus` and that `onmouseout` is paired with `onblur`. This rule takes an optional argument to specify other handlers to check for "hover in" and/or "hover out" events:

```json
{
  "rules": {
    "jsx-a11y/mouse-events-have-key-events": [
      "error",
      {
        "hoverInHandlers": [
          "onMouseOver",
          "onMouseEnter",
          "onPointerOver",
          "onPointerEnter"
        ],
        "hoverOutHandlers": [
          "onMouseOut",
          "onMouseLeave",
          "onPointerOut",
          "onPointerLeave"
        ]
      }
    ]
  }
}
```

Note that while `onmouseover` and `onmouseout` are checked by default if no arguments are passed in, those are *not* included by default if you *do* provide an argument, so remember to explicitly include them if you want to check them.

### Succeed
```jsx
<div onMouseOver={ () => void 0 } onFocus={ () => void 0 } />
<div onMouseOut={ () => void 0 } onBlur={ () => void 0 } />
<div onMouseOver={ () => void 0 } onFocus={ () => void 0 } {...otherProps} />
<div onMouseOut={ () => void 0 } onBlur={ () => void 0 } {...otherProps} />
```

### Fail
In example 3 and 4 below, even if otherProps contains onBlur and/or onFocus, this rule will still fail. Props should be passed down explicitly for rule to pass.

```jsx
<div onMouseOver={ () => void 0 } />
<div onMouseOut={ () => void 0 } />
<div onMouseOver={ () => void 0 } {...otherProps} />
<div onMouseOut={ () => void 0 } {...otherProps} />
```

## Accessibility guidelines
- [WCAG 2.1.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
