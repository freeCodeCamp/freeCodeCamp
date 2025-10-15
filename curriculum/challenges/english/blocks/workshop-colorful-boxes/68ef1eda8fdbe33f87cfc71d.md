---
id: 68ef1eda8fdbe33f87cfc71d
title: Step 12
challengeType: 0
dashedName: step-12
---

# --description--

Now change the second number `0` to `1` within our `flex` property in our `style.css` file to see the variation in the flex container.

The second value represents `flex-shrink` and specifies how much the flex item will shrink if all the items are larger than the flex container's available space.

# --hints--

Test 1

```js
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Boxes</title>
    
  </head>
  <body>
    <header>
      <h1>CSS flexbox colorful boxes</h1>
    </header>

    <div class="flex-container">
      <div  class="box"></div>
      <div  class="box"></div>
      <div  class="box"></div>
      <div  class="box"></div>
      <div  class="box"></div>
    </div>

  </body>
</html>
--fcc-editable-region--
```

```css

h1 {
  text-align: center;
  margin-bottom: 10px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: auto;
  padding: 10px;
  margin: 20px auto;
  height: 400px;
  align-content: space-around;
}

.box {
  flex: 0 0 250px;
  max-height: 120px;
  color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-weight: bold;
  font-size: 1.125rem;
  border-radius: 5px;
  order: 0; 
}


```
