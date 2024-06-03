---
id: 65f6fc00be7facffe0898c6d
title: Task 43
challengeType: 22
dashedName: task-43
---

<!-- (Audio) The whole dialogue -->

# --description--

This task will help you summarize the dialogue using keywords from it. 

# --fillInTheBlank--

## --sentence--

`Sophie has _ an issue in the code and needs Brian's _ to figure it out. They plan to _ the symptoms and investigate what's happening, especially with _ data sets. By the end, they expect to have a _ understanding of the problem.`

## --blanks--

`encountered`

### --feedback--

Sophie uses this word to describe finding a problem in the code.

---

`help`

### --feedback--

Sophie is seeking assistance from Brian.

---

`understand`

### --feedback--

Brian suggests starting by understanding the issue's symptoms.

---

`large`

### --feedback--

Sophie mentions the problem may occur with a lot of data sets.

---

`clearer`

### --feedback--

Brian believes that through investigation, they will gain a better understanding.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sophie",
        "position": { "x": -25, "y": 0, "z": 1 }
      },
      {
        "character": "Brian",
        "position": { "x": 125, "y": 0, "z": 1 }
      }
    ],
    "audio": {
      "filename": "6.3-3.mp3",
      "startTime": 1
    },
    "alwaysShowDialogue": true
  },
  "commands": [
    {
      "character": "Sophie",
      "position": { "x": 25, "y": 0, "z": 1 },
      "startTime": 0
    },
    {
      "character": "Brian",
      "position": { "x": 70, "y": 0, "z": 1 },
      "startTime": 0.5
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 5.92,
      "dialogue": {
        "text": "Brian, I've encountered an issue in the code, and I can't quite pinpoint what's causing it.",
        "align": "left"
      }
    },
    {
      "character": "Sophie",
      "startTime": 6.22,
      "finishTime": 8.6,
      "dialogue": {
        "text": "I may need a second pair of eyes to help me out.",
        "align": "left"
      }
    },
    {
      "character": "Brian",
      "startTime": 8.98,
      "finishTime": 11.76,
      "dialogue": {
        "text": "No problem, Sophie. I can definitely work on that with you.",
        "align": "right"
      }
    },
    {
      "character": "Brian",
      "startTime": 11.86,
      "finishTime": 14.26,
      "dialogue": {
        "text": "Let's start by understanding the symptoms of the issue.",
        "align": "right"
      }
    },
    {
      "character": "Sophie",
      "startTime": 15.08,
      "finishTime": 18.44,
      "dialogue": {
        "text": "I've noticed that the issue may occur when we handle large data sets.",
        "align": "left"
      }
    },
    {
      "character": "Sophie",
      "startTime": 18.92,
      "finishTime": 21.54,
      "dialogue": {
        "text": "It could be a performance bottleneck, but I should confirm it.",
        "align": "left"
      }
    },
    {
      "character": "Brian",
      "startTime": 21.94,
      "finishTime": 25.22,
      "dialogue": {
        "text": "Understood. We can investigate this together, and by the end of it,",
        "align": "right"
      }
    },
    {
      "character": "Brian",
      "startTime": 25.34,
      "finishTime": 27.28,
      "dialogue": {
        "text": "we should have a clearer picture of what's happening.",
        "align": "right"
      }
    },
    {
      "character": "Brian",
      "position": { "x": 125, "y": 0, "z": 1 },
      "startTime": 27.78
    },
    {
      "character": "Sophie",
      "position": { "x": -25, "y": 0, "z": 1 },
      "startTime": 28.28
    }
  ]
}
```
