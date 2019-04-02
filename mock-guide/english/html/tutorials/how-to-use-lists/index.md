---
title: How to Use Lists
---
## How to Use Lists
Lists are used to specify a set of consecutive items or related information in well formed and semantic way, such as a list of ingredients or a list of procedural steps.
HTML markup has three different types of lists - **ordered**, **unordored** and **description** lists. 

### Ordered Lists
An ordered list is used to group a set of related items, in a specific order.
This list is created with `<ol>` tag. Each list item is surrounded with `<li>` tag.

##### Code
```html
<ol>
    <li>Mix ingredients</li>
    <li>Bake in oven for an hour</li>
    <li>Allow to stand for ten minutes</li>
</ol>
```
##### Example
<ol>
    <li>Mix ingredients</li>
    <li>Bake in oven for an hour</li>
    <li>Allow to stand for ten minutes</li>
</ol>

### Unordered Lists
An unordered list is used to group a set of related items, in no particular order. This list is created with `<ul>` tag. Each list item is surrounded with `<li>` tag.

##### Code

```html
<ul>
    <li>Chocolate Cake</li>
    <li>Black Forest Cake</li>
    <li>Pineapple Cake</li>
</ul>
```


#### Example
<ul>
    <li>Chocolate Cake</li>
    <li>Black Forest Cake</li>
    <li>Pineapple Cake</li>
</ul>


### Description Lists
A description list is used to specify a list of terms and their descriptions. This list is created with `<dl>` tag. Each list item is surrounded with `<dd>` tag.

##### Code

```html
<dl>
    <dt>Bread</dt>
    <dd>A baked food made of flour.</dd>
    <dt>Coffee</dt>
    <dd>A drink made from roasted coffee beans.</dd>
</dl>
```

##### Output 
<dl>
    <dt>Bread</dt>
    <dd>A baked food made of flour.</dd>
    <dt>Coffee</dt>
    <dd>A drink made from roasted coffee beans.</dd>
</dl>

#### Styling List
You can also control the style of the list. You can use `list-style` property of lists. Your list can be bullets, square, in roman numearls or can be images you want.

`list-style` property is a shorthand for `list-style-type`, `list-style-position`, `list-style-image`.

#### More Information:
[HTML lists · WebPlatform Docs](https://webplatform.github.io/docs/guides/html_lists/
)
