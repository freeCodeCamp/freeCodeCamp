---
id: 6942b3b6488b904284619fb5
title: Task 8
challengeType: 19
dashedName: task-8
lang: zh-CN
---

<!-- (Audio) Li Hong: zhāng, cháng, jiǎng, máng -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

The speaker is pronouncing four syllables. Which one has a different final with the others?

## --answers--

The first one

### --feedback--

The first one ends with the final `ang`, which is the same as most of the others.

---

The second one

### --feedback--

The second one ends with the final `ang`, which is the same as several others.

---

The third one

---

The fourth one

### --feedback--

The fourth one ends with the final `ang`, which is the same as several others.

## --video-solution--

3

# --explanation--

The speaker is pronouncing `zhāng`, `cháng`, `jiǎng`, and `máng`. The first, second, and fourth syllables all end with the final `ang`. The third syllable ends with the final `iang`, which is different.

# --scene--

```json
{
  "setup": {
    "background": "living-room.png",
    "characters": [
      {
        "character": "Li Hong",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_pinyin_practice.mp3",
      "startTime": 1,
      "startTimestamp": 61.94,
      "finishTimestamp": 69.08
    }
  },
  "commands": [
    {
      "character": "Li Hong",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Li Hong",
      "startTime": 1,
      "finishTime": 1.89,
      "dialogue": {
        "text": "zhāng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 2.83,
      "finishTime": 3.86,
      "dialogue": {
        "text": "cháng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 4.91,
      "finishTime": 5.88,
      "dialogue": {
        "text": "jiǎng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 7.21,
      "finishTime": 8.14,
      "dialogue": {
        "text": "máng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 8.64
    }
  ]
}
```
