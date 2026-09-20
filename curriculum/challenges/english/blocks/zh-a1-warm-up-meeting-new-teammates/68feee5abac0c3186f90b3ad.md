---
id: 68feee5abac0c3186f90b3ad
title: Task 9
challengeType: 19
dashedName: task-9
lang: zh-CN
---

<!-- (Audio) Wang Hua: 名字 (míng zi) -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Which option is the correct Pinyin for what Wang Hua says?

## --answers--

`míng zi`

---

`mǐng zi`

### --feedback--

The tone of the first syllable doesn't match what you hear in the audio.

---

`mín zi`

### --feedback--

The final of the first syllable is not what she says.

---

`míng zhī`

### --feedback--

The initial of the second syllable is different from what you hear in the audio.

## --video-solution--

1

# --explanation--

Wang Hua is saying `míng zi`. The first syllable has a nasal final `ing` and a rising tone. The second syllable is a whole syllable with a neutral tone, pronounced lightly.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Wang Hua",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_warm_up.mp3",
      "startTime": 1,
      "startTimestamp": 31.51,
      "finishTimestamp": 32.34
    }
  },
  "commands": [
    {
      "character": "Wang Hua",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Wang Hua",
      "startTime": 1,
      "finishTime": 1.83,
      "dialogue": {
        "text": "名字 (míng zi)",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 2.33
    }
  ]
}
```
