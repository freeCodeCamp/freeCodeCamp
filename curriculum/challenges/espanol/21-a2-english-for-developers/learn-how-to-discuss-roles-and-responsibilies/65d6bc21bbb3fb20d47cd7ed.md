---
id: 65d6bc21bbb3fb20d47cd7ed
title: Task 42
challengeType: 22
dashedName: task-42
---

<!-- (Audio) Tom: I don't really know her, to be honest. What's her role?
-->

# --description--

Asking `What's her role?` is a way to find out about someone's job or position in a group or project. `Role` means the part or job someone does in a particular situation. For example, if someone's `role` at a school is a teacher, it means their job is to teach students.

# --fillInTheBlank--

## --sentence--

`I don't really know her, to be honest. What's BLANK BLANK?`

## --blanks--

`her`

### --feedback--

This word shows Tom is talking about a female person's job or part in something.

---

`role`

### --feedback--

This word means the job or position someone has in a situation.

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.98,
      "finishTimestamp": 18.96
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
      "finishTime": 3.98,
      "dialogue": {
        "text": "I don't really know much about her to be honest. What's her role?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.48
    }
  ]
}
```
