---
title: Buttons
---
## Buttons

The Bootstrap framework provides you with various styling options for buttons. These styles help you provide a visual representation to the user of what the button may do.

#### How To Use:
To use bootstrap buttons you need to follow the same steps that you would to create a button in HTML, except that you also apply the applicable CSS class to the button. A code example has been provided below.

**Code Example:**

`<button type="button" class="btn btn-primary">Primary</button>`

You can also use bootstrap buttons with the `<a>` and `<input>` elements as shown in the examples below.
As per the [Bootstrap](https://getbootstrap.com/docs/4.0/components/buttons/) documentation,
> When using button classes on <a> elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a role="button" to appropriately convey their purpose to assistive technologies such as screen readers.

`<a class="btn btn-primary" href="#" role="button">This button is a link</a>`

`<input class="btn btn-primary" type="submit" value="Submit">`

#### Bootstrap Button Class List:
This is a list of the CSS classes that bootstrap provides for buttons. They give the background color to the buttons. 

`.btn` This is bootstrap's basic button. It is a prerequisite if you want other bootstrap buttons to work properly.

`<button type="button" class="btn">Basic</button>`

`.btn-primary` Bootstrap's primary button. Default color displays #007bff.

`<button type="button" class="btn btn-primary">Primary</button>`

`.btn-secondary` Bootstrap's secondary button. Default color displays #6c757d. 

`<button type="button" class="btn btn-secondary">Secondary</button>`

`.btn-success` Bootstrap's success button. Default color displays #28a745.

`<button type="button" class="btn btn-success">Success</button>`

`.btn-info` Bootstrap's info button. Default color displays #17a2b8.

`<button type="button" class="btn btn-info">Info</button>`

`.btn-warning` Bootstrap's warning button. Default color displays #ffc107.

`<button type="button" class="btn btn-warning">Warning</button>`

`.btn-danger` Bootstrap's danger button. Default color displays #dc3545.

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

It is possible to also have outlined buttons rather than fully colored buttons. This is achieved by placing the mid fix `outline` between the button class you want. A sample usage would be as follows:

`<button type="button" class="btn btn-outline-primary">Primary</button>`

`<button type="button" class="btn btn-outline-secondary">Secondary</button>`

`<button type="button" class="btn btn-outline-success">Success</button>`

`<button type="button" class="btn btn-outline-danger">Danger</button>`

`<button type="button" class="btn btn-outline-warning">Warning</button>`

`<button type="button" class="btn btn-outline-info">Info</button>`

`<button type="button" class="btn btn-outline-light">Light</button>`

`<button type="button" class="btn btn-outline-dark">Dark</button>`

Outlined buttons are a part of Bootstrap since version 4 - please be sure that you are using the right version if you are unable to get them to work.

#### Inline Buttons
You can create inline button row by adding `.d-inline-block` class to the element which sets the display of the button to inline block. For example : `<button class="btn btn-primary d-inline-block btn-lg"></button>`

#### Bootstrap Grouping of Buttons
It is possible to group more than one button for certain uses like pagination. Grouping buttons can be done by making a parent `div` for all buttons you want to group, using the `.btn-group` class on this `div`:

Example:
```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
```

_Note: Do not include the dot in the HTML Class Attribute. Referring to the classes with a dot is only used when adjusting the classes in CSS._

#### More Information: 
* <a href='https://getbootstrap.com/docs/4.1/components/buttons/' target='_blank' rel='nofollow'>Bootstrap Buttons documentation</a>
* <a href='https://getbootstrap.com/docs/4.1/components/button-group/' target='_blank' rel='nofollow'>Bootstrap Button Group documentation</a>
