---
title: Override Inherited Methods
localeTitle: تجاوز الأساليب الموروثة
---
## تجاوز الأساليب الموروثة

# حل

```javascript
Penguin.prototype.fly = function() {
    return  "Alas, this is a flightless bird.";
};
```