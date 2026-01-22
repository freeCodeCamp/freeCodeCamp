---
id: 691f2524eb0b572be243cae8
title: Task 9
challengeType: 22
dashedName: task-9
lang: es
---

<!-- (AUDIO) Julieta: Siete -->

# --instructions--

Write the number that you hear in the audio below.

# --fillInTheBlank--

## --sentence--

`BLANK`

## --blanks--

`Siete`

### --feedback--

This is the number 7.

# --explanation--

Julieta mentions the number `Siete` (7) in the audio.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_fundamentals_numbers_0_9.mp3",
      "startTime": 1,
      "startTimestamp": 16.19,
      "finishTimestamp": 16.93
    }
  },
  "commands": [
    {
      "character": "Julieta",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Julieta",
      "startTime": 1,
      "finishTime": 1.74,
      "dialogue": {
        "text": "Siete",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.24
    }
  ]
}
```
