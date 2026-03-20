---
id: 69389800ad6b2ca59892ca90
title: Task 7
challengeType: 19
dashedName: task-7
lang: es
---

<!-- (Audio) Julieta: Hola, buenas noches. Me llamo Julieta. Soy estratega de marketing. Soy uruguaya. Tengo 36 años. Hasta mañana. Chau. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

How old is Julieta, and when is she planning to see you again?

## --answers--

Julieta is 30 years old and will see you next week.

### --feedback--

Julieta says her age and also uses a farewell that refers to the next day.

---

Julieta is 36 years old and will see you tomorrow.

---

Julieta is 36 years old and is saying goodbye forever.

### --feedback--

The farewell `Hasta mañana` is not a permanent goodbye.

---

Julieta is 26 years old and will see me tonight.

### --feedback--

Neither the age nor the farewell match what Julieta says.

## --video-solution--

2

# --explanation--

`Tengo treinta y seis años` means "I'm thirty-six years old".

The phrase `Hasta mañana` is a common way to say that Julieta plans to see you tomorrow, indicating the next meeting is the following day.

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
      "startTimestamp": 0.61,
      "finishTimestamp": 11.25
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
      "finishTime": 2.83,
      "dialogue": {
        "text": "Hola, buenas noches.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.99,
      "finishTime": 4.23,
      "dialogue": {
        "text": "Me llamo Julieta.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 4.44,
      "finishTime": 6.29,
      "dialogue": {
        "text": "Soy estratega de marketing.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 6.51,
      "finishTime": 7.6,
      "dialogue": {
        "text": "Soy uruguaya.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 7.78,
      "finishTime": 9.55,
      "dialogue": {
        "text": "Tengo 36 años.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 9.72,
      "finishTime": 10.82,
      "dialogue": {
        "text": "Hasta mañana.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 11,
      "finishTime": 11.64,
      "dialogue": {
        "text": "Chau.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 12.14
    }
  ]
}
```
