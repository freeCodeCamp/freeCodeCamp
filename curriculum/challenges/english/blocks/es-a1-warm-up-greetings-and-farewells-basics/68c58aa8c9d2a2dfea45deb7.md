---
id: 68c58aa8c9d2a2dfea45deb7
title: Task 8
challengeType: 19
dashedName: task-8
---
<!-- (Audio) Elena: Hasta luego -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does the speaker say?

## --answers--

`Hasta luego`

---

`Adiós`

### --feedback--

This is a goodbye, but it's more final. The speaker uses a different phrase.

---

`Chao`

### --feedback--

This is also an informal way to say goodbye, but it's not the one in the audio.

---

`Hasta pronto`

### --feedback--

This means "See you soon", but the speaker says something slightly different.

## --video-solution--

1

# --explanation--

`Hasta luego` is a common way to say goodbye in Spanish.  
It translates to "See you later".

It’s used when you expect to see the person again, but not necessarily soon. For example:  

`Hasta luego, Marta` – See you later, Marta.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Elena",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_1.1.mp3",
      "startTime": 1,
      "startTimestamp": 5.68,
      "finishTimestamp": 6.64
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
      "finishTime": 1.96,
      "dialogue": {
        "text": "Hasta luego.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.46
    }
  ]
}
```
