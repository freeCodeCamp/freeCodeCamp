---
id: 68f1fac259a4afabb478b960
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

You might have noticed you didn't link to the actual video. You will do that in the next phase. When it comes to video file types, there are differences in browser support. To accommodate this, you can use `source` elements inside the `video` element and the browser will select the first compatible `source`.

Here is an example of a `source` element:

```html
<video controls width="250">
  <source src="src-url-goes-here" type="video-type-goes-here" />
</video>
```

The `source` element is a void element so it does not have a closing tag. 

Add a `source` element inside of your `video` element. 


# --hints--

You should have a `source` element inside of your `video` element.

```js
assert.exists(document.querySelector('video > source'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Working with the HTML Video Element</title>
</head>
<body>
  <h1>Working with the HTML Video Element</h1>
  <video
    width="640"
    loop
    controls
    muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg"
  >
--fcc-editable-region--
    
--fcc-editable-region--
  </video>
</body>
</html>
```
