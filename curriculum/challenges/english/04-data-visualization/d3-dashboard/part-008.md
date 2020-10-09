---
id: 5d8a4cfbe6b6180ed9a1c9e5
title: Part 8
challengeType: 0
---

## Description
<section id='description'>

Give the dashboard a `background-color` of `white` and a `box-shadow` of `5px 5px 5px 5px #888` to give it a little depth.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const dashboard = $(".dashboard"); assert(dashboard.css("background-color") === "rgb(255, 255, 255)" && dashboard.css("box-shadow") === "rgb(136, 136, 136) 5px 5px 5px 5px");

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<style>
body {
  background-color: #ccc;
}

.dashboard {
  width: 980px;
  height: 500px;

  
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
}

.dashboard {
  width: 980px;
  height: 500px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #888;
}
</style>
```

</section>
