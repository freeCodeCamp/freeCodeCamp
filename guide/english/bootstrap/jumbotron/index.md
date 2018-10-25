---
title: Jumbotron
---

## Jumbotron

Jumbotron is Lightweight, flexible component for showcasing hero unit style content. 
Jumbotron is a responsive component which the main goal is to focus visitor's attention or highlight the special piece of information.

Jumbotron make use of almost any other bootstrap code to additionally increase its engagement value. It's operate with images,enlarged fonts,different backgorund styles etc.

### Most Attracting features of jumbotron
  
  - ** Showcase the marketing messages on your site
  - ** Project presentation
  - ** Article introduction
  - ** Image showcase

### How to use

#### Jumbotron Inside Container
Place the jumbotron inside the &lt;div class="container"&gt; if you want the jumbotron to NOT extend to the edge of the screen.

**Code Example:**
```
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
    </div>
```


#### Jumbotron Outside Container

Place the jumbotron outside the &lt;div class="container"&gt; if you want the jumbotron to extend to the screen edges:


**Code Example:**

```   
    <div class="jumbotron">
    <h1>Bootstrap Tutorial</h1> 
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,
    mobile-first projects on the web.</p> 
    </div>
    <div class="container">
    <p>This is some text.</p> 
    <p>This is another text.</p> 
    </div>
```
#### Fluid jumbotron

To make the jumbotron full width, and without rounded corners, add the `.jumbotron-fluid` modifier class and add a `.container` or `.container-fluid` within.

**Code Example:**

` 
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
`

### More Information:

- [Bootstrap Jumbotron components Doc](https://getbootstrap.com/docs/4.0/components/jumbotron/)
