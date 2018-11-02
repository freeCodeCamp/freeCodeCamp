---
title: How to Insert Spaces or Tabs in Text Using HTML and CSS
---
## How to Insert Spaces or Tabs in Text Using HTML and CSS

There are a multitude of ways to insert spaces using html. For simplicity sake we will 
go over one of these, which are by inserting a Span tag. 

## Span Tag

``<span>``

Span Tags ``<span>`` are self closing tags meaning they do not need a ``/>``.

## Span Example

An example of how a ``<span>`` tag inserts a space between text can be seen below.
  
  ``<p>Hello may name is <span> James</p>``

If you assign a class to your ``<span>`` then you could add some css to it.
  Like so,
  
  ``<p>Hello my name is <span class=tab> James</p>``
  
Then either in an external stylesheet or an internal-stylesheet you can give the ``class .tab`` 
some properties.

## Span Class Example 

For example

``.tab {padding-left: 2px;}``

You can also give the ``<span>`` some inline-style properties, as shown below.
  
  ``<p>Hello my name is <span style="padding-left: 2px;"> James</p>``
  
## More Information

For more information on the <span> tag or on; How to Insert Spaces or Tabs in Text Using HTML and CSS, you can visit w3schools. https://www.w3schools.com/tags/tag_span.asp


