---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
forumTopicId: 301461
---

## Description
<section id='description'>

The last challenge showed how the <code>@for</code> directive uses a starting and ending value to loop a certain number of times. Sass also offers the <code>@each</code> directive which loops over each item in a list or map.
On each iteration, the variable gets assigned to the current value from the list or map.

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

A map has slightly different syntax. Here's an example:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Note that the <code>$key</code> variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have <code>color1</code>, <code>color2</code>... in it.
Both of the above code examples are converted into the following CSS:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

</section>

## Instructions
<section id='instructions'>

Write an <code>@each</code> directive that goes through a list: <code>blue, black, red</code> and assigns each variable to a <code>.color-bg</code> class, where the "color" part changes for each item.
Each class should set the <code>background-color</code> the respective color.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@each</code> directive.
    testString: assert(code.match(/@each /g));
  - text: Your <code>.blue-bg</code> class should have a <code>background-color</code> of blue.
    testString: assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
  - text: Your <code>.black-bg</code> class should have a <code>background-color</code> of black.
    testString: assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
  - text: Your <code>.red-bg</code> class should have a <code>background-color</code> of red.
    testString: assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

</div>

</section>

## Solution
<section id='solution'>

The solution requires using the $color variable twice: once for the class name and once for setting the background color. You can use either the list or map data type.

### List Data type

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

### Map Data type

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

</section>
