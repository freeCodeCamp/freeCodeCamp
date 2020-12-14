---
id: 5900f5141000cf542c510026
challengeType: 5
videoUrl: ''
title: 问题424：九郎
---

## Description
<section id="description">
上面是一个神秘的kakuro（也称为交叉和，甚至是交叉和）难题的示例，其最终解决方案在右侧。 （在许多互联网站点上都可以轻松找到kakuro谜题的通用规则。当前还可以在krazydad.com上找到其他相关信息，其作者已提供了此挑战的谜题数据。）

可下载的文本文件（kakuro200.txt）包含200个此类难题的描述，混合了5x5和6x6类型。文件中的第一个难题是上面的示例，其编码如下：

6，X，X，（vCC），（vI），X，X，X，（hH），B，O，（vCA），（vJE），X，（hFE，vD），O，O，O， O，（hA），O，I，（hJC，vB），O，O，（hJC），H，O，O，O，X，X，X，（hJE），O，O，X

第一个字符是指示信息网格大小的数字。它可能是6（用于5x5的kakuro拼图）或7（用于6x6的拼图），后跟逗号（，）。需要额外的顶行和左列来插入信息。

然后描述每个单元格的内容，并在其后跟一个逗号，从左到右并从顶行开始。
X =灰色单元格，不需要用数字填充。
O（大写字母）=要用数字填充的空白单元格。
A =或从A到J的大写字母中的任何一个都由已解决难题中的等效数字替换。
（）=加密总和的位置。水平总和前面加上小写的“ v”。后面跟着一两个大写字母，具体取决于总和是一位还是两位数。对于两位数的总和，第一个字母表示“十”，第二个字母表示“单位”。当单元格必须同时包含水平和垂直信息时，第一个始终是水平和信息，并且两者在同一组括号内用逗号分隔，例如：（.hFE，vD）。每组括号后还紧跟一个逗号。

最后一个单元格的描述后跟回车符/换行符（CRLF），而不是逗号。

每个谜题所需的答案均基于得出解决方案所需的每个字母的值，并根据字母顺序。如示例难题所示，其答案将为8426039571。10个加密字母中至少有9个始终是问题描述的一部分。如果仅给出9，则必须为丢失的数字分配剩余的数字。

您将获得文件中前10个谜题的答案总和为64414157580。

找到200个难题的答案总和。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler424()</code>应该返回1059760019628。
    testString: assert.strictEqual(euler424(), 1059760019628);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler424() {
  // Good luck!
  return true;
}

euler424();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
