---
title: Navigation Bar
---
## Navigation Bar

The Bootstrap framework provides you with a feature called navigation bars. In short, a navigation bar (also referred to as a navbar) is a header at the top of the page to display navigational information.

#### How To Use
To use Bootstrap Navigation Bars you add a `<nav>` element to the top inside the `<body>` element of your webpage. There are various styles you can add to customize the display of your navbars.

#### Code Example
This is the code needed to make a basic navbar.
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

#### Navbar Styles
Bootstrap provides a set of classes in the Bootstrap framework to style your navbars. These classes are as followed:
* `navbar navbar-default` This is the default style for your navbars.
* `navbar navbar-inverse` This is similar to the default style except the colors are inverted.

#### Adding drop-down menus to the navbar
You can include a drop-down menu inside a navbar. This feature requires you to include Bootstrap's javascript file for it to work.
```html
<li class="dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Drop down
    <span class="caret"></span>
  </a>
<ul class="dropdown-menu">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</li>
```

#### Adding buttons to the navbar
You can add buttons on the navbar. The existing Bootstrap Button classes work however you'll need to include the class `navbar-btn` to the end of the class list.
```html
<button class="btn navbar-btn">Button</button>
```

#### Adding forms to the navbar
You can also add forms to the navbar. This could be uses for tasks such as a search field, quick login field, etc.
```html
<form class="navbar-form navbar-right">
  <div class="form-group">
      <input type="text" class="form-control" placeholder="Search">
  </div>  
  <button type="submit" class="btn btn-default">Search</button>  
</form>
```

#### Aligning elements to the right on the navbar
In some cases you might want to align elements in a navbar to the right (for example a login or sign-up button.). To do this you'll need to use the `navbar-right` class.
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#">Action Link #1</a></li>
      <li><a href="#">Action Link #2</a></li>
    </ul>
  </div>
</nav>
```

#### Displaying the navbar independent of scrolling
In some cases you might want to keep the navbar at the top or bottom of the screen regardless of scrolling. You will need to add either the `navbar-fixed-top` or `navbar-fixed-bottom` class to the `<nav>` element.
```html
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

#### Collapsing the navbar
On a small screen (such as a phone or tablet) the navbar is going to take up too much space. Luckily the option to collase the navbar exists. You can accomplish this using the following example.
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

#### Navbar Examples
<!-- A drop-down cannot be shown in the example unless we include Bootstrap's javascript file. -->
<!-- The id attributes are set in the example so clicking the links won't go to top of the page. -->
`navbar navbar-default`
<nav class="navbar navbar-default" id="navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#navbar-default">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#navbar-default">Home</a></li>
      <li><a href="#navbar-default">Page 1</a></li>
      <li><a href="#navbar-default">Page 2</a></li>
      <li><a href="#navbar-default">Page 3</a></li>
      <button class="btn navbar-btn">Button</button>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#navbar-default">Action Link #1</a></li>
      <li><a href="#navbar-default">Action Link #2</a></li>
    </ul>
  </div>
</nav>

`navbar navbar-inverse`
<nav class="navbar navbar-inverse" id="navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#navbar-inverse">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#navbar-inverse">Home</a></li>
      <li><a href="#navbar-inverse">Page 1</a></li>
      <li><a href="#navbar-inverse">Page 2</a></li>
      <li><a href="#navbar-inverse">Page 3</a></li>
      <button class="btn navbar-btn">Button</button>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#navbar-inverse">Action Link #1</a></li>
      <li><a href="#navbar-inverse">Action Link #2</a></li>
    </ul>
  </div>
</nav>

#### More Information:
[BootStrap navbar documentation](https://getbootstrap.com/docs/4.0/components/navbar/)
