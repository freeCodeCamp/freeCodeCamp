---
id: 69149bd1d69c4b1ae9a8cf9e
title: Task 6
challengeType: 22
dashedName: task-6
lang: es
---

<!-- (Audio) Luna: Soy chilena. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK chilena.`

## --blanks--

`Soy`

### --feedback--

This verb is used to describe identity, nationality, or profession.

# --explanation--

Luna says `Soy chilena`, using the verb `ser` ("to be").

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Luna",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_luna.mp3",
      "startTime": 1,
      "startTimestamp": 5.63,
      "finishTimestamp": 6.61
    }
  },
  "commands": [
    {
      "character": "Luna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Luna",
      "startTime": 1,
      "finishTime": 1.98,
      "dialogue": {
        "text": "Soy chilena.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 2.48
    }
  ]
}
```
