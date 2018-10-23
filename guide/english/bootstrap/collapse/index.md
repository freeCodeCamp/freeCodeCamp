---
title: Collapse
---

## Collapse

Collapse is a plugin that helps you hide or reveal elements using a smooth animation. Developers commonly use bootstrap collapse to hide or reveal secondary details of webpage section. For example, you could have a list of items with very long descriptions. Displaying everything will consume a lot of space so bootstrap collapse can be used to hide and reveal the description.

Bootstrap collapse is provided as seperate plugin called collapse.js, which means it can be used outside the bootstrap environment. The plugin itself can be found here http://getbootstrap.com/2.0.4/javascript.html#collapse.

Bootstrap collapse can be used with a couple of elements, a button, anchor tag or panel. To use collapse you need at least two elements, one element will control the hide or reveal state of the other element. 

The collapse plugin works by changing the class on the collapsible element. There are three possible classes:

* .collapse - this class hides the element
* .collapsing - this class gets attached during transition
* .collapse.in - this class shows the element

### How to use it

To use collapse you can do it in two ways:

* Using `href` on the `<a>` tag
* Using `data-target` on `<button>` tag

The value in `href` or `data-target` will be the selector of the element to collapse. Wether you decide to use the `<a>` or the `<button>` tag, the `data-toggle="collapse"` is required.

The element to collapse must contain the class `.collapse`. 

### Examples with buttons

```html

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>

<div class="collapse" id="collapseExample">
  <div class="well">
    ...
  </div>
</div>

```
In the example above we use a button and an anchor tag to control a div element. The button and anchor which are the controlling elements need two things, an attribute to specify that the controlling element is for collapsing and another attribute to specify which element it controls (hides or reveals). 

They both have a *data-toggle* attribute with the value *collapse* which specify that they are to be used for collapsing an element. The anchor tag uses a *href* attribute to specify the element it controls, while the button uses a *data-target* attribute to specify the element it controls. 

> You can view a demo of the button here https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible&stacked=h

> You can view  a demo of the anchor tag here https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible2&stacked=h

## Example with accordion

```html

<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>

```
In the above example we use the bootstrap collapse to create an accordion. The accordion is simply a bootstrap panel in which the header is displayed and is used to control the panel's body. 

The panel's head contains an anchor tag which is used to control the body's collapse state. So we attach the *data-toggle* to specify that this element is used for collapsing and *href* to specify the element it hides or reveals. We can also have a group of panels to make a panel collapsible panel group.

> You can see a demo of panel collapse here https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible_accordion&stacked=h

### Content element

A paragraph!

```html
<p>Lorem ipsum dolar, Free Code Camp rocks... </p>
```

1. Add `.collapse` class to state that the paragraph is a collapsible element.
2. Add `id` to make this collapsible element accesible for controller element.

```html
<p id="myParagraph" class="collapse">Lorem ipsum dolar, Free Code Camp rocks... </p>
```

### Controller element

A button!

```html
<button>Click Me To See Some Magic!</button>
```

1. Add `data-toggle="collapse"` attribute to control collapsible element.
2. Add `data-target="#id"` attribute to reference the collapsible element with its id.

```html
<button data-toggle="collapse" data-target="#myParagraph">Click Me To See Some Magic!</button>
```

## Example

```html
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-block">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
```

### Using it with JavaScript

This plugin allow you to use it with JavaScript where you only need to select the element you want to collapse to enable it:

```js
$('.collapsible-element').collapse();
```

The `collapse` method accepts an optional object where you can set initial state of the collapsable element. The options are:
* `toggle`: It will hide or show the element depending on its state. If it is hidden it will be shown, if it is shown it will be hidden.
* `hide`: Hides the element.
* `show`: Shows the element.

```js
$('.collapsible-element').collapse('hide');
```

Also there are some exposed methods to hook into the collapse functionality:

* `show.bs.collapse`:	Fires immediately when the `show` instance method is called.
* `shown.bs.collapse`: Fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).
* `hide.bs.collapse`:	Fired immediately when the `hide` method has been called.
* `hidden.bs.collapse`:	Fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).

```js
$('.collapsible-element').on('show.bs.collapse', function() {
  // for example you want to make an AJAX call to get some data to put in the collapsible element.
})
```
### See it in Action
![Alt Text](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)

#### More Information:

<a href='https://getbootstrap.com/docs/4.1/components/collapse/' target='_blank' rel='nofollow'>The official Bootstrap 4 guide on Collapse</a>

