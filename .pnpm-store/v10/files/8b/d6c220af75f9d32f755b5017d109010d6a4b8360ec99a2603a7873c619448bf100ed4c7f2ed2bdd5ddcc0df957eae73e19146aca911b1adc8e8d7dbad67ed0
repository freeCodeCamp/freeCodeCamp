# jsx-a11y/no-noninteractive-tabindex

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Tab key navigation should be limited to elements on the page that can be interacted with. Thus it is not necessary to add a tabindex to items in an unordered list, for example, to make them navigable through assistive technology. These applications already afford page traversal mechanisms based on the HTML of the page. Generally, we should try to reduce the size of the page's tab ring rather than increasing it.

## How do I resolve this error?

### Case: I am using an `<a>` tag. Isn't that interactive?

The `<a>` tag is tricky. Consider the following:

```jsx
<a>Edit</a>
<a href="#">Edit</a>
<a role="button">Edit</a>
```

The bare `<a>` tag is an _anchor_. It has no semantic AX API mapping in either ARIA or the AXObject model. It's as meaningful as `<div>`, which is to say it has no meaning. An `<a>` tag with an `href` attribute has an inherent role of `link`. An `<a>` tag with an explicit role obtains the designated role. In the example above, this role is `button`.

### Case: I am using "semantic" HTML. Isn't that interactive?

If we take a step back into the field of linguistics for a moment, let's consider what it means for something to be "semantic". Nothing, in and of itself, has meaning. Meaning is constructed through dialogue. A speaker intends a meaning and a listener/observer interprets a meaning. Each participant constructs their own meaning through dialogue. There is no intrinsic or isolated meaning outside of interaction. Thus, we must ask, given that we have a "speaker" who communicates via "semantic" HTML, who is listening/observing?

In our case, the observer is the Accessibility (AX) API. Browsers interpret HTML (inflected at times by ARIA) to construct a meaning (AX Tree) of the page. Whatever the semantic HTML intends has only the force of suggestion to the AX API. Therefore, we have inconsistencies. For example, there is not yet an ARIA role for `text` or `label` and thus no way to change a `<label>` into plain text or a `<span>` into a label via ARIA. `<div>` has an AXObject correpondant `DivRole`, but no such object maps to `<span>`.

What this lint rule endeavors to do is apply the AX API understanding of the semantics of an HTML document back onto your code. The concept of interactivity boils down to whether a user can do something with the indicated or focused component.

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

Endeavor to limit tabbable elements to those that a user can act upon.

### Case: Shouldn't I add a tabindex so that users can navigate to this item?

It is not necessary to put a tabindex on an `<article>`, for instance or on `<li>` items; assistive technologies provide affordances to users to find and traverse these containers. Most elements that require a tabindex -- `<a href>`, `<button>`, `<input>`, `<textarea>` -- have it already.

Your application might require an exception to this rule in the case of an element that captures incoming tab traversal for a composite widget. In that case, turn off this rule on a per instance basis. This is an uncommon case.

If you know that a particular element will be scrollable, you might want to add `tabindex="0"` if your website supports browsers that don't make these containers keyboard-focusable. The current status for this platform feature can be tracked in [Chrome Platform Status "Feature: Keyboard-focusable scroll containers"](https://www.chromestatus.com/feature/5231964663578624).

```jsx
// eslint-disable-next-line no-noninteractive-tabindex
<pre tabIndex="0">
  <code>{someLongCode}</code>
</pre>
```

## Rule options

The recommended options for this rule allow `tabIndex` on elements with the noninteractive `tabpanel` role. Adding `tabIndex` to a tabpanel is a recommended practice in some instances.

```javascript
'jsx-a11y/no-noninteractive-tabindex': [
  'error',
  {
    tags: [],
    roles: ['tabpanel'],
    allowExpressionValues: true,
  },
]
```

The `allowExpressionValues` option determines whether the `role` attribute is allowed to be assigned using an expression. For example, the following would pass in recommended mode if `allowExpressionValues` is set to be `true`:

```jsx
<div role={ROLE_BUTTON} onClick={() => {}} tabIndex="0" />;
// In case of a conditional expression, there should be literals on both sides of ternary operator
<div role={isButton ? "button" : "link"} onClick={() => {}} tabIndex="0" />;
```

### Succeed

```jsx
<div />
<MyButton tabIndex={0} />
<button />
<button tabIndex="0" />
<button tabIndex={0} />
<div />
<div tabIndex="-1" />
<div role="button" tabIndex="0" />
<div role="article" tabIndex="-1" />
<article tabIndex="-1" />
```

### Fail

```jsx
<div tabIndex="0" />
<div role="article" tabIndex="0" />
<article tabIndex="0" />
<article tabIndex={0} />
```

## Accessibility guidelines

- [WCAG 2.1.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)

### Resources

- [Fundamental Keyboard Navigation Conventions](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_generalnav)
