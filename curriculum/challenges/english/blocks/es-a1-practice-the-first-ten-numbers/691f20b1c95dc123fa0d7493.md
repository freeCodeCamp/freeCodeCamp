---
id: 691f20b1c95dc123fa0d7493
title: Task 6
challengeType: 22
dashedName: task-6
lang: es
---

<!-- (AUDIO) Julieta: Siete, Nueve, Tres -->

# --description--

Julieta is practicing how to pronounce three numbers.

# --instructions--

Complete the sequence of numbers based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`Siete - Nueve - BLANK`

## --blanks--

`Tres`

### --feedback--

This is the last number in the sequence. It's the number 3 in Spanish.

# --explanation--

Julieta mentions this sequence of numbers: `Siete - Nueve - Tres`.

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
      "filename": "ES_A1_spanish_fundamentals_numbers_mixed.mp3",
      "startTime": 1,
      "startTimestamp": 5.04,
      "finishTimestamp": 8.47
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
      "finishTime": 1.86,
      "dialogue": {
        "text": "Siete",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.38,
      "finishTime": 3.17,
      "dialogue": {
        "text": "Nueve",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.8,
      "finishTime": 4.43,
      "dialogue": {
        "text": "Tres",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.93
    }
  ]
}
```
