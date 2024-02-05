---
id: 5a23c84252665b21eecc7ed4
title: 揹包問題/無界
challengeType: 1
forumTopicId: 323655
dashedName: knapsack-problemunbounded
---

# --description--

A traveler gets diverted and has to make an unscheduled stop in what turns out to be Shangri-La. Opting to leave, he is allowed to take as much as he likes of the items available there, so long as it will fit in his knapsack, and he can carry it.

他知道他總共不能攜帶超過特定值的最大重量；而且他的揹包容量有限。

查看物品上的條形碼上方，他會發現它們的重量和體積。 他翻出他最近的一份財務文件，並獲得了每一項的價值。

他只能帶走任何物品的整個單位，但任何物品的數量都比他所能攜帶的要多得多。

# --instructions--

編寫一個函數，將對象數組、最大重量和最大體積作爲參數。 每個對象都有 4 個屬性：名稱、值、重量和體積。 該函數應返回旅行者可以隨身攜帶的物品的最大值。

# --hints--

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 25, 0.25)` 應該返回 `54500`。

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    25,
    0.25
  ),
  54500
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 55, 0.25)` 應該返回 `88400`。

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    55,
    0.25
  ),
  88400
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 25, 0.15)` 應該返回 `42500`。

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    25,
    0.15
  ),
  42500
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 35, 0.35)` 應該返回 `75900`。

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    35,
    0.35
  ),
  75900
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 15, 0.25)` 應該返回 `43200`。

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    15,
    0.25
  ),
  43200
);
```

# --seed--

## --seed-contents--

```js
function knapsackUnbounded(items, maxweight, maxvolume) {

}
```

# --solutions--

```js
function knapsackUnbounded(items, maxWeight, maxVolume) {
  function getPickTotals(items, pick) {
    let totalValue = 0;
    let totalWeight = 0;
    let totalVolume = 0;
    for (let i = 0; i < items.length; i++) {
      totalValue += pick[i] * items[i].value;
      totalWeight += pick[i] * items[i].weight;
      totalVolume += pick[i] * items[i].volume;
    }
    return [totalValue, totalWeight, totalVolume];
  }

  function getMaxes(items, maxWeight, maxVolume) {
    const maxes = [];
    for (let i = 0; i < items.length; i++) {
      const maxUnitsInWeight = Math.floor(maxWeight / items[i].weight);
      const maxUnitsInVolume = Math.floor(maxVolume / items[i].volume);
      const maxUnitsInLimit = Math.min(maxUnitsInWeight, maxUnitsInVolume);
      maxes.push(maxUnitsInLimit);
    }
    return maxes;
  }

  function isInLimit(value, limit) {
    return value <= limit;
  }

  function getCombinations(maxValues, curPicks, combinations) {
    if (maxValues.length === 0) {
      combinations.push(curPicks);
    }

    const curMax = maxValues[0];
    const leftMaxValues = maxValues.slice(1);
    for (let i = 0; i <= curMax; i++) {
      getCombinations(leftMaxValues, curPicks.concat(i), combinations);
    }
    return combinations;
  }

  let bestValue = 0;
  let bestPick = [];
  const maxes = getMaxes(items, maxWeight, maxVolume);
  const combinations = getCombinations(maxes, [], []);
  for (let i = 0; i < combinations.length; i++) {
    const curPick = combinations[i];
    const [curValue, curWeight, curVolume] = getPickTotals(items, curPick);
    if (!isInLimit(curWeight, maxWeight) || !isInLimit(curVolume, maxVolume)) {
      continue;
    }

    if (curValue > bestValue) {
      bestValue = curValue;
      bestPick = [curPick];
    } else if (curValue === bestValue) {
      bestPick.push(curPick);
    }
  }

  return bestValue;
}
```
