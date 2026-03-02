---
id: 68c5877f0c90f5b8cad8e2dd
title: Task 4
challengeType: 19
dashedName: task-4
lang: es
---

<!-- (Audio) Esteban: Buenas noches -->

# --description--

It's nighttime, and Esteban is using a typical Spanish greeting for this time of day.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What greeting does Esteban use to say "good night"?

## --answers--

`Buenos días.`

### --feedback--

This means "Good morning", and it's used at the start of the day.

---

`Buenas noches.`

---

`Buenas tardes.`

### --feedback--

This means "Good afternoon", and it's used in the middle of the day.

---

`¡Hola!`

### --feedback--

This means "Hi", which is a general greeting, but it's not what you hear in the audio.

## --video-solution--

2

# --explanation--

`Buenas noches` is a greeting used at night. It translates to "Good night".

You can use `Buenas noches` both when greeting someone in the evening **and** when greeting or saying goodbye to someone at night. For example, the sentence below works both to greet or say goodbye during the night:

`Buenas noches, señora López.` – Good night, Mrs. López. 

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
      "startTimestamp": 0.8,
      "finishTimestamp": 1.8
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
      "finishTime": 2,
      "dialogue": {
        "text": "Buenas noches.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 2.5
    }
  ]
}
```
