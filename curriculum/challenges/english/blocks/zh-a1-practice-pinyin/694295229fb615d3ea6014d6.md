---
id: 694295229fb615d3ea6014d6
title: Task 7
challengeType: 19
dashedName: task-7
lang: zh-CN
---

<!-- (Audio) Li Hong: yě, zhí, cǐ -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Choose the right order of the syllables you hear.

## --answers--

`zhí, yě, cǐ`

### --feedback--

This order does not match the sequence spoken in the audio.

---

`xiě, zhí, cǐ`

### --feedback--

The first syllable is different from what you hear in the audio.

---

`yě, zhí, cǐ`

---

`yě, chí, cǐ`

### --feedback--

The second syllable has the wrong initial.

## --video-solution--

3

# --explanation--

The speaker is pronouncing the syllables in this order: `yě`, `zhí`, and `cǐ`.

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
      "startTimestamp": 51.41,
      "finishTimestamp": 56.46
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
      "finishTime": 2,
      "dialogue": {
        "text": "yě",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 3.27,
      "finishTime": 4.03,
      "dialogue": {
        "text": "zhí",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 4.05,
      "finishTime": 6.05,
      "dialogue": {
        "text": "cǐ",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 6.55
    }
  ]
}
```
