---
title: Introduction to HTML5 Elements
---
## Introduction to HTML5 Elements

The example below represent a `h1` element and a `h4` element wrapped into a `header` element:
```
<header>
  <h1> Big title </h1>
  <h4> Tiny subtitle </h4>
</header>
```

As you can see the `header` contains the other elements that ends up on the same level ( the `h1` ends before the `h4` starts and both are nested into the `header`). 

## Solution 
Firstly, we will need to add a second `<p>` element below the first `<p>` element, which needs to say `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`, as shown below:

### Before adding 2nd `<p>` element
```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

### After adding 2nd `<p>` element
```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. </p>  <!-- The second <p> element has been added -->

```
However, the objective also requires the user to add the `<main>` elements between the `<p>` elements as shown below:

### Before adding `<main>` element
```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. </p>

```

### After adding `<main>` element
```html
<h2>CatPhotoApp</h2>
<main> <!-- The opening <main> element has been added -->
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. </p>
</main> <!-- The closing <main> element has been added -->
```

## Full Solution
```html
<h2>CatPhotoApp</h2>
<main>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. </p>
</main>
```
