---
id: 5e9a0a8e09c5df3cc3600eda
title: 加载数据和高级索引
challengeType: 11
videoId: tUdBZ7pF8Jg
bilibiliIds:
  aid: 720524642
  bvid: BV1xQ4y1r7mu
  cid: 409027117
dashedName: loading-data-and-advanced-indexing
---

# --question--

## --text--

给定一个名为 `data.txt` 的文件，其中包含以下内容：

<pre>
29,97,32,100,45
15,88,5,75,22
</pre>

哪段代码会生成下面的数组？

```py
[29. 32. 45. 15.  5. 22.]
```

## --answers--

```py
filedata = np.genfromtxt('data.txt', delimiter=',')
output = np.any(filedata < 50)

print(output)
```

---

```py
filedata = np.genfromtxt('data.txt', delimiter=',')
output = np.all(filedata < 50, axis=1)

print(output)
```

---

```py
filedata = np.genfromtxt('data.txt', delimiter=',')
output = filedata[filedata < 50]

print(output)
```

## --video-solution--

3

