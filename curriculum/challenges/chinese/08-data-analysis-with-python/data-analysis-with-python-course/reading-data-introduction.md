---
id: 5e9a093a74c4063ca6f7c161
challengeType: 11
videoId: cDnt02BcHng
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

  answers:
    - |
      A: `'certificates.csv'`

      B: `'-'`

      C: `values`
    - |
      A: `'certificates.csv'`

      B: `'$'`

      C: `certs_num`
    - |
      A: `'certificates'`

      B: `'$'`

      C: `certs_num`
  solution: 2
````

</section>
