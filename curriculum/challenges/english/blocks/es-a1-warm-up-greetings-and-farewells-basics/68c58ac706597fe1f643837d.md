---
id: 68c58ac706597fe1f643837d
title: Task 8
challengeType: 19
dashedName: task-8
lang: es
---
<!-- (Audio) Camila: Hasta pronto -->

# --description--

Camila is saying goodbye, and she hopes to see you soon. This phrase is warm and friendly.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What phrase does Camila use to say "see you soon"?

## --answers--

`Hasta luego.`

### --feedback--

This means "See you later", but it's not exactly what the speaker says.

---

`Hasta pronto.`

---

`Adiós.`

### --feedback--

This is a general goodbye, but the speaker uses a different phrase.

---

`Chao.`

### --feedback--

This is an informal way to say goodbye, but it's not the word you hear in the audio.

## --video-solution--

2

# --explanation--

`Hasta pronto` means "See you soon". It's used when you expect to see someone again in the near future.

It's similar to `Hasta luego` ("See you later"), but `hasta pronto` suggests a shorter wait, usually sooner rather than later. For example:

`Hasta pronto, Esteban.` – See you soon, Esteban.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_greetings_in_the_afternoon.mp3",
      "startTime": 1,
      "startTimestamp": 6.16,
      "finishTimestamp": 7.15
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
      "finishTime": 1.99,
      "dialogue": {
        "text": "Hasta pronto.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 2.49
    }
  ]
}
```
