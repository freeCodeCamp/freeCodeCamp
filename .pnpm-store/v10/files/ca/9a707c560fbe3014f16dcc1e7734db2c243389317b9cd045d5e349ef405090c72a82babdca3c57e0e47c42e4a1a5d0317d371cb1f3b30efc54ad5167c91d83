# jsx-a11y/img-redundant-alt

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce img alt attribute does not contain the word image, picture, or photo. Screen readers already announce `img` elements as an image. There is no need to use words such as *image*, *photo*, and/or *picture*.

## Rule options

This rule takes one optional object argument of type object:

```json
{
    "rules": {
        "jsx-a11y/img-redundant-alt": [ 2, {
            "components": [ "Image" ],
            "words": [ "Bild", "Foto" ],
          }],
    }
}
```

For the `components` option, these strings determine which JSX elements (**always including** `<img>`) should be checked for having redundant words in the `alt` prop value . This is a good use case when you have a wrapper component that simply renders an `img` element (like in React).

For the `words` option, these strings can be used to specify custom words that should be checked for in the alt prop, including `image`, `photo`, and `picture`. Useful for specifying words in other languages.

The rule will first check if `aria-hidden` is true to determine whether to enforce the rule. If the image is hidden, then rule will always succeed.

### Succeed
```jsx
<img src="foo" alt="Foo eating a sandwich." />
<img src="bar" aria-hidden alt="Picture of me taking a photo of an image" /> // Will pass because it is hidden.
<img src="baz" alt={`Baz taking a ${photo}`} /> // This is valid since photo is a variable name.
```

### Fail
```jsx
<img src="foo" alt="Photo of foo being weird." />
<img src="bar" alt="Image of me at a bar!" />
<img src="baz" alt="Picture of baz fixing a bug." />
```

## Accessibility guidelines
General best practice (reference resources)

### Resources
- [WebAIM, Alternative Text](https://webaim.org/techniques/alttext/)
