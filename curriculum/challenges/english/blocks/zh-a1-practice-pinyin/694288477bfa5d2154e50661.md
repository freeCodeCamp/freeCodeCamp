---
id: 694288477bfa5d2154e50661
title: Task 4
challengeType: 19
dashedName: task-4
lang: zh-CN
---

<!-- (Audio) Li Hong: shuān, shǎng, shēng -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

The three syllables pronounced in the audio have the same initial. What is it?

## --answers--

`s`

### --feedback--

This initial is not the one used in the audio.

---

`sh`

---

`ch`

### --feedback--

This is different from the initial you hear in the audio.

---

`x`

### --feedback--

This initial is pronounced with the tongue closer to the teeth, which is different from the audio.

## --video-solution--

2

# --explanation--

The speaker is pronouncing `shuān`, `shǎng`, and `shēng`. All begin with the same initial `sh`.

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
      "startTimestamp": 31.57,
      "finishTimestamp": 36.19
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
      "finishTime": 1.95,
      "dialogue": {
        "text": "shuān",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 2.81,
      "finishTime": 3.86,
      "dialogue": {
        "text": "shǎng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 4.7,
      "finishTime": 5.62,
      "dialogue": {
        "text": "shēng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 6.12
    }
  ]
}
```
