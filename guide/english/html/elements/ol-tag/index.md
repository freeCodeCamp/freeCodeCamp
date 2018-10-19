---
title: ol Tag
---
## ol Tag

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The `<ol>` tag creates an ordered list element in HTML. An ordered list is one of two list structures in HTML, the other is the unordered list, created by the `<ul>` tag.  Ordered lists are used to display lists with meaningful order. By default, list items in an ordered list are displayed as a numbered list, starting with 1. This behavior can be changed with the "type" attribute or by using CSS styles. List elements can be nested.

```html
<ol>
  <li>First Item</li>
  <li>Second Item  <!-- No closing </li> tag before the nested list -->
    <ol>
      <li>First Subitem</li>
      <li>Second Subitem</li>
    </ol>
  </li>            <!-- The closing </li> tag comes after the nested list -->
  <li>Third Item</li>
</ol>
```

### Ordered vs. Unordered Lists

In HTML, ordered and unordered lists are similar in both usage and styling. Use ordered lists in places where changing the order of the items would change the meaning of the list. For example, an ordered list could be used for a recipe, where changing the order of the steps would matter. Use unordered lists for groups of items without meaningful order. A list of animals on a farm could go in an unordered list.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

* [The unordered list `<ul>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ul-tag/index.md)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

