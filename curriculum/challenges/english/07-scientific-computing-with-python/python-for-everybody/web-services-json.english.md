---
id: 5e7b9f140b6c005b0e76f07d
title: 'Web Services: JSON'
challengeType: 11
isHidden: true
isRequired: true
videoId: ZJE-U56BppM
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: "What will the following code print?:
<pre>import json<br>
<br>
data = '''<br>[<br>  { 'id' : '001',<br>    'x' : '2',<br>    'name' : 'Quincy'<br>  } ,<br>  { 'id' : '009',<br>    'x' : '7',<br>    'name' : 'Mrugesh'<br>  }<br>]'''<br>
<br>
info = json.loads(data)<br>
print(info[1]['name'])</pre>"
  answers:
    - 'Quincy'
    - 'Mrugesh'
    - '001'
    - '009'
    - '[Error]'
  solution: 2
```

</section>
