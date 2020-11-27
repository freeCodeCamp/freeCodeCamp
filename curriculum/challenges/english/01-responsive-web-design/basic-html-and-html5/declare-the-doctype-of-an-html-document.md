---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
---

## Description

<section id='description'>

The challenges so far have covered specific HTML elements and their uses. However, there are a few elements that give overall structure to your page, and should be included in every HTML document.

At the top of your document, you need to tell the browser which version of HTML your page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.

You tell the browser this information by adding the `<!DOCTYPE ...>` tag on the first line, where the `...` part is the version of HTML. For HTML5, you use `<!DOCTYPE html>`.

The `!` and uppercase `DOCTYPE` is important, especially for older browsers. The `html` is not case sensitive.

Next, the rest of your HTML code needs to be wrapped in `html` tags. The opening `<html>` goes directly below the `<!DOCTYPE html>` line, and the closing `</html>` goes at the end of the page.

Here's an example of the page structure:

```html
<!DOCTYPE html>
<html>
  <!-- Your HTML code goes here -->
</html>
```

</section>

## Instructions

<section id='instructions'>

Add a `DOCTYPE` tag for HTML5 to the top of the blank HTML document in the code editor. Under it, add opening and closing `html` tags, which wrap around an `h1` element. The heading can include any text.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Your code should include a <code>&lt;!DOCTYPE html&gt;</code> tag.
    testString: assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
  - text: There should be one <code>html</code> element.
    testString: assert($('html').length == 1);
  - text: The <code>html</code> tags should wrap around one <code>h1</code> element.
    testString: assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>

</section>

## Solution

<section id='solution'>

```html

<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>

```

</section>
