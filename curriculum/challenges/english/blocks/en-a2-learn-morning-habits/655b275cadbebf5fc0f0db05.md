---
id: 655b275cadbebf5fc0f0db05
title: Task 82
challengeType: 22
dashedName: task-82
lang: en-US
---

<!-- (Audio) Maria: On Tuesdays, I learn Japanese. I take online lessons at 7. -->

# --description--

To `take` can mean different things depending on the situation. In the context of learning, to `take` means to attend or participate in a class or course. For example:

- `I take online lessons at 7.` - Here, `take` means to attend the lessons.

- `She is taking a programming course this semester.` - Here, `taking` means she is enrolled in and attending the course.

So, when you say `take lessons` or `take a course`, you are talking about joining or attending them, not physically taking something.

# --fillInTheBlank--

## --sentence--

`On Tuesdays, I learn Japanese. I BLANK BLANK lessons at 7.`

## --blanks--

`take`

### --feedback--

This verb describes the action of participating in the lessons.

---

`online`

### --feedback--

This word refers to a virtual environment.

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
