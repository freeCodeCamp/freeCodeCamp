---
id: 657b1a27dc6daf6ffd52ff1f
title: Task 29
challengeType: 19
dashedName: task-29
---

<!-- (Audio) Anna: Excellent! Can you share details about your educational background? Were you trained in a specific field?
Second Candidate: I have a master's degree in computer science. -->

# --description--

In English, the noun suffixed with `'s` followed by a second noun structure is used to show possession or belonging. If the first noun is singular, as in `Sarah's laptop`, it indicates that the laptop belongs to Sarah. However, if the first noun is plural, the structure changes to noun suffixed with `'`, as in `teachers' office`, indicating an office for teachers.

# --questions--

## --text--

What does `master's degree` in the context of the dialogue refer to?

## --answers--

A degree for school teachers

### --feedback--

`Master's degree` refers to an advanced academic degree, not specifically for teachers.

---

A primary level educational degree

### --feedback--

`Master's degree` is a higher education qualification, beyond the primary level.

---

A degree in mastering skills

### --feedback--

While it implies expertise, `master's degree` specifically refers to an academic qualification.

---

An advanced academic degree

## --video-solution--

4

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Anna",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      },
      {
        "character": "Second Candidate",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.1-2.mp3",
      "startTime": 1,
      "startTimestamp": 43.44,
      "finishTimestamp": 51.78
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 5.72,
      "dialogue": {
        "text": "Excellent. Can you share details about your educational background? Were you trained in a specific field?",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 6
    },
    {
      "character": "Second Candidate",
      "opacity": 1,
      "startTime": 6
    },
    {
      "character": "Second Candidate",
      "startTime": 6.36,
      "finishTime": 9.34,
      "dialogue": {
        "text": "Yes. I have a master's degree in computer science.",
        "align": "center"
      }
    },
    {
      "character": "Second Candidate",
      "opacity": 0,
      "startTime": 9.84
    }
  ]
}
```
