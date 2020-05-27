---
id: 5e7b9f0c0b6c005b0e76f073
title: 'Networking: Write a Web Browser'
challengeType: 11
isHidden: true
isRequired: true
videoId: zjyT9DaAjx4
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: "What does the following code create?
  <pre>
import socket<br>
<br>
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br>
mysock.connect(('data.pr4e.org', 80))<br>
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()<br>
mysock.send(cmd)<br>
<br>while True:<br>    data = mysock.recv(512)<br>    if len(data) < 1:<br>        break<br>    print(data.decode(),end='')<br><br>mysock.close()</pre>"
  answers:
    - 'simple web server'
    - 'simple email client'
    - 'simple todo list'
    - 'simple web browser'
  solution: 4
```

</section>
