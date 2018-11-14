---
title: Bootstrap
---
## Bootstrap

Bootstrap is a popular front-end framework for web development. It contains pre-built components and design elements to style HTML content. Modern browsers such as Chrome, Firefox, Opera, Safari, and Internet Explorer support Bootstrap.

Bootstrap includes a responsive grid system for varying layouts. It is a great starting point for building a mobile friendly website. It also includes optional JavaScript functionality like collapsible content, carousels, and modals.


#### Version History

Twitter originally developed the Bootstrap framework as an internal tool. They released it as an open source project in August of 2011.

Bootstrap 2 was released in January 2012. One of the primary features was the introduction of the 12 column responsive grid system. Bootstrap 3 appeared in August of 2013, switching to a flat design and a mobile-first approach. Bootstrap 4 is available in beta as of August 2017, and now includes Sass and Flexbox.

Bootstrap 4 was in development for two years before releasing some beta versions during 2017, while the first stable release was out in January 2018. Some notable changes include:

- Moved from Less to Sass;
- Moved to Flexbox and improved grid system;
- Added cards (replacing wells, thumbnails, and panels);
- And much more!

At the time of writing, Bootstrap's latest release is [4.1.3](http://blog.getbootstrap.com/2018/07/24/bootstrap-4-1-3/
). If you would like to keep up with any news of announcements, follow them [here](http://blog.getbootstrap.com/).

#### Installation

There are two main options to add Bootstrap to your web project. You can link to publicly available sources, or download the framework directly. 

##### Linking To Another Source

You can add Bootstrap CSS by using a `<link>` element inside the `<head>` of your webpage that references a Content Delivery Network (CDN):

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`

Adding the JavaScript elements of Bootstrap is similar with `<script>` elements usually placed at the bottom of your ‘<body>’ tag.  You may need to include some dependencies first. Pay special attention to the order listed:

```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
```
_Note: These are only examples and may change without notice. Please refer to a CDN for current links to include in your project._

##### Download/Install

You can download and install the Bootstrap source files with Bower, Composer, Meteor, or npm. This allows greater control and the option to include or exclude modules as needed.

`npm install bootstrap`

`gem 'bootstrap', '~> 4.1.3'`


_Note: These are only examples and may change without notice. Please refer to the _<a href='https://getbootstrap.com/' target='_blank' rel='nofollow'>Bootstrap website</a>_ for the most up-to-date links._

#### The Bootstrap Grid System
The grid system is a mobile-first flexbox system for quickly building layouts of all shapes and sizes suitable on all devices. It’s based on a 12 column layout and has multiple tiers, one for each media query range. 

Bootstrap comes with predefined grid classes for your use in markup. See more details and examples at https://getbootstrap.com/docs/4.1/layout/grid/

### Boostrap Features

- Bootstrap 3 supports the latest versions of the Google Chrome, Firefox, Internet Explorer, Opera, and Safari (except on Windows). It additionally supports back to IE8 and the latest Firefox Extended Support Release (ESR).[12]

- Since 2.0, Bootstrap supports responsive web design. This means the layout of web pages adjusts dynamically, taking into account the characteristics of the device used (desktop, tablet, mobile phone).

- Starting with version 3.0, Bootstrap adopted a mobile-first design philosophy, emphasizing responsive design by default.

- Version 4.0 added Sass and flexbox support

#### More Information:

Bootstrap has thorough documentation with many <a href='https://getbootstrap.com/docs/4.0/examples/' target='_blank' rel='nofollow'>examples</a> and an <a href='https://getbootstrap.com/docs/4.0/getting-started/introduction/' target='_blank' rel='nofollow'>HTML template for getting started</a> (this template only has script included; it does not contain a set up of the grid system if that's what you're looking for). 

In addition, you can find both <a href='https://bootswatch.com/' target='_blank' rel='nofollow'>free</a> and <a href='https://themes.getbootstrap.com/' target='_blank' rel='nofollow'>paid</a>
themes that build on the Bootstrap framework to provide a more customized and stylish look.

#### Bootstrap Resources: 
- [Bootstrap's official blog](http://blog.getbootstrap.com/)
- [Bootstrap site inspiration](http://expo.getbootstrap.com/)
- [Showcase of sites built using Bootstrap](http://builtwithbootstrap.com/)
- [HTML linter for projects using Bootstrap](https://github.com/twbs/bootlint)
- [Design elements and code snippets for Bootstrap](https://bootsnipp.com/)
- [Code, theme, and add-on resources for Bootstrap](http://expo.getbootstrap.com/resources/)
