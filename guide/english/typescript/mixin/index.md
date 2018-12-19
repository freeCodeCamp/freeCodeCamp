---
title: Mixin
---
## Mixin

In TypeScript, making a mixin is quite tricky due to its static typing. A good solution for mixin is to make a function receives a class and return a new class, which is similar to a higher-order function.

```typescript
type Constructor<T = {}> = new (...args: any[]) => T;

class User {
    constructor(name: string) {
        this.name = name
    }
}

function Loggable<ClassBase extends Constructor>(Base: ClassBase) {
    return class extends Base {
        constructor(...args: any[]) {
            super(...args)
            console.log(`arguments: ${args}`)
        }
    }
}

const LoggableUser = Loggable(User)
const someUser = new LoggableUser('John Doe')
```