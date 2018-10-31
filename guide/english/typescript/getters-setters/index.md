---
title: Getters & Setters
---

# Getters & Setters

Typescript also supports `get` and `set` property. Get and Set Properties are actually called Accessors. Accessors of a property contains executable statements associated with getting (reading) or setting (writing) the property. The declarations can contain get accessor or set accessor or both.

```typescript
class User {
    private _fullName: string = '';

    get fullName() {
        return this._fullName;
    }

    set fullName(name) {
        this._fullName = name;
    }
}

let user = new User();

user.fullName = 'John Doe';

console.log(user.fullName);
```