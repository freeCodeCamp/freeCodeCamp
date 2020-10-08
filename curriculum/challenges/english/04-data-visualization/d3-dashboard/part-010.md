---
id: 5d8a4cfbe6b6180ed9a1c9e7
title: Part 10
challengeType: 0
---

## Description
<section id='description'>

Give the container some space by adding a `padding` of `100px 10px` to the `body` element.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const body = code.match(/body\s*{[\s\S]+?[^}]}/g)[0]; assert(/padding\s*:\s*100px\s*10px\s*(;|})/g.test(body));

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
}
</style>
```

</section>
