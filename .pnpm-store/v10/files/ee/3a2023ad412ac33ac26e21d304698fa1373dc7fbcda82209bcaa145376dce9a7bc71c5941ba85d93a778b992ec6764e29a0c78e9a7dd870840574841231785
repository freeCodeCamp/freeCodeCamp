# jsx-a11y/no-onchange

❌ This rule is deprecated.

<!-- end auto-generated rule header -->

⚠️ **Deprecated:** This rule is based on reports of behavior of [old browsers (eg. IE 10 and below)](https://www.quirksmode.org/dom/events/change.html#t05). In the meantime, this behavior has been corrected, both in newer versions of browsers as well as [in the DOM spec](https://bugzilla.mozilla.org/show_bug.cgi?id=969068#c2).

Enforce usage of `onBlur` over/in parallel with `onChange` on select menu elements for accessibility. `onBlur` **should** be used instead of `onChange`, unless absolutely necessary and it causes no negative consequences for keyboard only or screen reader users. `onBlur` is a more declarative action by the user: for instance in a dropdown, using the arrow keys to toggle between options will trigger the `onChange` event in some browsers. Regardless, when a change of context results from an `onBlur` event or an `onChange` event, the user should be notified of the change unless it occurs below the currently focused element.

## Rule details

This rule takes no arguments.

### Succeed
```jsx
<select onBlur={updateModel}>
  <option/>
</select>

<select>
  <option onBlur={handleOnBlur} onChange={handleOnChange} />
</select>
```

### Fail
```jsx
<select onChange={updateModel} />
```

## Accessibility guidelines
- [WCAG 3.2.2](https://www.w3.org/WAI/WCAG21/Understanding/on-input)

### Resources
- [onChange Event Accessibility Issues](https://web.archive.org/web/20191207202425/http://cita.disability.uiuc.edu/html-best-practices/auto/onchange.php)
- [onChange Select Menu](https://www.themaninblue.com/writing/perspective/2004/10/19/)
