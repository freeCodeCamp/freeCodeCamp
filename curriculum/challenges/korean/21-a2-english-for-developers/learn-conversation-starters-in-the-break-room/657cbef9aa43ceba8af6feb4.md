---
id: 657cbef9aa43ceba8af6feb4
title: Task 49
challengeType: 22
dashedName: task-49
---

<!-- (audio) Sophie: "I think she has a passion for technology and enjoys leading our team." -->

# --description--

When you like doing something very much, you can say you `enjoy` it. It's a simple way to express that something makes you happy.

For example, you can say, `I enjoy playing video games` if playing video games is fun for you. In the dialogue, Sophie tells us something that Maria enjoys in her job.

# --fillInTheBlank--

## --sentence--

`I think she has a passion for technology and she _ leading our team.`

## --blanks--

`enjoys`

### --feedback--

What word would you use to say that Maria finds happiness in guiding the team? It's the same word used when you have fun or like doing an activity.

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
      "startTimestamp": 8.50,
      "finishTimestamp": 11.88
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
      "finishTime": 4.38,
      "dialogue": {
        "text": "I think she has a passion for technology and she enjoys leading our team.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.88
    }
  ]
}
```
