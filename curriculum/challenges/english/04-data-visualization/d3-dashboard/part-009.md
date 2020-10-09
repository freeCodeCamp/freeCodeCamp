---
id: 5d8a4cfbe6b6180ed9a1c9e6
title: Part 9
challengeType: 0
---

## Description
<section id='description'>

Now you can see your dashboard element. Center it by adding a `margin` of `auto` to it.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const dashboard = code.match(/.dashboard\s*{[\s\S]+?[^}]}/g)[0]; assert(/margin\s*:\s*auto\s*(;|})/g.test(dashboard));

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
  margin: auto;
}
</style>
```

</section>
