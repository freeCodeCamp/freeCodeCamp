---
id: 690a2aca25b9d771e2dd1101
title: Task 3
challengeType: 19
dashedName: task-3
lang: es
---

<!-- (Audio) Julieta: Soy uruguaya. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Julieta's nationality?

## --answers--

`Chilena`

### --feedback--

This nationality refers to someone from Chile.

---

`Peruana`

### --feedback--

This describes someone from Peru.

---

`Uruguaya`

---

`Colombiana`

### --feedback--

This nationality refers to Colombia.

## --video-solution--

3

# --explanation--

`Soy uruguaya.` - I'm Uruguayan. (feminine)

`Soy uruguayo.` - I'm Uruguayan. (masculine)

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_meet_julieta.mp3",
      "startTime": 1,
      "startTimestamp": 6.12,
      "finishTimestamp": 7.21
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
      "finishTime": 2.09,
      "dialogue": {
        "text": "Soy uruguaya.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.59
    }
  ]
}
```
