---
id: 5900f43e1000cf542c50ff4f
title: 问题209：循环逻辑
challengeType: 5
videoUrl: ''
---

# --description--

k输入二进制真值表是从k个输入位（二进制数字，0 \[假]或1 \[真]）到1个输出位的映射。例如，逻辑AND和XOR函数的2输入二进制真值表是：

x y x AND y000010100111x y x XOR y000011101110多个6输入二进制真值表τ满足公式

所有6位输入（a，b，c，τ，a，b，c，d，e，f）和τ（b，c，d，e，f，一个XOR（b和c））= 0 d，e，f）？

# --hints--

`euler209()`应该返回15964587728784。

```js
assert.strictEqual(euler209(), 15964587728784);
```

# --solutions--

