---
id: 6920e3d96a1fb331b9814b50
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

<!-- (AUDIO) Camila: Nueve -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is it true: Camila mentions the number 0.

## --answers--

True

### --feedback--

`Cero` is the Spanish word for the number 0. Camila mentions a different number.

---

False

## --video-solution--

2

# --explanation--

Camila pronounces the number `Nueve` (9). The number 0 is called `Cero` in Spanish and has a different sound.

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
      "filename": "ES_A1_spanish_fundamentals_numbers_0_9.mp3",
      "startTime": 1,
      "startTimestamp": 20.36,
      "finishTimestamp": 20.98
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
      "finishTime": 1.62,
      "dialogue": {
        "text": "Nueve",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 2.12
    }
  ]
}
```
