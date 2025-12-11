---
id: 68c98887b9a4783bf6788700
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---
<!-- (Audio) Esteban: ES_A1_1.3 -->

# --description--

Now it's Esteban's turn to introduce himself.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

True or false: Esteban expects to see you tomorrow.

## --answers--

True

---

False

### --feedback--

Esteban says `Hasta mañana`.

## --video-solution--

1

# --explanation--

`Hasta mañana` means "See you tomorrow" in Spanish.  

When someone says this, it usually means they plan or expect to see you the next day. For example:  

`Hasta mañana, Juan.` – See you tomorrow, Juan.

# --scene--

```json
{
  "setup": {
    "background": "company3-boardmeeting.png",
    "characters": [
      {
        "character": "Esteban",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_greetings_in_the_evening.mp3",
      "startTime": 1,
      "startTimestamp": 0.2,
      "finishTimestamp": 7.11
    }
  },
  "commands": [
    {
      "character": "Esteban",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Esteban",
      "startTime": 1,
      "finishTime": 2.7,
      "dialogue": {
        "text": "Hola, buenas noches.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "startTime": 2.81,
      "finishTime": 3.93,
      "dialogue": {
        "text": "Me llamo Esteban.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "startTime": 4.29,
      "finishTime": 5.77,
      "dialogue": {
        "text": "Soy desarrollador.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "startTime": 6.15,
      "finishTime": 7.02,
      "dialogue": {
        "text": "Hasta mañana.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "startTime": 7.37,
      "finishTime": 7.91,
      "dialogue": {
        "text": "Chao.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 8.41
    }
  ]
}
```
