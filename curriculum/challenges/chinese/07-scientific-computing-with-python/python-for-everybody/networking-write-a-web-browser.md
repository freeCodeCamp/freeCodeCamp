---
id: 5e7b9f0c0b6c005b0e76f073
challengeType: 11
videoId: zjyT9DaAjx4
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    What does the following code create?:

    ```py
    import socket

    mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    mysock.connect(('data.pr4e.org', 80))
    cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
    mysock.send(cmd)

    while True:
        data = mysock.recv(512)
        if len(data) < 1:
            break
        print(data.decode(),end='')
    mysock.close()
    ```

  answers:
    - |
        A simple web server.
    - |
        A simple email client.
    - |
        A simple todo list.
    - |
        A simple web browser.
  solution: 4
```

</section>
