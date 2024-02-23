---
id: 5900f51b1000cf542c51002e
title: '問題431：方形筒倉'
challengeType: 1
forumTopicId: 302102
dashedName: problem-431-square-space-silo
---

# --description--

Fred the farmer arranges to have a new storage silo installed on his farm and having an obsession for all things square he is absolutely devastated when he discovers that it is circular. Quentin, the representative from the company that installed the silo, explains that they only manufacture cylindrical silos, but he points out that it is resting on a square base. Fred is not amused and insists that it is removed from his property.

快速思考Quentin解釋說，當從上方輸送粒狀材料時，形成錐形斜面，與水平面形成的自然角度稱爲休止角。 For example if the angle of repose, $\alpha = 30°$, and grain is delivered at the centre of the silo then a perfect cone will form towards the top of the cylinder. In the case of this silo, which has a diameter of 6m, the amount of space wasted would be approximately 32.648388556 m<sup>3</sup>. 然而，如果穀物在頂部的一個點處被輸送，該點與中心的水平距離爲$ x $ m，則形成具有奇怪彎曲和傾斜的基部的錐體。 他向弗雷德展示了一張照片

<img class="img-responsive center-block" alt="image presenting forming of the perfect cone towards the top of the cylinder" src="https://cdn.freecodecamp.org/curriculum/project-euler/square-space-silo.png" style="background-color: white; padding: 10px;" />

We shall let the amount of space wasted in cubic metres be given by $V(x)$. If $x = 1.114\\,785\\,284$, which happens to have three squared decimal places, then the amount of space wasted, $V(1.114\\,785\\,284) \approx 36$. Given the range of possible solutions to this problem there is exactly one other option: $V(2.511\\,167\\,869) \approx 49$. It would be like knowing that the square is king of the silo, sitting in splendid glory on top of your grain.

Fred's eyes light up with delight at this elegant resolution, but on closer inspection of Quentin's drawings and calculations his happiness turns to despondency once more. Fred points out to Quentin that it's the radius of the silo that is 6 metres, not the diameter, and the angle of repose for his grain is 40­°. However, if Quentin can find a set of solutions for this particular silo then he will be more than happy to keep it.

If Quick thinking Quentin is to satisfy frustratingly fussy Fred the farmer's appetite for all things square then determine the values of $x$ for all possible square space wastage options and calculate $\sum x$ correct to 9 decimal places.

# --hints--

`squareSpaceSilo()` should return `23.386029052`.

```js
assert.strictEqual(squareSpaceSilo(), 23.386029052);
```

# --seed--

## --seed-contents--

```js
function squareSpaceSilo() {

  return true;
}

squareSpaceSilo();
```

# --solutions--

```js
// solution required
```
