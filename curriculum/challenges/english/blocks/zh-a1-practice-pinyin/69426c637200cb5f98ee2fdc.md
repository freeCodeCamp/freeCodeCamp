---
id: 69426c637200cb5f98ee2fdc
title: Task 1
challengeType: 19
dashedName: task-1
lang: zh-CN
---

<!-- (Audio) Li Hong: ǖ, ě, ù -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is it true or false: The letter `i` is in the audio.

## --answers--

True

### --feedback--

The audio only has the simple finals `ü`, `e`, and `u`.

---

False

## --video-solution--

2

# --explanation--

The audio says `ǖ`, `ě`, and `ù`. None of these syllables uses the vowel `i`, so the statement is false.

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
      "startTimestamp": 1.57,
      "finishTimestamp": 6.06
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
      "finishTime": 1.93,
      "dialogue": {
        "text": "ǖ",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 2.8,
      "finishTime": 3.74,
      "dialogue": {
        "text": "ě",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 4.68,
      "finishTime": 5.49,
      "dialogue": {
        "text": "ù",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 5.99
    }
  ]
}
```
