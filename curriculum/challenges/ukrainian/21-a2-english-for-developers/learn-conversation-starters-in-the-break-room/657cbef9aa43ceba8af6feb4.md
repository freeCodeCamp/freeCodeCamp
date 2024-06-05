---
id: 657cbef9aa43ceba8af6feb4
title: Завдання 49
challengeType: 22
dashedName: task-49
---

<!-- (audio) Sophie: "I think she has a passion for technology and enjoys leading our team." -->

# --description--

Якщо вам дуже подобається щось робити, ви можете використати слово `enjoy`. Таким простим способом можна сказати, що щось робить вас щасливими.

Наприклад, ви можете сказати `I enjoy playing video games`, якщо ви насолоджуєтесь відеоіграми. У діалозі Софі розповідає, що подобається Марії в її роботі.

# --fillInTheBlank--

## --sentence--

`I think she has a passion for technology and she _ leading our team.`

## --blanks--

`enjoys`

### --feedback--

Як би ви сказали, що Марії дуже подобається керувати командою? Таким же самим словом ви описуєте, що вам дуже подобається щось робити.

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
