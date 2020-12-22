---
id: 5900f3851000cf542c50fe98
title: 问题25：1000位斐波纳契数
challengeType: 5
videoUrl: ''
---

# --description--

Fibonacci序列由递归关系定义：

F 

<sub>n</sub>

 = F 

<sub>n-1</sub>

-   F 

<sub>n-2</sub>

 ，其中F 

<sub>1</sub>

 = 1且F 

<sub>2</sub>

 = 1。

因此，前12个学期将是：

F 

<sub>1</sub>

 = 1

F 

<sub>2</sub>

 = 1

F 

<sub>3</sub>

 = 2

F 

<sub>4</sub>

 = 3

F 

<sub>5</sub>

 = 5

F 

<sub>6</sub>

 = 8

F 

<sub>7</sub>

 = 13

F 

<sub>8</sub>

 = 21

F 

<sub>9</sub>

 = 34

F 

<sub>10</sub>

 = 55

F 

<sub>11</sub>

 = 89

F 

<sub>12</sub>

 = 144

第12个学期F 

<sub>12</sub>

是第一个包含三位数的术语。 Fibonacci序列中包含`n个`数字的第一项的索引是多少？

# --hints--

`digitFibonacci(5)`应该返回21。

```js
assert.strictEqual(digitFibonacci(5), 21);
```

`digitFibonacci(10)`应该返回45。

```js
assert.strictEqual(digitFibonacci(10), 45);
```

`digitFibonacci(15)`应该返回69。

```js
assert.strictEqual(digitFibonacci(15), 69);
```

`digitFibonacci(20)`应该返回93。

```js
assert.strictEqual(digitFibonacci(20), 93);
```

# --solutions--

