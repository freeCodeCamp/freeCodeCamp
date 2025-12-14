---
id: 69050330908fe2245936bf21
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---

<!-- (Audio) Julieta: Soy estratega de marketing. -->

# --description--

The verb `ser` is used to express the identity, profession, or nationality. 

As you have seen in previous lessons, the structure is:

`Soy` + name.

`Soy` + profession.

`Soy` + nationality.

Julieta is saying her profession.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Julieta's profession?

## --answers--

`Científica de datos`

### --feedback--

This profession focuses on data and analytics. It's not what Julieta mentions in the audio.

---

`Estratega de marketing`

---

`Ingeniero de software`

### --feedback--

This profession refers to someone who designs and builds software.

---

`Arquitecto`

### --feedback--

This profession involves designing buildings, which is not related to what Julieta mentioned.

## --video-solution--

2

# --explanation--

Julieta says `Soy estratega de marketing`, which means "I'm a marketing strategist".

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
      "startTimestamp": 4.05,
      "finishTimestamp": 5.9
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
      "finishTime": 2.85,
      "dialogue": {
        "text": "Soy estratega de marketing.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 3.35
    }
  ]
}
```
