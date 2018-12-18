---
title: Buttons
---
## Buttons

The Bootstrap framework provides you with various styling options for buttons. These styles help you provide a visual representation to the user of what the button may do.

#### How To Use:
To use bootstrap buttons you follow the same steps that you would to create a button in HTML except you also apply the applicable CSS class to the button. A code example has been provided below.

**Code Example:**

`<button type="button" class="btn btn-primary">Primary</button>`

You can also use bootstrap buttons with the `<a>` and `<input>` elements as shown in the examples below.

`<a class="btn btn-primary" href="#" role="button">This button is a link</a>`

`<input class="btn btn-primary" type="submit" value="Submit">`

#### Bootstrap Button Class List:
This is a list of the CSS classes that bootstrap provides for buttons. They give the background color to the buttons. 

`.btn` This is bootstrap's basic button. It is a prerequisite if you want other bootstrap buttons to work properly.

`<button type="button" class="btn">Basic</button>`

`.btn-primary` Bootstrap's primary button.

`<button type="button" class="btn btn-primary">Primary</button>`

`.btn-secondary` Bootstrap's secondary button.

`<button type="button" class="btn btn-secondary">Secondary</button>`

`.btn-success` Bootstrap's success button.

`<button type="button" class="btn btn-success">Success</button>`

`.btn-info` Bootstrap's info button.

`<button type="button" class="btn btn-info">Info</button>`

`.btn-warning` Bootstrap's warning button.

`<button type="button" class="btn btn-warning">Warning</button>`

`.btn-danger` Bootstrap's danger button.

`<button type="button" class="btn btn-danger">Danger</button>`

`.btn-link` Bootstrap's link button.

`<button type="button" class="btn btn-link">Link</button>`

`.btn-light` Bootstrap's light button.

`<button type="button" class="btn btn-light">Light</button>`

`.btn-dark` Bootstrap's dark button.

`<button type="button" class="btn btn-dark">Dark</button>`

`.btn-dark` This is bootstrap's dark button. 

<button type="button" class="btn btn-dark">Dark</button>

`.btn-secondary` This is bootstrap's secondary button. 

<button type="button" class="btn btn-secondary">Secondary</button>

#### Bootstrap Button Sizes:
This is a list of the CSS classes for different size of the buttons.

`.btn-lg` Bootstrap's large button.

`<button type="button" class="btn btn-lg">Large</button>`

`.btn-md` This is bootstrap's medium button.

`<button type="button" class="btn btn-md">Medium</button>`

`.btn-sm` Bootstrap's small button.

`<button type="button" class="btn btn-sm">Small</button>`

`.btn-md` This is bootstrap's medium button.

<button type="button" class="btn btn-md">Medium</button>

`.btn-xs` This is bootstrap's extra small button.

`<button type="button" class="btn btn-xs">Extra Small</button>`

`.btn-block` This is bootstrap's full width button.

<button type="button" class="btn btn-block">Block</button>

#### Bootstrap Disabled Button State
This is used to show that the button is disabled by fading the button. This can be achieved through adding "disabled" to the `<button>` tag.
  
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>


`.btn-block` This is bootstrap's block level button. They actually span the entire width of their parent element. For example, a form element with a width of 200px, that means the btn-block button would have a width of 200px.

<button type="button" class="btn btn-sm">Small</button>

#### Bootstrap Outlined Buttons:
It is possible to also have outlined buttons rather than fully colored in ones. This is achieved by placing the mid fix `outline` between the button class you want. A sample usage would be as follows:

`<button type="button" class="btn btn-outline-primary">Primary</button>`

Outlined buttons are a part of Bootstrap since version 4, please be sure that you are using the right version if you are unable to get them to work.

_Note: Do not include the dot in the HTML Class Attribute, referring to the classes with a dot is only used when adjusting the classes in CSS._

#### More Information: 
* <a href='https://getbootstrap.com/docs/4.1/components/buttons/' target='_blank' rel='nofollow'>Bootstrap Buttons documentation</a>
* <a href='https://getbootstrap.com/docs/4.1/components/button-group/' target='_blank' rel='nofollow'>Bootstrap Button Group documentation</a>
