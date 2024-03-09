---
id: 657fff0bfb6a28f1d70fa9ef
title: Task 78
challengeType: 22
dashedName: task-78
---

<!-- (Audio) Tom: Thanks for the invite, Sarah. I appreciate it, but I'm not really into sci-fi. -->

# --description--

The expression `I appreciate it, but` is used to express gratitude for an offer or gesture while politely declining or stating a personal limitation or preference.

For example, if your friend offers to help you with coding challenge, and you're thankful but want to try it on your own first, you might say, `I appreciate it, but I want to give it a shot by myself first.`

# --fillInTheBlank--

## --sentence--

`Thanks for the invite, Sarah. I _ it, _ I'm not really into sci-fi.`

## --blanks--

`appreciate`

### --feedback--

This word is often used to show thankfulness or gratitude.

---

`but`

### --feedback--

This conjunction is used to introduce a phrase or clause contrasting with what has already been mentioned.

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
