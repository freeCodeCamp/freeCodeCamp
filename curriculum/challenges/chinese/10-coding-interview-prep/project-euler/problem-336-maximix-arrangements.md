---
id: 5900f4bd1000cf542c50ffcf
challengeType: 5
title: 'Problem 336: Maximix Arrangements'
videoUrl: ''
localeTitle: 问题336：Maximix安排
---

## Description
<section id="description">一列火车用于按顺序运输四辆车：ABCD。然而，有时当火车到达收集车厢时，它们的顺序不正确。为了重新安排车厢，他们都被分流到一个大型旋转转盘上。在车厢在特定点处脱开之后，列车从转盘上移开，拉动仍与其连接的托架。其余的车厢旋转180度。然后重新加入所有托架，并且根据需要重复该过程，以便获得转盘的最少使用次数。一些布置，例如ADCB，可以很容易地解决：托架在A和D之间分开，并且在DCB旋转之后，已经实现了正确的顺序。 <p>然而，火车司机简​​单西蒙并不知道他的效率，所以他总是通过最初将马车A放在正确的位置，然后是马车B等来解决问题。 </p><p>使用四个车厢，西蒙的最坏可能安排是DACB和DBAC，我们称之为maximix安排。每个都需要他五次旋转（尽管使用最有效的方法，他们可以使用三次旋转来解决）。他用于DACB的过程如下所示。 </p><p>可以证实，对于六个车厢存在24个最大值布置，其中第十个词典最大化布置是DFAECB。 </p><p>查找11种车厢的第11版词典格式。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler336()</code>应该返回CAGBIHEFJDK。
    testString: assert.strictEqual(euler336(), CAGBIHEFJDK);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler336() {
  // Good luck!
  return true;
}

euler336();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
