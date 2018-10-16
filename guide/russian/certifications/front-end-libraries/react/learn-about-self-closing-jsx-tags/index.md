---
title: Learn About Self-Closing JSX Tags
localeTitle: Узнайте о самозакрывающихся тегах JSX
---
## Узнайте о самозакрывающихся тегах JSX

## Подсказка 1:

```js
const JSX = ( 
  <div> 
    {/* remove comment and change code below this line // Remember that comments in JSX have parentheses. 
    <h2>Welcome to React!</h2> <br > // ? 
    <p>Be sure to close all tags!</p> 
    <hr >  // ? 
    remove comment and change code above this line */} // Remember that comments in JSX have parentheses. 
  </div> 
 ); 
```

## Решение

```js
const JSX = ( 
  <div> 
 
    <h2>Welcome to React!</h2> <br /> 
    <p>Be sure to close all tags!</p> 
    <hr /> 
 
  </div> 
 ); 

```