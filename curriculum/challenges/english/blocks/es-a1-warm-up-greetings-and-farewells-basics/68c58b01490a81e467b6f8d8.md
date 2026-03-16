---
id: 68c58b01490a81e467b6f8d8
title: Task 9
challengeType: 19
dashedName: task-9
lang: es
---
<!-- (Audio) Esteban: Hasta mañana -->

# --description--

Esteban is saying goodbye, but he plans to see you tomorrow. 

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What phrase does Esteban use to say "see you tomorrow"?

## --answers--

`Hasta mañana.`

---

`Hasta luego.`

### --feedback--

This means "See you later", but Esteban says something more specific.

---

`Hasta pronto.`

### --feedback--

This means "See you soon", but it's not what Esteban says.

---

`Adiós.`

### --feedback--

This is a general goodbye, not the phrase used in the audio.

## --video-solution--

1

# --explanation--

`Hasta mañana` is a way to say goodbye when you plan to see the person the next day.  It translates to "See you tomorrow". For example:  

`Hasta mañana, Camila.` – See you tomorrow, Camila.

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
      "startTimestamp": 5.35,
      "finishTimestamp": 6.22
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
      "finishTime": 1.87,
      "dialogue": {
        "text": "Hasta mañana.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 2.37
    }
  ]
}
```
