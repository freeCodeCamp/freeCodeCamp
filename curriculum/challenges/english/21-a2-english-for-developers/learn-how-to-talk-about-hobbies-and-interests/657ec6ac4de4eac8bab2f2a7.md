---
id: 657ec6ac4de4eac8bab2f2a7
title: Task 39
challengeType: 22
dashedName: task-39
---

<!-- (Audio) Linda: Ok, it's a bike date, then. -->

# --description--

The word `date` can be used in different contexts. While it often refers to a romantic meeting between two people, it can also simply mean an appointment or a planned event between friends or colleagues. For example, saying `Let's set a date for our next meeting` uses `date` in a non-romantic way, referring to choosing a day for a meeting.

# --fillInTheBlank--

## --sentence--

`Ok, it's a BLANK BLANK, then.`

## --blanks--

`bike`

### --feedback--

This word specifies the type of activity planned, indicating it's an outing involving bicycles.

---

`date`

### --feedback--

This word refers to a scheduled meeting or event.

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
