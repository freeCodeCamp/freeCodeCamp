---
id: 5e7b9f0e0b6c005b0e76f07b
title: Web Services B
challengeType: 11
isRequired: true
videoId: _pZ0srbg7So
---

## Description
<section id='description'>

</section>

## Tests
<section id='tests'>

```yml
question:
  text: 'What is wrong with the following XML?
<pre>&ltperson&gt<br>
&ltname>Chuck&lt/name><br>
&ltphone type="intl"><br>  +1 734 303 4456<br>
&ltemail hide="yes" /><br>
&lt/person></pre>'
  answers:
    - 'Email tag is missing closing tag.'
    - 'Spacing will cause XML to be invalid.'
    - 'Phone tag is missing closing tag.'
    - 'Plain text should be encoded using UTF-8.'
  solution: 3
```

</section>
