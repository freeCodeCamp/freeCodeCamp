---
id: 67c4bacefd5097faecca40d4
title: Task 22
challengeType: 19
dashedName: task-22
---

<!-- (Audio) Bob: True, but we could try working even more extra hours just for this project. Wouldn't that make a difference? -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Bob want to know?  

## --answers--

If they should cancel the project.  

### --feedback--

Bob is not asking about canceling the project.  

---

If working fewer hours would be better.  

### --feedback--

Bob is suggesting working more hours, not fewer.  

---

If the team has already solved the issue.  

### --feedback--

Bob is asking if his suggestion will help, not if the issue is already solved.  

---

If working extra hours will improve the situation.  

## --video-solution--

4  

# --explanation--

Using negatives in questions with auxiliary or modal verbs (such as `wouldn't`, `isn't`, `doesn't`), which require direct `yes`/`no` answers, suggests that the speaker expects the answer to be positive — Bob assumes, in this case, that working extra hours will help. Another example:

`Doesn't this plan seem like a good idea?` - The speaker expects the listener to agree that the plan is good.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
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
      "filename": "B1_12-1.mp3",
      "startTime": 1,
      "startTimestamp": 29,
      "finishTimestamp": 34.76
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
      "finishTime": 5.18,
      "dialogue": {
        "text": "True, but we could try working even more extra hours just for this project.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "startTime": 5.68,
      "finishTime": 6.76,
      "dialogue": {
        "text": "Wouldn't that make a difference?",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 7.26
    }
  ]
}
```
