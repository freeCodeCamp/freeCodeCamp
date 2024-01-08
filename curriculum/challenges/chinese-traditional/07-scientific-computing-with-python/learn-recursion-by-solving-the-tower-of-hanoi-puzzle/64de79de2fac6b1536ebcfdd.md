---
id: 64de79de2fac6b1536ebcfdd
title: Step 37
challengeType: 20
dashedName: step-37
---

# --description--

The iterative solution of Tower of Hanoi might seem complete, but change the number of disks to `4` and look at the output.

# --hints--

You should set `NUMBER_OF_DISKS` to 4.

```js
({ test: () => assert.equal(__userGlobals.get('NUMBER_OF_DISKS'), 4) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
NUMBER_OF_DISKS = 3
--fcc-editable-region--
number_of_moves = 2**NUMBER_OF_DISKS - 1
rods = {
    'A': list(range(NUMBER_OF_DISKS, 0, -1)),
    'B': [],
    'C': []
}

def make_allowed_move(rod1, rod2):    
    forward = False
    if not rods[rod2]:
        forward = True
    elif rods[rod1] and rods[rod1][-1] < rods[rod2][-1]:
        forward = True      
                
    if forward:
        print(f'Moving disk {rods[rod1][-1]} from {rod1} to {rod2}')
        rods[rod2].append(rods[rod1].pop())
    else:
        print(f'Moving disk {rods[rod2][-1]} from {rod2} to {rod1}')
        rods[rod1].append(rods[rod2].pop())
    
    # display our progress
    print(rods, '\n')

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods, '\n')
    for i in range(number_of_moves):
        remainder = (i + 1) % 3
        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')
            make_allowed_move(source, target)
        elif remainder == 2:
            print(f'Move {i + 1} allowed between {source} and {auxiliary}')
            make_allowed_move(source, auxiliary)
        elif remainder == 0:
            print(f'Move {i + 1} allowed between {auxiliary} and {target}')
            make_allowed_move(auxiliary, target)

# initiate call from source A to target C with auxiliary B
move(NUMBER_OF_DISKS, 'A', 'B', 'C')
```
