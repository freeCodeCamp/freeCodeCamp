---
id: 587d8253367417b2b2512c6a
title: 键入的数组
challengeType: 1
videoUrl: ''
dashedName: typed-arrays
---

# --description--

数组是可以容纳许多不同元素的JavaScript对象。 `var complexArr = [1, 5, "2", "Word", {"name": "James"}];`基本上后台发生的事情是您的浏览器会自动为该阵列提供适当的内存空间。如果添加或删除数据，它也会根据需要进行更改。但是，在高性能和不同元素类型的世界中，有时您需要更具体地了解为阵列提供多少内存。 <dfn>类型化数组</dfn>是这个问题的答案。您现在可以说要为阵列提供多少内存。下面是可用的不同类型数组的基本概述，以及该数组中每个元素的大小（以字节为单位）。

| 类型                  | 每个元素大小以字节为单位 |
| ------------------- | ------------ |
| `Int8Array`         | 1            |
| `Uint8Array`        | 1            |
| `Uint8ClampedArray` | 1            |
| `Int16Array`        | 2            |
| `Uint16Array`       | 2            |
| `Int32Array`        | 4            |
| `Uint32Array`       | 4            |
| `Float32Array`      | 4            |
| `Float64Array`      | 8            |

创建这种类型的数组有两种方法。一种方法是直接创建它。下面是如何创建一个3长度的`Int16Array` 。

> var i8 = new Int16Array（3）;  
> 的console.log（I8）;  
> //返回\[0,0,0]

您还可以创建一个

<dfn>缓冲区</dfn>

来分配您希望数组占用多少数据（以字节为单位）。 **注意**  
要使用缓冲区创建类型化数组，需要将字节数分配为上面列出的字节的倍数。

> //以不同方式创建相同的Int16Array数组  
> var byteSize = 6; //需要是2的倍数  
> var buffer = new ArrayBuffer（byteSize）;  
> var i8View = new Int16Array（buffer）;  
> buffer.byteLength; //返回6  
> i8View.byteLength; //返回6  
> 的console.log（i8View）; //返回\[0,0,0]

<dfn>缓冲区</dfn>

是仅承载数据的通用对象。您无法正常访问它们。要访问它们，您需要先创建一个

<dfn>视图</dfn>

 。

> i8View \[0] = 42;  
> 的console.log（i8View）; //返回\[42,0,0]

**注意**  
类型化数组没有传统数组所具有的某些方法，如`.pop()`或`.push()` 。类型化数组也会失败`Array.isArray()` ，它会检查某些内容是否为数组。虽然更简单，但对于不太复杂的JavaScript引擎来说，这可能是一个优势。

# --instructions--

首先创建一个64字节的`buffer` 。然后创建一个`Int32Array`类型数组，其中包含一个名为`i32View`的视图。

# --hints--

您的`buffer`应该是64字节大。

```js
assert(buffer.byteLength === 64);
```

您的缓冲区的`i32View`视图应该是64字节大。

```js
assert(i32View.byteLength === 64);
```

您的缓冲区的`i32View`视图应为16个元素长。

```js
assert(i32View.length === 16);
```

# --seed--

## --seed-contents--

```js
var buffer;
var i32View;
```

# --solutions--

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```
