---
title: Bootstrap
---
## Bootstrap

Bootstrap is a popular front-end framework for web development. It contains pre-built components and design elements to style HTML content. Modern browsers such as Chrome, Firefox, Opera, Safari, and Internet Explorer support Bootstrap.

Bootstrap includes a responsive grid system for varying layouts. It is a great starting point for building a mobile friendly website. It also includes optional JavaScript functionality like collapsible content, carousels, and modals.


#### Version History

Twitter originally developed the Bootstrap framework as an internal tool. They released it as an open source project in August of 2011.

Bootstrap 2 was released in January 2012. One of the primary features was the introduction of the 12 column responsive grid system. Bootstrap 3 appeared in August of 2013, switching to a flat design and a mobile-first approach. Bootstrap 4 is available in beta as of August 2017, and now includes Sass and Flexbox.

Bootstrap 4 was in development for two years before releasing their first beta in August 2017 and beta 2 in October 2017. Some notable changes include: Moved from less to sass. Moved to flexbox and improved grid system. Added cards (replacing wells, thumbnails, and panels) And much more! At the time of writing, Bootstrap is working on beta 3, if you would like to keep up with any news of announcements from bootstrap, follow them [here](http://blog.getbootstrap.com/).

#### Installation

There are two main options to add Bootstrap to your web project. You can link to publicly available sources, or download the framework directly. 

##### Linking To Another Source

You can add Bootstrap CSS by using a `<link>` element inside the `<head>` of your webpage that references a Content Delivery Network (CDN):

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">`

Adding the JavaScript elements of Bootstrap is similar with `<script>` elements usually placed at the bottom of your ‘<body>’ tag.  You may need to include some dependencies first. Pay special attention to the order listed:

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
```
_Note: These are only examples and may change without notice. Please refer to a CDN for current links to include in your project._

##### Download/Install

You can download and install the Bootstrap source files with Bower, Composer, Meteor, or npm. This allows greater control and the option to include or exclude modules as needed.

`npm install bootstrap@4.0.0-beta`

`gem install bootstrap -v 4.0.0.beta`

`bower install bootstrap#v4.0.0-beta`

_Note: These are only examples and may change without notice. Please refer to the _<a href='https://getbootstrap.com/' target='_blank' rel='nofollow'>Bootstrap website</a>_ for the most up-to-date links._

#### The Bootstrap Grid System
The grid system is a mobile-first flexbox system for quickly building layouts of all shapes and sizes suitable on all devices. It’s based on a 12 column layout and has multiple tiers, one for each media query range. 

Bootstrap comes with predefined grid classes for your use in markup. See more details and examples at https://v4-alpha.getbootstrap.com/layout/grid/#how-it-works

#### More Information:

Bootstrap has thorough documentation with many <a href='https://getbootstrap.com/docs/4.0/examples/' target='_blank' rel='nofollow'>examples</a> and an <a href='https://getbootstrap.com/docs/4.0/getting-started/introduction/' target='_blank' rel='nofollow'>HTML template for getting started</a> (this template only has script included; it does not contain a set up of the grid system if that's what you're looking for). 

In addition, you can find both <a href='https://bootswatch.com/' target='_blank' rel='nofollow'>free</a> and <a href='https://themes.getbootstrap.com/' target='_blank' rel='nofollow'>paid</a>
themes that build on the Bootstrap framework to provide a more customized and stylish look.

#### Bootstrap Resources: 

<a href='http://blog.getbootstrap.com/' target='_blank' rel='nofollow'>Bootstrap Blog</a>: Bootstrap's offical blog
<a href='http://expo.getbootstrap.com/' target='_blank' rel='nofollow'>Bootstrap Expo</a>: Bootstrap site inspiration
<a href='http://builtwithbootstrap.com/' target='_blank' rel='nofollow'>Built with Bootstrap</a>: Showcase of sites built using Bootstrap
<a href='https://github.com/twbs/bootlint' target='_blank' rel='nofollow'>Bootlint</a>: HTML linter for projects using Bootstrap
<a href='https://bootsnipp.com/' target='_blank' rel='nofollow'>Bootsnipp</a>: Design elements and code snippets for Bootstrap
<a href='http://expo.getbootstrap.com/resources/' target='_blank' rel='nofollow'>More Resources</a>: Code, theme, and add-on resources for Bootstrap