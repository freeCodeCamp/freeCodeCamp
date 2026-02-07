---
id: 68df28fd4c9350f60d677e77
title: Task 4
challengeType: 19
dashedName: task-4
lang: es
---

<!-- (audio) Mateo: Uruguaya -->

# --description--

In Spanish, nationalities usually come from the name of the country and change based on gender. Here is a simple pattern that works for many countries:

| Country    | Masculine      | Feminine      |
|-------------|----------------|---------------|
| Mexico    | `mexicano`     | `mexicana`    |
| Chile     | `chileno`      | `chilena`     |
| Colombia  | `colombiano`   | `colombiana`  |
| Uruguay   | `uruguayo`     | `uruguaya`    |


**Did you notice the pattern?** 
In the examples above, all masculine forms end in `-o` and feminine forms ends in `-a`. This is a common pattern, but there are other variations too. This is just a starting point, and you will discover more forms as you continue learning.

Mateo is now mentioning a nationality. 

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What nationality is Mateo mentioning?

## --answers--

`Uruguaya`

---

`Puertorriqueña`

### --feedback--

This refers to a woman from Puerto Rico.

---

`Mexicana`

### --feedback--

This refers to a woman from Mexico.

---

`Colombiano`

### --feedback--

This refers to a man from Colombia.

## --video-solution--

1

# --explanation--

`Uruguaya` refers to a woman from Uruguay. In Spanish, nationalities usually follow a gender-based pattern. For example:

- `Uruguaya` – Uruguayan (feminine).

- `Uruguayo` – Uruguayan (masculine).

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_introducing_yourself_vocabulary.mp3",
      "startTime": 1,
      "startTimestamp": 20.48,
      "finishTimestamp": 21.6
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
      "finishTime": 2.12,
      "dialogue": {
        "text": "Uruguaya",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 2.62
    }
  ]
}
```
