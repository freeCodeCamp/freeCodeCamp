---
id: 6942845aff741ee274efefda
title: Task 3
challengeType: 19
dashedName: task-3
lang: zh-CN
---

<!-- (Audio) Li Hong: lóng, róng, hōng -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

The three syllables pronounced in the audio have the same final. What is it?

## --answers--

`ong`

---

`iong`

### --feedback--

This final includes an extra `i` sound at the beginning, which you do not hear in the audio.

---

`eng`

### --feedback--

This final is different from what you hear in the audio.

---

`ang`

### --feedback--

This final is different from what you hear in the audio.

## --video-solution--

1

# --explanation--

The speaker is pronouncing `lóng`, `róng`, and `hōng`, all of which end with the same final `ong`.

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
      "startTimestamp": 23.2,
      "finishTimestamp": 28.2
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
      "finishTime": 2.05,
      "dialogue": {
        "text": "lóng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 3.01,
      "finishTime": 3.98,
      "dialogue": {
        "text": "róng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 4.94,
      "finishTime": 6,
      "dialogue": {
        "text": "hōng",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 6.5
    }
  ]
}
```
