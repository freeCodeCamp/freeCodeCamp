---
id: 657ec6ac4de4eac8bab2f2a7
title: Завдання 39
challengeType: 22
dashedName: task-39
---

<!-- (Audio) Linda: Ok, it's a bike date, then. -->

# --description--

Слово `date` можна використовувати в різних контекстах. Хоча часто це стосується романтичного побачення, воно також може означати запис або заплановану зустріч між друзями чи колегами. Наприклад, в `Let's set a date for our next meeting` використано `date` не в романтичному плані, а вказуючи на запланований час зустрічі.

# --fillInTheBlank--

## --sentence--

`Ok, it's a _ _, then.`

## --blanks--

`bike`

### --feedback--

Це слово вказує на заплановану активність (їзда на велосипедах).

---

`date`

### --feedback--

Це слово стосується запланованої зустрічі або події.

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Linda",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-2.mp3",
      "startTime": 1,
      "startTimestamp": 44.64,
      "finishTimestamp": 46.58
    }
  },
  "commands": [
    {
      "character": "Linda",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Linda",
      "startTime": 1,
      "finishTime": 2.94,
      "dialogue": {
        "text": "Okay, it's a bike date, then.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 3.44
    }
  ]
}
```
