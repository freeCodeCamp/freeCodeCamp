---
title: Semantic UI
---
## Semantic UI

#### Introduction

Semantic UI is a front-end development framework similar to bootstrap designed for theming. It contains pre-built semantic components that helps create beautiful and responsive layouts using human-friendly HTML.

According to the Semantic UI website, the framework utilizes concise HTML, intuitive JavaScript, and simplified debugging to make a front-end development a fun and delightful experience. And it integrates with React, Angular, Meteor, Ember and many other frameworks to help organize UI layer alongside application logic.


#### Version History

The first pre-release appear on github on September 2013, created by [Jack Lukic](https://github.com/jlukic). 

Semantic UI `1.x` was first released in November 2014 with breaking changes to previous pre-releases.

Semantic UI `2.x` was first released in June 2015 and introduced new ui, several bug fixes, enhancements,  and default theme improvements.


#### Browser Support
The current version `2.2.x` support the following browsers
* Last 2 Versions FF, Chrome, Safari Mac
* IE 11+
* Android 4.4+, Chrome for Android 44+
* iOS Safari 7+
* Microsoft Edge 12+


#### Installation

There are several ways of installing Semantic UI, some of the simplest ways are as follows:

1. **Via Content Delivery Network (CDN)**

It is by far the easiest for beginners. Create an HTML file as below

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Semantic UI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css">
    <!-- Add custom stylesheet here -->
  </head>
  <body>
  
    <!-- Write your html code here -->
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script>
  </body>
</html>
```

`NOTE:` The above CDN link on line 5, will include all the available components in Semantic UI. If you want to install a specific component, [click here](https://cdnjs.com/libraries/semantic-ui) to see its respective CDN link.

2. **Using Build Tools**

This will assume you're using Ubuntu Linux OS with `node` and `npm` installed, for other operating systems [click here](https://semantic-ui.com/introduction/getting-started.html)

In your project directory, install gulp globally using npm 

```
npm install -g gulp
```

Install Semantic UI

```
npm install semantic-ui --save
cd semantic/
gulp build
```
Include in HTML

```html
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="semantic/dist/semantic.min.js"></script>
```
Update Via npm

```
npm update
```

3. **Integrating with other Frameworks**

You can integrate Semantic UI with other Front-end development frameworks like React, Angular, Ember or Meteor. [Click here](https://semantic-ui.com/introduction/integrations.html) for more informations and integration instructions.


#### More Information

Semantic UI has thorough and very well organized documentation, that will gets you up and running in no time. The following links will be helpful in your Semantic UI journey.

* [Semantic UI Website](https://semantic-ui.com/)
* [Getting Started with Semantic UI](https://semantic-ui.com/introduction/getting-started.html)
* [Sample Semantic UI Templates](https://semantic-ui.com/usage/layout.html#pages)
* [Customizing and Creating Semantic UI Themes](http://learnsemantic.com/)
