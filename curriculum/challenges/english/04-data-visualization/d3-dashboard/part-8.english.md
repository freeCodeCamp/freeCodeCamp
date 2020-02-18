---
id: 5d8a4cfbe6b6180ed9a1c9e5
title: Part 8
challengeType: 0
isBeta: true
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
    <script>
      const data = [ 
        { year: 2012, followers: { twitter: 2594, tumblr:  401, instagram:   83 }},
        { year: 2013, followers: { twitter: 3049, tumblr:  440, instagram:  192 }},
        { year: 2014, followers: { twitter: 3511, tumblr:  415, instagram:  511 }},
        { year: 2015, followers: { twitter: 3619, tumblr:  492, instagram: 1014 }},
        { year: 2016, followers: { twitter: 4046, tumblr:  543, instagram: 2066 }},
        { year: 2017, followers: { twitter: 3991, tumblr:  701, instagram: 3032 }},
        { year: 2018, followers: { twitter: 3512, tumblr: 1522, instagram: 4512 }},
        { year: 2019, followers: { twitter: 3274, tumblr: 1989, instagram: 4715 }},
        { year: 2020, followers: { twitter: 2845, tumblr: 2040, instagram: 4801 }}
      ];
      </script>
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

```js
```

</section>
