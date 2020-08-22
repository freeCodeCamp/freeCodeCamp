---
id: 5e7b9f140b6c005b0e76f07d
title: 'Web Services: JSON'
challengeType: 11
isHidden: false
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
  text: |
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
  answers:
    - |
        Quincy
    - |
        Mrugesh
    - |
        001
    - |
        009
    - |
        [Error]
  solution: 2
```

</section>
