---
title: Attributes
---
# HTML Attributes

HTML elements can have attributes, which contain additional information about the element.

HTML attributes generally come in name-value pairs, and always go in the opening tag of an element. The attribute name says what type of information you're providing about the element, and the attribute value is the actual information.

For example, an anchor (`<a>`) element in an HTML document creates links to other pages, or other parts of the page. You use the `href` attribute in the opening `<a>` tag to tell the browser where the link sends a user.

Here's an example of a link that sends users to freeCodeCamp's home page:

```html
<a href="www.freecodecamp.org">Click here to go to freeCodeCamp!</a>
```

Notice that the attribute name (`href`) and value ("www.freeCodeCamp.org") are separated with an equals sign, and quotes surround the value.

There are many different HTML attributes, but most of them only work on certain HTML elements. For example, the `href` attribute won't work if it's placed in an opening `<h1>` tag.

In the example above, the value supplied to the `href` attribute could be any valid link. However, some attributes only have a set of valid options you can use, or values need to be in a specific format. The `lang` attribute tells the browser the default language of the contents in an HTML element. The values for the `lang` attribute should use standard language or country codes, such as `en` for English, or `it` for Italian.

## Boolean Attributes

Some HTML attributes don't need a value because they only have one option. These are called Boolean attributes. The presence of the attribute in a tag will apply it to that HTML element. However, it's okay to write out the attribute name and set it equal to the one option of the value. In this case, the value is usually the same as the attribute name.

For example, the `<input>` element in a form can have a `required` attribute. This requires users to fill out that item before they can submit the form.

Here are examples that do the same thing:

```html
<input type="text" required >
<input type="text" required="required" >
```

## Other Resources

- [HTML links](https://guide.freecodecamp.org/html/attributes/links/)
- [Href Attribute](https://guide.freecodecamp.org/html/attributes/href-attribute/)
- [Lang Attribute](https://guide.freecodecamp.org/html/attributes/lang/)
- [HTML Input Element](https://guide.freecodecamp.org/html/attributes/input/)
- [Required Attribute](https://guide.freecodecamp.org/html/attributes/required/)
