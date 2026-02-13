---
id: 697378abaed90d3847602635
title: Task 7
challengeType: 22
dashedName: task-7
lang: es
---

<!-- (AUDIO) Elena: Cuarenta, Cuarenta y cuatro, Cuarenta y siete -->

# --description--

Now Elena is saying three numbers in the 40s.

# --instructions--

Based on the audio, complete the sequence of numbers below using digits.

# --fillInTheBlank--

## --sentence--

`Cuarenta - Cuarenta y cuatro - BLANK`

## --blanks--

`Cuarenta y siete`

### --feedback--

This is the number 47 in Spanish.

# --explanation--

Elena mentions three numbers in the 40s:

- 40 - `Cuarenta`.

- 44 - `Cuarenta y cuatro`.

- 47 - `Cuarenta y siete`.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Elena",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_describing_company_and_people_numbers_practice.mp3",
      "startTime": 1,
      "startTimestamp": 19.36,
      "finishTimestamp": 24.37
    }
  },
  "commands": [
    {
      "character": "Elena",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Elena",
      "startTime": 1,
      "finishTime": 1.92,
      "dialogue": {
        "text": "Cuarenta",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 2.58,
      "finishTime": 3.9,
      "dialogue": {
        "text": "Cuarenta y cuatro",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 4.65,
      "finishTime": 6.01,
      "dialogue": {
        "text": "Cuarenta y siete",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 6.51
    }
  ]
}
```
