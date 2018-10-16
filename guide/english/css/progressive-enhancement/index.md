---
title: Progressive Enhancement
---
## Progressive Enhancement

  Progressive enhancement is the practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
  
  Progressive enhancement is similar concept to graceful degradation but in reverse. It does not require us to select supported browsers or revert to table-based layouts. We choose a level of technology; i.e. the browser must support HTML 4.01 and standard page request/responses.
  
  CSS has changed a lot in the last years. More and more properties were added and while some are now supported in all modern browsers some only work in one or two browsers. In any way, we can often make use of the architecture of CSS. If a browser doesn’t know a property it will simple skip it without throwing an error. 
  
### Example
```css
 h2 {
  color: black;
  color: rgba(0,0,0,0.9);
}
```
 In this case all browsers supporting rgba() will use the rgba() value for the color property. However, browsers not supporting rgba() will ignore this and use the value “black” for the color.
 
 ### More information

  [JustMarkup.com](https://justmarkup.com/log/2017/02/css-and-progressive-enhancement/)
