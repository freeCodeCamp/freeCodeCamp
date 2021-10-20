---
id: 5f3313e74582ad9d063e3a38
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

Add a `head` element within the `html` element, so you can add a `title` element. The title element's text should be `Camper Cafe Menu`.

# --hints--

You should have an opening `<head>` tag.

```js
assert(code.match(/<head>/i));
```

You should have a closing `</head>` tag.

```js
assert(code.match(/<head>/i));
```

You should have an opening `<title>` tag.

```js
assert(code.match(/<title>/i));
```

You should have a closing `</title>` tag.

```js
assert(code.match(/<\/title>/i));
```

Your `<title>` element should be nested in your `<head>` element.

```js
assert(code.match(/<head>\s*<title>.*<\/title>\s*<\/head>/i));
```

Your `<title>` element should have the text `Camper Cafe Menu`. You may need to check your spelling.

```js
assert(code.match(/<title>camper\scafe\smenu<\/title>/i));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--

--fcc-editable-region--
</html>
```
