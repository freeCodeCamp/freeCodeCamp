---
title: Dropdowns
---
## Dropdowns

Bootstrap provides Dropdowns as a plugin for displaying lists of links.
A dropdown is a button which toggles displaying a list of links.

Bootstrap’s dropdowns are designed to be generic and applicable to a variety of situations. For instance, it is possible to create dropdowns that contain search fields or login forms.

## Example

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown example
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```


## Example Explained
The *.dropdown* class indicates a dropdown menu.

To open the dropdown menu, use a button or a link with a class of *.dropdown-toggle* and the *data-toggle="dropdown* attribute.

The *.caret* class creates a caret arrow icon (&#9660;), which indicates that the button is a dropdown.

Add the *.dropdown-menu* class to a unordered list element to actually build the dropdown menu.

#### More Information:
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/components/dropdowns/)

