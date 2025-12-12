---
id: 691f218124e5d72585095275
title: Task 7
challengeType: 22
dashedName: task-7
lang: es
---

<!-- (AUDIO) Julieta: Ocho, Cero, Uno -->

# --description--

Julieta is practicing how to pronounce three numbers.

# --instructions--

Complete the sequence of numbers based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`BLANK - Cero - Uno`

## --blanks--

`Ocho`

### --feedback--

This is the first number in the sequence. It's the number 8 in Spanish.

# --explanation--

Julieta mentions this sequence of numbers: `Ocho - Cero - Uno`.

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
      "startTimestamp": 9.46,
      "finishTimestamp": 12.7
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
      "finishTime": 1.65,
      "dialogue": {
        "text": "Ocho",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.17,
      "finishTime": 2.92,
      "dialogue": {
        "text": "Cero",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.68,
      "finishTime": 4.24,
      "dialogue": {
        "text": "Uno",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.74
    }
  ]
}
```
