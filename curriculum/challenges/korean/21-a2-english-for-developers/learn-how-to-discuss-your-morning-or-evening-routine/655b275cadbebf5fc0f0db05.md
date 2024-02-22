---
id: 655b275cadbebf5fc0f0db05
title: "Task 81"
challengeType: 22
dashedName: task-81
---

<!-- (Audio) Maria: On Tuesdays, I learn Japanese. I take online lessons at 7. -->

# --description--

Focus on the specific actions and timing of Maria's activities on Tuesdays.

# --fillInTheBlank--

## --sentence--

`On Tuesdays, I learn Japanese. I _ _ lessons at 7.`

## --blanks--

`take`

### --feedback--

Used here to describe the action of participating in her lessons.

---

`online`

### --feedback--

Specifies how her lessons occur - in her case, in a virtual environment.

# --scene--

```json
{
  "setup": {
    "background": "company2-parking.png",
    "characters": [
      {
        "character": "Maria",
        "position": {"x":50,"y":0,"z":1.5},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 17.14,
      "finishTimestamp": 20.86
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 4.72,
      "dialogue": {
        "text": "On Tuesdays, I learn Japanese. I take online lessons at 7.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 5.22
    }
  ]
}
```
