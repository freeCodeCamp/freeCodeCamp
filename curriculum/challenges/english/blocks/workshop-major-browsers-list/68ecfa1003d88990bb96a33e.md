---
id: 68ecfa1003d88990bb96a33e
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Now it is time to add your second browser to the list.

Below your `Google Chrome` entry, add another `dt` element containing the text `Firefox`.

Below your `dt` element, add a `dd` element with the following text:

```md
This is a free web browser developed by the Mozilla Corporation and first created in 2004.
```

# --hints--

You should have two `dt` elements in your code.

```js
const dtElements = document.querySelectorAll('dt');
assert.lengthOf(dtElements, 2);
```

Your second `dt` element should have the text `Firefox`.

```js
const dt = document.querySelectorAll('dt')[1];
assert.strictEqual(dt?.textContent.trim(), "Firefox");
```

You should have two `dd` elements in your code.

```js
const ddElements = document.querySelectorAll('dd');
assert.lengthOf(ddElements, 2);
```

Your second `dd` element should contain the text `This is a free web browser developed by the Mozilla Corporation and first created in 2004.`

```js
const ddElement = document.querySelectorAll('dd')[1];
assert.strictEqual(ddElement?.textContent.trim(), "This is a free web browser developed by the Mozilla Corporation and first created in 2004.");
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

            --fcc-editable-region--
            
            --fcc-editable-region--
        </dl>
    </body> 
</html>
```

