---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 5
videoUrl: ''
---

# --description--

jortSort是一个排序工具集，它使用户可以完成工作并保证效率，因为您不必再​​次排序。它最初是由着名的[JSConf的](https://www.youtube.com/watch?v=pj4U_W0OFoE) Jenn“Moneydollars”Schiffer [提出的](https://www.youtube.com/watch?v=pj4U_W0OFoE) 。 jortSort是一个函数，它将一个可比较对象数组作为其参数。然后它按升序对数组进行排序，并将排序后的数组与最初提供的数组进行比较。如果数组匹配（即原始数组已经排序），则该函数返回true。如果数组不匹配（即原始数组未排序），则该函数返回false。

# --hints--

`jortsort`应该是一个功能。

```js
assert(typeof jortsort == 'function');
```

`jortsort("+JSON.stringify(tests[0])+")`应该返回一个布尔值。

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort("+JSON.stringify(tests[0])+")`应该返回`true` 。

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort("+JSON.stringify(tests[1])+")`应该返回`false` 。

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort("+JSON.stringify(tests[2])+")`应该返回`false` 。

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort("+JSON.stringify(tests[3])+")`应该返回`true` 。

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort("+JSON.stringify(tests[4])+")`应该返回`false` 。

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort("+JSON.stringify(tests[5])+")`应该返回`true` 。

```js
assert.equal(jortsort([1, 1, 1, 1, 1]), true);
```

# --solutions--

