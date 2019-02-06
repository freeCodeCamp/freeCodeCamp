---
title: Connect Redux to React
---
## Connect Redux to React

## Hint 1:

Use the example from the instructions, replacing MyComponent with Presentational

```javascript
connect(mapStateToProps, mapDispatchToProps)(Presentational)
```

## Solution:

```javascript
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```