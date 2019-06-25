---
title: Null Type
localeTitle: نوع فارغ
---
## نوع فارغ

في TypeScript ، يحتوي النوع الفارغ على القيم الخالية. Null هي قيم صالحة من كل نوع.

```ts
let u: null = null;
``` 

عند استخدام العلامة - علامة StrictNullChecks ، يتم تعيين null فقط إلى الفراغ ونوعها.

```ts
let s = "foo";
s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok
```