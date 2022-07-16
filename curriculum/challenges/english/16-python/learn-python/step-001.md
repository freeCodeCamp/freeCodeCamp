---
id: 5d79353297c0ebb149ea9fed
title: Step 1
challengeType: 0
dashedName: step-1
---

# --description--

Python? Add `fig` as the final line in the script.

# --hints--

You should write Python, silly!

```js
assert(code.includes('fig\n'));
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Python</title>
  <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
  <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
</head>
<style>
  #container {
    display: grid;
    background-color: black;
  }
</style>
<body>
<div id="container">
  <div></div>
</div>
```

## --after-user-code--

```html
</body>
</html>
```

## --seed-contents--

```html
<py-env>
  - numpy
  - matplotlib
</py-env>
<py-script>
import matplotlib.pyplot as plt
import numpy as np

x = np.random.randn(100)
y = np.random.randn(100)

fig, ax = plt.subplots()
ax.scatter(x, y)
--fcc-editable-region--



--fcc-editable-region--
</py-script>
```

# --solutions--

```html
<py-env>
  - numpy
  - matplotlib
</py-env>
<py-script>
import matplotlib.pyplot as plt
import numpy as np

x = np.random.randn(100)
y = np.random.randn(100)

fig, ax = plt.subplots()
ax.scatter(x, y)

fig

</py-script>
```
