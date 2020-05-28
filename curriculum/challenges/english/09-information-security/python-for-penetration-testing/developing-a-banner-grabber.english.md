---
id: 5ea9997bbec2e9bc47e94db3
title: Developing a Banner Grabber
challengeType: 11
isHidden: true
videoId: CeGW761BIsA
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks to complete the `banner` function below:

    ```py
    def banner(ip, port):
        s = socket.socket()
        s.____((ip, ____))
        print(s.recv(1024))
    ```

  answers:
    - |
      `connect`, `port`
    - |
      `getsockname`, `'1-1024'`
    - |
      `connect`, `int(port)`
  solution: 3
```

</section>

