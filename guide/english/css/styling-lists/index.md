---
title: Styling Lists
---
## Styling Lists

<!--
This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/styling-lists/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.
-->
<!--
<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.
-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### HTML Lists Recap

There are two main types of lists in HTML &mdash; **Ordered** and **Unordered**.

In **Ordered** lists (`<ol></ol>`), the order of the list items is important. The items may appear in order by number, roman numeral, alpha numeral, or another type of marker. The default marker for ordered lists is a number (or `decimal`):

> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/ordered-list.png?raw=true" width="350" title="ordered list">

In **Unordered** lists (`<ul></ul>`), the order of the list items does not matter. The items appear in bullet format. The default marker for unordered lists is a round bullet point or `disc`.

> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/unordered-list.png?raw=true" width="350" title="unordered list">

Each list item within an ordered or unordered list is created with the `<li></li>` tag.

### List-Specific Styles

There are three common properties specific to styling lists: `list-style-type`, `list-style-position`, and `list-style-image`. There is also a shorthand property which includes all three.

#### `list-style-type`

The markers (or bullet points) that appear in ordered and unordered lists can be styled in a variety of ways. The CSS property for styling the marker type is `list-style-type`. The default `list-style-type` value for an ordered list is `decimal`, whereas the default for an unordered list is `disc`.

Ordered list example:
> ```css
> /* css */
> ol {
>   list-style-type: upper-roman;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-upper-roman.png?raw=true" width="350" title="list-style-type upper-roman">

Unordered list example:
> ```css
> /* css */
> ul {
>   list-style-type: square;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-square.png?raw=true" width="350" title="list-style-type square">

No marker example:
> ```css
> /* css */
> ul {
>   list-style-type: none;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-none.png?raw=true" width="350" title="list-style-type none">

Accepted values for the `list-style-type` property include:

*Unordered:*
* disc (_default_)
* circle
* square

*Ordered:*
* decimal (_default_)
* decimal-leading-zero
* lower-roman
* upper-roman
* lower-greek
* lower-latin
* upper-latin
* armenian
* georgian
* lower-alpha
* upper-alpha

*Other:*
* none

Note: all the property values listed above can be used for styling both ordered and unordered lists (ex: an ordered list with `square` list markers).

#### `list-style-position`

`list-style-position` controls whether the list marker appears inside or outside of each list item element (`<li></li>`). The property accepts two values, `outside` (default) or `inside`.

Position the marker `outside` of the list item element, and all text lines and sub-lines of each list item will align vertically:

> ```css
> /* css */
> ul {
>   list-style-position: outside; /* default */
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-outside.png?raw=true" width="350" title="list-style-position outside">

Position the marker `inside`, and the first text line of each list item will be indented to make room for the marker. Any sub-lines of the same list item will align with the marker rather than the first text line: 

> ```css
> /* css */
> ul {
>   list-style-position: inside;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-inside.png?raw=true" width="350" title="list-style-position inside">

#### `list-style-image`

The `list-style-image` property accepts an image url in place of the list marker. The default value for this property is `none`. 
> ```css
> /* css */
> ul {
>   list-style-image: url(https://url-to-image);
> }
> ```

#### `list-style` Shorthand

`list-style` is a shorthand property for the three style properties listed above. The order of values `list-style` accepts is `list-style-type`, `list-style-position`, and `list-style-image`. If any value is omitted, the default value for that property will be used. 

> Example: 
> ```css
> /* css */
> ul {
>   list-style: circle inside none;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-shorthand.png?raw=true" width="350" title="list-style shorthand">

####  More List-Specific Styling

Ordered list tags also accept attributes that control the flow, count, or specific marker values of its list items. These include the `start`, `reversed`, and `value` attributes. See the MDN resources listed below for further details.

### General Styling

List content can be styled just like other `p` or `div` elements. `color`, `font-family`, `margin`, `padding`, or `border` are just a few examples of properties that can be added to either the `ul`, `ol`, or `li` elements.

Note that any styles added to the `ul` or `ol` element will affect the entire list. Styles added directly to the `li` elements will affect the individual list items. In the example below, the border and background-color properties are styled differently between the list and list item elements:

> ```css
> /* css */
> ul {
>   list-style-type: circle;
>   border: 2px solid blue;
>   background-color: lightblue;
> }
> li {
>   margin: 5px;
>   background-color: lightyellow;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-styles.png?raw=true" width="350" title="list-style general styling">

#### List Spacing

You may notice extra spacing in front of the list items when `list-style-type` is set to `none`. Setting `padding` to `0` (or whatever spacing is preferred) on the list element will override this default padding.

> ```css
> /* css */
> ul {
>   list-style: none;
>   padding: 0;
> }
> li {
>   padding: 5px 10px;
>   background-color: #EEEEEE;
>   border: 1px solid #DDDDDD;
> }
> ```
> <img src="https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-padding.png?raw=true" width="350" title="list-style general styling">

---
#### Sources:

The links below were referenced in compiling information found in this article. Please visit them for further details about this topic.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[MDN - Styling Lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

[W3Schools - CSS Lists](https://www.w3schools.com/css/css_list.asp)

[CSS Tricks - list-style](https://css-tricks.com/almanac/properties/l/list-style/)

