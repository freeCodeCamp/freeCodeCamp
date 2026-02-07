---
id: 68dc7500da504f7042474b20
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (Audio) Mateo: whole audio -->

# --description--

In the last Learn block, you practiced phrases for greeting someone, introducing yourself, your profession, nationality, age, and farewell at different times of the day.

Now Mateo mentions all these phrases again. Listen carefully and pay attention to his pronunciation.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Which greeting is Mateo using to greet you?

## --answers--

`Buenos días`

### --feedback--

This greeting is used in the morning, not at night.

---

`Buenas tardes`

### --feedback--

This is an afternoon greeting, but Mateo is greeting at night.

---

`Buenas noches`

---

`¡Hola! ¿Qué tal?`

### --feedback--

This is a general greeting, but Mateo uses a more specific one for nighttime.

## --video-solution--

3

# --explanation--

`Buenas noches` is the standard Spanish greeting used during the night. This is the greeting that Mateo is using.

`Buenos días` is used in the morning, and `Buenas tardes` in the afternoon.

`¡Hola! ¿Qué tal?` is an informal way of saying "Hi, how are you?" at any time of day, but it does not specify the time like `Buenas noches`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
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
      "filename": "ES_A1_spanish_meet_mateo_practice.mp3",
      "startTime": 1,
      "startTimestamp": 0.31,
      "finishTimestamp": 8.88
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
      "finishTime": 2.67,
      "dialogue": {
        "text": "Hola, buenas noches.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 2.81,
      "finishTime": 3.79,
      "dialogue": {
        "text": "Me llamo Mateo.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 4.22,
      "finishTime": 5.75,
      "dialogue": {
        "text": "Soy ingeniero de software.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 6.11,
      "finishTime": 7.5,
      "dialogue": {
        "text": "Soy puertorriqueño.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 7.93,
      "finishTime": 9.57,
      "dialogue": {
        "text": "Tengo 25 años.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 10.07
    }
  ]
}
```

