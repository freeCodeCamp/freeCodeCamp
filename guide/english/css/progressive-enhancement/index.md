---
title: Progressive Enhancement
---
## Progressive Enhancement

  Progressive enhancement is the practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
  
  Progressive enhancement is a concept similar to graceful degradation, but in reverse. It does not require us to select supported browsers or revert to table-based layouts. We are the ones who decide the minimum level of technology that we want to support (e.g. the browser must support HTML 4.01 and standard page request/responses).
  
  CSS has changed a lot in the last few years. More and more properties have been added to the CSS specifications and while some of them are now supported by all modern browsers, there are some which only work properly in a few browsers. In any case, we can often make use of the way CSS works, for implementing progressive enhancement: if a browser doesn’t support a property, it will simply skip it without throwing an error and parse the next property. 
  
### Example
```css
 h2 {
  color: black;
  color: rgba(0,0,0,0.9);
}
```
 In this case all browsers supporting `rgba()` will use the `rgba()` value for the `color` property. However, browsers which do not support `rgba()` will ignore this and use the previously set `black` value for the `color` property.
 
 ### More information

  [JustMarkup.com](https://justmarkup.com/log/2017/02/css-and-progressive-enhancement/)
