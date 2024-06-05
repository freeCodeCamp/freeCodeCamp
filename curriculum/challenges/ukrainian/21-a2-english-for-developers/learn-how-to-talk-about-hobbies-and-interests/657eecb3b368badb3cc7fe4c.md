---
id: 657eecb3b368badb3cc7fe4c
title: Завдання 60
challengeType: 22
dashedName: task-60
---

<!-- (Audio) Sarah: I go to at least one convention every year. It's the best moment of the year for me. -->

# --description--

Вираз `at least` вказує на мінімальну кількість або число. Тобто не менше за цю кількість.

Наприклад, якщо ви кажете `I study English for at least 30 minutes every day`, значить ви приділяєте принаймні 30 хвилин на вивчення англійської мови щодня.

# --fillInTheBlank--

## --sentence--

`I go to _ _ one convention every year. It's the best moment of the year for me.`

## --blanks--

`at`

### --feedback--

Це слово використовується як прийменник у фразі, що вказує на мінімальну кількість.

---

`least`

### --feedback--

Це друге слово з виразу, що вказує на мінімальну кількість.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-3.mp3",
      "startTime": 1,
      "startTimestamp": 30.46,
      "finishTimestamp": 34.22
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 4.76,
      "dialogue": {
        "text": "I go to at least one convention every year. It's the best moment of the year for me.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 5.26
    }
  ]
}
```
