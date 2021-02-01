---
id: 5900f4bd1000cf542c50ffcf
title: 问题336：Maximix安排
challengeType: 5
videoUrl: ''
dashedName: problem-336-maximix-arrangements
---

# --description--

一列火车用于按顺序运输四辆车：ABCD。然而，有时当火车到达收集车厢时，它们的顺序不正确。为了重新安排车厢，他们都被分流到一个大型旋转转盘上。在车厢在特定点处脱开之后，列车从转盘上移开，拉动仍与其连接的托架。其余的车厢旋转180度。然后重新加入所有托架，并且根据需要重复该过程，以便获得转盘的最少使用次数。一些布置，例如ADCB，可以很容易地解决：托架在A和D之间分开，并且在DCB旋转之后，已经实现了正确的顺序。

然而，火车司机简​​单西蒙并不知道他的效率，所以他总是通过最初将马车A放在正确的位置，然后是马车B等来解决问题。

使用四个车厢，西蒙的最坏可能安排是DACB和DBAC，我们称之为maximix安排。每个都需要他五次旋转（尽管使用最有效的方法，他们可以使用三次旋转来解决）。他用于DACB的过程如下所示。

可以证实，对于六个车厢存在24个最大值布置，其中第十个词典最大化布置是DFAECB。

查找11种车厢的第11版词典格式。

# --hints--

`euler336()`应该返回CAGBIHEFJDK。

```js
assert.strictEqual(euler336(), CAGBIHEFJDK);
```

# --seed--

## --seed-contents--

```js
function euler336() {

  return true;
}

euler336();
```

# --solutions--

```js
// solution required
```
