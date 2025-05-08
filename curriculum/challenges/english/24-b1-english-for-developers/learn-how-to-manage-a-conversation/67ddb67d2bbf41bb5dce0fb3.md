---
id: 67ddb67d2bbf41bb5dce0fb3
title: Task 36
challengeType: 19
dashedName: task-36
---

<!-- (Audio) James: No problem. Talk to you later. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What can we conclude from James's answer?

## --answers--

He needs to solve a problem first.

### --feedback--

James does not say anything about another issue.

---

He is ending the conversation in a friendly way.

---

He wants to schedule a meeting now.

### --feedback--

There's no mention of scheduling anything.

---

He is asking for more help.

### --feedback--

James is not making a request.

## --video-solution--

2

# --explanation--

In conversation, you often omit words when the meaning is clear. In `Talk to you later`, the subject `I'll` (contraction of `I will`) is left out. The full sentence would be `I'll talk to you later`. This kind of omission is common in casual speech. Another example:

`See you tomorrow!` - This is a shorter way of saying `I'll see you tomorrow`.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "James",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-1.mp3",
      "startTime": 1,
      "startTimestamp": 44.74,
      "finishTimestamp": 46.5
    }
  },
  "commands": [
    {
      "character": "James",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "James",
      "startTime": 1,
      "finishTime": 2.76,
      "dialogue": {
        "text": "No problem. Talk to you later.",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 3.26
    }
  ]
}
```
