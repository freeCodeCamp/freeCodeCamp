---
id: 683d4ae3cbcc8c94e78aade1
title: Task 19
challengeType: 19
dashedName: task-19
---

<!-- (Audio) Bob: Exactly, it's in the back, next to the emergency exit. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Bob explaining?

## --answers--

That the emergency exit is blocked.

### --feedback--

Bob doesn't say the exit is blocked - he just mentions its location.

---

That the back door needs a new lock.

### --feedback--

Bob doesn’t mention anything about locks or a back door needing repairs.

---

That the server room needs to be cleaned.

### --feedback--

There is no mention of cleaning in Bob’s sentence.

---

That something is located near the emergency exit.

## --video-solution--

4

# --explanation--

Bob says, `Exactly, it's in the back, next to the emergency exit.` This means he is confirming the location of something - right beside the emergency exit.

He doesn't talk about repairs, cleaning, or problems.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_22-1.mp3",
      "startTime": 1,
      "startTimestamp": 16.4,
      "finishTimestamp": 19.22
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 3.82,
      "dialogue": {
        "text": "Exactly. It's in the back, next to the emergency exit.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 4.32
    }
  ]
}
```
