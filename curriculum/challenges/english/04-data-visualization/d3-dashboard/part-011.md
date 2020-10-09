---
id: 5d8a4cfbe6b6180ed9a1c9e8
title: Part 11
challengeType: 0
---

## Description
<section id='description'>

Later on, you will be adding more elements to the dashboard container. Set the `display` to `flex` and the `align-items` to `center` so those items will be vertically centered.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const dashboard = $(".dashboard"); assert(dashboard.css("display") === "flex" && dashboard.css("align-items") === "center");

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<style>
body {
  background-color: #ccc;
  padding: 100px 10px;
}

.dashboard {
  width: 980px;
  height: 500px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #888;
  margin: auto;

  
}
</style>
```

</div>


### Before Test
<div id='html-setup'>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

</div>
</section>


## Solution
<section id='solution'>

```html
<style>
body {
  background-color: #ccc;
  padding: 100px 10px;
}

.dashboard {
  width: 980px;
  height: 500px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #888;
  margin: auto;
  display: flex;
  align-items: center;  
}
</style>
```

</section>
