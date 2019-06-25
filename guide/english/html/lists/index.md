---
title: Lists
---

# Lists
Lists are used to display items. There are 3 types of lists: _ordered lists_, _unordered lists_, and _description lists_.

## Ordered lists
An _ordered list_ is used to describe an ordered collection of data. Browsers usually display an ordered list as a numbered list. Create an ordered list using the `<ol>` tag.

## Unordered lists
An _unordered list_ is used to describe an unordered collection of data. Browsers usually display an unordered list as a bulleted list. Create an unordered list using the `<ul>` tag.

## List items
The direct children of ordered and unordered lists must be list items. Each list item is wrapped in an `<li>` tag. The `li` element does not technically need a closing `</li>` tag in HTML5, but is commonly used as good practice, and to stay XHTML compliant. The `</li>` can be omitted if immediately followed by another `li` element or if there is no more content in the parent element. A list item tag can contain [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content). 

## Examples

An ordered list is written as
```HTML
<ol>
  <li>January</li>
  <li>February</li>
  <li>March</li>
</ol>
```
and is displayed as:
1. January
1. February
1. March

An unordered list is written as


```HTML
<ul>
  <li>Macintosh</li>
  <li>Fuji</li>
  <li>Gala</li>
</ul>
```
and is displayed as:
- Macintosh
- Fuji
- Gala

## Styling Lists

Ordered and unordered lists can have different list item markers. The default numbering system in ordered list can be changed to lowercase or uppercase roman numerals, as well as lowercase or uppercase alphabetical.  The start of the list can be changed from the default value of 1. In an unordered list, different list markers can be used like the disc, circle, square etc.

An ordered list can also be programmed to display roman numerals or letters instead of numbers.

Roman numerals:
```CSS
<ol type="I">
  <li>Dogs</li>
  <li>Cats</li>
  <li>Birds</li>
</ol>
```

Letters:
```CSS
<ol type="A">
  <li>Dogs</li>
  <li>Cats</li>
  <li>Birds</li>
</ol>
```

## Styling Bulletpoints

An ordered list can be used for a variety of functions and in a number of styles. Since changing the encompassing tag colors doesn't change the color of the bullets themselves, you can style them by first removing the traditional black bullets and inserting your own:

Remove bullets:
```CSS
ul {
  list-style: none;
  }
```

Insert your own:
```CSS
ul li::before {
  content: "\2022";
  color: orange;
  display: inline-block;
  width: 1em;
  }
```

The content style adds a new bulletpoint while display and width style create a space between the bullet and the word. Regular font styles can apply here if you would like to make the bullet larger or bolder.  Images can also be used as list item markers.

Images as list item markers:
```CSS
ul {
    list-style-image: url('rock.png');
  }
```


## Description lists

A description list is a list of terms, with a description of each term. A description list is made using the `<dl>` tag.
Each item in the list is made up of two tags: a term `<dt>`, and a description of that term `<dd>`.
They are called definition lists in HTML 4.

Here is an example of a description list:
```HTML
<dl>
  <dt>Programming</dt>
  <dd>The process of writing computer programs.</dd>
  <dt>freeCodeCamp</dt>
  <dd>An awesome non-profit organization teaching people how to code.</dd>
</dl>
```

which would end up looking like:

<dl>
  <dt>Programming</dt>
  <dd>The process of writing computer programs.</dd>
  <dt>freeCodeCamp</dt>
  <dd>An awesome non-profit organization teaching people how to code.</dd>
</dl>

## Nested HTML Lists
 List can be nested (lists inside lists):
```html
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

is displayed as:

- Coffee
- Tea
  - Black tea
  - Green tea
- Milk

#### More Information:

* [HTML lists on w3schools](https://www.w3schools.com/html/html_lists.asp)
* [HTML list on tutorialspoint](https://www.tutorialspoint.com/html/html_lists.htm)
* [HTML lists on WebPlatform](https://webplatform.github.io/docs/guides/html_lists/)
* [Styling lists on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)
