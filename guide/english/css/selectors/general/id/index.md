---
title: Id
---
## Id
the "Id" selector is used within a html/css file in order to style a unique element of a page. Other othe methods kinds of selectors such as attrobutes or class selectors, an Id can only be used on a single element in a page. 

## Using an Id selector

### HTML example
To use an Id selector within an HTML file, you must simply assign the id within the opening tags of an html attribute like shown below. Not that the Id should not include spaces and should be surrounded by quotes. 
```
<p id="company-motto">To do our best!</p>
```
### CSS example
Once you have added a unique Id selector to your page, you must add specific styling to the id you've selected using CSS as shown below.
```
#company-motto {
  font-weight: 900;
}
```

## Notable features
When one or more elements with the same Id are present within the same html file, only the first instance of the the Id will have the style. Additionally because Id's are unique selectors, they should only be used when an element absolutely has to have a specific style and therefore has a high specificity in order for it's styling to take precedence over other possible selectors. 

## More Information:
Feel free to make any additional changes to this site. 

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

