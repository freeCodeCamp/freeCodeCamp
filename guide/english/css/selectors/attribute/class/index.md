---
title: Class
---
## Class

The CSS “class” selector is used to apply the same styling to multiple elements on the page. A great way to think of this would be like the blueprint of a car or building. The blueprint will allow you to build several cars or several buildings in the same manner after designing the actual layout once.

### Use Cases

Unlike the CSS “ID” class names are not unique. Therefore, it is fine for you to use a “class” several times if you would like for these elements to have the same styling applied. In fact, this would be a great time for you to use a “class.” If you would like for three “div” elements in your HTML to have a blue background you could use a class once in your CSS as seen in the example below.

```
<html>
<style>
  .blueBg {
    background-color: blue;
  }
</style>
  <body>
    <div class="blueBg"></div>
    <div class="blueBg"></div>
    <div class="blueBg"></div>
  </body>
</html>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
If you would like to learn more information on the CSS “class” selector please visit <a href="https://css-tricks.com/the-difference-between-id-and-class/">this page</a>


