---
id: 5900f4481000cf542c50ff5b
title: 问题220：高速公路龙
challengeType: 5
videoUrl: ''
---

# --description--

设D0为双字母串“Fa”。对于n≥1，通过字符串重写规则从Dn-1导出Dn：

“a”→“aRbFR”“b”→“LFaLb”

因此，D0 =“Fa”，D1 =“FaRbFR”，D2 =“FaRbFRRLFaLbFR”，等等。

这些字符串可以解释为计算机图形程序的指令，“F”表示“向前绘制一个单位”，“L”表示“向左转90度”，“R”表示“向右转90度”，和“a” “和”b“被忽略了。计算机光标的初始位置是（0,0），指向（0,1）。

然后Dn是一种奇特的绘画，被称为n阶的Heighway Dragon。例如，D10如下所示;将每个“F”计为一步，（18,16）处的突出显示点是500步后达到的位置。

D50中1012步后光标的位置是什么？以x，y的形式给出答案，没有空格。

# --hints--

`euler220()`应返回139776,963904。

```js
assert.strictEqual(euler220(), 139776, 963904);
```

# --solutions--

