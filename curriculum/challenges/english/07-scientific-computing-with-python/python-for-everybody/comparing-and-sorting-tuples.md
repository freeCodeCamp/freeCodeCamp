---
id: 5e7b9f0b0b6c005b0e76f06d
title: Comparing and Sorting Tuples
challengeType: 11
videoId: dZXzBXUxxCs
bilibiliIds:
  aid: 931886163
  bvid: BV1HM4y1T7TK
  cid: 376533673
dashedName: comparing-and-sorting-tuples
---

# --description--

More resources:

\- <a href="https://www.youtube.com/watch?v=EhQxwzyT16E" target="_blank" rel="noopener noreferrer nofollow">Exercise</a>

# --question--

## --text--

### Original Code

```python
lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print(lst)
```

Which of the following code examples does the same thing as the original code above?

### Example A

```python
print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )
```

### Example B

```python
print( [ (k,v) for k,v in counts.items().sorted() ] )
```

### Example C

```python
print( sorted( [ (v,k) for k,v in counts.keys() ] ) )
```

### Example D

```python
print( [ (k,v) for k,v in counts.values().sort() ] )
```

[hidden]Which of the preceding code example does the same thing as the original code above?

## --answers--

Example A

---

Example B

---

Example C

---

Example D

## --video-solution--

1

