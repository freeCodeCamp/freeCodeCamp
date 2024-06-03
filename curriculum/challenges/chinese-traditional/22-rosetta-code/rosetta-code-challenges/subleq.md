---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 1
forumTopicId: 302328
dashedName: subleq
---

# --description--

Subleq is an example of a One-Instruction Set Computer (OISC).

它以其唯一的指令命名，即減法（**SU**）和分支（**B**）如果小於（**L**）或等於（**EQ**）0。

你的任務是創建一個模擬這種機器的解釋器。

機器的內存由一個有符號整數數組組成。 任何合理的字長都可以，但內存必須能夠容納負數和正數。

執行從指向第一個字（地址 0）的指令指針開始。 它的運作方式如下：

<ol>
  <li>Let A, B, and C be the value stored in the three consecutive words in memory starting at the instruction pointer.</li>
  <li>將指令指針前進 3 個字，指向包含 C 後的地址。</li>
  <li>如果 A 爲 -1，則從標準輸入中讀取一個字符，其代碼點存儲在 B 給定的地址中。C 未使用。</li>
  <li>如果 B 爲 -1，則 A 給出的地址中包含的數字被解釋爲代碼點和相應的字符輸出。 C 再次未使用。</li>
  <li>否則，A 和 B 都被視爲內存位置的地址。 包含在 A 給出的地址中的數字從 B 給出的地址處的數字中減去（並將結果存儲回地址 B 中）。 如果結果爲零或負數，則值 C 成爲新的指令指針。</li>
  <li>如果指令指針變爲負數，則執行停止。</li>
</ol>

除了 -1 之外的其他負地址可能被視爲等效於 -1，或者產生錯誤，由你判斷。

你的解決方案應該接受要在機器上執行的程序，與輸入到程序本身的輸入分開。

這個程序應該是原始 subleq “機器代碼”——空格分隔的十進制數，沒有符號名稱或其他程序集級擴展，加載到從地址 0 開始的內存中。 當向這個 "Hello, world!" 程序輸入時，顯示你的解決方案的輸出。 （請注意，該示例假定 ASCII 或其超集，例如任何拉丁 N 字符集或 Unicode。 如果你的實現是在非 ASCII 兼容的環境中，你可以將其轉換爲另一個字符集。）

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

這對應於假設的彙編語言中的類似內容：

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

編寫一個將整數數組作爲參數的函數。 這代表內存元素。 該函數應該解釋序列並返回輸出字符串。 對於此任務，假設沒有標準輸入。

# --hints--

`Subleq` 應該是一個函數。

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` 應該返回一個字符串。

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

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` 應該返回 `"Hello, world!"`。

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
