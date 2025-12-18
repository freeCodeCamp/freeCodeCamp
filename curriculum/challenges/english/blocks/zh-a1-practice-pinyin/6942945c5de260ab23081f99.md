---
id: 6942945c5de260ab23081f99
title: Task 6
challengeType: 22
dashedName: task-6
lang: zh-CN
inputType: pinyin-tone
---

<!-- (Audio) Li Hong: lù, pèi, xiǎn -->

# --instructions--

Listen to the audio and complete the sequence of syllables below.

# --fillInTheBlank--

## --sentence--

`BLANK, BLANK, BLANK`

## --blanks--

`lù`

### --feedback--

This syllable has the initial `l` and the final `u`, and uses the fourth tone.

---

`pèi`

### --feedback--

This syllable has the initial `p` and the final `ei`, and uses the fourth tone.

---

`xiǎn`

### --feedback--

This syllable has the initial `x` and the final `ian`, and uses the third tone.

# --explanation--

The speaker is pronouncing `lù`, `pèi`, and `xiǎn`. They're typed as `lu4`, `pei4`, and `xian3`.

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
      "startTimestamp": 44.48,
      "finishTimestamp": 48.72
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
      "finishTime": 1.79,
      "dialogue": {
        "text": "lù",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 2.59,
      "finishTime": 3.21,
      "dialogue": {
        "text": "pèi",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "startTime": 3.97,
      "finishTime": 5.24,
      "dialogue": {
        "text": "xiǎn",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 5.74
    }
  ]
}
```
