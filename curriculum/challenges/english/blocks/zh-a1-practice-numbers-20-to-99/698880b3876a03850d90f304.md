---
id: 698880b3876a03850d90f304
title: Task 2
challengeType: 22
dashedName: task-2
lang: zh-CN
inputType: pinyin-to-hanzi
---

<!-- (Audio) Chen Na: 四是四 (sì shì sì)，十是十 (shí shì shí)，十四是十四 (shí sì shì shí sì)，四十是四十 (sì shí shì sì shí)。-->

# --description--

Excellent work so far! You are now completing the final line of your first Chinese tongue twister. It helps you practice distinguishing the `si` and `shi` sounds in different tones, as well as the pronunciation of single-digit and double-digit numbers.

# --instructions--

Listen to the audio and complete the sentences below.

# --fillInTheBlank--

## --sentence--

`四是四 (sì shì sì)，十是十 (shí shì shí)，十四是十四 (shí sì shì shí sì)，BLANK 是 (shì) BLANK。`

## --blanks--

`四十 (sì shí)`

### --feedback--

This is the number 40 in Chinese.

---

`四十 (sì shí)`

### --feedback--

This repeats the number 40 in Chinese.

# --explanation--

Chen Na is saying:

`四是四 (sì shì sì)，十是十 (shí shì shí)，十四是十四 (shí sì shì shí sì)，四十是四十 (sì shí shì sì shí)`.

This sentence means "4 is 4, 10 is 10, 14 is 14, and 40 is 40".

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
      "startTimestamp": 227,
      "finishTimestamp": 237.71
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
      "finishTime": 2.6,
      "dialogue": {
        "text": "四是四 (sì shì sì)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 3.09,
      "finishTime": 4.81,
      "dialogue": {
        "text": "十是十 (shí shì shí)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 5.45,
      "finishTime": 7.89,
      "dialogue": {
        "text": "十四是十四 (shí sì shì shí sì)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "startTime": 8.53,
      "finishTime": 11.21,
      "dialogue": {
        "text": "四十是四十 (sì shí shì sì shí)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "opacity": 0,
      "startTime": 11.71
    }
  ]
}
```
