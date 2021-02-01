---
id: 5e9a093a74c4063ca6f7c161
challengeType: 11
videoId: cDnt02BcHng
dashedName: reading-data-introduction
---

# --description--

More resources:

\- [Reading CSVs Notebook](https://notebooks.ai/rmotr-curriculum/rdp-reading-csv-and-txt-files-fb829f46)

\- [Reading SQL](https://notebooks.ai/rmotr-curriculum/rdp-reading-data-from-relational-databases-2a3a889b)

\- [Reading HTML](https://notebooks.ai/rmotr-curriculum/rdp-reading-html-tables-eb9cca73)

\- [Reading Excel files](https://notebooks.ai/rmotr-curriculum/rdp-reading-excel-files-a6b99973)

# --question--

## --text--

Given a file named `certificates.csv` with these contents:

```
Name$Certificates$Time (in months)
Tom$8$16
Kris$2$5
Ahmad$5$9
Beau$6$12
```

Fill in the blanks for the missing arguments below:

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

