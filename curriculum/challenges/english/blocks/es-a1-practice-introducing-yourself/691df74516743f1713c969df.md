---
id: 691df74516743f1713c969df
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

<!-- (Audio) Luna: Hola, buenos días. Me llamo Luna. Soy científica de datos. Soy chilena. Tengo veintiocho años. Hasta luego. Adiós. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Luna say about herself?

## --answers--

She is a Chilean data scientist.

---

She is a Colombian doctor.

### --feedback--

Luna mentions a different nationality and profession.

---

She is a Spanish engineer.

### --feedback--

Luna mentions a different nationality and profession.

---

She is a teacher from Argentina.

### --feedback--

Luna mentions a different nationality and profession.

## --video-solution--

1

# --explanation--

The phrase `Soy científica de datos` uses the verb `ser` to describe Luna's profession and the adjective `científica` in female form to match her gender.

The phrase `Soy chilena` also uses the verb `ser` to indicate origin or nationality, and `chilena` is in female form too to match her gender.

Therefore, Luna is a Chilean data scientist.

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Luna",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_luna.mp3",
      "startTime": 1,
      "startTimestamp": 0.39,
      "finishTimestamp": 10.57
    }
  },
  "commands": [
    {
      "character": "Luna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Luna",
      "startTime": 1,
      "finishTime": 2.86,
      "dialogue": {
        "text": "Hola, buenos días.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "startTime": 3.01,
      "finishTime": 4.1,
      "dialogue": {
        "text": "Me llamo Luna.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "startTime": 4.34,
      "finishTime": 6.09,
      "dialogue": {
        "text": "Soy científica de datos.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "startTime": 6.24,
      "finishTime": 7.22,
      "dialogue": {
        "text": "Soy chilena.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "startTime": 7.48,
      "finishTime": 9.2,
      "dialogue": {
        "text": "Tengo veintiocho años.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "startTime": 9.4,
      "finishTime": 10.32,
      "dialogue": {
        "text": "Hasta luego.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "startTime": 10.49,
      "finishTime": 11.18,
      "dialogue": {
        "text": "Adiós.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 11.68
    }
  ]
}
```
