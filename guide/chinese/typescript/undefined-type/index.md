---
title: Undefined Type
localeTitle: 未定义的类型
---
## 未定义的类型

在TypeScript中，与null类型相同，未定义类型的值为undefined。未定义是每种类型的有效值。

```ts
let u: undefined = undefined; 
```

使用`--strictNullChecks`标志时，undefined只能分配给void及其类型。

```ts
let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 
 
 sn = undefined; // error, 'undefined' is not assignable to 'string | null' 
```

使用`--strictNullChecks` ，可选参数自动添加`| undefined` ：

```ts
function f(x: number, y?: number) { 
    return x + (y || 0); 
 } 
 f(1, 2); 
 f(1); 
 f(1, undefined); 
 f(1, null); // error, 'null' is not assignable to 'number | undefined' 

```