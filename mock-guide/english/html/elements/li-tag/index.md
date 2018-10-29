---
title: Li Tag
---
## Li Tag

The `<li>` tag defines a list item in a list. The `<li>` tag can be used with unordered lists (`<ul>`), ordered lists (`<ol>`), and menus (`<menu>`).

To define a list item, wrap the desired elements in an `<li>` tag. `<li>` elements must be contained inside a parent element that is a list.

### Example

```html
<body>
  <ul>
    <li>
      <p>I'm a list item</p>
    </li>
    <li>
      <p>I'm a list item too</p>
    </li>
    <li>
      <p>Me three/p>
    </li>
  </ul>
</body>

```
In an ordered list, `<li>` appears as an item with a bullet point.

* First item
* Second item
* Third item

In an unordered list, `<li>` appears as a numbered item.

1. First item
2. Second item
3. Third item

This numeric display counter can be customized using the _list-style-type_ CSS property.

Examples:

```html
<!-- In a simple unordered list -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- In a simple ordered list -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<!-- In a menu list -->
<menu>
  <li>Menu item one</li>
  <li>Menu item two</li>
  <li>Menu item three</li>
</menu>
```

### Attributes

The `<li>` element has the following elements:

#### Type

The `type` attribute defines the numbering type that will be used in the list. The following values are used to determine which numbering style will be used:

* `1`: numbers
* `a`: lowercase letters
* `A`: uppercase letters
* `i`: lowercase numerals
* `I`: uppercase numerals

#### Example

```html
<body>
  <ol type="I">
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ol>
</body>
```
The above HTMl will output:

<ol type="I">
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>

#### Value

The `value` attribute specifies the numeric order of the current `<li>`. This attribute only accepts a numeric value and can only be used with an ordered list. Any list items that follow will be ordered numerically based on the numeric input of the `value` attribute.

#### Example

```html
<body>
  <ol>
    <li value="4">list item</li>
    <li>list item</li>
    <li>list item</li>
  </ol>
</body>
```

The above HTML will output:

4. list item
5. list item
6. list item

### Nesting another list as an item

Besides creating individual items, you can also use `<li>` tags to create a nested list, ordered or unordered. To do this, you nest a `<ol>` or `<ul>` _within_ a `<li>` tag.

Here is an unordered list with a nested, ordered list.

* First item
* Second item
  1. First sub-item
  2. Second sub-item
* Third item

And here is an ordered list with a nested, unordered list.

1. First item
2. Second item
   * First sub-item
   * Second sub-item
3. Third item

```html
<!-- An unordered list with a nested, ordered list. -->
<ul>
  <li>First item</li>
  <li>Second item  <!-- No closing </li> tag before the nested list -->
    <ol>
      <li>First sub-item</li>
      <li>Second sub-item</li>
    </ol>
  </li>            <!-- The closing </li> tag comes after the nested list -->
  <li>Third item</li>
</ul>

<!-- An ordered list with a nested, unordered list. -->
<ol>
  <li>First item</li>
  <li>Second item  <!-- No closing </li> tag before the nested list -->
    <ul>
      <li>First sub-item</li>
      <li>Second sub-item</li>
    </ul>
  </li>            <!-- The closing </li> tag comes after the nested list -->
  <li>Third item</li>
</ol>
```

#### More Information:
- [The HTML &lt;li&gt; element: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
- [HTML &lt;li&gt; tag: w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp)
- [CSS list-style Property: CSS-Tricks](https://css-tricks.com/almanac/properties/l/list-style/)
