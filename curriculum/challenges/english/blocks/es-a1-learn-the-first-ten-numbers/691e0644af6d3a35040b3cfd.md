---
id: 691e0644af6d3a35040b3cfd
title: Task 3
challengeType: 22
dashedName: task-3
lang: es
---

<!-- (AUDIO) Julieta: Uno -->

# --description--

In Spanish, the number 1 is called `uno`.

It's quite unique because it changes based on the gender of the noun that comes after it.

- For masculine nouns, it shortens to `un`, like in `un libro` ("a book"). 

- For feminine nouns, it changes to `una`, like in `una pizza` ("a pizza").

Practice this number's pronunciation until you feel more comfortable with its sound.

# --instructions--

Write this number in Spanish below.

# --fillInTheBlank--

## --sentence--

`BLANK`

## --blanks--

`Uno`

### --feedback--

This is the number 1 in Spanish.

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
      "startTimestamp": 3.08,
      "finishTimestamp": 3.53
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
      "finishTime": 1.45,
      "dialogue": {
        "text": "Uno",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 1.95
    }
  ]
}
```
