---
id: 657dbdae2bd6f60bda3226cc
title: Aufgabe 78
challengeType: 22
dashedName: task-78
---

<!-- (audio) Tom: Tell me about our team meetings, Sophie. Do they happen every week? -->
<!-- Sophie: Yes, they do. We have meetings on Monday mornings. -->


# --description--

Wenn du wissen möchtest, wie oft etwas passiert, kannst du `every` verwenden, gefolgt von einer Zeitperiode wie `day,` `week,` oder `year.` In diesem Dialog fragt Tom nach der Häufigkeit der Teammeetings.

# --instructions--

Höre dir das Audio an, um die unteren Sätze zu vervollständigen.

# --fillInTheBlank--

## --sentence--

`Tell me about our team meetings, Sophie. Do they happen _ week?`

## -blanks--

`every`

### --feedback--

Tom fragt, ob die Meetings jede Woche stattfinden.


# --Szene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-4.mp3",
      "startTime": 1,
      "startTimestamp": 0.00,
      "finishTimestamp": 3.70
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 4.70,
      "dialogue": {
        "text": "Tell me about our team meetings, Sophie. Do they happen every week?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.20
    }
  ]
}
```
