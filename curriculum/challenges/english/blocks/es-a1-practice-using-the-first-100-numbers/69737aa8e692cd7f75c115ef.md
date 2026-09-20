---
id: 69737aa8e692cd7f75c115ef
title: Task 9
challengeType: 22
dashedName: task-9
lang: es
---

<!-- (AUDIO) Elena: Setenta y uno, Setenta y dos, Setenta y tres -->

# --description--

Elena is practicing numbers in the 70s.

# --instructions--

Based on the audio, complete the sequence of numbers below.

# --fillInTheBlank--

## --sentence--

`BLANK - BLANK - BLANK`

## --blanks--

`Setenta y uno`

### --feedback--

This is the number 71 in Spanish.

---

`Setenta y dos`

### --feedback--

This is the number 72 in Spanish.

---

`Setenta y nueve`

### --feedback--

This is the number 79 in Spanish.

# --explanation--

Elena mentions three numbers in the 70s:

- 71 - `Setenta y uno`.

- 72 - `Setenta y dos`.

- 79 - `Setenta y nueve`.

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
      "startTimestamp": 27.67,
      "finishTimestamp": 32.85
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
      "finishTime": 2.25,
      "dialogue": {
        "text": "Setenta y uno",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 2.8,
      "finishTime": 4.23,
      "dialogue": {
        "text": "Setenta y dos",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 4.89,
      "finishTime": 6.18,
      "dialogue": {
        "text": "Setenta y nueve",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 6.68
    }
  ]
}
```
