---
id: 6193d8081ec2531581ea7b98
title: Step 1
challengeType: 0
dashedName: step-1
---

# --description--

A balance sheet is used to track the state of an organization's finances. You'll be building a mock balance sheet for AcmeWidgetCorp to explore the use of various CSS selectors.

Begin with your basic HTML boilerplate. Include the `DOCTYPE` declaration, an `html` element, the appropriate `meta` tags, a `head`, `body`, and `title` element, and `link` your stylesheet. Give the `title` element the text `AcmeWidgetCorp Balance Sheet`.

# --hints--

Your code should have a `<!DOCTYPE html>` declaration.

```js
assert(code.match(/<!DOCTYPE html>/i));
```

Your code should have an `html` element.

```js
assert(document.querySelectorAll('html')?.length === 1);
```

Your code should have a `head` element within the `html` element.

```js
assert(document.querySelectorAll('head')?.length === 1);
```

Your code should have a `body` element within the `html` element.

```js
assert(document.querySelectorAll('body')?.length === 1);
```

Your `head` element should come before your `body` element.

```js
assert(document.querySelector('body')?.previousElementSibling?.tagName === 'HEAD');
```

You should have two `meta` elements.

```js
const meta = document.querySelectorAll('meta');
assert(meta?.length === 2);
```

One `meta` element should have a `name` set to `viewport`, and `content` set to `width=device-width, initial-scale=1.0`.

```js
const meta = [...document.querySelectorAll('meta')];
const target = meta?.find(m => m?.getAttribute('name') === 'viewport' && m?.getAttribute('content') === 'width=device-width, initial-scale=1.0' && !m?.getAttribute('charset'));
assert.exists(target);
```

The other `meta` element should have the `charset` attribute set to `UTF-8`.

```js
const meta = [...document.querySelectorAll('meta')];
const target = meta?.find(m => !m?.getAttribute('name') && !m?.getAttribute('content') && m?.getAttribute('charset')?.toLowerCase() === 'utf-8');
assert.exists(target);
```

Your code should have a `title` element.

```js
const title = document.querySelector('title');
assert.exists(title);
```

Your project should have a title of `AcmeWidgetCorp Balance Sheet`.

```js
const title = document.querySelector('title');
assert.equal(title?.text?.trim()?.toLowerCase(), 'acmewidgetcorp balance sheet')
```

Remember, the casing and spelling matter for the title.

```js
const title = document.querySelector('title');
assert.equal(title?.text?.trim(), 'AcmeWidgetCorp Balance Sheet');
```

Your code should have a `link` element.

```js
assert(/<link/.test(code))
```

Your `href` attribute should have the value `./styles.css`.

```js
assert(/href\s*=\s*('|")(\.\/)?styles\.css\1/.test(code));
```

Your `rel` attribute should have the value `stylesheet`.

```js
assert(/rel\s*=\s*('|")\s*stylesheet\s*\1/.test(code));
```

Your `type` attribute should have the value `text/css`.

```js
assert(/type\s*=\s*('|")\s*text\/css\s*\1/.test(code));
```

Your `link` element should have `href="./styles.css"`, `rel="stylesheet"`, and `type="text/css"` attributes

```js
assert(/<link\s+(href\s*=\s*("|')(\.\/)?styles\.css\2\s*(rel\s*=\s*('|")\s*stylesheet\s*\5\s*type\s*=\s*("|')text\/css\6|type\s*=\s*("|')text\/css\7\s*rel\s*=\s*('|")\s*stylesheet\s*\8)|rel\s*=\s*('|")\s*stylesheet\s*\9\s*(href\s*=\s*("|')(\.\/)?styles\.css\11\s*type\s*=\s*("|')text\/css\13|type\s*=\s*("|')text\/css\14\s*href\s*=\s*("|')(\.\/)?styles\.css\15)|type\s*=\s*("|')text\/css\17\s*(href\s*=\s*("|')(\.\/)?styles\.css\19\s*rel\s*=\s*('|")\s*stylesheet\s*\21|rel\s*=\s*('|")\s*stylesheet\s*\22\s*href\s*=\s*("|')(\.\/)?styles\.css\23))\s*\/?>/.test(code));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```

```css

```
