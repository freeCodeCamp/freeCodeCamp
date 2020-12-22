---
id: 5e9a093a74c4063ca6f7c162
challengeType: 11
videoId: ViGEv0zOzUk
---

# --description--

More resources:

\- [Reading CSVs Notebook](https://notebooks.ai/rmotr-curriculum/rdp-reading-csv-and-txt-files-fb829f46)

\- [Reading SQL](https://notebooks.ai/rmotr-curriculum/rdp-reading-data-from-relational-databases-2a3a889b)

\- [Reading HTML](https://notebooks.ai/rmotr-curriculum/rdp-reading-html-tables-eb9cca73)

\- [Reading Excel files](https://notebooks.ai/rmotr-curriculum/rdp-reading-excel-files-a6b99973)

# --question--

## --text--

How would you import the CSV file `data.csv` and store it in a DataFrame using the Pandas module?

## --answers--

```python
import pandas as pd
df = pd.csv("data.csv")
```

---

```python
import pandas as pd
df = pd.read_csv("data.csv")
```

---

```python
import pandas as pd
pd.read_csv("data.csv")
```

---

```python
import pandas as pd
df = pd.csv_reader("data.csv")
```

## --video-solution--

2

# --hints--


# --solutions--

