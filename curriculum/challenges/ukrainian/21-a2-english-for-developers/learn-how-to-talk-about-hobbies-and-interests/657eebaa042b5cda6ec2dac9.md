---
id: 657eebaa042b5cda6ec2dac9
title: Завдання 58
challengeType: 22
dashedName: task-58
---

<!-- (Audio) Sarah: Are you kidding? -->

# --description--

Вираз `Are you kidding?` використовують, щоб висловити сумніви, здивування або щоб підтвердити, чи хтось дійсно жартує.

Якщо ваш друг каже, що бачив собаку, яка катається на скейті, ви можете здивуватися і сказати `Are you kidding?`, щоб запитати, чи він дійсно говорить серйозно, чи просто жартує.

# --fillInTheBlank--

## --sentence--

`Sarah: Are you _?`

## --blanks--

`kidding`

### --feedback--

Цей вираз часто використовують, щоб виразити сумнів або здивування.

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
      "startTimestamp": 29.28,
      "finishTimestamp": 30.04
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
      "finishTime": 1.76,
      "dialogue": {
        "text": "Are you kidding?",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 2.26
    }
  ]
}
```
