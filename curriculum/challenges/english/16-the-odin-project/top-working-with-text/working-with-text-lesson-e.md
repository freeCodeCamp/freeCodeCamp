---
id: 637f4e7972c65bc8e73dfe2b
title: Working With Text Lesson E
challengeType: 15
dashedName: working-with-text-lesson-e
---
# --description--

You may have noticed that in all the examples in this lesson you indent any elements that are within other elements. This is known as nesting elements.

When you nest elements within other elements, you create a parent and child relationship between them. The nested elements are the children and the element they are nested within is the parent.

In the following example, the `body` element is the parent and the `p` is the child:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
 </html>
```

Just as in human relationships, HTML parent elements can have many children. Elements at the same level of nesting are considered to be siblings.

For example, the two `p` elements in the following code are siblings, since they are both children of the `body` tag and are at the same level of nesting as each other:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Ut enim ad minim veniam.</p>
  </body>
 </html>
```

You use indentation to make the level of nesting clear and readable for yourselves and other developers who will work with your HTML in the future. It is recommended to indent any child elements by two spaces.

The parent, child, and sibling relationships between elements will become much more important later when you start styling your HTML with CSS and adding behavior with JavaScript. For now, however, it is just important to know the distinction between how elements are related and the terminology used to describe their relationships.

# --question--

## --text--

What relationship do two elements have if they are at the same level of nesting?

## --answers--

The elements are each other's parents.

---

The elements are each other's children.

---

The elements are siblings.

## --video-solution--

3
