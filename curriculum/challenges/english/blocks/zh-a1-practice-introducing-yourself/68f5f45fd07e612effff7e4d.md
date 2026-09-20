---
id: 68f5f45fd07e612effff7e4d
title: Task 3
challengeType: 19
dashedName: task-3
lang: zh-CN
---

<!-- (Audio) whole audio Liu Ming -->

# --description--

Let's hear how Liu Ming introduces himself.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

True or false: Liu Ming's job involves creating software, building applications, and solving technical problems using code.

## --answers--

True

### --feedback--

Liu Ming says `我是设计师 (wǒ shì shè jì shī)`, which means his job usually involves creating visual concepts and layouts instead of software development, which is what a developer does.

---

False

## --video-solution--

2

# --explanation--

`我是设计师 (wǒ shì shè jì shī)` means "I am a designer".

When someone says this, it means their job typically involves creating visual concepts, layouts, and designs for various media.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Liu Ming",
        "position": {
          "x": 50,
          "y": 17,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_liuming.mp3",
      "startTime": 1,
      "startTimestamp": 0.1,
      "finishTimestamp": 5.1
    }
  },
  "commands": [
    {
      "character": "Liu Ming",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Liu Ming",
      "startTime": 1,
      "finishTime": 3.01,
      "dialogue": {
        "text": "您好 (nín hǎo)，我是刘明 (wǒ shì liú míng)。",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 3.3,
      "finishTime": 4.65,
      "dialogue": {
        "text": "我是新加坡人 (wǒ shì xīn jiā pō rén)。",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 4.92,
      "finishTime": 6,
      "dialogue": {
        "text": "我是设计师 (wǒ shì shè jì shī)。",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "opacity": 0,
      "startTime": 6.5
    }
  ]
}
```
