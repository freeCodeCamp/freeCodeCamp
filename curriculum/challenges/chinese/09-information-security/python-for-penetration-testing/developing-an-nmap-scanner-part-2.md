---
id: 5ea9997bbec2e9bc47e94db2
title: Developing an Nmap Scanner part 2
challengeType: 11
isHidden: false
videoId: a98PscnUsTg
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Which of the following allows you to scan for UDP ports between 21 to 443?

  answers:
    - |
      `.scan(ip_addr, '21-443', '-v -sU')`
    - |
      `.scan(ip_addr, '1-1024', '-v -sS')`
    - |
      `.scan(ip_addr, '21-443', '-v -sS')`
  solution: 1
```

</section>

