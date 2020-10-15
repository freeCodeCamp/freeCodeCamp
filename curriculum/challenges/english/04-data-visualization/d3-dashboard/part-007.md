---
id: 5d8a4cfbe6b6180ed9a1c9e4
title: Part 7
challengeType: 0
---

## Description
<section id='description'>

Next, target the `dashboard` class you created and give it a `width` of `980px` and a `height` of `500px`.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const dashboard = $(".dashboard"); assert(dashboard.css("width") === "980px" && dashboard.css("height") === "500px");

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
}
</style>
```

</section>
