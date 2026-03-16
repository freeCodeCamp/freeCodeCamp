---
id: 68dc74a6f1c8c46cfd4af3f4
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (Audio) Mateo: Hola, buenas tardes. -->

# --description--

In Spanish, greetings like `Buenos días`, `Buenas tardes`, and `Buenas noches` follow the rules of gender agreement between the adjective and the noun:

`Días` ("days") is a masculine noun, so the adjective is `Buenos`.

`Tardes` ("afternoons") and `noches` ("nights") are feminine nouns, so the adjective is `Buenas`.

| Time of Day  | Greeting         |
|--------------|------------------|
| Morning      | `Buenos días`    |
| Afternoon    | `Buenas tardes`  |
| Night        | `Buenas noches`  |

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Which greeting is Mateo using?

## --answers--

`Buenos días.`

### --feedback--

This greeting is used in the **morning**, not in the afternoon.

---

`Buenas noches.`

### --feedback--

This greeting is typically used **at night** or when going to bed.

---

`¡Buenas!`

### --feedback--

This informal greeting can be used at any time but doesn’t specifically mean "good afternoon."

---

`Buenas tardes.`

## --video-solution--

4

# --explanation--

The phrase `Buenas tardes` is used to greet someone from noon until sunset. 

It literally means “Good afternoon” or “Good evening”, depending on the time of day.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
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
      "filename": "ES_A1_spanish_meet_mateo.mp3",
      "startTime": 1,
      "startTimestamp": 0.45,
      "finishTimestamp": 2.11
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
      "finishTime": 2.66,
      "dialogue": {
        "text": "Hola, buenas tardes.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 3.16
    }
  ]
}
```
