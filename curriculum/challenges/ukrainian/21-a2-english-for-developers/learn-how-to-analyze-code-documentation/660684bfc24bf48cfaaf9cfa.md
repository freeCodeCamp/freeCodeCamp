---
id: 660684bfc24bf48cfaaf9cfa
title: Завдання 8
challengeType: 22
dashedName: task-8
---

<!-- (Audio) Sophie: Thanks, I'll give it a shot. -->

# --description--

`Give it a shot` означає спробувати щось зробити. Це те ж саме, що й казати `Try it`.

Наприклад, ваш друг не горить бажанням відвідувати курси з програмування, оскільки вони можуть бути важкими. Ви можете сказати `Why not give it a shot? You might enjoy it more than you think.`, щоб підбадьорити його.

# --fillInTheBlank--

## --sentence--

`Thanks, _ give it a _.`

## --blanks--

`I'll`

### --feedback--

Скорочена форма `I will`. Софі каже, що вирішила зробити так, як запропонував Браян.

---

`shot`

### --feedback--

У цьому контексті це означає спробувати щось зробити. Софі каже, що спробує зробити те, що запропонував Браян.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "7.3-1.mp3",
      "startTime": 1,
      "startTimestamp": 24.86,
      "finishTimestamp": 26.28
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 2.42,
      "dialogue": {
        "text": "Thanks, I'll give it a shot.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 2.92
    }
  ]
}
```
