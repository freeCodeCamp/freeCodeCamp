---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
forumTopicId: 301459
---

## Description
<section id='description'>
<dfn>Partials</dfn> in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.
Names for partials start with the underscore (<code>_</code>) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the <code>.scss</code> file extension. To bring the code in the partial into another Sass file, use the <code>@import</code> directive.
For example, if all your mixins are saved in a partial named "_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:

```scss
// In the main.scss file

@import 'mixins'
```

Note that the underscore and file extension are not needed in the <code>import</code> statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.
</section>

## Instructions
<section id='instructions'>
Write an <code>@import</code> statement to import a partial named <code>_variables.scss</code> into the main.scss file.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@import</code> directive, and should not include the underscore in the file name.
    testString: assert(code.match(/@import\s+?('|")variables\1/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!-- The main.scss file -->


```

</div>



</section>

## Solution
<section id='solution'>

```html
@import 'variables'
```

</section>
