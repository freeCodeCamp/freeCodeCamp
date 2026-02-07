---
id: 6916e7bcbaa6f71f810d2e04
title: Task 2
challengeType: 19
dashedName: task-2
lang: zh-CN
---

<!-- (audio) part of the dialogue -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

How does Wang Hua begin the conversation with Liu Ming?

## --answers--

She asks Liu Ming where he is from.

### --feedback--

This happens later in the conversation.

---

She asks whether Liu Ming is a designer.

### --feedback--

Wang Hua asks this only after learning Liu Ming's name and nationality.

---

She greets Liu Ming and introduces her name.

---

She tells Liu Ming that she is a Web developer.

### --feedback--

This information appears at the end of the dialogue, not the beginning.

## --video-solution--

3

# --explanation--

Wang Hua starts with a greeting `你好 (nǐ hǎo)` and says `我是王华 (wǒ shì wáng huá)`, which is a basic self-introduction.

This is a common and polite way to open a first-time conversation.

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
      "filename": "ZH_A1_greetings_and_introductions_dialogue.mp3",
      "startTime": 1,
      "startTimestamp": 0.32,
      "finishTimestamp": 2.13
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
      "finishTime": 2.81,
      "dialogue": {
        "text": "你好 (nǐ hǎo)，我是王华 (wǒ shì wáng huá)。",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 3.31
    }
  ]
}
```
