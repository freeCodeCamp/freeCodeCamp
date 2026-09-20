---
id: 698943136bbd381bbe8d10ef
title: Task 6
challengeType: 22
dashedName: task-6
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- (Audio) Chen Na: 二十九 (èr shí jiǔ), 七十六 (qī shí liù), 三十三 (sān shí sān)-->

# --description--

Chen Na is pronouncing a sequence of numbers.

# --instructions--

Listen to the audio and complete the sequence of numbers below.

# --fillInTheBlank--

## --sentence--

`二十九 (èr shí jiǔ)，BLANK，三十三 (sān shí sān)`

## --blanks--

`七十六 (qī shí liù)`

### --feedback--

This number is formed by adding `六 (liù)` to `七十 (qī shí)`. It corresponds to 76.

# --explanation--

The sequence of numbers is `二十九 (èr shí jiǔ)，七十六 (qī shí liù)，三十三 (sān shí sān)`, corresponding to 29, 76, and 33.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Chen Na",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_numbers_and_personal_information_numbers_20_99.mp3",
      "startTime": 1,
      "startTimestamp": 245.08,
      "finishTimestamp": 252.09
    }
  },
  "commands": [
    {
      "character": "Chen Na",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Chen Na",
      "startTime": 1,
      "finishTime": 2.61,
      "dialogue": {
        "text": "二十九 (èr shí jiǔ)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 3.35,
      "finishTime": 4.88,
      "dialogue": {
        "text": "七十六 (qī shí liù)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 5.9,
      "finishTime": 7.41,
      "dialogue": {
        "text": "三十三 (sān shí sān)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "opacity": 0,
      "startTime": 7.91
    }
  ]
}
```
