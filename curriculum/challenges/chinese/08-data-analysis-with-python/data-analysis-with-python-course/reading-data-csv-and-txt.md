---
id: 5e9a093a74c4063ca6f7c162
challengeType: 11
videoId: ViGEv0zOzUk
---

## Description

<section id='description'>
More resources:
- <a href="https://notebooks.ai/rmotr-curriculum/rdp-reading-csv-and-txt-files-fb829f46" target='_blank'>Reading CSVs Notebook</a>
- <a href="https://notebooks.ai/rmotr-curriculum/rdp-reading-data-from-relational-databases-2a3a889b" target='_blank'>Reading SQL</a>
- <a href="https://notebooks.ai/rmotr-curriculum/rdp-reading-html-tables-eb9cca73" target='_blank'>Reading HTML</a>
- <a href="https://notebooks.ai/rmotr-curriculum/rdp-reading-excel-files-a6b99973" target='_blank'>Reading Excel files</a>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    How would you import the CSV file `data.csv` and store it in a DataFrame using the Pandas module?
  answers:
    - |
      ```python
      import pandas as pd
      df = pd.csv("data.csv")
      ```
    - |
      ```python
      import pandas as pd
      df = pd.read_csv("data.csv")
      ```
    - |
      ```python
      import pandas as pd
      pd.read_csv("data.csv")
      ```
    - |
      ```python
      import pandas as pd
      df = pd.csv_reader("data.csv")
      ```
  solution: 2
````

</section>
