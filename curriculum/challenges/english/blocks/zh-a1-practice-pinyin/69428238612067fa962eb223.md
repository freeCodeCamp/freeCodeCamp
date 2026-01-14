---
id: 69428238612067fa962eb223
title: Task 2
challengeType: 22
dashedName: task-2
lang: zh-CN
inputType: pinyin-tone
---

<!-- (Audio) Li Hong: bǐ, xǔ, zé, chù -->

# --instructions--

Listen to the audio and complete the sequence of syllables below.

# --fillInTheBlank--

## --sentence--

`BLANK, xǔ, zé, BLANK`

## --blanks--

`bǐ`

### --feedback--

This syllable has the initial `b` and the final `i`, and uses the third tone.

---

`chù`

### --feedback--

This syllable has the initial `ch` and the final `u`, and uses the fourth tone.

# --explanation--

The missing syllables in the sequence are `bǐ` at the beginning and `chù` at the end. They're typed as `bi3` and `chu4`.

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
      "startTimestamp": 11,
      "finishTimestamp": 17.8
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
      "finishTime": 2.03,
      "dialogue": {
        "text": "bǐ",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 2.79,
      "finishTime": 4.05,
      "dialogue": {
        "text": "xǔ",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 5.13,
      "finishTime": 6.01,
      "dialogue": {
        "text": "zé",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 7.01,
      "finishTime": 7.8,
      "dialogue": {
        "text": "chù",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 8.3
    }
  ]
}
```
