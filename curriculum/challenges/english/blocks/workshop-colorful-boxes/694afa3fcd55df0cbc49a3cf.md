---
id: 694afa3fcd55df0cbc49a3cf
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Now link your `styles.css` file to the HTML document.

# --hints--

You should have a `link` element inside the `head` element.

```js
assert.exists(document.querySelector('head > link'));
```

Your `link` element should have a `rel` attribute.

```js
const linkEl = document.querySelector('head > link');
assert.exists(linkEl?.getAttribute('rel'));
```

Your `link` element should have a `rel` attribute set to `stylesheet`.

```js
const linkEl = document.querySelector('head > link');
assert.equal(linkEl?.getAttribute('rel'), 'stylesheet');
```

Your `link` element should have an `href` attribute set to `styles.css`.

```js
const linkHrefValue = document.querySelector('head > link')?.dataset?.href;
assert.match(linkHrefValue, /^(\.\/)?styles\.css$/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Colored Boxes</title>
--fcc-editable-region--
	
--fcc-editable-region-- 
</head> 
<body>
	<header>
		<h1>Colored Boxes Layout</h1>
	</header>
</body>
</html>
```
