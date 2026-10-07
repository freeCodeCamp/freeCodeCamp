# jsx-a11y/anchor-is-valid

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

The HTML `<a>` element, with a valid `href` attribute, is formally defined as representing a **hyperlink**. That is, a link between one HTML document and another, or between one location inside an HTML document and another location inside the same document.

In fact, the interactive, underlined `<a>` element has become so synonymous with web navigation that this expectation has become entrenched inside browsers, assistive technologies such as screen readers and in how people generally expect the internet to behave. In short, anchors should navigate.

The use of JavaScript frameworks and libraries, like _React_, has made it very easy to add or subtract functionality from the standard HTML elements. This has led to _anchors_ often being used in applications based on how they look and function instead of what they represent.

Whilst it is possible, for example, to turn the `<a>` element into a fully functional `<button>` element with ARIA, the native user agent implementations of HTML elements are to be preferred over custom ARIA solutions.

## How do I resolve this error?

### Case: I want to perform an action and need a clickable UI element

The native user agent implementations of the `<a>` and `<button>` elements not only differ in how they look and how they act when activated, but also in how the user is expected to interact with them. Both are perfectly clickable when using a mouse, but keyboard users expect `<a>` to activate on `enter` only and `<button>` to activate on _both_ `enter` and `space`.

This is exacerbated by the expectation sighted users have of how _buttons_ and _anchors_ work based on their appearance. Therefore we find that using _anchors_ as _buttons_ can easily create confusion without a relatively complicated ARIA and CSS implementation that only serves to create an element HTML already offers and browsers already implement fully accessibly.

We are aware that sometimes _anchors_ are used instead of _buttons_ to achieve a specific visual design. When using the `<button>` element this can still be achieved with styling but, due to the meaning many people attach to the standard underlined `<a>` due its appearance, please reconsider this in the design.

Consider the following:

```jsx
<a href="javascript:void(0)" onClick={foo}>Perform action</a>
<a href="#" onClick={foo}>Perform action</a>
<a onClick={foo}>Perform action</a>
```

All these _anchor_ implementations indicate that the element is only used to execute JavaScript code. All the above should be replaced with:

```jsx
<button onClick={foo}>Perform action</button>
```

### Case: I want navigable links

An `<a>` element without an `href` attribute no longer functions as a hyperlink. That means that it can no longer accept keyboard focus or be clicked on. The documentation for [no-noninteractive-tabindex](no-noninteractive-tabindex.md) explores this further. Preferably use another element (such as `div` or `span`) for display of text.

To properly function as a hyperlink, the `href` attribute should be present and also contain a valid _URL_. _JavaScript_ strings, empty values or using only **#** are not considered valid `href` values.

Valid `href` attributes values are:

```jsx
<a href="/some/valid/uri">Navigate to page</a>
<a href="/some/valid/uri#top">Navigate to page and location</a>
<a href="#top">Navigate to internal page location</a>
```

### Case: I need the HTML to be interactive, don't I need to use an a tag for that?

An `<a>` tag is not inherently interactive. Without an href attribute, it really is no different from a `<span>`.

Let's look at an example that is not accessible by all users:

```jsx
<a
  className="thing"
  onMouseEnter={() => this.setState({ showSomething: true })}
>
  {label}
</a>
```

If you need to create an interface element that the user can click on, consider using a button:

```jsx
<button
  className="thing"
  onClick={() => this.setState({ showSomething: true })}
>
  {label}
</button>
```

If you want to navigate while providing the user with extra functionality, for example in the `onMouseEnter` event, use an anchor with an `href` attribute containing a URL or path as its value.

```jsx
<a
  href={someValidPath}
  className="thing"
  onMouseEnter={() => this.setState({ showSomething: true })}
>
  {label}
</a>
```

If you need to create an interface element that the user can mouse over or mouse out of, consider using a div element. In this case, you may need to apply a role of presentation or an interactive role. Interactive ARIA roles include `button`, `link`, `checkbox`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch` and `textbox`.

```jsx
<div
  role="menuitem"
  className="thing"
  onClick={() => this.setState({ showSomething: true })}
  onMouseEnter={() => this.setState({ showSomething: true })}
>
  {label}
</div>
```

In the example immediately above an `onClick` event handler was added to provide the same experience mouse users enjoy to keyboard-only and touch-screen users. Never fully rely on mouse events alone to expose functionality.

### Case: I use Next.js and I'm getting this error inside of `<Link>`s

This is a [known issue](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402) with Next.js's decision to construct internal links by nesting an href-free `<a>` tag inside of a `<Link>` component. Next.js is also [aware of the issue](https://github.com/vercel/next.js/issues/5533) and has an [RFC](https://github.com/vercel/next.js/discussions/8207) working towards a solution.

Until the Next.js API can be updated to a more performant and standard setup, you have a few workaround options:

1. If you have only a few `Link`s, or they're clustered in just a few files like `nav.tsx`, you can use disable macros like `{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}` to turn off validation of this rule for those usages.

2. You can use the `Link` component's `passHref` prop to override a dummy `href` on the `<a>`:
```typescript
<Link href="/my-amazing-page" passHref>
  <a href="replace">Go to my amazing page</a>
</Link>
```

3. You can invest in a custom component that wraps the creation of the `Link` and `a`. You can then add your new custom component to the list of components to validate to ensure that your links are all created with a navigable href. A sample custom component is shared [here](https://gist.github.com/zackdotcomputer/d7af9901e7db87364aad7fbfadb5c99b) and it would be used like this:
```typescript
// Internally, LinkTo handles the making of the Link and A, collecting the
// need for a lint workaround into a single file.
// Externally, LinkTo can be linted using this rule, ensuring it will always
// have a valid href prop.
<LinkTo href="/my-amazing-page">Go to my amazing page</LinkTo>
```

### Case: I understand the previous cases but still need an element resembling a link that is purely clickable

We recommend, without reserve, that elements resembling anchors should navigate. This will provide a superior user experience to a larger group of users out there.

However, we understand that developers are not always in total control of the visual design of web applications. In cases where it is imperative to provide an element resembling an anchor that purely acts as a click target with no navigation as result, we would like to recommend a compromise.

Again change the element to a `<button>`:

```jsx
<button
  type="button"
  className="link-button"
  onClick={() => this.setState({ showSomething: true })}
>
  Press me, I look like a link
</button>
```

Then use styling to change its appearance to that of a link:

```css
.link-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;
}
```

This button element can now also be used inline in text.

Once again we stress that this is an inferior implementation and some users will encounter difficulty to use your website, however, it will allow a larger group of people to interact with your website than the alternative of ignoring the rule's warning.

## Rule options

This rule takes one optional object argument of type object:

```json
{
  "rules": {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ]
  }
}
```

For the `components` option, these strings determine which JSX elements (**always including** `<a>`) should be checked for the props designated in the `specialLink` options (**always including** `href`). This is a good use case when you have a wrapper component that simply renders an `<a>` element (like in React):

```js
// Link.js
const Link = props => <a {...props}>A link</a>;

...

// NavBar.js (for example)
...
return (
  <nav>
    <Link href="/home" />
  </nav>
);
```

For the `aspects` option, these strings determine which sub-rules are run. This allows omission of certain error types in restrictive environments.

- `noHref`: Checks whether an anchor contains an `href` attribute.
- `invalidHref`: Checks if a given `href` value is valid.
- `preferButton`: Checks if anchors have been used as buttons.

The option can be used on its own or with the `components` and `specialLink` options.

If omitted, all sub-rule aspects will be run by default. This is the recommended configuration for all cases except where the rule becomes unusable due to well founded restrictions.

The option must contain at least one `aspect`.

### Succeed

```jsx
<a href="https://github.com" />
<a href="#section" />
<a href="foo" />
<a href="/foo/bar" />
<a href={someValidPath} />
<a href="https://github.com" onClick={foo} />
<a href="#section" onClick={foo} />
<a href="foo" onClick={foo} />
<a href="/foo/bar" onClick={foo} />
<a href={someValidPath} onClick={foo} />
```

### Fail

Anchors should be a button:

```jsx
<a onClick={foo} />
<a href="#" onClick={foo} />
<a href={"#"} onClick={foo} />
<a href={`#`} onClick={foo} />
<a href="javascript:void(0)" onClick={foo} />
<a href={"javascript:void(0)"} onClick={foo} />
<a href={`javascript:void(0)`} onClick={foo} />
```

Missing `href` attribute:

```jsx
<a />
<a href={undefined} />
<a href={null} />
```

Invalid `href` attribute:

```jsx
<a href="#" />
<a href={"#"} />
<a href={`#`} />
<a href="javascript:void(0)" />
<a href={"javascript:void(0)"} />
<a href={`javascript:void(0)`} />
```

## Accessibility guidelines

- [WCAG 2.1.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)

### Resources

- [WebAIM - Introduction to Links and Hypertext](https://webaim.org/techniques/hypertext/)
- [Links vs. Buttons in Modern Web Applications](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/)
- [Using ARIA - Notes on ARIA use in HTML](https://www.w3.org/TR/using-aria/#NOTES)
