---
id: 657cfddfaca4b58b1279aaf9
title: Task 72
challengeType: 22
dashedName: task-72
---

<!-- (audio) Sophie: `Maria thinks challenges are positive. She encourages us to find solutions together.` -->

# --description--

To `encourage` means to give support, confidence, or hope to someone. It's what a good coach does to motivate their team to do their best.

# --instructions--

Listen to the audio to complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Maria thinks challenges are positive. She BLANK us to find solutions together.`

## --blanks--

`encourages`

### --feedback--

Remember to conjugate the verb. The verb you need is about motivating or inspiring someone to do something. It's similar to cheering someone on. 

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-3.mp3",
      "startTime": 1,
      "startTimestamp": 41.96,
      "finishTimestamp": 46.26
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
      "finishTime": 5.30,
      "dialogue": {
        "text": "Maria thinks challenges are positive. She encourages us to find solutions together.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 5.80
    }
  ]
}
```
