---
id: 655b67f02eecf57fa75ceecf
title: Завдання 8
challengeType: 22
dashedName: task-8
---

<!-- (Audio) Sophie: That's important work. I'm helping our team learn how to stay safe online. -->

# --description--

`Stay` використовується для позначення перебування в певному статусі або стані. Його часто використовують в інструкціях або порадах щодо певного стану в певній ситуації. Наприклад:

`Stay safe online` (будьте обережними під час користування інтернетом)

`Stay calm during the test` (будьте спокійними під час написання тесту)

`Stay focused on your work` (зосередьтесь на своїй роботі)


# --fillInTheBlank--

## --sentence--

`That's important work. I'm _ our team learn how to _ safe online.`

## --blanks--

`helping`

### --feedback--

Це слово вказує на те, що Софі активно надає допомогу або підтримку своїй команді. Його вжито у формі герундія `-ing`.

---

`stay`

### --feedback--

Це слово використовується для того, щоб запропонувати підтримувати певний стан. В цьому випадку — бути обережними в інтернеті.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.3-1.mp3",
      "startTime": 1,
      "startTimestamp": 13.92,
      "finishTimestamp": 17.34
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
      "finishTime": 4.42,
      "dialogue": {
        "text": "That's important work. I'm helping our team learn how to stay safe online.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.92
    }
  ]
}
```
