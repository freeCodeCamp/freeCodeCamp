# jest-leak-detector

Module for verifying whether an object has been garbage collected or not.

Internally creates a weak reference to the object, and forces garbage collection
to happen. If the reference is gone, it meant no one else was pointing to the
object.

## Example

```javascript
let reference = {};

const detector = new LeakDetector(reference);

// Reference is held in memory.
console.log(detector.isLeaked()); // true

// We destroy the only reference to the object.
reference = null;

// Reference is gone.
console.log(detector.isLeaked()); // false
```
