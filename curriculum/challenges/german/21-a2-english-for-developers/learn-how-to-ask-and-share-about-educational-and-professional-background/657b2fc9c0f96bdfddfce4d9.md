---
id: 657b2fc9c0f96bdfddfce4d9
title: Task 86
challengeType: 22
dashedName: task-86
---

<!-- (Audio) Anna: I took a course in organizational psychology, and it piqued my interest in the workplace and employee dynamics. -->

# --description--

In this exercise, you will explore the phrase `pique one's interest`. This phrase means to stimulate or arouse someone's curiosity or interest in something. Es wird oft verwendet, wenn etwas deine Aufmerksamkeit erregt und du mehr darüber lernen möchtest. Neben dieser Phrase, wirst du die Lehrzeichen mit vertrauten Wörtern ausfüllen, die du bereits gelernt hast.

# --fillInTheBlank--

## --sentence--

`I _ a course in organizational _, and it _ my interest in the workplace and employee dynamics.`

## -blanks--

`took`

### --Feedback--

Dieses Wort bezieht sich auf die Teilnahme an einem Kurs oder der Beendigung eines Kurses.

---

`psychology`

### --Feedback--

Dieses Wort beschreibt in diesem Kontext die Untersuchung des Geistes und des Verhaltens, insbesondere an einem Arbeitsplatz.

---

`piqued`

### --feedback--

Dieses Wort bedeutet, Interesse oder Neugierde zu wecken oder zu stimulieren. Du solltest die korrekte einfache Vergangenheitsform verwenden.

# --scene--

```json
{
  "setup": {
    "background": "company2-parking.png",
    "characters": [
      {
        "character": "Anna",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.1-5.mp3",
      "startTime": 1,
      "startTimestamp": 13.14,
      "finishTimestamp": 18.62
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 6.48,
      "dialogue": {
        "text": "I took a course in organizational psychology and it piqued my interest in the workplace and employee dynamics.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 6.98
    }
  ]
}
```
