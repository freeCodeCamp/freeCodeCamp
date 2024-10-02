---
id: 657eebaa042b5cda6ec2dac9
title: Task 58
challengeType: 22
dashedName: task-58
---

<!-- (Audio) Sarah: Are you kidding? -->

# --description--

The expression `Are you kidding?` is used to express disbelief, surprise, or sometimes to confirm if someone is joking.

If your friend tells you they saw a dog riding a skateboard down the street, you might be surprised and say `Are you kidding?` to ask if they're really serious or just joking.

# --fillInTheBlank--

## --sentence--

`Sarah: Are you BLANK?`

## --blanks--

`kidding`

### --feedback--

This phrase is commonly used to express disbelief or surprise in response to a statement.

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
