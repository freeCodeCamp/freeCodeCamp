---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 1
forumTopicId: 302328
dashedName: subleq
---

# --description--

Subleq is an example of a One-Instruction Set Computer (OISC).

它以其唯一的指令命名，即减法（**SU**）和分支（**B**）如果小于（**L**）或等于（**EQ**）0。

你的任务是创建一个模拟这种机器的解释器。

机器的内存由一个有符号整数数组组成。 任何合理的字长都可以，但内存必须能够容纳负数和正数。

执行从指向第一个字（地址 0）的指令指针开始。 它的运作方式如下：

<ol>
  <li>Let A, B, and C be the value stored in the three consecutive words in memory starting at the instruction pointer.</li>
  <li>将指令指针前进 3 个字，指向包含 C 后的地址。</li>
  <li>如果 A 为 -1，则从标准输入中读取一个字符，其代码点存储在 B 给定的地址中。C 未使用。</li>
  <li>如果 B 为 -1，则 A 给出的地址中包含的数字被解释为代码点和相应的字符输出。 C 再次未使用。</li>
  <li>否则，A 和 B 都被视为内存位置的地址。 包含在 A 给出的地址中的数字从 B 给出的地址处的数字中减去（并将结果存储回地址 B 中）。 如果结果为零或负数，则值 C 成为新的指令指针。</li>
  <li>如果指令指针变为负数，则执行停止。</li>
</ol>

除了 -1 之外的其他负地址可能被视为等效于 -1，或者产生错误，由你判断。

你的解决方案应该接受要在机器上执行的程序，与输入到程序本身的输入分开。

这个程序应该是原始 subleq “机器代码”——空格分隔的十进制数，没有符号名称或其他程序集级扩展，加载到从地址 0 开始的内存中。 当向这个 "Hello, world!" 程序输入时，显示你的解决方案的输出。 （请注意，该示例假定 ASCII 或其超集，例如任何拉丁 N 字符集或 Unicode。 如果你的实现是在非 ASCII 兼容的环境中，你可以将其转换为另一个字符集。）

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

这对应于假设的汇编语言中的类似内容：

<pre>start:
    zero, message, -1
    message, -1, -1
    neg1, start+1, -1
    neg1, start+3, -1
    zero, zero, start
zero: 0
neg1: -1
message: "Hello, world!\n\0"
</pre>

# --instructions--

编写一个将整数数组作为参数的函数。 这代表内存元素。 该函数应该解释序列并返回输出字符串。 对于此任务，假设没有标准输入。

# --hints--

`Subleq` 应该是一个函数。

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` 应该返回一个字符串。

```js
assert(
  typeof Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]) == 'string'
);
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` 应该返回 `"Hello, world!"`。

```js
assert.equal(
  Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]),
  'Hello, world!'
);
```

# --seed--

## --seed-contents--

```js
function Subleq(mem) {

}
```

# --solutions--

```js
function Subleq(mem) {
  var out = '';
  var instructionPointer = 0;
  do {
    var a = mem[instructionPointer];
    var b = mem[instructionPointer + 1];
    if (a === -1) {
    } else if (b === -1) {
      out += String.fromCharCode(mem[a]);
    } else {
      mem[b] -= mem[a];
      if (mem[b] < 1) {
        instructionPointer = mem[instructionPointer + 2];
        continue;
      }
    }
    instructionPointer += 3;
  } while (instructionPointer >= 0);

  return out;
}
```
