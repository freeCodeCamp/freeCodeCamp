---
id: 657cbef9aa43ceba8af6feb4
title: Aufgabe 49
challengeType: 22
dashedName: task-49
---

<!-- (audio) Sophie: "I think she has a passion for technology and enjoys leading our team." -->

# --description--

Wenn du etwas sehr gerne tust, kannst du sagen, ich `enjoy` es. Es ist eine einfache Art auszudrücken, dass dich etwas glücklich macht.

Zum Beispiel kannst du sagen `I enjoy playing video games`, wenn dir das Spielen von Video Games Spaß mach. Im Dialog sagt uns Sophie etwas, was Maria bei ihrer Arbeit gerne macht.

# --fillInTheBlank--

## --sentence--

`I think she has a passion for technology and she _ leading our team.`

## -blanks--

`enjoys`

### --feedback--

Welches Wort würdest du verwenden um zu sagen, dass Maria glücklich ist, das Team zu führen? Es ist das gleiche Wort, das verwendet wird, wenn du Spaß hast oder gerne eine Aktivität machst.

# --blanks--

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
