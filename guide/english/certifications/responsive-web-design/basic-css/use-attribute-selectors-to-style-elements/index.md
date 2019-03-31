---
title: Use Attribute Selectors to Style Elements
---
## Use Attribute Selectors to Style Elements

You can also apply styling to elements by their attribute values.

### For Example
1. If you want to style all the checkboxes on the page, you can do.
    ```
    [type='checkbox'] {
      // CSS styling
    }
    ```
2. This also works with custom attribute, lets say you have two elements with attribute named `foo`.
    ```
    <p foo="bar">foo bar</p>
    <p foo="baz">foo baz</p>
    ```
    You can use attribute to style them differently.
    ```
    [foo='bar'] {
      color: red;
    }
    [foo='baz'] {
      color: purple;
    }
    ```
