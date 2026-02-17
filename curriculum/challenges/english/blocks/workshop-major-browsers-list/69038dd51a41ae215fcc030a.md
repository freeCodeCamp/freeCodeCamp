---
id: 69038dd51a41ae215fcc030a
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

The third browser you will add to the list will be for the Safari web browser.

Add another `dt` element containing the text `Safari`.

Below your `dt` element, add a `dd` element with the following text:

```md
This browser was developed by Apple and is the default browser for iPhone, iPad and Mac devices.
```

# --hints--

You should have three `dt` elements in your code.

```js
const dtElements = document.querySelectorAll('dt');
assert.lengthOf(dtElements, 3);
```

Your third `dt` element should have the text `Safari`.

```js
const dt = document.querySelectorAll('dt')[2];
assert.strictEqual(dt?.textContent.trim(), "Safari");
```

You should have three `dd` elements in your code.

```js
const ddElements = document.querySelectorAll('dd');
assert.lengthOf(ddElements, 3);
```

Your third `dd` element should contain the text `This browser was developed by Apple and is the default browser for iPhone, iPad and Mac devices.`

```js
const ddElement = document.querySelectorAll('dd')[2];
assert.strictEqual(ddElement?.textContent.trim(), "This browser was developed by Apple and is the default browser for iPhone, iPad and Mac devices.");
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>List of Browsers and Descriptions</title> 
    </head> 
    <body> 
        <h1>List of Major Web Browsers</h1> 
        <dl>
            <dt>Google Chrome</dt>
            <dd>This is a free web browser developed by Google and first released in 2008.</dd>

            <dt>Firefox</dt>
            <dd>This is a free web browser developed by the Mozilla Corporation and first created in 2004.</dd>

            --fcc-editable-region--
            
            --fcc-editable-region--
        </dl>
    </body> 
</html>
```
