# import/prefer-default-export

<!-- end auto-generated rule header -->

In exporting files, this rule checks if there is default export or not.

## Rule Details

### rule schema

```javascript
"import/prefer-default-export": [
    ( "off" | "warn" | "error" ),
    { "target": "single" | "any" } // default is "single"
]
```

### Config Options

There are two options available: `single` and `any`. By default, if you do not specify the option, rule will assume it is `single`.

#### single

**Definition**: When there is only a single export from a module, prefer using default export over named export.

How to setup config file for this rule:

```javascript
// you can manually specify it
"rules": {
    "import/prefer-default-export": [
        ( "off" | "warn" | "error" ),
        { "target": "single" }
    ]
}

// config setup below will also work
"rules": {
    "import/prefer-default-export": "off" | "warn" | "error"
}
```

The following patterns are considered warnings:

```javascript
// bad.js

// There is only a single module export and it's a named export.
export const foo = 'foo';

```

The following patterns are not warnings:

```javascript
// good1.js

// There is a default export.
export const foo = 'foo';
const bar = 'bar';
export default bar;
```

```javascript
// good2.js

// There is more than one named export in the module.
export const foo = 'foo';
export const bar = 'bar';
```

```javascript
// good3.js

// There is more than one named export in the module
const foo = 'foo';
const bar = 'bar';
export { foo, bar }
```

```javascript
// good4.js

// There is a default export.
const foo = 'foo';
export { foo as default }
```

```javascript
// export-star.js

// Any batch export will disable this rule. The remote module is not inspected.
export * from './other-module'
```

#### any

**Definition**: any exporting file must contain a default export.

How to setup config file for this rule:

```javascript
// you have to manually specify it
"rules": {
    "import/prefer-default-export": [
        ( "off" | "warn" | "error" ),
        { "target": "any" }
    ]
}
```

The following patterns are *not* considered warnings:

```javascript
// good1.js

//has default export
export default function bar() {};
```

```javascript
// good2.js

// has default export
let foo;
export { foo as default }
```

```javascript
// good3.js

//contains multiple exports AND default export
export const a = 5;
export function bar(){};
let foo;
export { foo as default }
```

```javascript
// good4.js

// does not contain any exports => file is not checked by the rule
import * as foo from './foo';﻿
```

```javascript
// export-star.js

// Any batch export will disable this rule. The remote module is not inspected.
export * from './other-module'
```

The following patterns are considered warnings:

```javascript
// bad1.js

//has 2 named exports, but no default export
export const foo = 'foo';
export const bar = 'bar';
```

```javascript
// bad2.js

// does not have default export
let foo, bar;
export { foo, bar }
```

```javascript
// bad3.js

// does not have default export
export { a, b } from "foo.js"﻿
```

```javascript
// bad4.js

// does not have default export
let item;
export const foo = item;
export { item };
```
