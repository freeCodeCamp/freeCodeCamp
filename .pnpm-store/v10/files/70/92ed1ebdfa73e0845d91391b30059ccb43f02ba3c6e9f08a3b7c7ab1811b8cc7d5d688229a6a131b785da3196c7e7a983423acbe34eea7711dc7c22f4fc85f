# import/no-default-export

<!-- end auto-generated rule header -->

Prohibit default exports. Mostly an inverse of [`prefer-default-export`].

[`prefer-default-export`]: ./prefer-default-export.md

## Rule Details

The following patterns are considered warnings:

```javascript
// bad1.js

// There is a default export.
export const foo = 'foo';
const bar = 'bar';
export default 'bar';
```

```javascript
// bad2.js

// There is a default export.
const foo = 'foo';
export { foo as default }
```

The following patterns are not warnings:

```javascript
// good1.js

// There is only a single module export and it's a named export.
export const foo = 'foo';
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
// export-star.js

// Any batch export will disable this rule. The remote module is not inspected.
export * from './other-module'
```

## When Not To Use It

If you don't care if default imports are used, or if you prefer default imports over named imports.
