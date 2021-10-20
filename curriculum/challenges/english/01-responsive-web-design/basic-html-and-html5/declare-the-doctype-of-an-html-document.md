---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

The challenges so far have covered specific HTML elements and their uses. However, there are a few elements that give overall structure to your page, and should be included in every HTML document.

At the top of your document, you need to tell the browser which version of HTML your page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.

You tell the browser this information by adding the `<!DOCTYPE ...>` tag on the first line, where the `...` part is the version of HTML. For HTML5, you use `<!DOCTYPE html>`.

The `!` and uppercase `DOCTYPE` is important, especially for older browsers. The `html` is not case sensitive.

Next, the rest of your HTML code needs to be wrapped in `html` tags. The opening `<html>` goes directly below the `<!DOCTYPE html>` line, and the closing `</html>` goes at the end of the page.

Here's an example of the page structure. Your HTML code would go in the space between the two `html` tags.

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

Add a `DOCTYPE` tag for HTML5 to the top of the blank HTML document in the code editor. Under it, add opening and closing `html` tags, which wrap around an `h1` element. The heading can include any text.

# --hints--

Your code should include a `<!DOCTYPE html>` tag.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

There should be one `html` element.

```js
assert($('html').length == 1);
```

The `html` tags should wrap around one `h1` element.

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
