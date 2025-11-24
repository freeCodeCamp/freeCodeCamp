---
id: 6557dc1aa6be93c1eb4e9efb
title: Task 29
challengeType: 19
dashedName: task-29
lang: en-US
---

<!-- (Audio) Sarah: Anyway, before leaving for work, I like to check my emails and messages to see if there are any urgent updates from the team. -->

# --description--

The word `if` means "whether or not". For example:

`She checks her emails to see if there are any urgent updates.` - This means she is looking to find out whether updates exist.

`If` can also be part of a conditional statement, which shows a possible situation and its result. For example:

`If there are urgent updates, I will reply immediately.` - This means replying depends on the condition of having urgent updates.

# --questions--

## --text--

What does Sarah imply by using `if` in her statement about checking emails and messages?

## --answers--

She always finds urgent updates from her team.

### --feedback--

`If` doesn't suggest certainty of finding urgent updates.

---

Sometimes there are urgent updates, sometimes not.

---

She never checks her emails and messages.

### --feedback--

Sarah actually states that she does check her emails and messages.

---

Checking emails is not part of her routine.

### --feedback--

Sarah mentions that checking emails and messages is part of her routine.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.2-1.mp3",
      "startTime": 1,
      "startTimestamp": 55.08,
      "finishTimestamp": 60.78
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
      "finishTime": 6.70,
      "dialogue": {
        "text": "Anyway, before leaving for work, I like to check my emails and messages to see if there are any urgent updates from the team.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 7.20
    }
  ]
}
```
