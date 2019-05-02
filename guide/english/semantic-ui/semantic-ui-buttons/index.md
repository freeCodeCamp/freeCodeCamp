---
title: Semantic UI Buttons
---
## Semantic UI Buttons

A button indicates a possible user action. Semantic UI provides an easy-to-use syntax that simplifies not only the styling of a button, but also the natural language semantics.

#### How to Use

Semantic UI class is simply added to a button element, various example were given below to indicate how to use it.

#### Types

* Standard Button

Standard Semantic UI button
```html
<button class="ui button">Standard Button</button>
```
* Emphasis Button

A button with a different level of emphasis
```html
<button class="ui primary button">
```
Other emphasis classes are `secondary`, `positive`, and `negative`

* Animated Button

A button with animation, showing hidden contents
```html
<div class="ui animated fade button" tabindex="0">
  <div class="visible content">Sign-up for a Pro account</div>
  <div class="hidden content">$12.99 a month</div>
</div>
```
The property `tabindex="0"` above makes the button keyboard focusable, since the `<button>`tag was not used.

* Labeled Button

A button alongside a label
```html
<div class="ui labeled button" tabindex="0">
  <div class="ui button"><i class="heart icon"></i> Like</div>
  <a class="ui basic label">2,048</a>
</div>
```
the element `<i>` is used to specify an icon, here it is a heart icon `<i class="heart icon"></i>` alongside basic label `<a class="ui basic label">2,048</a>`

* Icon Button

A Semantic UI button can be just an icon
```html
<button class="ui icon button">
  <i class="camera icon"></i>
</button>
```
The above is just a camera icon

#### Groups

Semantic UI buttons can exist in a group
```html
<div class="ui buttons">
  <button class="ui button">One</button>
  <button class="ui button">Two</button>
  <button class="ui button">Three</button>
</div>
```

#### Content

Semantic UI buttons can contain conditionals
```html
<div class="ui buttons">
  <button class="ui positive button">Yes</button>
  <div class="or" data-text="or"></div>
  <button class="ui negative button">No</button>
</div>
```

#### States

Semantic UI buttons can exist in different states, `active`, `disabled`, `loading`. Simply add a state name to the `class` attribute` of `<button>` element.
```html
<button class="ui loading button">Loading</button>
```

#### Variations

Semantic UI buttons exist in variety of sizes, `mini`, `tiny`, `small`, `medium`, `large`, `big`, `huge`, and `massive`.
```html
<button class="ui massive button">Massive Button</button>
```

There is a lot more about Semantic UI buttons, visit the provided link in More Information section to learn more.


#### More Information:
* [Semantic UI Buttons Docs](https://semantic-ui.com/elements/button.html)
