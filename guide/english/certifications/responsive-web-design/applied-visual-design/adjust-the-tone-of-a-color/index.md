---
title: Adjust the Tone of a Color
---
## Adjust the Tone of a Color

### Solution

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }
  
  nav {
    background-color: hsl(180, 80%, 25%);
  }
  
  h1 {
    text-indent: 10px;
    padding-top: 10px;
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
    color: inherit;
  }
</style>
  
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Classes</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
</header>
```

#### Explanation

The `background-color: hsl(180, 80%, 25%);` declaration uses the same hue i.e. `180` as required by the challenge and sets the saturation and lightness at `80%` and `25%` respectively for all `nav` elements.
