# jsx-a11y/aria-role

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Elements with ARIA roles must use a valid, non-abstract ARIA role. A reference to role definitions can be found at [WAI-ARIA](https://www.w3.org/TR/wai-aria/#role_definitions) site.

## Rule options

This rule takes one optional object argument of type object:

```json
{
    "rules": {
        "jsx-a11y/aria-role": [ 2, {
            "allowedInvalidRoles": ["text"],
            "ignoreNonDOM": true
        }],
    }
}
```

`allowedInvalidRules` is an optional string array of custom roles that should be allowed in addition to the ARIA spec, such as for cases when you [need to use a non-standard role](https://axesslab.com/text-splitting).

For the `ignoreNonDOM` option, this determines if developer created components are checked.

### Succeed
```jsx
<div role="button"></div>     <!-- Good: "button" is a valid ARIA role -->
<div role={role}></div>       <!-- Good: role is a variable & cannot be determined until runtime. -->
<div></div>                   <!-- Good: No ARIA role -->
<Foo role={role}></Foo>       <!-- Good: ignoreNonDOM is set to true -->
```

### Fail

```jsx
<div role="datepicker"></div> <!-- Bad: "datepicker" is not an ARIA role -->
<div role="range"></div>      <!-- Bad: "range" is an _abstract_ ARIA role -->
<div role=""></div>           <!-- Bad: An empty ARIA role is not allowed -->
<Foo role={role}></Foo>       <!-- Bad: ignoreNonDOM is set to false or not set -->
```

## Accessibility guidelines
- [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

### Resources
- [Chrome Audit Rules, AX_ARIA_01](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_01)
- [DPUB-ARIA roles](https://www.w3.org/TR/dpub-aria-1.0/)
- [MDN: Using ARIA: Roles, states, and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
