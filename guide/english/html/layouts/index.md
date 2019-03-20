---
title: Layouts
---
## Layouts

Layouts organize different areas of the web page.

Almost every web page we see can be divided into boxes, that can be arranged into specific order to create that web page. The image below is one such example.

![Sample of Website Design - www.codementor.io](http://i.imgur.com/Z1DSMYC.png)

> Websites often display content in multiple columns (like a magazine or newspaper).

And the HTML layout techniques help us put the needed information into the needed order or design.


### Techniques to Implement Layouts 

#### HTML Tables
One of the most basic tools to implement layouts in a webpage, these are provided by HTML. But as the layout gets complicated, HTML tables quickly lose their ease because of the increase in markup text.

<!-- Examples needed  -->

#### CSS Float
If you are to design a 2-column based page with left navigation pane and center content viewing area, its easy to do it with CSS floats. Simply set the left navigation page into a `<div>` with style property `float: left;`. And voila you get that design. But what if you had 4 columns in a single section. Sure, one can do it with floats, but the syntax of HTML you would be writing would be easy to comprehend.

<!-- Examples needed  -->

#### CSS Flexbox
This is a more recent CSS update that helps avoid issues that 'float' can have, as 'float' was never meant to work as a layout attribute. CSS Flexbox allows users to designate parent containers, giving that container formatting and layout attributes. This is done by definitng 'display: flex;' in the parent container. The user can then add child items to that container. Based on whether the comtainer aligns by rows or columns, the child items will be automatically positioned. Flexbox also makes it incredibly simple to truly center align content. It also makes responsive web design much easier.

[Example Webpage using CSS Flexbox only for layout](https://codepen.io/mbailey83/pen/vVPMwL)

#### CSS Frameworks
This is where CSS Frameworks such as [Bootstrap](http://getbootstrap.com/) and [Materialize](http://materializecss.com/) come in. These frameworks provide a grid functionality that lets to divide each section of your webpage into 12 columns, which you can order to design. 

![Grid Example](https://blog.gridbox.io/wp-content/uploads/2018/01/download-1-1024x271.png)
> Sample Bootstrap Grid

### HTML Semantic Elements
Websites often display content in multiple columns (like a magazine or newspaper).

HTML5 offers new semantic elements that define the different parts of a web page:
```
<header> - Defines a header for a document or a section
<nav> - Defines a container for navigation links
<section> - Defines a section in a document
<article> - Defines an independent self-contained article
<aside> - Defines content aside from the content (like a sidebar)
<footer> - Defines a footer for a document or a section
<details> - Defines additional details
<summary> - Defines a heading for the <details> element
```

#### More Information:

- [W3 Schools - Layout](https://www.w3schools.com/html/html_layout.asp)
- [CodeMentorTeam](https://www.codementor.io/codementorteam/4-different-html-css-layout-techniques-to-create-a-site-85i9t1x34) - Layout Techniques to Create a Site
- [TutorialsPoint - Layout](https://www.tutorialspoint.com/html/html_layouts.htm)
