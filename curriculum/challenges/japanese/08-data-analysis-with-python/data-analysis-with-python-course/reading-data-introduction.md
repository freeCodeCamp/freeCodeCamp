---
id: 5e9a093a74c4063ca6f7c161
title: データの読み取り入門
challengeType: 11
videoId: cDnt02BcHng
bilibiliIds:
  aid: 548023524
  bvid: BV1Nq4y1K7iV
  cid: 409020187
dashedName: reading-data-introduction
---

# --description--

*動画で説明しているように、notebooks.ai を使用する代わりに Google Colab を使用することができます。*

その他のリソース:

-  <a href="https://github.com/krishnatray/RDP-Reading-Data-with-Python-and-Pandas" target="_blank" rel="noopener noreferrer nofollow">GitHub のノート</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Google Colab を使用して GitHub からノートを開く方法</a>

# --question--

## --text--

次の内容を含む `certificates.csv` という名前のファイルが与えられます。

<pre>
Name$Certificates$Time (in months)
Tom$8$16
Kris$2$5
Ahmad$5$9
Beau$6$12
</pre>

次のコードで、不足している引数部分の空欄を埋めてください。

```py
import csv

with open(__A__, 'r') as fp:
    reader = csv.reader(fp, delimiter=__B__)
    next(reader)
    for index, values in enumerate(reader):
        name, certs_num, months_num = values
        print(f"{name} earned {__C__} certificates in {months_num} months")
```

## --answers--

A: `'certificates.csv'`

B: `'-'`

C: `values`

---

A: `'certificates.csv'`

B: `'$'`

C: `certs_num`

---

A: `'certificates'`

B: `'$'`

C: `certs_num`

## --video-solution--

2

