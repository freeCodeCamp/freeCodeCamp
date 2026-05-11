---
id: 68ecfa0f03d88990bb96a33c
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

As you recall from an earlier lesson, description lists are used to present terms and definitions in an organized and easy-to-read format. 

Here is an example:

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

Below the `h1` element, create a `dl` element. This will hold the list of browsers.

# --hints--

You should have a `dl` element.

```js
const dl = document.querySelector('dl');
assert.exists(dl);
```

Your `dl` element should be below the `h1` element.

```js
assert.exists(document.querySelector('h1 + dl'));
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
        --fcc-editable-region--
        
        --fcc-editable-region--
    </body> 
</html>
```

