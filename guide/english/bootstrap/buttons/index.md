---
title: Buttons
---
## Buttons

The Bootstrap framework provides you with various styling options for buttons. These styles help you provide a visual representation to the user of what the button may do.

#### How To Use:
To use bootstrap buttons you follow the same steps that you would to create a button in HTML except you also apply the applicable CSS class to the button. A code example has been provided below.

**Code Example:**

`<button type="button" class="btn btn-primary">Primary</button>`

<button type="button" class="btn btn-primary">Primary</button>

You can also use bootstrap buttons with the `<a>` and `<input>` elements as shown in the examples below.

`<a class="btn btn-primary" href="#" role="button">This button is a link</a>`

<a class="btn btn-primary" href="#" role="button">This button is a link</a>

`<input class="btn btn-primary" type="submit" value="Submit">`

<input class="btn btn-primary" type="submit" value="Submit">

#### Bootstrap Button Class List:
This is a list of the CSS classes that bootstrap provides for buttons.

`.btn` This is bootstrap's basic button.

<button type="button" class="btn">Basic</button>

`.btn-default` This is bootstrap's default button.

<button type="button" class="btn btn-default">Default</button>

`.btn-primary` This is bootstrap's primary button.

<button type="button" class="btn btn-primary">Primary</button>

`.btn-success` This is bootstrap's success button.

<button type="button" class="btn btn-success">Success</button>

`.btn-info` This is bootstrap's info button.

<button type="button" class="btn btn-info">Info</button>

`.btn-warning` This is bootstrap's warning button.

<button type="button" class="btn btn-warning">Warning</button>

`.btn-danger` This is bootstrap's danger button.

<button type="button" class="btn btn-danger">Danger</button>

`.btn-link` This is bootstrap's link button.

<button type="button" class="btn btn-link">Link</button>

`.btn-light` This is bootstrap's light button.

<button type="button" class="btn btn-light">Light</button>

#### Bootstrap Button Sizes:
This is a list of the CSS classes for different size of the buttons.

`.btn-lg` This is bootstrap's large button.

<button type="button" class="btn btn-lg">Large</button>

`.btn-sm` This is bootstrap's small button.

<button type="button" class="btn btn-sm">Small</button>

`.btn-xs` This is bootstrap's extra small button.

<button type="button" class="btn btn-xs">Extra Small</button>

#### Bootstrap Outlined Buttons:
It is possible to also have outlined buttons rather than fully colored in ones. This is achieved by placing the mid fix `outline` between the button class you want. A sample usage would be as follows:

`<button type="button" class="btn btn-outline-primary">Primary</button>`

Outlined buttons are a part of Bootstrap since version 4, please be sure that you are using the right version if you are unable to get them work.

_Note: Do not include the dot in the HTML Class Attribute, referring to the classes with a dot is only used when adjusting the classes in CSS._

#### More Information: 
* <a href='https://getbootstrap.com/docs/4.0/components/buttons/' target='_blank' rel='nofollow'>Bootstrap Buttons documentation</a>
* <a href='http://getbootstrap.com/docs/4.0/components/button-group/' target='_blank' rel='nofollow'>Bootstrap Button Group documentation</a>
* [Bootstrap Get Started](/articles/bootstrap/bootstrap-get-started)


### Bootstrap Modals :
Modals are the best with bootstrap.  Build them with CSS, JS, and HTML.  You may need to use some custom JS because of HTML5 restrictions.  Use buttons and classes with pre word of modal --- like modal-content or modal-body, etc!

Ex:
$('bestModal').on('show.bs.modal, function() {
  $('#bestInputNameEver').trigger('focus')
})

#### More information :
* <a href="https://getbootstrap.com/docs/4.0/components/modal/" target='_blank'>Bootstrap Modal Documentation</a>
