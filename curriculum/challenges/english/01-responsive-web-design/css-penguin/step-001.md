---
id: 619665c9abd72906f3ad30f9
title: Step 1
challengeType: 0
dashedName: step-1
---

# --description--

You will be building a happy Flappy Penguin, and further exploring CSS transforms and animations in the process.

Begin with your basic HTML boilerplate. Include the `DOCTYPE` declaration, the appropriate `meta` tags, a `head`, `body`, and `title` element. Also, link your stylesheet to the page.

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

Your `title` should have some text.

```js
assert.isAtLeast(title?.textContent?.length, 1);
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

Your `link` element should have `href="./styles.css"` and `rel="stylesheet"` attributes.

```js
assert(/<link(\s+href\s*=\s*("|')(\.\/)?styles\.css\2\s*rel=('|")\s*stylesheet\s*\4|\s+rel\s*=\s*('|")\s*stylesheet\s*\5\s*href\s*=\s*("|')(\.\/)?styles\.css\6)\s*\/?>/.test(code));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```

```css

```
