# jsx-a11y/anchor-ambiguous-text

🚫 This rule is _disabled_ in the ☑️ `recommended` config.

<!-- end auto-generated rule header -->

Enforces `<a>` values are not exact matches for the phrases "click here", "here", "link", "a link", or "learn more". Screen readers announce tags as links/interactive, but rely on values for context. Ambiguous anchor descriptions do not provide sufficient context for users.

## Rule options

This rule takes one optional object argument with the parameter `words`.

```json
{
  "rules": {
    "jsx-a11y/anchor-ambiguous-text": [2, {
      "words": ["click this"],
    }],
  }
}
```

The `words` option allows users to modify the strings that can be checked for in the anchor text. Useful for specifying other words in other languages. The default value is set by `DEFAULT_AMBIGUOUS_WORDS`:

```js
const DEFAULT_AMBIGUOUS_WORDS = ['click here', 'here', 'link', 'a link', 'learn more'];
```

The logic to calculate the inner text of an anchor is as follows:

- if an element has the `aria-label` property, its value is used instead of the inner text
- if an element has `aria-hidden="true`, it is skipped over
- if an element is `<img />` or configured to be interpreted like one, its `alt` value is used as its inner text

Note that this rule still disallows ambiguous `aria-label` or `alt` values.

Note that this rule is case-insensitive, trims whitespace, and ignores certain punctuation (`[,.?¿!‽¡;:]`). It only looks for **exact matches**.

### Succeed

```jsx
<a>read this tutorial</a> // passes since it is not one of the disallowed words
<a>${here}</a> // this is valid since 'here' is a variable name
<a aria-label="tutorial on using eslint-plugin-jsx-a11y">click here</a> // the aria-label supersedes the inner text
```

### Fail

```jsx
<a>here</a>
<a>HERE</a>
<a>link</a>
<a>click here</a>
<a>learn more</a>
<a>learn more.</a>
<a>learn more,</a>
<a>learn more?</a>
<a>learn more!</a>
<a>learn more:</a>
<a>learn more;</a>
<a>a link</a>
<a> a link </a>
<a><span> click </span> here</a> // goes through element children
<a>a<i></i> link</a>
<a><i></i>a link</a>
<a><span aria-hidden="true">more text</span>learn more</a> // skips over elements with aria-hidden=true
<a aria-label="click here">something</a> // the aria-label here is inaccessible
<a><img alt="click here"/></a> // the alt tag is still ambiguous
<a alt="tutorial on using eslint-plugin-jsx-a11y">click here</a> // the alt tag is only parsed on img
```

## Accessibility guidelines

Ensure anchor tags describe the content of the link, opposed to simply describing them as a link.

Compare

```jsx
<p><a href="#">click here</a> to read a tutorial by Foo Bar</p>
```

which can be more concise and accessible with

```jsx
<p>read <a href="#">a tutorial by Foo Bar</a></p>
```

### Resources

1. [WebAIM, Hyperlinks](https://webaim.org/techniques/hypertext/)
2. [Deque University, Link Checklist - 'Avoid "link" (or similar) in the link text'](https://dequeuniversity.com/checklists/web/links)
