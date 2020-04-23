---
id: 5e7b9f0b0b6c005b0e76f06f
title: 'Regular Expressions: Matching and Extracting Data'
challengeType: 11
isRequired: true
videoId: LaCZnTbQGkE
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: "What will the following program print:
<pre>
import re<br>
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'<br>
lst = re.findall('\\S+@\\S+', s)<br>
print(lst)</pre>"
  answers:
    - "['csev@umich.edu', 'cwen@iupui.edu']"
    - "['csev@umich.edu']"
    - "['umich.edu', 'iupui.edu']"
    - "['csev@', 'cwen@']"
  solution: 1
```

</section>
