---
title: Id
---

# ID

the "id" selector is used within a html/css file in order to style a unique element on  a page. Unlike other kinds of selectors such as attributes or class selectors, an id can only be used on a single element in a page. 

## Using an Id selector

### HTML example
To use an Id selector within an HTML file, you must simply assign the id within the opening tags of an html attribute like shown below. Not that the Id should not include spaces and should be surrounded by quotes. 
```html
<p id="company-motto">To do our best!</p>
```
### CSS example
Once you have added a unique Id selector to your page, you can add specific styling to the id you've selected using CSS as shown below.
```css
#company-motto {
  font-weight: 900;
}
```

## Notable features
When one or more elements with the same Id are present within the same html file, only the first instance of the the Id will have the style. Additionally because Ids are unique selectors, they should only be used when an element absolutely has to have a specific style and therefore has a high specificity in order for its styling to take precedence over other possible selectors. 

