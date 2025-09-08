---
id: 67c70abfeb7c6fb8cbd3fed7
title: Task 57
challengeType: 19
dashedName: task-57
---

<!-- (Audio) Maria: Hey James, can we talk about my latest meeting with Bob? -->

# --instructions--

Listen to the audio and answer the question below.  

# --questions--

## --text--

What does Maria want to discuss with James?  

## --answers--

Bob's schedule for the week.  

### --feedback--

Maria does not mention Bob's schedule.  

---

Her most recent meeting with Bob.  

---

A future project deadline.  

### --feedback--

Maria does not mention a deadline, only her meeting with Bob.  

---

The client's budget request.  

### --feedback--

Maria does not refer to a client request in this sentence.  

## --video-solution--

2  

# --explanation--

`Can we talk about...` is used to introduce a topic for discussion. It is a polite way to request a conversation about something important. For example:

`Can we talk about the changes to the project timeline?` - This means the speaker wants to discuss the project timeline adjustments.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-2.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.94
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
      "finishTime": 3.94,
      "dialogue": {
        "text": "Hey James, can we talk about my latest meeting with Bob?",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 4.44
    }
  ]
}
```
