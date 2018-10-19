---
title: Get Started
---
## Get Started
Bootstrap is a free and open source framework developed by Twitter, it provides a variety of templates for use with frontend web development. Using Bootstrap makes it easy to design a fully responsive website and is a framework worth learning.

#### What is a responsive website
A responsive website is a website that resizes and rearranges that items on the page depending on the size of your browser. With a responsive website if you resize your browser you can see the changes occur in real time. Bootstrap makes your website responsive for you.

#### How do I add Bootstrap to my page
Adding bootstrap to your page is a fast process, just add the following to the `<head>` tags in your code.
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
```

You will also need to add the following between the `body` tags in your code. With bootstrap you'll be using `<div>` tags when using many of Bootstrap's features, each tag will have it's own unique set of classes applied that allows the tag to perform it's task. Other sections of this Bootstrap guide will show more examples of how Bootstrap uses `<div>` tags. (`<div>` tags are not exclusive to Bootstrap however Bootstrap makes use of them.). Below is the code that would would add to the `body` tags in your code to finish getting started. Keep in mind that while this creates the container, the page will still remain blank until you add content to the container.
```html
<div class="alert alert-success" role="alert">
    <strong>Congratulations!</strong>
    <p>Bootstrap is now working on this page</p>
</div>
```
<div class="alert alert-success" role="alert">
    <strong>Congratulations!</strong>
    <p>Bootstrap is now working on this page</p>
</div>

### Installing Bootstrap with a Package Manager

A popular package manager is NPM or Node Package Manager. You will need to install Node.js, which includes the Node Package Manager.
Visit [Node.js](https://nodejs.org/en/) and download the necessary files based on your OS, and then install it.

Once installed and setup, open up the command line or console, and type the following in the the project folder you wish to use Bootrap with. At the time of writing this will install bootstrap version 4.0.0

```html
npm install bootstrap@4.0.0 --save
```
Once this command is finished downloading and installing Bootstrap 4, there will be a new folder called node_modules within your project folder.

* /bootstrap which contains the CSS and Sass version of our files.
* /jquery which is used by Bootstrap in various components.
* /tether which is a library for element positioning.

#### More Information
* [Bootstrap's official website](http://getbootstrap.com/getting-started/)
