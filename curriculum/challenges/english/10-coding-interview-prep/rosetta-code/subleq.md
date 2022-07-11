---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 1
forumTopicId: 302328
dashedName: subleq
---

# --description--

Subleq is an example of a One-Instruction Set Computer (OISC).

It is named after its only instruction, which is **SU**btract and **B**ranch if **L**ess than or **EQ**ual to zero.

Your task is to create an interpreter which emulates such a machine.

The machine's memory consists of an array of signed integers. Any reasonable word size is fine, but the memory must be able to hold negative as well as positive numbers.

Execution begins with the instruction pointer aimed at the first word, which is address 0. It proceeds as follows:

<ol>
  <li>Let A, B, and C be the value stored in the three consecutive words in memory starting at the instruction pointer.</li>
  <li>Advance the instruction pointer 3 words to point at the address after the one containing C.</li>
  <li>If A is -1, then a character is read from standard input and its code point stored in the address given by B. C is unused.</li>
  <li>If B is -1, then the number contained in the address given by A is interpreted as a code point and the corresponding character output. C is again unused.</li>
  <li>Otherwise, both A and B are treated as the addresses of memory locations. The number contained in the address given by A is subtracted from the number at the address given by B (and the result stored back in address B). If the result is zero or negative, the value C becomes the new instruction pointer.</li>
  <li>If the instruction pointer becomes negative, execution halts.</li>
</ol>

Other negative addresses besides -1 may be treated as equivalent to -1, or generate an error, as you see fit.

Your solution should accept a program to execute on the machine, separately from the input fed to the program itself.

This program should be in raw subleq "machine code" - whitespace-separated decimal numbers, with no symbolic names or other assembly-level extensions, to be loaded into memory starting at address 0. Show the output of your solution when fed this "Hello, world!" program. (Note that the example assumes ASCII or a superset of it, such as any of the Latin-N character sets or Unicode. You may translate it into another character set if your implementation is on a non-ASCiI-compatible environment.)

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

Which corresponds to something like this in a hypothetical assembler language:

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

Write a function that takes an array of integers as a parameter. This represents the memory elements. The function should interpret the sequence and return the output string. For this task, assume that there is no standard input.

# --hints--

`Subleq` should be a function.

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` should return a string.

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

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` should return `"Hello, world!"`.

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
