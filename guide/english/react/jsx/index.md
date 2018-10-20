---
title: JSX
---

# JSX

> JSX is short for JavaScript XML.

JSX is an expression which uses valid HTML statements within JavaScript. You can assign this expression to a variable and use it elsewhere. You can combine other valid JavaScript expressions and JSX within these HTML statements by placing them within braces (`{}`). Babel further compiles JSX into an object of type `React.createElement()`.

### Single-line & Multi-line expressions
Single-line expression are simple to use.

```jsx
const one = <h1>Hello World!</h1>;
```

When you need to use multiple lines in a single JSX expression, write the code within a single parenthesis.

```jsx
const two = (
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);
```

### Using only HTML tags

```jsx
const greet = <h1>Hello World!</h1>;
```

### Combining JavaScript expression with HTML tags
We can use JavaScript variables within braces.

```jsx
const who = "Quincy Larson";
const greet = <h1>Hello {who}!</h1>;
```

We can also call other JavaScript functions within braces.

```jsx
function who() {
  return "World";
}
const greet = <h1>Hello {who()}!</h1>;
```
### Only a single parent tag is allowed
A JSX expression must have only one parent tag. We can add multiple tags nested within the parent element only.

```jsx
// This is valid.
const tags = (
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);

// This is not valid.
const tags = (
  <h1>Hello World!</h1>
  <h3>This is my special list:</h3>
  <ul>
    <li>Once</li>
    <li>Twice</li>
  </ul>
);
```

### All Tags Must Be Closed

In HTML, there are self-closing tags such as `img`, `br`, `input`, and `hr`. 

This means that either of these methods are valid:

```html
<!-- no closing / -->
<input type="text" name="city">
<!-- with closing / -->
<input type="text" name="city" />
```

Self-closing (sometimes referred to as **void**) tags can be rendered with or without a closing forward slash.

However, with JSX, _all_ tags must be closed.

The following JSX is invalid:

```javascript
const email = <input type="email">;
```

Closing the `input` tag will make the JSX valid:


```javascript
const email = <input type="email" />;
```


### More Information

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)


My changes.
