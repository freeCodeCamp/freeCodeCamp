---
id: 68f5f8ecf1912e445dec84a5
title: Task 6
challengeType: 22
dashedName: task-6
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- REVIEW -->

<!-- (Audio) whole audio Chen Na -->

# --description--

This is a review of Chen Na's introduction.

# --instructions--

Write the following words in the correct spot:

`我是 (wǒ shì)`, `数据分析师 (shù jù fēn xī shī)`, `加拿大人 (jiā ná dà rén)`, and `你们好 (nǐ men hǎo)`.

Remember that you can type Pinyin and a number to input characters with the right tones.

# --fillInTheBlank--

## --sentence--

`BLANK，BLANK 陈娜 (chén nà)。`

`我是 (wǒ shì) BLANK。`

`我是 (wǒ shì) BLANK。`

## --blanks--

`你们好 (nǐ men hǎo)`

### --feedback--

These three characters together mean "hello everyone", a greeting to a group of people.

---

`我是 (wǒ shì)`

### --feedback--

This means "I am" and introduces who she is.

---

`加拿大人 (jiā ná dà rén)`

### --feedback--

This phrase means "Canadian", showing her nationality.

---

`数据分析师 (shù jù fēn xī shī)`

### --feedback--

This means "data analyst", indicating her profession.

# --explanation--

Chen Na first greets a group of people with `你们好 (nǐ men hǎo)`, then uses `我是 (wǒ shì)` to introduce her name. She also introduces her nationality as `加拿大人 (jiā ná dà rén)` and her profession as `数据分析师 (shù jù fēn xī shī)`.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
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
      "filename": "ZH_A1_greetings_and_introductions_chenna.mp3",
      "startTime": 1,
      "startTimestamp": 0.75,
      "finishTimestamp": 6.93
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
      "finishTime": 3.03,
      "dialogue": {
        "text": "你们好 (nǐ men hǎo)，我是陈娜 (wǒ shì chén nà)。",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 3.57,
      "finishTime": 4.83,
      "dialogue": {
        "text": "我是加拿大人 (wǒ shì jiā ná dà rén)。",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 5.59,
      "finishTime": 7.18,
      "dialogue": {
        "text": "我是数据分析师 (wǒ shì shù jù fēn xī shī)。",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "opacity": 0,
      "startTime": 7.68
    }
  ]
}
```
