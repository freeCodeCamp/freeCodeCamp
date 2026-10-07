# import/no-named-export

<!-- end auto-generated rule header -->

Prohibit named exports. Mostly an inverse of [`no-default-export`].

[`no-default-export`]: ./no-default-export.md

## Rule Details

The following patterns are considered warnings:

```javascript
// bad1.js

// There is only a single module export and it's a named export.
export const foo = 'foo';
```

```javascript
// bad2.js

// There is more than one named export in the module.
export const foo = 'foo';
export const bar = 'bar';
```

```javascript
// bad3.js

// There is more than one named export in the module.
const foo = 'foo';
const bar = 'bar';
export { foo, bar }
```

```javascript
// bad4.js

// There is more than one named export in the module.
export * from './other-module'
```

```javascript
// bad5.js

// There is a default and a named export.
export const foo = 'foo';
const bar = 'bar';
export default 'bar';
```

The following patterns are not warnings:

```javascript
// good1.js

// There is only a single module export and it's a default export.
export default 'bar';
```

```javascript
// good2.js

// There is only a single module export and it's a default export.
const foo = 'foo';
export { foo as default }
```

```javascript
// good3.js

// There is only a single module export and it's a default export.
export default from './other-module';
```

## When Not To Use It

If you don't care if named imports are used, or if you prefer named imports over default imports.
