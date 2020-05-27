---
id: 5e7b9f170b6c005b0e76f087
title: Object Lifecycle
challengeType: 11
isHidden: true
isRequired: true
videoId: p1r3h_AMMIM
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
class PartyAnimal:<br>   x = 0<br>   name = ''<br>   def __init__(self, nam):<br>     self.name = nam<br>     print(self.name,'constructed')<br><br>   def party(self):<br>     self.x = self.x + 1<br>     print(self.name,'party count',self.x)<br>
<br>
q = PartyAnimal('Quincy')<br>
m = PartyAnimal('Miya')<br>
<br>
q.party()<br>
m.party()<br>
q.party()"
  answers:
    - 'Quincy constructed<br>Miya constructed<br>Quincy party count 1<br>Miya party count 2<br>Quincy party count 3'
    - 'Quincy constructed<br>Miya constructed<br>Quincy party count 1<br>Miya party count 1<br>Quincy party count 2'
    - 'Quincy constructed<br>Quincy party count 1<br>Quincy party count 2<br>Miya constructed<br>Miya party count 1'
  solution: 2
```

</section>
