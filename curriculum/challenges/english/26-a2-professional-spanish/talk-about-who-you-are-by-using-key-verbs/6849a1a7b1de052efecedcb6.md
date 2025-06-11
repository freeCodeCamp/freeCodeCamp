---
id: 6849a1a7b1de052efecedcb6
title: Task 12
challengeType: 19
dashedName: task-12
---

<!--  (Audio) Camila: Soy Colombiana y soy de Cali. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

In what city was Camila born?

## --answers--

`Bogotá`

### --feedback--

Camila does not mention `Bogotá` as her city of origin.

---

`Medellín`

### --feedback--

Camila does not mention `Medellín` as her city of origin.

---

`Cali`

---

`Barranquilla`

### --feedback--

Camila does not mention `Barranquilla` as her city of origin.

## --video-solution--

3

# --explanation--

The phrase `soy de` means "I am from". This is often used to indicate one's place of origin. For example:

`Soy de Madrid.` - I am from Madrid.

Therefore, `Cali` is the city where Camila was born.

# --scene--

```json
{
  "setup": {
    "background": "company2-reception.png",
    "characters": [
      {
        "character": "Camila",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A2_1.1.mp3",
      "startTime": 1,
      "startTimestamp": 6.86,
      "finishTimestamp": 9.3
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
      "finishTime": 3.44,
      "dialogue": {
        "text": "Soy colombiana y soy de Cali.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 3.94
    }
  ]
}
```
