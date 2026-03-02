---
id: 673b3d6b7ef7318eef926d5a
title: Build a Mood Board
challengeType: 25
dashedName: build-a-mood-board
demoType: onClick
---

# --description--

A mood board is a collage of images and text that conveys a general idea, goal, or feeling about a particular topic.

In this lab, you will create a mood board using reusable React components. The CSS has already been provided for you.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create and export a `MoodBoardItem` component that accepts three props: `color`, `image`, and `description`.
2. Your `MoodBoardItem` component should return a `div` with the class `mood-board-item` as its top-level element.
3. You should set the background color of the `.mood-board-item` element to the value of the `color` prop using inline styles.
4. You should render an `img` element, with a class of `mood-board-image` and its `src` attribute set to the value of the `image` prop, within the `.mood-board-item` element.
5. You should render an `h3` element, with a class of `mood-board-text` and its text the value of the `description` prop, within the `.mood-board-item` element.
6. You should create and export a `MoodBoard`.
7. Your `MoodBoard` component should return a `div` as its top-level element.
8. Your `MoodBoard` component should render an `h1` element with a class of `mood-board-heading` and the text `Destination Mood Board`.
9. Your `MoodBoard` component should render a `div` with a class of `mood-board`.
10. Your `MoodBoard` component should render at least three `MoodBoardItem` components within the `.mood-board` element, each should pass `color`, `image`, and `description` props with valid values.

You can use the following images in your Mood Board if you would like:

- `https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg`
- `https://cdn.freecodecamp.org/curriculum/labs/shore.jpg`
- `https://cdn.freecodecamp.org/curriculum/labs/grass.jpg`
- `https://cdn.freecodecamp.org/curriculum/labs/ship.jpg`
- `https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg`
- `https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg`

# --hints--

You should export a `MoodBoardItem` component.

```js
assert.isFunction(window.index.MoodBoardItem, 1);
```

Your `MoodBoardItem` component should return a `div` with a class of `mood-board-item` at its top-level element.

```js
const item = document.getElementsByClassName('mood-board-item')[0];
assert.exists(item);
assert.equal(item.tagName, 'DIV');
```

The background color of the `.mood-board-item` element should be set to the value of `color` prop using inline styles.

```js
  const container = await __helpers.prepTestComponent(window.index.MoodBoardItem, { color: "red" });
  const moodBoardItem = container.querySelector(".mood-board-item");
  assert.equal(moodBoardItem.style.backgroundColor, "red");
```

Your `MoodBoardItem` component should render an `img` element with a class of `mood-board-image` and its `src` set to the value of the `image` prop.

```js
  const container = await __helpers.prepTestComponent(window.index.MoodBoardItem, { image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" });
  const img = container.querySelector(".mood-board-image");
  assert.exists(img);
  assert.equal(img.tagName, "IMG");
  assert.equal(img.src, "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg");
```

Your `MoodBoardItem` component should render an `h3` element with a class of `mood-board-text` and its text set to the value of the `description` prop.

```js
  const container = await __helpers.prepTestComponent(window.index.MoodBoardItem, { description: "Caribbean" });
  const text = container.querySelector(".mood-board-text");
  assert.exists(text);
  assert.equal(text.tagName, "H3");
  assert.equal(text.textContent, "Caribbean");
```

You should export a `MoodBoard` component.

```js
assert.isFunction(window.index.MoodBoard, 1);
```

Your `MoodBoard` component should return a `div` as its top-level element.

```js
const root = document.getElementById('root');
assert.equal(root.children[0].tagName, 'DIV');
```

Your `MoodBoard` component should render an `h1` element with a class of `mood-board-heading` and the text `Destination Mood Board`.

```js
const heading = document.getElementsByClassName('mood-board-heading')[0];
assert.exists(heading);
assert.equal(heading.tagName, 'H1');
assert.equal(heading.textContent, 'Destination Mood Board');
```

Your `MoodBoard` component should render at least three `MoodBoardItem` components, each should pass `color`, `image`, and `description` props with valid values.

```js
const moodboard = document.getElementsByClassName('mood-board')[0];
const items = moodboard.querySelectorAll(".mood-board-item");
assert.isAtLeast(items.length, 3);     

items.forEach((item) => {
  const color = item.style.backgroundColor;
  const img = item.querySelector("img");
  const text = item.querySelector("h3");
  
  assert.isAtLeast(color.length, 1);
  assert.isAtLeast(img.src.length, 1);
  assert.isAtLeast(text.textContent.length, 1);
});
```

Your `MoodBoard` component should be rendered to the page's `#root` element.

```js
const root = document.getElementById('root');
const moodBoard = root.getElementsByClassName('mood-board')[0];
assert.exists(moodBoard);
```

# --seed--

## --seed-contents--

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Mood Board</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.3/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { MoodBoard } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(
        <MoodBoard />
      );
    </script>
  </body>
</html>
```

```css
body {
  background-color: #ffffcc;
}

.mood-board-heading {
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-top: 20px;
}

.mood-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.mood-board-item {
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 250px;
}

.mood-board-image {
  border-radius: 5px;
  width: 180px;
  height: 150px;
  object-fit: cover;
}

.mood-board-text {
  margin-top: 20px;
  font-size: 1.2em;
}
```

```jsx

```

# --solutions--

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Mood Board</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.3/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { MoodBoard } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(
        <MoodBoard />
      );
    </script>
  </body>
</html>
```

```css
body {
  background-color: #ffffcc;
}

.mood-board-heading {
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-top: 20px;
}

.mood-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.mood-board-item {
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 250px;
}

.mood-board-image {
  border-radius: 5px;
  width: 180px;
  height: 150px;
  object-fit: cover;
}

.mood-board-text {
  margin-top: 20px;
  font-size: 1.2em;
}
```

```jsx
export function MoodBoardItem(props) {
  return (
    <div className='mood-board-item' style={{ backgroundColor: props.color }}>
      <img src={props.image} alt='Mood' className='mood-board-image' />
      <h3 className='mood-board-text'>{props.description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className='mood-board-heading'>Destination Mood Board</h1>
      <div className='mood-board'>
        <MoodBoardItem
          color='#2da64f'
          image='https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg'
          description='Caribbean'
        />
        <MoodBoardItem
          color='#8e44ad'
          image='https://cdn.freecodecamp.org/curriculum/labs/shore.jpg'
          description='Gawadar Beach'
        />
        <MoodBoardItem
          color='#3498db'
          image='https://cdn.freecodecamp.org/curriculum/labs/grass.jpg'
          description='Cape Town'
        />
        <MoodBoardItem
          color='#bf3d7e'
          image='https://cdn.freecodecamp.org/curriculum/labs/ship.jpg'
          description='Suez Canal'
        />
        <MoodBoardItem
          color='#e74c3c'
          image='https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg'
          description='Santorini'
        />
        <MoodBoardItem
          color='#95a5a6'
          image='https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg'
          description='Istanbul'
        />
      </div>
    </div>
  );
}
```
