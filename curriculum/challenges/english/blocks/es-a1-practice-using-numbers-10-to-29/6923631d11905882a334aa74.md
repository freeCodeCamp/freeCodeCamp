---
id: 6923631d11905882a334aa74
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---

<!-- (AUDIO) Camila: Catorce -->

# --description--

Camila continues practicing...

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is it true: The number that you can hear in the audio is 14.

## --answers--

True

---

False

### --feedback--

Camila says `catorce`, which means 14.

## --video-solution--

1

# --explanation--

This statement is true because Camila mentions `catorce`, which is the number 14 in Spanish.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Camila",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basic_personal_details_numbers_10_29.mp3",
      "startTime": 1,
      "startTimestamp": 10.03,
      "finishTimestamp": 10.9
    }
  },
  "commands": [
    {
      "character": "Camila",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Camila",
      "startTime": 1,
      "finishTime": 1.87,
      "dialogue": {
        "text": "Catorce",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 2.37
    }
  ]
}
```
