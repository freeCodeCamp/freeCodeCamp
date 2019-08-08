---
title: Portals
---
## Portals

Portals were introduced with React 16.0. Portal provides a mechanism for a component to render its children in a DOM node that is outside the DOM hierarchy of parent component. In other words, a component that returns a portal from its render method can cause its children to be rendered as children of a completely different DOM node in the DOM tree. As a result, the position of the portal will be different in DOM tree versus the React tree.

A portal can be created like so
```javascript
ReactDOM.createPortal(child, container)
```
Here `child` is a element, string, or fragment and `container` is a DOM element. 

A detailed explanation with example can be found in the official documentation. The difference in postion of the portal can be observed in the browser's dev tools by comparing the 'Elements' and 'React' tabs.

#### More Information
[React Portals](https://reactjs.org/docs/portals.html)
