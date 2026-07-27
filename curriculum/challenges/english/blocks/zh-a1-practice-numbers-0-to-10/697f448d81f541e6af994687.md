---
id: 697f448d81f541e6af994687
title: Task 3
challengeType: 19
dashedName: task-3
lang: zh-CN
---

<!-- (Audio) Wang Hua: 九 (jiǔ) -->

# --description--

Wang Hua is pronouncing a number in Chinese.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What number do you hear in the audio?

## --answers--

`九 (jiǔ)`

---

`六 (liù)`

### --feedback--

Wang Hua doesn't mention the number `六 (liù)`.

---

`十 (shí)`

### --feedback--

Wang Hua doesn't mention the number `十 (shí)`.

---

`零 (líng)`

### --feedback--

Wang Hua doesn't mention the number `零 (líng)`.

## --video-solution--

1

# --explanation--

Wang Hua says `九 (jiǔ)`, which corresponds to the number 9.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
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
      "filename": "ZH_A1_numbers_and_personal_information_numbers_0_10.mp3",
      "startTime": 1,
      "startTimestamp": 18.87,
      "finishTimestamp": 19.74
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
      "finishTime": 1.97,
      "dialogue": {
        "text": "九",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 2.47
    }
  ]
}
```
