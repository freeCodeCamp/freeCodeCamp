---
id: 68ee9e3066cfd4eb2328e8a5
title: "Challenge 86: Image Search"
challengeType: 29
dashedName: challenge-86
---

# --description--

On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

- Ignore the case when matching the search terms.
- Return the images in the same order they appear in the input array.

# --hints--

`image_search(["dog.png", "cat.jpg", "parrot.jpeg"], "dog")` should return `["dog.png"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(image_search(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"), ["dog.png"])`)
}})
```

`image_search(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun")` should return `["Sunset.jpg", "sunflower.jpeg"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(image_search(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"), ["Sunset.jpg", "sunflower.jpeg"])`)
}})
```

`image_search(["Moon.png", "sun.jpeg", "stars.png"], "PNG")` should return `["Moon.png", "stars.png"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(image_search(["Moon.png", "sun.jpeg", "stars.png"], "PNG"), ["Moon.png", "stars.png"])`)
}})
```

`image_search(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat")` should return `["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(image_search(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"), ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"])`)
}})
```

# --seed--

## --seed-contents--

```py
def image_search(images, term):

    return images
```

# --solutions--

```py
def image_search(images, term):
    lower_term = term.lower()
    return [img for img in images if lower_term in img.lower()]
```
