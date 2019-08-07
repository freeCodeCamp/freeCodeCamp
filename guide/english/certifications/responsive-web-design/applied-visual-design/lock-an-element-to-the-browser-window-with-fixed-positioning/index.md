---
title: Lock an Element to the Browser Window with Fixed Positioning
---


# Lock an Element to the Browser Window with Fixed Positioning


---
## Hints

### Hint 1

Use `position: fixed;`.


### Hint 2

Use the `left` and `top` properties.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style>
  #navbar {
    position: fixed;
    top: 0px;
    left: 0px;    
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

#### Code Explanation

*  `#navbar{}` selects all the elements with the ID of `navbar`.
*  `position: fixed;` positions the element with respect to the viewport i.e. the output screen in this case.
*  `top: 0px;` and `right: 0px;` offsets the element by `0px` to the top and left respectively and it is placed in the top-left corner of the screen.

</details>