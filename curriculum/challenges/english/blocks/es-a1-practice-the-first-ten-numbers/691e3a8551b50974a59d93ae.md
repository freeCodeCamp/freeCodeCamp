---
id: 691e3a8551b50974a59d93ae
title: Task 3
challengeType: 22
dashedName: task-3
lang: es
---

<!-- (AUDIO) Julieta: Cuatro, Dos, Cero -->

# --description--

In this audio, Julieta mentions a sequence of three numbers.

# --instructions--

Complete the sequence of numbers based on the audio.

# --fillInTheBlank--

## --sentence--

`Cuatro - BLANK - Cero`

## --blanks--

`Dos`

### --feedback--

This is the number 2 in Spanish.

# --explanation--

Julieta mentions this sequence of numbers: `Cuatro - Dos - Cero`.

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
      "startTimestamp": 0.61,
      "finishTimestamp": 3.99
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
      "finishTime": 1.7,
      "dialogue": {
        "text": "Cuatro",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.35,
      "finishTime": 3.02,
      "dialogue": {
        "text": "Dos",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.71,
      "finishTime": 4.38,
      "dialogue": {
        "text": "Cero",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.88
    }
  ]
}
```
