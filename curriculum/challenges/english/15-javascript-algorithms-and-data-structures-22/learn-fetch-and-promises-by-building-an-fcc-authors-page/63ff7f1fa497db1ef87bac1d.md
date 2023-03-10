---
id: 63ff7f1fa497db1ef87bac1d
title: Step 9
challengeType: 0
dashedName: step-9
---

# --description--

Now, you need to take what you need from each of the author object. This is called destructuring. Inside each object in the array are `author`, `image`, `url`, and `bio` items. You will need all of them to populate the author info on the UI.

This is how you can destructure in JavaScript:

```js
const freeCodeCamp = {
  founder: 'Quincy Larson',
  type: 'Non-profit',
  funding: 'Donations',
};

const { founder, type } = freeCodeCamp;

console.log(founder) // Quincy Larson
console.log(type) // Non-profit
```

That means I took out the `founder` and `type` items from the object.

Inside your `forEach`, destructure the `author`, `image`, `url`, and `bio` items. You don't need to assign them to anything as done in the example, just put them in a curly brace inside the `forEach`.

Also, put an `index` parameter inside the `forEach`, but it should be outside of the destructuring. This `index` will represent the position of each authors. It'll be useful for fetching just what you want and paginating the authors. 

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>freeCodeCamp News Author Page</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1 class="title">freeCodeCamp News Author Page</h1>

    <main>
      <div id="author-container"></div>
      <button class="btn" id="load-more-btn">Load More Authors</button>
    </main>

    <script src="./script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --main-bg-color: #1b1b32;
  --light-grey: #f5f6f7;
  --dark-purple: #5a01a7;
  --golden-yellow: #feac32;
}

body {
  background-color: var(--main-bg-color);
  text-align: center;
}

.title {
  color: var(--light-grey);
  margin: 20px 0;
}

#author-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.user-card {
  border-radius: 15px;
  width: 300px;
  height: 350px;
  background-color: var(--light-grey);
  margin: 20px;
}

.user-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.purple-divider {
  background-color: var(--dark-purple);
  width: 100%;
  height: 15px;
}

.author-name {
  margin: 10px;
}

.bio {
  margin: 20px;
}

.error-msg {
  color: var(--light-grey);
}

.btn {
  cursor: pointer;
  width: 200px;
  margin: 10px;
  color: var(--main-bg-color);
  font-size: 14px;
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}
```

```js
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);   
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

const displayAuthors = (authors) => {
  authors.forEach(
    --fcc-editable-region--

    --fcc-editable-region--
  );
};
```
