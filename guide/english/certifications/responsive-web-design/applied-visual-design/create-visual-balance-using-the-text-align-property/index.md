---
title: Create Visual Balance Using the text-align Property
---

# Create Visual Balance Using the text-align Property


---
## Hints

### Hint #1
Use the `text-align` property.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style>
  h4 {
  text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

#### Code Explanation

* The `h4{}` selects the `h4` element.
* `text-align: center;` align the text in the `h4` to the center.
* The `p{}` selects the `p` element.
* `text-align: justify;` justifies the text in the `p`.
</details>
