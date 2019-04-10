---
title: Null Type
localeTitle: 空类型
---
## 空类型

在TypeScript中，null类型的值为null。 Null是每种类型的有效值。

```ts
let u: null = null; 
```

使用--strictNullChecks标志时，null只能分配给void及其类型。

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 

```