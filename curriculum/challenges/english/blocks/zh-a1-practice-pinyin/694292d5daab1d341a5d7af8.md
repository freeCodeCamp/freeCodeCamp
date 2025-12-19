---
id: 694292d5daab1d341a5d7af8
title: Task 5
challengeType: 22
dashedName: task-5
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- (Audio) Li Hong: 中文 (zhōng wén) -->

# --instructions--

Listen to the audio and complete the word below. The correct syllables will be converted to Chinese characters.

# --fillInTheBlank--

## --sentence--

`BLANK 文 (wén)`

## --blanks--

`中 (zhōng)`

### --feedback--

This character has the syllable `zhōng`.

# --explanation--

The speaker is saying `中文 (zhōng wén)`, which means Chinese language, and you're learning it!

The missing character is `中 (zhōng)`. It's typed as `zhong1`.

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
      "startTimestamp": 39.81,
      "finishTimestamp": 41.41
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
      "finishTime": 2.6,
      "dialogue": {
        "text": "中文 (zhōng wén)",
        "align": "center"
      }
    },
    {
      "character": "Li Hong",
      "opacity": 0,
      "startTime": 3.1
    }
  ]
}
```
