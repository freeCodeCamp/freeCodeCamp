---
id: 5e9a093a74c4063ca6f7c161
title: Introdução à leitura de dados
challengeType: 11
videoId: cDnt02BcHng
bilibiliIds:
  aid: 548023524
  bvid: BV1Nq4y1K7iV
  cid: 409020187
dashedName: reading-data-introduction
---

# --description--

*Ao invés de usar notebooks.ai como foi mostrado no vídeo, você pode usar o Google Colab como substituto.*

Mais recursos:

-  <a href="https://github.com/krishnatray/RDP-Reading-Data-with-Python-and-Pandas" target="_blank" rel="noopener noreferrer nofollow">Notebooks no GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Como abrir notebooks do GitHub usando o Google Colab.</a>

# --question--

## --text--

Dado um arquivo chamado `certificates.csv` com este conteúdo:

<pre>
Name$Certificates$Time (in months)
Tom$8$16
Kris$2$5
Ahmad$5$9
Beau$6$12
</pre>

Preencha as lacunas para os argumentos que faltam abaixo:

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

