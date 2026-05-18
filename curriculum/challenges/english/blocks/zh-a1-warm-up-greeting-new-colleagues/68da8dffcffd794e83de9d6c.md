---
id: 68da8dffcffd794e83de9d6c
title: Task 10
challengeType: 19
dashedName: task-10
lang: zh-CN
---

<!-- (Audio) Chen Na: 你们好 (nǐ men hǎo) -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Chen Na saying to greet a group of people?

## --answers--

`你好 (nǐ hǎo)`

### --feedback--

This is a greeting to one person, but Chen Na is greeting more than one.

---

`您们好 (nín men hǎo)`

### --feedback--

This form is not standard in Chinese.

---

`你们好 (nǐ men hǎo)`

---

`大家好 (dà jiā hǎo)`

### --feedback--

This also means "Hello, everyone", but Chen Na uses a different phrase.

## --video-solution--

3

# --explanation--

The question is asking what Chen Na is saying to greet **a group of people**.

`你好 (nǐ hǎo)` is a greeting to one person, while `您好 (nín hǎo)` is a polite greeting to one person. `您们好 (nín men hǎo)` is not standard in Chinese; `您 (nín)` is polite singular, not usually pluralized.

The correct phrase for greeting a group is `你们好 (nǐ men hǎo)`, which is a common way to say "hello, everyone". `大家好 (dà jiā hǎo)` is another way to greet a group, which you'll learn as you progress.

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
      "filename": "ZH_A1_greetings_and_introductions_warm_up.mp3",
      "startTime": 1,
      "startTimestamp": 8.98,
      "finishTimestamp": 9.9
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
      "finishTime": 1.92,
      "dialogue": {
        "text": "你们好 (nǐ men hǎo)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "opacity": 0,
      "startTime": 2.42
    }
  ]
}
```
