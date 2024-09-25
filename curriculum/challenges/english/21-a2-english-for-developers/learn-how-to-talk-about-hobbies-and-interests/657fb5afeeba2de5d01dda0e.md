---
id: 657fb5afeeba2de5d01dda0e
title: Task 79
challengeType: 19
dashedName: task-79
---

<!-- (Audio) Tom: Thanks for the invite, Sarah. I appreciate it, but I'm not really into sci-fi. -->

# --description--

Sometimes people invite their friends to events or activities they enjoy. How you respond to these invitations shows you interest or lack of interest in the event.

# --questions--

## --text--

How does Tom respond to Sarah's invitation to the sci-fi convention?

## --answers--

Accepts immediately

### --feedback--

Tom does not accept the invitation. He mentions his lack of interest in sci-fi.

---

Declines politely

---

Shows disinterest

### --feedback--

While Tom expresses a lack of interest, his response is more about declining the invitation politely rather than just showing disinterest.

---

Ignores the invitation

### --feedback--

Tom acknowledges the invitation and responds, so he does not ignore it.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 22.06,
      "finishTimestamp": 26.54
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
      "finishTime": 5.48,
      "dialogue": {
        "text": "Thanks for the invite, Sarah. I appreciate it, but I'm not really into sci-fi.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.98
    }
  ]
}
```
