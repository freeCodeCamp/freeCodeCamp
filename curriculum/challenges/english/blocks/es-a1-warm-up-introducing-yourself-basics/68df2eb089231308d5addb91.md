---
id: 68df2eb089231308d5addb91
title: Task 6
challengeType: 19
dashedName: task-6
lang: es
---

<!-- (audio) Mateo: Chilena. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What nationality is Mateo mentioning?

## --answers--

`Puertorriqueña`

### --feedback--

This refers to a woman from Puerto Rico.

---

`Mexicana`

### --feedback--

This refers to a woman from Mexico.

---

`Brazileña`

### --feedback--

This refers to a woman from Brazil.

---

`Chilena`

## --video-solution--

4

# --explanation--

`Chilena` – Chilean (feminine).

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_introducing_yourself_vocabulary.mp3",
      "startTime": 1,
      "startTimestamp": 14.16,
      "finishTimestamp": 15.23
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 2.12,
      "dialogue": {
        "text": "Chilena",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 2.62
    }
  ]
}
```
