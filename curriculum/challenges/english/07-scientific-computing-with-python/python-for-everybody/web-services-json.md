---
id: 5e7b9f140b6c005b0e76f07d
title: 'Web Services: JSON'
challengeType: 11
videoId: ZJE-U56BppM
---

# --question--

## --text--

What will the following code print?:

```python
import json
data = '''
  [
    { 'id' : '001',
      'x' : '2',
     'name' : 'Quincy'
    } ,
    { 'id' : '009',
      'x' : '7',
      'name' : 'Mrugesh'
    }
  ]
'''
info = json.loads(data)
print(info[1]['name'])
```

## --answers--

<pre>Quincy</pre>

---

<pre>Mrugesh</pre>

---

<pre>001</pre>

---

<pre>009</pre>

---

<pre>[Error]</pre>

## --video-solution--

2

