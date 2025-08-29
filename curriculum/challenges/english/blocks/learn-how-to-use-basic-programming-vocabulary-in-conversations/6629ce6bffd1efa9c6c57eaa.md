---
id: 6629ce6bffd1efa9c6c57eaa
title: Task 1
challengeType: 22
dashedName: task-1
---

<!-- (Audio) Brian: Hey, Sophie. How's it going? -->

# --description--

The phrase `how's it going?` is a common way to ask someone how they are or what's happening in their life. It's often used as a friendly greeting.

For example, when you see an old friend, you may say `Hey, how's it going? I haven't seen you for a while!` This is a casual way to ask them about their life. If you want to ask them about a specific thing, like their new job, you can say `How's it going with your new job?`

# --fillInTheBlank--

## --sentence--

`Hey, Sophie. BLANK it BLANK?`

## --blanks--

`How's`

### --feedback--

This contraction is commonly used in informal greetings. Capitalize the first word.

---

`going`

### --feedback--

This word completes the common informal greeting asking about someone's general state.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "5.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.08
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 3.08,
      "dialogue": {
        "text": "Hey, Sophie. How's it going?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 3.58
    }
  ]
}
```
